import { cx } from '@emotion/css';
import {
  HoverCard,
  Input,
  Group,
  ActionIcon,
  Divider,
  Stack,
  Tooltip,
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
                placeholder="Section title"
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

  return (
    <>
      <HoverCard
        shadow="md"
        position="top-end"
        transitionProps={{ transition: 'fade-up' }}
      >
        <HoverCard.Target>
          <Container key={crypto.randomUUID()}>{sectionElements}</Container>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group gap="xs">
            <Tooltip label="Remove section">
              <ActionIcon
                variant="outline"
                color="red"
                size="md"
                aria-label="Remove section"
                onClick={() => dispatch(setRemoveSection(section.sectionId))}
              >
                <IconTrash
                  style={{ width: '70%', height: '70%' }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Move section up">
              <ActionIcon
                data-disabled={isFirstSection}
                disabled={isFirstSection}
                variant="outline"
                size="md"
                aria-label="Move section up"
                onClick={() => dispatch(moveSectionUp(section.sectionId))}
              >
                <IconArrowBigUp
                  style={{ width: '70%', height: '70%' }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Move section down">
              <ActionIcon
                data-disabled={isLastSection}
                disabled={isLastSection}
                variant="outline"
                size="md"
                aria-label="Move section down"
                onClick={() => dispatch(moveSectionDown(section.sectionId))}
              >
                <IconArrowBigDown
                  style={{ width: '70%', height: '70%' }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>

      <Divider size="md" my="xs" />
    </>
  );
}
