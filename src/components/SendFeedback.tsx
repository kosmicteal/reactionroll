import { ActionIcon, Tooltip } from '@mantine/core';
import { IconMessageExclamation } from '@tabler/icons-react';
import { cx } from '@emotion/css';
import { styling } from '../style';

export function SendFeedback() {
  return (
    <Tooltip label="Send Feedback on Github">
      <ActionIcon
        component="a"
        href="https://github.com/kosmicteal/reactionroll/issues"
        target="_blank"
        rel="noopener noreferrer"
        mt="0.25em"
        variant="light"
        size="lg"
        aria-label="Send Feedback on Github"
      >
        <IconMessageExclamation className={cx(styling.iconSize)} stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
}
