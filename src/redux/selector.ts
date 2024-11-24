import { useSelector } from 'react-redux';
import { GlobalState } from './state.interface';
import { ActionTypes } from './action';

export function reduxSelector(actionType: ActionTypes['type']) {
  switch (actionType) {
    case 'SET_NAME': {
      return useSelector((state: GlobalState) => state.characterData.name);
    }
    case 'SET_CAMPAIGN': {
      return useSelector((state: GlobalState) => state.characterData.campaign);
    }
    case 'SET_CLASS': {
      return useSelector(
        (state: GlobalState) => state.characterData.details.class,
      );
    }
    case 'SET_SUBCLASS': {
      return useSelector(
        (state: GlobalState) => state.characterData.details.subclass,
      );
    }
    case 'SET_RACE': {
      return useSelector(
        (state: GlobalState) => state.characterData.details.race,
      );
    }
    case 'SET_ARMORAC': {
      return useSelector(
        (state: GlobalState) => state.characterData.details.armorAC,
      );
    }
    case 'SET_SPELLDC': {
      return useSelector(
        (state: GlobalState) => state.characterData.details.spellDC,
      );
    }
    case 'ACTION_CHARACTER_VALUES': {
      return useSelector((state: GlobalState) => state.characterData);
    }
    case 'PRINT_DATA': {
      return useSelector((state: GlobalState) => state.appLocalData.printData);
    }
    case 'SET_PREVIEW_PAPER_COLOUR': {
      return useSelector(
        (state: GlobalState) => state.appLocalData.previewPaperColour,
      );
    }
    case 'SET_TEXT_COLOUR': {
      return useSelector((state: GlobalState) => state.appLocalData.textColour);
    }
    case 'SET_ZOOM': {
      return useSelector(
        (state: GlobalState) => state.appLocalData.zoomPercentage,
      );
    }
    default: {
      return '';
    }
  }
}
