import { AppShell, Container, Flex, Paper } from '@mantine/core';
import './MainPage.css';
import { css, cx } from '@emotion/css';
import { styling } from '../style';
import { BasicContent } from '../components/BasicContent';
import { Zoom } from '../components/Zoom';
import { reduxSelector } from '../redux/selector';

export function CreatePageGeneric() {
  const currentZoomSetting = parseFloat(reduxSelector('SET_ZOOM') as string);
  const zoomPage = css`
    transform: scale(${currentZoomSetting}, ${currentZoomSetting});
    margin-top: ${currentZoomSetting * 40 - 40}em;
    margin-bottom: calc(
      ${currentZoomSetting * 42 - 42}em + (var(--mantine-spacing-lg))
    );
  `;
  return (
    <>
      <Paper
        visibleFrom="sm"
        className={cx(
          styling.paperBackground,
          styling.paperSize,
          styling.centerContainer,
          zoomPage,
        )}
        withBorder
        shadow="md"
      >
        <BasicContent />
      </Paper>
      <Container hiddenFrom="sm">
        <BasicContent />
      </Container>

      <AppShell.Footer>
        <Container fluid p="lg">
          <Flex justify={'end'}>
            <Zoom />
          </Flex>
        </Container>
      </AppShell.Footer>
    </>
  );
}
