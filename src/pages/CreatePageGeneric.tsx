import { AppShell, Button, Container, Flex } from '@mantine/core';
import './MainPage.css';
import { css, cx } from '@emotion/css';
import { BasicContent } from '../components/pageComponents/pageGeneric/BasicContent';
import { Zoom } from '../components/Zoom';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { useMediaQuery } from '@mantine/hooks';
import { RenderAndPrint } from '../utils/RenderAndPrint';
import { IconPlus } from '@tabler/icons-react';
import { styling } from '../style';
import { openModal } from '../components/modalComponents/AutoUpdateModal';
import { ModalAddSection } from '../components/modalComponents/ModalAddSection';
import { CreatePageGenericSkeleton } from '../components/uiComponents/CreatePageGenericSkeleton';
import { reduxSelector, reduxSlice } from '../redux/slicer';

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
          <>
            <BasicContent />
            <Button
              className={cx(styling.hideOnPrint)}
              leftSection={<IconPlus size={14} />}
              variant="default"
              onClick={() => {
                openModal(
                  'Add new section',
                  <ModalAddSection />,
                  isMobile!,
                  true,
                );
              }}
            >
              Add section
            </Button>
          </>
        ) : (
          <CreatePageGenericSkeleton />
        )}
        {/* put BasicContent inside PageContent, then put PageContent 
        and button into UIcontent and put it here, the one printed is 
        PageContent which gets the values*/}
      </ResponsiveContainer>

      {isPrinting && <RenderAndPrint />}

      <AppShell.Footer>
        <Container fluid p="xs">
          <Flex justify={'space-between'} align="center">
            <Flex id="editor-component" ml={'0.25rem'} gap="md"></Flex>
            <Zoom />
          </Flex>
        </Container>
      </AppShell.Footer>
    </>
  );
}
