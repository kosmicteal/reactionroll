import { Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import save from 'save-file';
import { reduxSelectorOld } from '../redux/selector';
import { CharacterData } from '../redux/state.interface';

export function SaveData() {
  const characterValues = reduxSelectorOld(
    'ACTION_CHARACTER_VALUES',
  ) as CharacterData;

  function treatSaveData(dataValue: CharacterData) {
    return { meta: { version: '0.0.0' }, ...dataValue };
  }

  async function saveFile() {
    await save(
      JSON.stringify(treatSaveData(characterValues)),
      `reActionRoll_${characterValues.name}.json`,
    );
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
