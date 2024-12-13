export interface GlobalState {
  appLocalData: AppData;
  characterData: CharacterData;
}
export interface AppData {
  printData: boolean;
  loadData: boolean;
  zoomPercentage: number;
  previewPaperColour?: string;
  textColour?: string;
}
export interface CharacterData {
  name: string;
  campaign: string;
  details: CharacterDetails;
  sections?: CharacterSection[];
}

export interface CharacterDetails {
  class: string;
  subclass: string;
  race: string;
  spellDC?: number;
  armorAC?: number;
}

export interface CharacterSection {
  columns: CharacterSectionColumn[];
}

export interface CharacterSectionColumn {
  title: string;
  textContent: string;
  span?: number;
}
