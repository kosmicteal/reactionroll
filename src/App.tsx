import { AppShell, Burger, Flex, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet, useLocation } from 'react-router-dom';
import { PrintSheet } from './components/PrintSheet';
import { ChangeTheme } from './components/ChangeTheme';
import { PreviewPageColor } from './components/navbarComponents/PreviewPageColor';
import { CharacterInformation } from './components/navbarComponents/CharacterInformation';
// import { reduxSelector } from './redux/selector';
// import { FullScreenLoader } from './components/uiComponents/FullScreenLoader';

export function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);

  const location = useLocation();
  const isStartScreen = location.pathname === '/';
  // const isLoading = reduxSelector('IS_LOADING') as boolean;

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="xl"
    >
      {/* {isLoading && <FullScreenLoader />} */}
      <AppShell.Header>
        <Flex
          h="100%"
          justify="space-between"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Group h="100%" px="md">
            {!isStartScreen && (
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
            ReActionRoll (alpha)
          </Group>
          <Group h="100%" px="md">
            {!isStartScreen && <PrintSheet />}
            <ChangeTheme />
          </Group>
        </Flex>
      </AppShell.Header>
      {!isStartScreen && (
        <AppShell.Navbar>
          <PreviewPageColor />
          <CharacterInformation />
        </AppShell.Navbar>
      )}
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
