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
import { useMediaQuery } from '@mantine/hooks';

export function AboutPage() {
  const { t, ready } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 50em)');

  return (
    ready && (
      <Paper shadow="md" withBorder p="xl">
        <Paper shadow="md" withBorder p="xl">
          <Title order={isMobile ? 3 : 1} ta="left">
            {t('AboutPage.aboutMeTitle')}
          </Title>
          <Flex
            gap="xl"
            mt="xl"
            direction={isMobile ? 'column' : 'row'}
            align="center"
          >
            <Avatar
              src="https://avatars.githubusercontent.com/kosmicteal"
              size="10em"
            />
            <Stack align="center" justify="center" w={'100%'}>
              <Text size="lg" ta="left">
                {t('AboutPage.bio')}
              </Text>
              <Button
                w={isMobile ? '' : '20em'}
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
          <Title ta="left" order={isMobile ? 3 : 1}>
            {t('AboutPage.techStack')}
          </Title>
          <SimpleGrid cols={isMobile ? 1 : 2} my="xl">
            {aboutDepsList.map(element => {
              return (
                <Paper shadow="md" withBorder p="xl" key={element.name}>
                  <Flex justify="space-between">
                    <Text size="xl" ta="left">
                      {element.name}
                    </Text>
                    <Tooltip label={t('AboutPage.openLink')}>
                      <ActionIcon
                        component="a"
                        href={element.website}
                        size="xl"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t('AboutPage.openLink')}
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
