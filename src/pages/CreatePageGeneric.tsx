import { AppShell, Container, Flex } from '@mantine/core';
import './MainPage.css';
import { css } from '@emotion/css';
import { BasicContent } from '../components/BasicContent';
import { Zoom } from '../components/Zoom';
import { reduxSelector } from '../redux/selector';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { useMediaQuery } from '@mantine/hooks';
import { RenderAndPrint } from '../utils/RenderAndPrint';

export function CreatePageGeneric() {
  const currentZoomSetting = reduxSelector('SET_ZOOM') as number;
  const zoomPage = css`
    transform: scale(${currentZoomSetting}, ${currentZoomSetting});
    margin-top: ${currentZoomSetting * 40 - 40}em;
    margin-bottom: calc(
      ${currentZoomSetting * 42 - 42}em + (var(--mantine-spacing-lg))
    );
  `;
  const isMobile = useMediaQuery('(max-width: 50em)');
  const isPrinting = reduxSelector('PRINT_DATA') as boolean;

  return (
    <>
      <ResponsiveContainer isMobile={isMobile} zoomPage={zoomPage}>
        <BasicContent />
      </ResponsiveContainer>

      {isPrinting && <RenderAndPrint />}

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
