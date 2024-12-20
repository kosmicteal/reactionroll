import { Button, FileButton } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import { reduxSlice } from '../redux/slicer';
import { reduxStore } from '../main';
import { useTranslation } from 'react-i18next';

export function LoadData() {
  const { appIsLoading, setCharacterValues } = reduxSlice.actions;
  const { dispatch } = reduxStore;

  function setFile(value: File) {
    dispatch(appIsLoading());
    const reader = new FileReader();
    reader.onload = function (e) {
      if (e.target) {
        const readResult = e.target.result?.toString();
        if (readResult) {
          const parseResult = treatLoadData(readResult);
          dispatch(setCharacterValues(parseResult));
          dispatch(appIsLoading());
        }
      }
    };
    reader.readAsText(value);
  }

  function treatLoadData(dataValue: string): CharacterData {
    const parseResult = JSON.parse(dataValue);
    delete parseResult['meta'];
    return parseResult;
  }
  const { t, ready } = useTranslation();

  return (
    ready && (
      <FileButton
        onChange={payload => setFile(payload!)}
        accept="application/json"
      >
        {props => (
          <Button {...props} leftSection={<IconUpload size={14} />}>
            {t('LoadData.button')}
          </Button>
        )}
      </FileButton>
    )
  );
}
