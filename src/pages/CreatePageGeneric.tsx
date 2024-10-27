import { AppShell, Button, Container, Flex } from '@mantine/core';
import './MainPage.css';
import { css, cx } from '@emotion/css';
import { BasicContent } from '../components/BasicContent';
import { Zoom } from '../components/Zoom';
import { reduxSelector } from '../redux/selector';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { useMediaQuery } from '@mantine/hooks';
import { RenderAndPrint } from '../utils/RenderAndPrint';
import { IconPlus } from '@tabler/icons-react';
import { styling } from '../style';

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

  const currentPageColour = reduxSelector('SET_PREVIEW_PAPER_COLOUR') as string;
  const currentTextColour = reduxSelector('SET_TEXT_COLOUR') as string;
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
        <BasicContent />
        {/* put BasicContent inside PageContent, then put PageContent 
        and button into UIcontent and put it here, the one printed is 
        PageContent which gets the values*/}
        <Button
          className={cx(styling.hideOnPrint)}
          leftSection={<IconPlus size={14} />}
          disabled
          variant="default"
        >
          Add section
        </Button>
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
