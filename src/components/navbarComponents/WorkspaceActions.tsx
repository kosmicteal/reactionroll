import { Flex, NavLink, Paper, Stack, Text } from '@mantine/core';
import { IconClick } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { PrintSheet } from '../PrintSheet';
import { ChangeLanguage } from '../ChangeLanguage';
import { ChangeTheme } from '../ChangeTheme';

export function WorkspaceActions() {
  const { t, ready } = useTranslation();

  return (
    ready && (
      <NavLink
        label={t('WorkspaceActions.title')}
        leftSection={<IconClick size="1rem" stroke={2} />}
        variant="filled"
        active
        defaultOpened
      >
        <Paper shadow="sm" withBorder p="md" my="md" me="md">
          <Stack>
            <Flex justify="space-between" align="center">
              <Text>{t('PrintSheet.tooltip')}</Text>
              <PrintSheet />
            </Flex>
            <Stack gap="0.5em">
              <Text size="xs" ta="left" fw={700} c="reactionroll-blue">
                {t('PrintSheet.printLimitationWarning')}
              </Text>
              <Text size="xs" ta="left">
                {t('PrintSheet.printLimitationWarningHelp')}
              </Text>
            </Stack>
          </Stack>
        </Paper>
        <Paper shadow="sm" withBorder p="md" my="md" me="md">
          <Flex justify="space-between" align="center">
            <Text>{t('ChangeLanguage.tooltip')}</Text>
            <ChangeLanguage />
          </Flex>
        </Paper>
        <Paper shadow="sm" withBorder p="md" my="md" me="md">
          <Flex justify="space-between" align="center">
            <Text>{t('ChangeTheme.tooltip')}</Text>
            <ChangeTheme />
          </Flex>
        </Paper>
      </NavLink>
    )
  );
}
