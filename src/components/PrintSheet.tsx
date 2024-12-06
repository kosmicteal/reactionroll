import { ActionIcon, Tooltip } from '@mantine/core';
import { IconPrinter } from '@tabler/icons-react';
import { reduxSelector } from '../redux/selector';
import { GlobalDispatch } from '../main';
import { useDispatch } from 'react-redux';
import { cx } from '@emotion/css';
import { styling } from '../style';

export function PrintSheet() {
  const dispatch: GlobalDispatch = useDispatch();
  const isPrinting = reduxSelector('PRINT_DATA') as boolean;

  return (
    <Tooltip label="Print sheet">
      <ActionIcon
        onClick={() => dispatch({ type: 'PRINT_DATA' })}
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
