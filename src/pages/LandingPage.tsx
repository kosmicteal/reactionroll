import {
  Button,
  Flex,
  Grid,
  Indicator,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import appIcon from '/reactionroll_logoAlpha.png';
import { cx } from '@emotion/css';
import { styling } from '../style';
import { Trans, useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import { LatestChangeLog } from '../components/pageComponents/landingPage/LatestChangeLog';
function LandingTitle() {
  const { ready } = useTranslation();
  return (
    ready && (
      <Trans i18nKey="LandingPage.slogan">
        0
        <Text inherit span c="reactionroll-blue">
          1
        </Text>
        2
      </Trans>
    )
  );
}

export function LandingPage() {
  const { t, ready } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 50em)');

  return (
    ready && (
      <Paper shadow="md" withBorder p={isMobile ? 'xs' : 'xl'}>
        <img src={appIcon} className={cx(styling.bigLogo)} />
        <Title order={1} fw={900} variant="gradient">
          <LandingTitle />
        </Title>
        <Grid columns={isMobile ? 6 : 12} m="xl" gutter="xl">
          <Grid.Col span={6} order={{ base: 2, sm: 1 }}>
            <Text component="div" ta="justify">
              <Trans
                t={t}
                i18nKey="LandingPage.description"
                components={{
                  focusText: <Text fw={700} span c="reactionroll-blue" />,
                  p: <p />,
                }}
              />
            </Text>
          </Grid.Col>
          <Grid.Col span={6} order={{ base: 1, sm: 2 }}>
            <Stack
              bg="var(--mantine-color-body)"
              align="stretch"
              justify="center"
              gap="lg"
              h="100%"
            >
              <LatestChangeLog />
              <Paper shadow="md" withBorder p="md">
                <Title ta="left" order={3} mb="md">
                  {t('LandingPage.sidePanel.newSheetPanel.title')}
                </Title>
                <Flex
                  gap="md"
                  justify="space-around"
                  align="center"
                  direction="row"
                  wrap="wrap"
                >
                  <Link to="/reactionroll/create">
                    <Button w="20em">
                      {t('LandingPage.sidePanel.newSheetPanel.start')}
                    </Button>
                  </Link>
                </Flex>
              </Paper>
              <Paper shadow="md" withBorder p="md">
                <Title ta="left" order={3} mb="md">
                  {t('LandingPage.sidePanel.helpPanel.title')}
                </Title>
                <Grid justify="center" align="stretch">
                  <Grid.Col span={6}>
                    <Indicator
                      inline
                      color="red"
                      label="New"
                      size={12}
                      className={cx(styling.indicatorHeight)}
                    >
                      <Button
                        component="a"
                        href="https://www.youtube.com/watch?v=jeaZp4DC0oE"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="light"
                      >
                        {t('LandingPage.sidePanel.helpPanel.watchTutorial')}
                      </Button>
                    </Indicator>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Link to="/reactionroll/about">
                      <Button variant="light">
                        {t('LandingPage.sidePanel.helpPanel.about')}
                      </Button>
                    </Link>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Button
                      component="a"
                      href="https://github.com/kosmicteal/reactionroll"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="light"
                    >
                      {t('LandingPage.sidePanel.helpPanel.github')}
                    </Button>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Button
                      component="a"
                      href="https://kosmicteal.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="light"
                    >
                      {t('LandingPage.sidePanel.helpPanel.mainWebsite')}
                    </Button>
                  </Grid.Col>
                </Grid>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
    )
  );
}
