import { reduxSelector } from '../redux/selector';

export function concatSelector(selectors: string[], sections: string[]) {
  let concatSelectorResult: string = '';
  let concatSelectorHasData: boolean = false;

  selectors.forEach((selector, idx) => {
    const data = reduxSelector(selector) as string;
    const currentDataIsValid =
      data !== null && data !== undefined && data !== '';
    concatSelectorHasData = concatSelectorHasData || currentDataIsValid;
    if (currentDataIsValid) {
      concatSelectorResult = `${concatSelectorResult}${sections[idx].replace('$0', data)}`;
    }
  });

  return {
    concatSelectorResult,
    concatSelectorHasData,
  };
}
