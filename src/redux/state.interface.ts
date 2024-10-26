export interface GlobalState {
  appLocalData: AppData;
  characterData: CharacterData;
}
export interface AppData {
  printData: boolean;
  zoomPercentage: string;
}
export interface CharacterData {
  name: string;
  details: CharacterDetails;
}

export interface CharacterDetails {
  class: string;
  subclass: string;
  race: string;
}
