import {
  ActionIcon,
  AppShell,
  Burger,
  Flex,
  Group,
  Skeleton,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { styling } from "./style";
import { cx } from "@emotion/css";
import { Outlet } from "react-router-dom";

export function App() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
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
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            mr="md"
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
          >
            {computedColorScheme === "dark" ? (
              <IconSun className={cx(styling.iconSize)} stroke={1.5} />
            ) : (
              <IconMoon className={cx(styling.iconSize)} stroke={1.5} />
            )}
          </ActionIcon>
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
