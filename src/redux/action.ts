export interface SetNameAction {
  type: 'SET_NAME';
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

export interface PrintAction {
  type: 'PRINT_DATA';
}

export type ActionTypes =
  | SetNameAction
  | SetClassAction
  | SetRaceAction
  | SetSubclassAction
  | PrintAction;
