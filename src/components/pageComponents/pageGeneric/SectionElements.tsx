import { cx } from '@emotion/css';
import { Stack } from '@mantine/core';
import {
  anyObject,
  CharacterSection,
  CharacterSectionColumn,
} from '../../../redux/state.interface';
import { styling } from '../../../style';
import { reduxStore } from '../../../main';
import { reduxSlice } from '../../../redux/slicer';
import { RichTextEditorComponent } from '../../uiComponents/RichTextEditorComponent';
import { Section, Bar } from '@column-resizer/react';
import { Fragment, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';
import { useContextMenu } from 'mantine-contextmenu';
import {
  IconArrowBigUp,
  IconArrowBigDown,
  IconTrash,
  IconTransitionLeft,
  IconTransitionRight,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse,
  IconColumnRemove,
} from '@tabler/icons-react';

export function SectionElements({
  section,
  isFirstSection,
  isLastSection,
}: {
  section: CharacterSection;
  isFirstSection: boolean;
  isLastSection: boolean;
}) {
  const ref = useRef<number[]>([]);
  const { showContextMenu } = useContextMenu();
  const {
    setUpdateSectionValue,
    setRemoveSection,
    setMoveSectionUp,
    setMoveSectionDown,
    setMoveColumnLeft,
    setMoveColumnRight,
    setAddColumnLeft,
    setAddColumnRight,
    setRemoveColumn,
  } = reduxSlice.actions;
  const { dispatch } = reduxStore;
  const { t } = useTranslation();

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
    const isFirstColumn = idx === 0;
    const isLastColumn = idx === section.columns.length - 1;

    return (
      <Fragment key={column.columnId}>
        <Section
          onSizeChanged={number => handleColumnResize(number, idx)}
          defaultSize={column.span}
          onContextMenu={showContextMenu([
            {
              key: 'moveSectionUp',
              title: t('GenericSection.moveSectionUp'),
              icon: <IconArrowBigUp size={16} />,
              onClick: () => dispatch(setMoveSectionUp(section.sectionId)),
              disabled: isFirstSection,
            },
            {
              key: 'moveSectionDown',
              title: t('GenericSection.moveSectionDown'),
              icon: <IconArrowBigDown size={16} />,
              onClick: () => dispatch(setMoveSectionDown(section.sectionId)),
              disabled: isLastSection,
            },
            {
              key: 'delete',
              title: t('GenericSection.removeSection'),
              icon: <IconTrash size={16} />,
              onClick: () => dispatch(setRemoveSection(section.sectionId)),
              color: 'red',
            },
            { key: 'divider' },
            {
              key: 'moveColumnLeft',
              title: t('GenericSection.moveColumnLeft'),
              icon: <IconTransitionLeft size={16} />,
              onClick: () =>
                dispatch(
                  setMoveColumnLeft({
                    sectionId: section.sectionId,
                    columnId: column.columnId,
                  }),
                ),
              disabled: isFirstColumn,
            },
            {
              key: 'moveColumnRight',
              title: t('GenericSection.moveColumnRight'),
              icon: <IconTransitionRight size={16} />,
              onClick: () =>
                dispatch(
                  setMoveColumnRight({
                    sectionId: section.sectionId,
                    columnId: column.columnId,
                  }),
                ),
              disabled: isLastColumn,
            },
            {
              key: 'addColumnBefore',
              title: t('GenericSection.addColumnBefore'),
              icon: <IconLayoutSidebarLeftCollapse size={16} />,
              onClick: () =>
                dispatch(
                  setAddColumnLeft({
                    sectionId: section.sectionId,
                    columnId: column.columnId,
                  }),
                ),
            },
            {
              key: 'addColumnAfter',
              title: t('GenericSection.addColumnAfter'),
              icon: <IconLayoutSidebarRightCollapse size={16} />,
              onClick: () =>
                dispatch(
                  setAddColumnRight({
                    sectionId: section.sectionId,
                    columnId: column.columnId,
                  }),
                ),
            },
            {
              key: 'deleteColumn',
              title: t('GenericSection.deleteColumn'),
              icon: <IconColumnRemove size={16} />,
              onClick: () =>
                dispatch(
                  setRemoveColumn({
                    sectionId: section.sectionId,
                    columnId: column.columnId,
                  }),
                ),
              color: 'red',
              disabled: isFirstColumn && isLastColumn,
            },
          ])}
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
