import { AppShell, Container, Flex } from '@mantine/core';
import { css, cx } from '@emotion/css';
import { BasicContent } from '../components/pageComponents/pageGeneric/BasicContent';
import { Zoom } from '../components/Zoom';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { useMediaQuery } from '@mantine/hooks';
import { RenderAndPrint } from '../utils/RenderAndPrint';
import { CreatePageGenericSkeleton } from '../components/uiComponents/CreatePageGenericSkeleton';
import { reduxSelector, reduxSlice } from '../redux/slicer';
import { AddGenericSectionButton } from '../components/uiComponents/AddGenericSectionButton';
import { SendFeedback } from '../components/SendFeedback';

export function CreatePageGeneric() {
  const {
    selectZoom,
    selectPrintData,
    selectIsLoading,
    selectPreviewPaperColour,
    selectTextColour,
  } = reduxSlice.selectors;

  const currentZoomSetting = reduxSelector(selectZoom) as number;
  const zoomPage = css`
    transform: scale(${currentZoomSetting}, ${currentZoomSetting});
    margin-top: ${currentZoomSetting * 40 - 40}em;
    margin-bottom: calc(
      ${currentZoomSetting * 45 - 42}em + (var(--mantine-spacing-lg))
    );
  `;

  const isMobile = useMediaQuery('(max-width: 50em)');
  const isPrinting = reduxSelector(selectPrintData) as boolean;
  const isLoading = reduxSelector(selectIsLoading) as boolean;

  const currentPageColour = reduxSelector(selectPreviewPaperColour) as string;
  const currentTextColour = reduxSelector(selectTextColour) as string;
  const paperBackground = currentPageColour
    ? css`
        background-color: ${currentPageColour} !important;
      `
    : null;
  const textColor = currentTextColour
    ? css`
        color: ${currentTextColour} !important;
        * > input {
          color: ${currentTextColour} !important;
        }
      `
    : null;
  const containerTheme = cx(paperBackground, textColor);

  return (
    <>
      <ResponsiveContainer
        isMobile={isMobile}
        zoomPage={zoomPage}
        containerTheme={containerTheme}
      >
        {!isLoading ? (
          <div id="content">
            <BasicContent />
            <AddGenericSectionButton />
          </div>
        ) : (
          <CreatePageGenericSkeleton />
        )}
      </ResponsiveContainer>

      {isPrinting && <RenderAndPrint />}

      <AppShell.Footer>
        <Container fluid p="xs">
          <Flex justify={'space-between'} align="center">
            <Flex id="editor-component" ms={'0.25rem'} gap="md"></Flex>
            <Flex me={'0.25rem'} gap="md">
              <Zoom />
              <SendFeedback />
            </Flex>
          </Flex>
        </Container>
      </AppShell.Footer>
    </>
  );
}
