import { ActionIcon, Tooltip } from '@mantine/core';
import { IconPrinter } from '@tabler/icons-react';

import { cx } from '@emotion/css';
import { styling } from '../style';
import { reduxSelector, reduxSlice } from '../redux/slicer';
import { reduxStore } from '../main';

export function PrintSheet() {
  const { selectPrintData } = reduxSlice.selectors;
  const { appPrintData } = reduxSlice.actions;
  const { dispatch } = reduxStore;

  const isPrinting = reduxSelector(selectPrintData) as boolean;
  console.log(isPrinting);

  return (
    <Tooltip label="Print sheet">
      <ActionIcon
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
