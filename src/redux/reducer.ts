import { ActionTypes } from "./action";
import { GlobalState } from "./state.interface";

export const initialState: GlobalState = {
    printRef: '',
    characterData: {
        name: '',
        class: ''
    },
}

export function reducer(state = initialState, action: ActionTypes): GlobalState {
    switch (action.type) {
        case "SET_NAME": {
            return { ...state, characterData: {
                ...state.characterData,
                name: action.payload,
            } }
        }
        case 'SET_CLASS': {
            return { ...state, characterData: {
                ...state.characterData,
                class: action.payload,
            } }
        }
        default: {
            return state;
        }
    }
}