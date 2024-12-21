import { cx } from '@emotion/css';
import {
  HoverCard,
  Input,
  ActionIcon,
  Divider,
  Stack,
  Tooltip,
  Flex,
} from '@mantine/core';
import {
  IconTrash,
  IconArrowBigUp,
  IconArrowBigDown,
} from '@tabler/icons-react';
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
  const {
    setUpdateSectionValue,
    setRemoveSection,
    moveSectionDown,
    moveSectionUp,
  } = reduxSlice.actions;
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
              size={3}
              className={cx(styling.gridBorder)}
              style={{ cursor: 'col-resize' }}
            />
          )}
        </Fragment>
      );
    },
  );

  function SectionCRUDGroup({ isMobile = false }: { isMobile?: boolean }) {
    const buttonSize = isMobile ? 'xl' : 'md';
    return (
      <Flex
        gap="xs"
        direction={isMobile ? 'column' : 'row'}
        className={cx(styling.noPrint)}
      >
        <Tooltip label={t('GenericSection.removeSection')}>
          <ActionIcon
            variant="outline"
            color="red"
            size={buttonSize}
            aria-label={t('GenericSection.removeSection')}
            onClick={() => dispatch(setRemoveSection(section.sectionId))}
          >
            <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label={t('GenericSection.moveSectionUp')}>
          <ActionIcon
            data-disabled={isFirstSection}
            disabled={isFirstSection}
            variant="outline"
            size={buttonSize}
            aria-label={t('GenericSection.moveSectionUp')}
            onClick={() => dispatch(moveSectionUp(section.sectionId))}
          >
            <IconArrowBigUp
              style={{ width: '70%', height: '70%' }}
              stroke={1.5}
            />
          </ActionIcon>
        </Tooltip>
        <Tooltip label={t('GenericSection.moveSectionDown')}>
          <ActionIcon
            data-disabled={isLastSection}
            disabled={isLastSection}
            variant="outline"
            size={buttonSize}
            aria-label={t('GenericSection.moveSectionDown')}
            onClick={() => dispatch(moveSectionDown(section.sectionId))}
          >
            <IconArrowBigDown
              style={{ width: '70%', height: '70%' }}
              stroke={1.5}
            />
          </ActionIcon>
        </Tooltip>
      </Flex>
    );
  }

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
              onTouchEnd={() => console.log('touchend')}
              key={crypto.randomUUID()}
            >
              {sectionElements}
              {isMobile && <SectionCRUDGroup isMobile />}
            </Container>
          </HoverCard.Target>
          {!isMobile && (
            <HoverCard.Dropdown>
              <SectionCRUDGroup />
            </HoverCard.Dropdown>
          )}
        </HoverCard>

        <Divider size="md" my="xs" />
      </>
    )
  );
}
