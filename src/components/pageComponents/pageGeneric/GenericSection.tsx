import { cx } from '@emotion/css';
import { HoverCard, Divider, Stack } from '@mantine/core';
import {
  anyObject,
  CharacterSection,
  CharacterSectionColumn,
} from '../../../redux/state.interface';
import { styling } from '../../../style';
import { reduxStore } from '../../../main';
import { reduxSlice } from '../../../redux/slicer';
import { RichTextEditorComponent } from '../../uiComponents/RichTextEditorComponent';
import { Container, Section, Bar } from '@column-resizer/react';
import { Fragment, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';
import { SectionCRUDGroup } from './SectionCRUDGroup';
import { SectionTitle } from './SectionTitle';

export function SectionElements({ section }: { section: CharacterSection }) {
  const ref = useRef<number[]>([]);
  const { setUpdateSectionValue } = reduxSlice.actions;
  const { dispatch } = reduxStore;

  function handleSectionUpdate(payload: anyObject) {
    dispatch(setUpdateSectionValue(payload));
  }

  function handleColumnResize(change: number, idx: number) {
    if (ref.current[idx]) {
      ref.current[idx] = change;
    } else {
      ref.current.push(change);
    }
  }

  function onDragEnd() {
    const totalWidth = ref.current.reduce((partialSum, a) => partialSum + a, 0);
    ref.current = ref.current.map(number => {
      return (number / totalWidth) * 100;
    });
    section.columns.forEach((column, idx) => {
      handleSectionUpdate({
        sectionId: section.sectionId,
        columnId: column.columnId,
        value: {
          span: ref.current[idx],
        },
      });
    });
  }

  return section.columns.map((column: CharacterSectionColumn, idx: number) => {
    console.log(column.columnId);
    return (
      <Fragment key={column.columnId}>
        <Section
          onSizeChanged={number => handleColumnResize(number, idx)}
          defaultSize={column.span}
        >
          <Stack gap="xs">
            <SectionTitle
              defaultValue={column.title}
              sectionId={section.sectionId}
              columnId={column.columnId}
              handleSectionUpdate={handleSectionUpdate}
            />

            <RichTextEditorComponent
              value={column.textContent}
              onBlur={updatedValue => {
                handleSectionUpdate({
                  sectionId: section.sectionId,
                  columnId: column.columnId,
                  value: {
                    textContent: updatedValue,
                  },
                });
              }}
            />
          </Stack>
        </Section>
        {idx < section.columns.length - 1 && (
          <Bar
            onMouseUp={onDragEnd}
            onTouchEnd={onDragEnd}
            size={3}
            className={cx(styling.gridBorder)}
            style={{ cursor: 'col-resize' }}
          />
        )}
      </Fragment>
    );
  });
}

export function GenericSection({
  section,
  index,
  totalSections,
}: {
  section: CharacterSection;
  index: number;
  totalSections: number;
}) {
  const isFirstSection = index === 0;
  const isLastSection = index === totalSections - 1;
  const isMobile = useMediaQuery('(max-width: 50em)');

  const { ready } = useTranslation();

  return (
    ready && (
      <>
        <HoverCard
          shadow="md"
          position="top-end"
          transitionProps={{ transition: 'fade-up' }}
          closeDelay={300}
        >
          <HoverCard.Target>
            <Container className={cx(styling.fullWidth)}>
              <SectionElements section={section} />
              {isMobile && (
                <SectionCRUDGroup
                  isMobile
                  isFirstSection={isFirstSection}
                  isLastSection={isLastSection}
                  sectionId={section.sectionId}
                />
              )}
            </Container>
          </HoverCard.Target>
          {!isMobile && (
            <HoverCard.Dropdown>
              <SectionCRUDGroup
                isFirstSection={isFirstSection}
                isLastSection={isLastSection}
                sectionId={section.sectionId}
              />
            </HoverCard.Dropdown>
          )}
        </HoverCard>

        <Divider size="md" my="xs" />
      </>
    )
  );
}
