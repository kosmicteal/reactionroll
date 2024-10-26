import { useSelector } from 'react-redux';
import { GlobalState } from './state.interface';

export function reduxSelector(actionType: string) {
  switch (actionType) {
    case 'SET_NAME': {
      return useSelector((state: GlobalState) => state.characterData.name);
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
    case 'PRINT_DATA': {
      return useSelector((state: GlobalState) => state.printData);
    }
    default: {
      return '';
    }
  }
}
