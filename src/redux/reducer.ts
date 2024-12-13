import { ActionTypes, anyObject } from './action';
import { CharacterSection, GlobalState } from './state.interface';

export const initialState: GlobalState = {
  appLocalData: {
    printData: false,
    loadData: false,
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

function addSectionToState(
  state: GlobalState,
  newSection: CharacterSection,
): GlobalState {
  if (state.characterData.sections) {
    return {
      ...state,
      characterData: {
        ...state.characterData,
        sections: [...state.characterData.sections, newSection],
      },
    };
  } else {
    return {
      ...state,
      characterData: {
        ...state.characterData,
        sections: [newSection],
      },
    };
  }
}

function removeSectionFromState(
  state: GlobalState,
  payload: string,
): GlobalState {
  const availableSections = state.characterData.sections!;

  let updatedSections: CharacterSection[] | undefined =
    availableSections.filter(section => section.sectionId !== payload);

  if (updatedSections.length === 0) updatedSections = undefined;

  return {
    ...state,
    characterData: {
      ...state.characterData,
      sections: updatedSections,
    },
  };
}

function updateSectionFromState(
  state: GlobalState,
  payload: { sectionId: string; columnId: string; value: anyObject },
): GlobalState {
  console.log(payload);
  const availableSections = state.characterData.sections!;

  const sectionIndex: number = availableSections.findIndex(
    section => section.sectionId === payload.sectionId,
  );
  console.log(sectionIndex, availableSections[sectionIndex]);
  const columnIndex: number = availableSections[sectionIndex].columns.findIndex(
    columns => columns.columnId === payload.columnId,
  );
  console.log(
    columnIndex,
    availableSections[sectionIndex].columns[columnIndex],
  );

  availableSections[sectionIndex].columns[columnIndex] = {
    ...availableSections[sectionIndex].columns[columnIndex],
    ...payload.value,
  };

  console.log(
    'new object',
    availableSections[sectionIndex].columns[columnIndex],
  );

  return {
    ...state,
    characterData: {
      ...state.characterData,
      sections: availableSections,
    },
  };
}

// const todosReducer = produce((draft, action) => {
//   switch (action.type) {
//       case "toggle":
//           const todo = draft.find(todo => todo.id === action.id)
//           todo.done = !todo.done
//           break
//       case "add":
//           draft.push({
//               id: action.id,
//               title: "A new todo",
//               done: false
//           })
//           break
//       default:
//           break
//   }
// })

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
    case 'IS_LOADING': {
      return {
        ...state,
        appLocalData: {
          ...state.appLocalData,
          loadData: !state.appLocalData.loadData,
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
    case 'ADD_SINGLE_COLUMN_SECTION': {
      const newSection: CharacterSection = {
        sectionId: crypto.randomUUID(),
        columns: [
          {
            columnId: crypto.randomUUID(),
            title: '',
            textContent: 'newContent',
          },
        ],
      };

      return addSectionToState(state, newSection);
    }
    case 'ADD_MULTIPLE_COLUMN_SECTION': {
      const newSection: CharacterSection = {
        sectionId: crypto.randomUUID(),
        columns: [
          {
            columnId: crypto.randomUUID(),
            title: '',
            textContent: 'newContent',
            span: 6,
          },
          {
            columnId: crypto.randomUUID(),
            title: '',
            textContent: 'newContent',
            span: 6,
          },
        ],
      };

      return addSectionToState(state, newSection);
    }
    case 'REMOVE_COLUMN_SECTION': {
      return removeSectionFromState(state, action.payload);
    }
    case 'UPDATE_COLUMN_SECTION': {
      return updateSectionFromState(state, action.payload);
    }
    default: {
      return state;
    }
  }
}
