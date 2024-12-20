import { ActionIcon, Tooltip } from '@mantine/core';
import { IconMessageExclamation } from '@tabler/icons-react';
import { cx } from '@emotion/css';
import { styling } from '../style';
import { useTranslation } from 'react-i18next';

export function SendFeedback() {
  const { t, ready } = useTranslation();

  return (
    ready && (
      <Tooltip label={t('SendFeedback.tooltip')}>
        <ActionIcon
          component="a"
          href="https://github.com/kosmicteal/reactionroll/issues"
          target="_blank"
          rel="noopener noreferrer"
          mt="0.25em"
          variant="light"
          size="lg"
          aria-label={t('SendFeedback.tooltip')}
        >
          <IconMessageExclamation
            className={cx(styling.iconSize)}
            stroke={1.5}
          />
        </ActionIcon>
      </Tooltip>
    )
  );
}
