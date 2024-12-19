import './MainPage.css';
import {
  Button,
  Flex,
  Grid,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import appIcon from '/reactionroll_logoAlpha.png';
import { cx } from '@emotion/css';
import { styling } from '../style';

export function MainPage() {
  return (
    <>
      <Paper shadow="md" withBorder p="xl">
        <img src={appIcon} className={cx(styling.bigLogo)} />
        <Title order={1} fw={900} variant="gradient">
          Your actions in{' '}
          <Text inherit span c="reactionroll-blue">
            less than 3 seconds
          </Text>
          .
        </Title>
        <SimpleGrid cols={2} m="xl" spacing="xl">
          <Text ta="justify">
            <p>
              Have you ever had a character that has such a high level you no
              longer remember all their actions? Maybe it has been more than 2
              years since you initially did their character sheet.
            </p>
            <p>
              This problem can now be solved easily! With{' '}
              <Text fw={700} span c="reactionroll-blue">
                reActionroll
              </Text>
              , you can now easily do a summary of your sheet that you can print
              next to you as a helper. You can also save it for future
              modifications if needed!
            </p>

            <p>
              I am currently taking this as a hobby project so updates might
              come randomly from time to time. Feel free to report any bug or
              suggestion on its Github repository and I will tackle them when
              time allows me to do so.
            </p>

            <p>
              This page has been done with React, Redux and other Open Source
              technologies. Detailed information about this project can be found
              on the &#34;About&#34; page.
            </p>

            <p>
              All product and company names are trademarks or registered
              trademarks of their respective copyright holders. No copyright has
              been infringed with this application.
            </p>
          </Text>
          <Stack
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="center"
            gap="lg"
          >
            <Paper shadow="md" withBorder p="md">
              <Title ta="left" order={3} mb="md">
                Create new sheet
              </Title>
              <Flex
                gap="md"
                justify="space-around"
                align="center"
                direction="row"
                wrap="wrap"
              >
                <Link to="/create">
                  <Button w="20em">Start</Button>
                </Link>
              </Flex>
            </Paper>
            <Paper shadow="md" withBorder p="md">
              <Title ta="left" order={3} mb="md">
                Help
              </Title>
              <Grid justify="center" align="stretch">
                <Grid.Col span={6}>
                  {' '}
                  <Button
                    component="a"
                    href="https://github.com/kosmicteal/reactionroll/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="light"
                  >
                    Watch tutorial
                  </Button>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Link to="/about">
                    <Button variant="light">About this page</Button>
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
                    Github repo
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
                    Main website
                  </Button>
                </Grid.Col>
              </Grid>
            </Paper>
          </Stack>
        </SimpleGrid>
      </Paper>
      {/* <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p> */}
      {/* </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}
