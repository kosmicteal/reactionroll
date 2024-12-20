import {
  ActionIcon,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { cx } from '@emotion/css';
import { styling } from '../style';
import { useTranslation } from 'react-i18next';

export function ChangeTheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const { t, ready } = useTranslation();

  return (
    ready && (
      <Tooltip label={t('ChangeTheme.tooltip')}>
        <ActionIcon
          onClick={() =>
            setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
          }
          variant="default"
          size="lg"
          aria-label={t('ChangeTheme.tooltip')}
        >
          {computedColorScheme === 'dark' ? (
            <IconSun className={cx(styling.iconSize)} stroke={1.5} />
          ) : (
            <IconMoon className={cx(styling.iconSize)} stroke={1.5} />
          )}
        </ActionIcon>
      </Tooltip>
    )
  );
}
