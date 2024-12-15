export interface anyObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

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
  sectionId: string;
  columns: CharacterSectionColumn[];
}

export interface CharacterSectionColumn {
  columnId: string;
  title: string;
  textContent: string;
  span?: number;
}
