/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
  createSlice,
} from '@reduxjs/toolkit';
import { CharacterSection, GlobalState } from './state.interface';
import { useSelector } from 'react-redux';
import { Selector } from 'react-redux';
import { moveArrayItem } from '../utils/moveArrayItem';
import { checkContentOverflow } from '../utils/checkContentOverflow';

export const initialState: GlobalState = {
  appLocalData: {
    printData: false,
    loadData: false,
    zoomPercentage: 1,
    previewPaperColour: undefined,
    textColour: undefined,
    isOverflowing: false,
  },
  characterData: {
    name: '',
    campaign: '',
    details: {
      class: '',
      subclass: '',
      race: '',
      spellDC: undefined,
      armorAC: undefined,
    },
  },
};

function newRowSection(columnNumber: number) {
  const columns = [];
  for (let idx = 0; idx < columnNumber; idx++) {
    columns.push({
      columnId: crypto.randomUUID(),
      title: '',
      textContent: '',
    });
  }

  return {
    sectionId: crypto.randomUUID(),
    columns,
  };
}

export const reduxSlice = createSlice({
  name: 'reduxSlice',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.characterData.name = action.payload;
    },
    setClass: (state, action) => {
      state.characterData.details.class = action.payload;
    },
    setSubclass: (state, action) => {
      state.characterData.details.subclass = action.payload;
    },
    setRace: (state, action) => {
      state.characterData.details.race = action.payload;
    },
    setCampaign: (state, action) => {
      state.characterData.campaign = action.payload;
    },
    setArmorAC: (state, action) => {
      state.characterData.details.armorAC = action.payload;
    },
    setSpellDC: (state, action) => {
      state.characterData.details.spellDC = action.payload;
    },
    appPrintData: state => {
      state.appLocalData.printData = !state.appLocalData.printData;
    },
    appIsLoading: state => {
      state.appLocalData.loadData = !state.appLocalData.loadData;
    },
    appSetZoom: (state, action) => {
      state.appLocalData.zoomPercentage = action.payload;
    },
    appSetPreviewPaperColour: (state, action) => {
      state.appLocalData.previewPaperColour =
        action.payload === '#ffffff' ? undefined : action.payload;
    },
    appSetTextColor: (state, action) => {
      state.appLocalData.textColour =
        action.payload === '#ffffff' ? undefined : action.payload;
    },
    setCharacterValues: (state, action) => {
      state.characterData = action.payload;
    },
    setAddSingleColumnSection: state => {
      const newSection: CharacterSection = newRowSection(1);
      if (state.characterData.sections) {
        state.characterData.sections.push(newSection);
      } else {
        state.characterData.sections = [newSection];
      }
      state.appLocalData.isOverflowing = checkContentOverflow();
    },
    setAddMultipleColumnSection: state => {
      const newSection: CharacterSection = newRowSection(2);
      if (state.characterData.sections) {
        state.characterData.sections.push(newSection);
      } else {
        state.characterData.sections = [newSection];
      }
      state.appLocalData.isOverflowing = checkContentOverflow();
    },
    setRemoveSection: (state, action) => {
      const availableSections = state.characterData.sections!;
      let updatedSections: CharacterSection[] | undefined =
        availableSections.filter(
          section => section.sectionId !== action.payload,
        );
      if (updatedSections.length === 0) updatedSections = undefined;

      state.characterData.sections = updatedSections;
      state.appLocalData.isOverflowing = checkContentOverflow();
    },
    setUpdateSectionValue: (state, action) => {
      const availableSections = state.characterData.sections!;
      const sectionIndex: number = availableSections.findIndex(
        section => section.sectionId === action.payload.sectionId,
      );
      const columnIndex: number = availableSections[
        sectionIndex
      ].columns.findIndex(
        columns => columns.columnId === action.payload.columnId,
      );

      state.characterData.sections![sectionIndex].columns[columnIndex] = {
        ...state.characterData.sections![sectionIndex].columns[columnIndex],
        ...action.payload.value,
      };
      state.appLocalData.isOverflowing = checkContentOverflow();
    },
    moveSectionUp: (state, action) => {
      const availableSections = state.characterData.sections!;
      const sectionIndex: number = availableSections.findIndex(
        section => section.sectionId === action.payload,
      );

      if (sectionIndex > 0) {
        moveArrayItem(availableSections, sectionIndex, sectionIndex - 1);
      }

      state.characterData.sections = availableSections;
    },
    moveSectionDown: (state, action) => {
      const availableSections = state.characterData.sections!;
      const sectionIndex: number = availableSections.findIndex(
        section => section.sectionId === action.payload,
      );
      if (sectionIndex < availableSections.length - 1) {
        moveArrayItem(availableSections, sectionIndex, sectionIndex + 1);
      }

      state.characterData.sections = availableSections;
    },
  },
  selectors: {
    selectName: state => state.characterData.name,
    selectCampaign: state => state.characterData.campaign,
    selectClass: state => state.characterData.details.class,
    selectSubclass: state => state.characterData.details.subclass,
    selectRace: state => state.characterData.details.race,
    selectArmorAC: state => state.characterData.details.armorAC,
    selectSpellDC: state => state.characterData.details.spellDC,
    selectCharacterValues: state => state.characterData,
    selectPrintData: state => state.appLocalData.printData,
    selectIsLoading: state => state.appLocalData.loadData,
    selectPreviewPaperColour: state => state.appLocalData.previewPaperColour,
    selectTextColour: state => state.appLocalData.textColour,
    selectZoom: state => state.appLocalData.zoomPercentage,
    selectIsOverflowing: state => state.appLocalData.isOverflowing,
  },
});

export type reduxSelectorType = Selector<
  {
    reduxSlice: GlobalState;
  },
  any
> & {
  unwrapped: (state: GlobalState) => any;
};

export type reduxActionType = ActionCreatorWithPayload<any, string>;
export type reduxActionTypeNoPayload = ActionCreatorWithoutPayload<string>;

export function reduxSelector(func: reduxSelectorType) {
  return useSelector((state: { reduxSlice: GlobalState }) => func(state));
}
