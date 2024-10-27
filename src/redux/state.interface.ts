export interface GlobalState {
  appLocalData: AppData;
  characterData: CharacterData;
}
export interface AppData {
  printData: boolean;
  zoomPercentage: number;
}
export interface CharacterData {
  name: string;
  campaign: string;
  details: CharacterDetails;
}

export interface CharacterDetails {
  class: string;
  subclass: string;
  race: string;
  spellDC: number | undefined;
  armorAC: number | undefined;
}
