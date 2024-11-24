import { ActionTypes } from './action';
import { GlobalState } from './state.interface';

export const initialState: GlobalState = {
  appLocalData: {
    printData: false,
    zoomPercentage: 1,
    previewPaperColour: undefined,
    textColour: undefined,
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

export function reducer(
  state = initialState,
  action: ActionTypes,
): GlobalState {
  switch (action.type) {
    case 'SET_NAME': {
      return {
        ...state,
        characterData: {
          ...state.characterData,
          name: action.payload,
        },
      };
    }
    case 'SET_CLASS': {
      return {
        ...state,
        characterData: {
          ...state.characterData,
          details: {
            ...state.characterData.details,
            class: action.payload,
          },
        },
      };
    }
    case 'SET_SUBCLASS': {
      return {
        ...state,
        characterData: {
          ...state.characterData,
          details: {
            ...state.characterData.details,
            subclass: action.payload,
          },
        },
      };
    }
    case 'SET_RACE': {
      return {
        ...state,
        characterData: {
          ...state.characterData,
          details: {
            ...state.characterData.details,
            race: action.payload,
          },
        },
      };
    }
    case 'SET_CAMPAIGN': {
      return {
        ...state,
        characterData: {
          ...state.characterData,
          campaign: action.payload,
        },
      };
    }
    case 'SET_ARMORAC': {
      return {
        ...state,
        characterData: {
          ...state.characterData,
          details: {
            ...state.characterData.details,
            armorAC: action.payload,
          },
        },
      };
    }
    case 'SET_SPELLDC': {
      return {
        ...state,
        characterData: {
          ...state.characterData,
          details: {
            ...state.characterData.details,
            spellDC: action.payload,
          },
        },
      };
    }
    case 'PRINT_DATA': {
      return {
        ...state,
        appLocalData: {
          ...state.appLocalData,
          printData: !state.appLocalData.printData,
        },
      };
    }
    case 'SET_ZOOM': {
      return {
        ...state,
        appLocalData: {
          ...state.appLocalData,
          zoomPercentage: action.payload,
        },
      };
    }
    case 'SET_PREVIEW_PAPER_COLOUR': {
      const checkColourReset =
        action.payload === '#ffffff' ? undefined : action.payload;
      return {
        ...state,
        appLocalData: {
          ...state.appLocalData,
          previewPaperColour: checkColourReset,
        },
      };
    }
    case 'SET_TEXT_COLOUR': {
      const checkColourReset =
        action.payload === '#ffffff' ? undefined : action.payload;
      return {
        ...state,
        appLocalData: {
          ...state.appLocalData,
          textColour: checkColourReset,
        },
      };
    }
    case 'ACTION_CHARACTER_VALUES': {
      return {
        ...state,
        characterData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
