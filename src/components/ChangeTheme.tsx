import {
  ActionIcon,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { cx } from '@emotion/css';
import { styling } from '../style';

export function ChangeTheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <Tooltip label="Toggle skin theme">
      <ActionIcon
        mt="0.25em"
        onClick={() =>
          setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
        }
        variant="default"
        size="lg"
        aria-label="Toggle skin theme"
      >
        {computedColorScheme === 'dark' ? (
          <IconSun className={cx(styling.iconSize)} stroke={1.5} />
        ) : (
          <IconMoon className={cx(styling.iconSize)} stroke={1.5} />
        )}
      </ActionIcon>
    </Tooltip>
  );
}
