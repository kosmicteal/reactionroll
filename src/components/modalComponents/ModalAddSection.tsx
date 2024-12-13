import { Button, Flex, Stack } from '@mantine/core';
import { IconColumns1, IconColumns2 } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { GlobalDispatch } from '../../main';
import { modals } from '@mantine/modals';

export function ModalAddSection() {
  const dispatch: GlobalDispatch = useDispatch();

  function handleClick(dispatchName: string) {
    dispatch({ type: dispatchName });
    modals.closeAll();
  }

  return (
    <>
      <Flex w={'100%'} justify="space-between" align="center" gap="xl">
        <Button
          w={'100%'}
          h={'6em'}
          onClick={() => {
            handleClick('ADD_SINGLE_COLUMN_SECTION');
          }}
        >
          <Stack align="center" justify="center" gap="md">
            <IconColumns1 size={25} />
            Add single section
          </Stack>
        </Button>
        <Button
          w={'100%'}
          h={'6em'}
          onClick={() => handleClick('ADD_MULTIPLE_COLUMN_SECTION')}
        >
          <Stack align="center" justify="center" gap="md">
            <IconColumns2 size={25} />
            Add column section
          </Stack>
        </Button>
      </Flex>
    </>
  );
}
