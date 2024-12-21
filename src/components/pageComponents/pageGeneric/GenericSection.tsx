import { cx } from '@emotion/css';
import { HoverCard, Input, Divider, Stack } from '@mantine/core';
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

export function GenericSection({
  section,
  index,
  totalSections,
}: {
  section: CharacterSection;
  index: number;
  totalSections: number;
}) {
  const ref = useRef<number[]>([]);
  const { setUpdateSectionValue } = reduxSlice.actions;
  const { dispatch } = reduxStore;
  const isFirstSection = index === 0;
  const isLastSection = index === totalSections - 1;
  const isMobile = useMediaQuery('(max-width: 50em)');

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

  const { t, ready } = useTranslation();

  const sectionElements: JSX.Element[] = section.columns.map(
    (column: CharacterSectionColumn, idx: number) => {
      return (
        <Fragment key={crypto.randomUUID()}>
          <Section
            onSizeChanged={number => handleColumnResize(number, idx)}
            defaultSize={column.span}
          >
            <Stack gap="xs">
              <Input
                defaultValue={column.title}
                variant="unstyled"
                size="c-sm+"
                fw={700}
                radius="xs"
                placeholder={t('GenericSection.sectionTitlePlaceholder')}
                onBlur={e => {
                  handleSectionUpdate({
                    sectionId: section.sectionId,
                    columnId: column.columnId,
                    value: {
                      title: e.target.value,
                    },
                  });
                }}
              />
              <div>
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
              </div>
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
    },
  );

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
            <Container
              key={crypto.randomUUID()}
              className={cx(styling.fullWidth)}
            >
              {sectionElements}
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
