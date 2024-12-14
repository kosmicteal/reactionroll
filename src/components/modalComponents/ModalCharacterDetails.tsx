import { Stack } from '@mantine/core';

import { InputReduxAction } from './InputReduxAction';
import { reduxSlice } from '../../redux/slicer';

export function ModalCharacterDetails() {
  const { setClass, setSubclass, setRace } = reduxSlice.actions;
  const { selectClass, selectSubclass, selectRace } = reduxSlice.selectors;
  return (
    <>
      <Stack>
        <InputReduxAction
          placeholder="Class"
          selector={selectClass}
          action={setClass}
        />
        <InputReduxAction
          placeholder="Subclass"
          selector={selectSubclass}
          action={setSubclass}
        />
        <InputReduxAction
          placeholder="Race"
          selector={selectRace}
          action={setRace}
        />
      </Stack>
    </>
  );
}
