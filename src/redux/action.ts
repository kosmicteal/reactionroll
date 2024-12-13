import { CharacterData } from './state.interface';

export interface anyObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export interface SetNameAction {
  type: 'SET_NAME';
  payload: string;
}

export interface SetCampaignAction {
  type: 'SET_CAMPAIGN';
  payload: string;
}

export interface SetClassAction {
  type: 'SET_CLASS';
  payload: string;
}

export interface SetSubclassAction {
  type: 'SET_SUBCLASS';
  payload: string;
}

export interface SetRaceAction {
  type: 'SET_RACE';
  payload: string;
}

export interface SetSpellDCAction {
  type: 'SET_SPELLDC';
  payload: number;
}

export interface SetArmorACAction {
  type: 'SET_ARMORAC';
  payload: number;
}
export interface GetCharacterValuesAction {
  type: 'ACTION_CHARACTER_VALUES';
  payload: CharacterData;
}

//// SECTION REDUX
export interface AddSingleColumnSectionAction {
  type: 'ADD_SINGLE_COLUMN_SECTION';
}

export interface AddMultipleColumnSectionAction {
  type: 'ADD_MULTIPLE_COLUMN_SECTION';
}

export interface RemoveSectionAction {
  type: 'REMOVE_COLUMN_SECTION';
  payload: string;
}

export interface UpdateColumnSectionAction {
  type: 'UPDATE_COLUMN_SECTION';
  payload: {
    sectionId: string;
    columnId: string;
    value: anyObject;
  };
}

//// INTERFACE REDUX
export interface SetZoomAction {
  type: 'SET_ZOOM';
  payload: number;
}

export interface SetPreviewPaperColourAction {
  type: 'SET_PREVIEW_PAPER_COLOUR';
  payload: string | undefined;
}

export interface SetTextColourAction {
  type: 'SET_TEXT_COLOUR';
  payload: string | undefined;
}

export interface PrintAction {
  type: 'PRINT_DATA';
}

export interface LoadAction {
  type: 'IS_LOADING';
}

type SectionTypes =
  | AddSingleColumnSectionAction
  | AddMultipleColumnSectionAction
  | RemoveSectionAction
  | UpdateColumnSectionAction;

export type ActionTypes =
  | SectionTypes
  | SetNameAction
  | SetClassAction
  | SetRaceAction
  | SetSubclassAction
  | SetCampaignAction
  | SetArmorACAction
  | SetSpellDCAction
  | GetCharacterValuesAction
  | SetZoomAction
  | SetPreviewPaperColourAction
  | SetTextColourAction
  | PrintAction
  | LoadAction;
