import {
  ActionIcon,
  AppShell,
  Burger,
  Flex,
  Group,
  Skeleton,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMoon, IconPrinter, IconSun } from '@tabler/icons-react';
import { styling } from './style';
import { cx } from '@emotion/css';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GlobalDispatch } from './main';
import { reduxSelector } from './redux/selector';

export function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const dispatch: GlobalDispatch = useDispatch();
  const isPrinting = reduxSelector('PRINT_DATA') as boolean;

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
      <AppShell.Header>
        <Flex
          h="100%"
          justify="space-between"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Group h="100%" px="md">
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
            FastInitiative
          </Group>
          <Group h="100%" px="md">
            <Tooltip label="Print sheet">
              <ActionIcon
                onClick={() => dispatch({ type: 'PRINT_DATA' })}
                variant={isPrinting ? 'light' : 'filled'}
                size="lg"
                aria-label="Print sheet"
                loading={isPrinting}
              >
                <IconPrinter className={cx(styling.iconSize)} stroke={1.5} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Toggle skin theme">
              <ActionIcon
                onClick={() =>
                  setColorScheme(
                    computedColorScheme === 'light' ? 'dark' : 'light',
                  )
                }
                variant="default"
                size="lg"
                aria-label="Toggle skin theme"
              >
                {computedColorScheme === 'dark' ? (
                  <IconSun className={cx(styling.iconSize)} stroke={1.5} />
                ) : (
                  <IconMoon className={cx(styling.iconSize)} stroke={1.5} />
                )}
              </ActionIcon>
            </Tooltip>
          </Group>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
