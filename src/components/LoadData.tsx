import { Button, FileButton } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import { GlobalDispatch } from '../main';
import { useDispatch } from 'react-redux';

export function LoadData() {
  const dispatch: GlobalDispatch = useDispatch();

  function setFile(value: File) {
    dispatch({ type: 'IS_LOADING' });
    const reader = new FileReader();
    reader.onload = function (e) {
      if (e.target) {
        const readResult = e.target.result?.toString();
        if (readResult) {
          const parseResult = treatLoadData(readResult);
          dispatch({ type: 'ACTION_CHARACTER_VALUES', payload: parseResult });
          dispatch({ type: 'IS_LOADING' });
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
  return (
    <FileButton
      onChange={payload => setFile(payload!)}
      accept="application/json"
    >
      {props => (
        <Button {...props} leftSection={<IconUpload size={14} />}>
          Load data
        </Button>
      )}
    </FileButton>
  );
}
