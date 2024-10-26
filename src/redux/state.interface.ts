export interface GlobalState {
  printData: boolean;
  characterData: CharacterData;
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
