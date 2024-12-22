import { Flex, Paper, Title, List } from '@mantine/core';
import { t } from 'i18next';
import Markdown from 'react-markdown';
import changelog from '/minCHANGELOG.md?url';
import { useState, useEffect } from 'react';

export function LatestChangeLog() {
  const [log, setLog] = useState('');

  useEffect(() => {
    fetch(changelog)
      .then(res => res.text())
      .then(md => {
        setLog(md);
      });
  }, []);

  return (
    <Paper shadow="md" withBorder p="md">
      <Title ta="left" order={3} mb="md">
        {t('LatestChangeLog.title')}
      </Title>
      <Flex
        gap="md"
        justify="left"
        align="left"
        direction="column"
        wrap="wrap"
        ta="left"
      >
        <Markdown
          components={{
            h3(props) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars, react/prop-types
              const { ref, ...rest } = props;
              return <Title order={4} fw={700} ta="left" {...rest} />;
            },
            ul(props) {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars, react/prop-types
              const { ref, ...rest } = props;
              return <List size="sm" {...rest} />;
            },
          }}
        >
          {log === '' ? 'Patch bump to address small changes' : log}
        </Markdown>
      </Flex>
    </Paper>
  );
}
