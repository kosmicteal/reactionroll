import {
  ActionIcon,
  AppShell,
  Burger,
  Flex,
  Group,
  Tooltip,
  NavLink,
  useComputedColorScheme,
  useMantineColorScheme,
  ColorInput,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronRight,
  IconMoon,
  IconPrinter,
  IconSun,
  IconUser,
  IconWallpaper,
} from '@tabler/icons-react';
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
            ReActionRoll (alpha)
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
      <AppShell.Navbar>
        <NavLink
          label="Preview page color"
          leftSection={<IconWallpaper size="1rem" stroke={2} />}
          rightSection={
            <IconChevronRight
              size="0.8rem"
              stroke={1.5}
              className="mantine-rotate-rtl"
            />
          }
          active
        >
          <ColorInput
            format="hex"
            ta="left"
            label="Preview page background color"
            placeholder="None, use #FFFFFF to reset"
            pr="lg"
            pt="md"
            pb="md"
            swatches={[
              '#ffffff00',
              '#f0f0f0',
              '#242424',
              '#d2e6cf',
              '#d8e8f7',
              '#f7d8f4',
              '#fffdf0',
            ]}
            onChangeEnd={value =>
              dispatch({ type: 'SET_PREVIEW_PAPER_COLOUR', payload: value })
            }
          />
          <ColorInput
            format="hex"
            ta="left"
            label="Text color"
            placeholder="None, use #FFFFFF to reset"
            pr="lg"
            pb="lg"
            swatches={[
              '#ffffff00',
              '#f0f0f0',
              '#242424',
              '#d2e6cf',
              '#d8e8f7',
              '#f7d8f4',
              '#fffdf0',
            ]}
            onChangeEnd={value =>
              dispatch({ type: 'SET_TEXT_COLOUR', payload: value })
            }
          />
        </NavLink>
        <NavLink
          label="Character information"
          leftSection={<IconUser size="1rem" stroke={2} />}
          rightSection={
            <IconChevronRight
              size="0.8rem"
              stroke={1.5}
              className="mantine-rotate-rtl"
            />
          }
          active
        />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
