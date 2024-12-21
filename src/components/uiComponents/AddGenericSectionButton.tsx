import { cx } from '@emotion/css';
import { Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { styling } from '../../style';
import { reduxSlice, reduxSelector } from '../../redux/slicer';
import { useTranslation } from 'react-i18next';
import { reduxStore } from '../../main';

export function AddGenericSectionButton() {
  const { selectIsOverflowing } = reduxSlice.selectors;
  const { setAddSingleColumnSection } = reduxSlice.actions;
  const { dispatch } = reduxStore;

  const isOverflowing = reduxSelector(selectIsOverflowing) as boolean;

  const { t, ready } = useTranslation();

  return (
    ready && (
      <Button
        mb="xs"
        disabled={isOverflowing}
        className={cx(styling.hideOnPrint)}
        leftSection={<IconPlus size={14} />}
        variant="default"
        onClick={() => dispatch(setAddSingleColumnSection())}
      >
        {t('AddGenericSectionButton.button')}
      </Button>
    )
  );
}
