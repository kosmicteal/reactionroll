import {
  Avatar,
  Button,
  Flex,
  Paper,
  Title,
  Text,
  Stack,
  SimpleGrid,
  ActionIcon,
  Tooltip,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { aboutDepsList } from '../utils/aboutDepsList';
import { IconExternalLink } from '@tabler/icons-react';

export function AboutPage() {
  const { t, ready } = useTranslation();
  return (
    ready && (
      <Paper shadow="md" withBorder p="xl">
        <Paper shadow="md" withBorder p="xl">
          <Title ta="left">{t('AboutPage.aboutMeTitle')}</Title>
          <Flex gap="xl" mt="xl">
            <Avatar
              src="https://avatars.githubusercontent.com/kosmicteal"
              size="10em"
            />
            <Stack align="center" justify="center">
              <Text size="lg" ta="left">
                {t('AboutPage.bio')}
              </Text>
              <Button
                w={'20em'}
                size="xl"
                component="a"
                href="https://kosmicteal.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                variant="filled"
              >
                {t('AboutPage.button')}
              </Button>
            </Stack>
          </Flex>
        </Paper>
        <Paper shadow="md" withBorder p="xl" my="xl">
          <Title ta="left">{t('AboutPage.techStack')}</Title>
          <SimpleGrid cols={2} my="xl">
            {aboutDepsList.map(element => {
              return (
                <Paper shadow="md" withBorder p="xl" key={element.name}>
                  <Flex justify="space-between">
                    <Text size="xl">{element.name}</Text>
                    <Tooltip label={t('AboutPage.openLink')}>
                      <ActionIcon
                        component="a"
                        href={element.website}
                        size="xl"
                        aria-label={t('AboutPage.openLink')}
                        onClick={event => event.preventDefault()}
                      >
                        <IconExternalLink />
                      </ActionIcon>
                    </Tooltip>
                  </Flex>
                </Paper>
              );
            })}
          </SimpleGrid>
        </Paper>
      </Paper>
    )
  );
}
