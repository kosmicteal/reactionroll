import { Stack } from '@mantine/core';

import { InputReduxAction } from './InputReduxAction';

export function ModalCharacterDetails() {
  return (
    <>
      <Stack>
        <InputReduxAction placeholder="Class" action="SET_CLASS" />
        <InputReduxAction placeholder="Subclass" action="SET_SUBCLASS" />
        <InputReduxAction placeholder="Race" action="SET_RACE" />
      </Stack>
    </>
  );
}
