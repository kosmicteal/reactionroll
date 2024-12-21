import { AppShell, Burger, em, Flex, Group, Text } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { PrintSheet } from './components/PrintSheet';
import { ChangeTheme } from './components/ChangeTheme';
import { PreviewPageColor } from './components/navbarComponents/PreviewPageColor';
import { CharacterInformation } from './components/navbarComponents/CharacterInformation';
import { cx } from '@emotion/css';
import { styling } from './style';
import { version } from '../package.json';
import appIcon from '/reactionroll_logoAlpha.png';
import { ChangeLanguage } from './components/ChangeLanguage';
import { WorkspaceActions } from './components/navbarComponents/WorkspaceActions';

export function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);

  const location = useLocation();
  const isEditorScreen = location.pathname === '/reactionroll/create';
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding={isMobile ? '' : 'xl'}
    >
      <AppShell.Header>
        <Flex
          h="100%"
          justify="space-between"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Group
            h="100%"
            px="md"
            w={isMobile ? '100%' : ''}
            justify={isMobile ? 'space-between' : ''}
          >
            {isEditorScreen && (
              <>
                <Burger
                  opened={mobileOpened}
                  onClick={toggleMobile}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Burger
                  opened={desktopOpened}
                  onClick={toggleDesktop}
                  visibleFrom="sm"
                  size="sm"
                />
              </>
            )}
            <Flex align="end" gap="xs">
              <Link to="/reactionroll" className={cx(styling.smallLogo)}>
                <img src={appIcon} className={cx(styling.smallLogo)} />
              </Link>
              {!isMobile && <Text size="xs"> v{version}</Text>}
            </Flex>
          </Group>
          <Group h="100%" px="md">
            {!isMobile && (
              <>
                {isEditorScreen && <PrintSheet />}
                <ChangeLanguage />
                <ChangeTheme />
              </>
            )}
          </Group>
        </Flex>
      </AppShell.Header>
      {isEditorScreen && (
        <AppShell.Navbar className={cx(styling.navBar)}>
          {isMobile ? <WorkspaceActions /> : <PreviewPageColor />}
          <CharacterInformation />
        </AppShell.Navbar>
      )}
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
