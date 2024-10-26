import { ActionTypes } from './action';
import { GlobalState } from './state.interface';

export const initialState: GlobalState = {
  appLocalData: {
    printData: false,
    zoomPercentage: '1',
  },
  characterData: {
    name: '',
    details: {
      class: '',
      subclass: '',
      race: '',
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
    default: {
      return state;
    }
  }
}
