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
  Paper,
  Code,
  Button,
  FileButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronRight,
  IconDownload,
  IconMoon,
  IconPrinter,
  IconSun,
  IconUpload,
  IconUser,
  IconWallpaper,
} from '@tabler/icons-react';
import { styling } from './style';
import { cx } from '@emotion/css';
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GlobalDispatch } from './main';
import { reduxSelector } from './redux/selector';
import { CharacterData } from './redux/state.interface';
import save from 'save-file';

export function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  const dispatch: GlobalDispatch = useDispatch();
  const isPrinting = reduxSelector('PRINT_DATA') as boolean;
  const characterValues = reduxSelector(
    'ACTION_CHARACTER_VALUES',
  ) as CharacterData;
  console.log(characterValues);
  const location = useLocation();
  const isStartScreen = location.pathname === '/';

  function setFile(value: File) {
    const reader = new FileReader();
    reader.readAsText(value);
    dispatch({ type: 'ACTION_CHARACTER_VALUES', payload: value });
  }

  async function saveFile() {
    console.log(characterValues);
    await save(characterValues, `reActionRoll_${characterValues.name}.json`);
  }

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
            {!isStartScreen && (
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
            )}
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
      {!isStartScreen && (
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
              pt="xs"
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
          >
            <Flex mr="lg" mt="md" mb="md" gap={'xs'} justify="space-between">
              <FileButton
                onChange={payload => setFile(payload)}
                accept="application/json"
              >
                {props => (
                  <Button {...props} leftSection={<IconUpload size={14} />}>
                    Load data
                  </Button>
                )}
              </FileButton>

              <Button
                onClick={() => {
                  console.log('a');
                  saveFile();
                }}
                leftSection={<IconDownload size={14} />}
              >
                Save data
              </Button>
            </Flex>
            <Paper shadow="xs" mr="lg" mt="md" mb="md">
              <Code block ta={'left'} h={'20em'} mah={'20em'}>
                {JSON.stringify(characterValues, null, 2)}
              </Code>
            </Paper>
          </NavLink>
        </AppShell.Navbar>
      )}
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
