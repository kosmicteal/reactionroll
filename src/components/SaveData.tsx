import { Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { saveAs } from 'file-saver';
import { CharacterData } from '../redux/state.interface';
import { reduxSelector, reduxSlice } from '../redux/slicer';
import { version as appVersion } from '../../package.json';
import { useTranslation } from 'react-i18next';

export function SaveData() {
  const { selectCharacterValues } = reduxSlice.selectors;

  const characterValues = reduxSelector(selectCharacterValues) as CharacterData;

  function treatSaveData(dataValue: CharacterData) {
    return { meta: { version: appVersion }, ...dataValue };
  }

  async function saveFile() {
    const file = new File(
      [JSON.stringify(treatSaveData(characterValues))],
      `reActionRoll_${characterValues.name}.json`,
      {
        type: 'application/json;charset=utf-8',
      },
    );
    saveAs(file);
  }
  const { t, ready } = useTranslation();

  return (
    ready && (
      <Button
        onClick={() => {
          saveFile();
        }}
        leftSection={<IconDownload size={14} />}
      >
        {t('SaveData.button')}
      </Button>
    )
  );
}
