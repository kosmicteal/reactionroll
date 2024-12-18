import { cx } from '@emotion/css';
import {
  HoverCard,
  Input,
  Group,
  ActionIcon,
  Divider,
  Stack,
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

export function GenericSection({ section }: { section: CharacterSection }) {
  const ref = useRef<number[]>([]);
  const { setUpdateSectionValue, setRemoveSection } = reduxSlice.actions;
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
    console.log(ref.current);
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
            <ActionIcon
              variant="outline"
              color="red"
              size="md"
              aria-label="Settings"
              onClick={() => dispatch(setRemoveSection(section.sectionId))}
            >
              <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="outline" size="md" aria-label="Settings">
              <IconArrowBigUp
                style={{ width: '70%', height: '70%' }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon variant="outline" size="md" aria-label="Settings">
              <IconArrowBigDown
                style={{ width: '70%', height: '70%' }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>

      <Divider size="md" my="xs" />
    </>
  );
}
