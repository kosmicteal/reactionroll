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
  type: 'GET_CHARACTER_VALUES';
}

//// INTERFACE REDUX
export interface SetZoomAction {
  type: 'SET_ZOOM';
  payload: number;
}

export interface PrintAction {
  type: 'PRINT_DATA';
}

export type ActionTypes =
  | SetNameAction
  | SetClassAction
  | SetRaceAction
  | SetSubclassAction
  | SetCampaignAction
  | SetArmorACAction
  | SetSpellDCAction
  | GetCharacterValuesAction
  | SetZoomAction
  | PrintAction;
