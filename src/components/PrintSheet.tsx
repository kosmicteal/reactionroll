import { ActionIcon, Tooltip } from '@mantine/core';
import { IconPrinter } from '@tabler/icons-react';

import { cx } from '@emotion/css';
import { styling } from '../style';
import { reduxSelector, reduxSlice } from '../redux/slicer';
import { reduxStore } from '../main';
import { useTranslation } from 'react-i18next';

export function PrintSheet() {
  const { selectPrintData, selectIsOverflowing } = reduxSlice.selectors;
  const { appPrintData } = reduxSlice.actions;
  const { dispatch } = reduxStore;

  const isPrinting = reduxSelector(selectPrintData) as boolean;
  const isOverflowing = reduxSelector(selectIsOverflowing) as boolean;

  const { t, ready } = useTranslation();

  return (
    ready && (
      <Tooltip
        label={
          isOverflowing ? t('PrintSheet.cannotPrint') : t('PrintSheet.tooltip')
        }
      >
        <ActionIcon
          disabled={isOverflowing}
          onClick={() => dispatch(appPrintData())}
          variant={isPrinting ? 'light' : 'filled'}
          size="lg"
          aria-label={t('PrintSheet.tooltip')}
          loading={isPrinting}
        >
          <IconPrinter className={cx(styling.iconSize)} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
    )
  );
}
