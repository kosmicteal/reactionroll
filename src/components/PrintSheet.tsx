import { ActionIcon, Tooltip } from '@mantine/core';
import { IconPrinter } from '@tabler/icons-react';

import { cx } from '@emotion/css';
import { styling } from '../style';
import { reduxSelector, reduxSlice } from '../redux/slicer';
import { reduxStore } from '../main';

export function PrintSheet() {
  const { selectPrintData, selectIsOverflowing } = reduxSlice.selectors;
  const { appPrintData } = reduxSlice.actions;
  const { dispatch } = reduxStore;

  const isPrinting = reduxSelector(selectPrintData) as boolean;
  const isOverflowing = reduxSelector(selectIsOverflowing) as boolean;

  return (
    <Tooltip
      label={
        isOverflowing ? 'Cannot print with overflowing content!' : 'Print sheet'
      }
    >
      <ActionIcon
        disabled={isOverflowing}
        onClick={() => dispatch(appPrintData())}
        variant={isPrinting ? 'light' : 'filled'}
        size="lg"
        aria-label="Print sheet"
        loading={isPrinting}
      >
        <IconPrinter className={cx(styling.iconSize)} stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
}
