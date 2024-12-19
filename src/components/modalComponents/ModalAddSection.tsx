import { Button, Flex, Stack } from '@mantine/core';
import { IconColumns1, IconColumns2 } from '@tabler/icons-react';

import { modals } from '@mantine/modals';
import { reduxActionTypeNoPayload, reduxSlice } from '../../redux/slicer';
import { reduxStore } from '../../main';

export function ModalAddSection() {
  const { setAddSingleColumnSection, setAddMultipleColumnSection } =
    reduxSlice.actions;
  const { dispatch } = reduxStore;

  function handleClick(dispatchName: reduxActionTypeNoPayload) {
    dispatch(dispatchName());
    modals.closeAll();
  }

  return (
    <>
      <Flex w={'100%'} justify="space-between" align="center" gap="xl">
        <Button
          w={'100%'}
          h={'6em'}
          onClick={() => {
            handleClick(setAddSingleColumnSection);
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
          onClick={() => handleClick(setAddMultipleColumnSection)}
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
