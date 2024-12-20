import { Stack } from '@mantine/core';

import { InputReduxAction } from './InputReduxAction';
import { reduxSlice } from '../../redux/slicer';
import { useTranslation } from 'react-i18next';

export function ModalCharacterDetails() {
  const { setClass, setSubclass, setRace } = reduxSlice.actions;
  const { selectClass, selectSubclass, selectRace } = reduxSlice.selectors;
  const { t, ready } = useTranslation();

  return (
    ready && (
      <>
        <Stack>
          <InputReduxAction
            placeholder={t('_CommonTranslations.class')}
            selector={selectClass}
            action={setClass}
          />
          <InputReduxAction
            placeholder={t('_CommonTranslations.subclass')}
            selector={selectSubclass}
            action={setSubclass}
          />
          <InputReduxAction
            placeholder={t('_CommonTranslations.race')}
            selector={selectRace}
            action={setRace}
          />
        </Stack>
      </>
    )
  );
}
