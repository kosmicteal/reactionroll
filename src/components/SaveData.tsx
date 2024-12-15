import { Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { saveAs } from 'file-saver';
import { CharacterData } from '../redux/state.interface';
import { reduxSelector, reduxSlice } from '../redux/slicer';

export function SaveData() {
  const { selectCharacterValues } = reduxSlice.selectors;

  const characterValues = reduxSelector(selectCharacterValues) as CharacterData;

  function treatSaveData(dataValue: CharacterData) {
    return { meta: { version: '0.0.0' }, ...dataValue };
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
  return (
    <Button
      onClick={() => {
        saveFile();
      }}
      leftSection={<IconDownload size={14} />}
    >
      Save data
    </Button>
  );
}
