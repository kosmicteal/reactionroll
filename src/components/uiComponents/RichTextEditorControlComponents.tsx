import { cx } from '@emotion/css';
import { useRichTextEditorContext, RichTextEditor } from '@mantine/tiptap';
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconColumnInsertLeft,
  IconColumnInsertRight,
  IconColumnRemove,
  IconHeading,
  IconHelp,
  IconLayoutBoardSplit,
  IconRowInsertBottom,
  IconRowInsertTop,
  IconRowRemove,
  IconTable,
  IconTableColumn,
  IconTableOff,
  IconTablePlus,
  IconTableRow,
  IconTextDecrease,
  IconTextIncrease,
} from '@tabler/icons-react';
import { styling } from '../../style';
import { useTranslation } from 'react-i18next';
import { Popover, Flex } from '@mantine/core';
import { t } from 'i18next';
import { ModalRichTextEditorShortcuts } from '../modalComponents/ModalRichTextEditorShortcuts';
import { openModal } from '../modalComponents/ModalWrappers';

function RichTextEditorHeaderChoosing() {
  return (
    <Popover position="top" withArrow shadow="md">
      <Popover.Target>
        <RichTextEditor.Control
          aria-label={t('RichTextEditorComponent.control.heading')}
          title={t('RichTextEditorComponent.control.heading')}
        >
          <IconHeading stroke={2} size="1rem" />
        </RichTextEditor.Control>
      </Popover.Target>
      <Popover.Dropdown>
        <Flex>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
          <RichTextEditor.H3 />
          <RichTextEditor.H4 />
        </Flex>
      </Popover.Dropdown>
    </Popover>
  );
}

function RichTextEditorTable() {
  return (
    <Popover position="top" withArrow shadow="md">
      <Popover.Target>
        <RichTextEditor.Control
          aria-label={t('RichTextEditorComponent.control.table')}
          title={t('RichTextEditorComponent.control.table')}
        >
          <IconTable stroke={2} size="1rem" />
        </RichTextEditor.Control>
      </Popover.Target>
      <Popover.Dropdown>
        <Flex gap="md">
          <RichTextEditor.ControlsGroup>
            <RichTextEditorInsertTable />
            <RichTextEditorDeleteTable />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditorToggleHeaderColumn />
            <RichTextEditorAddColumnBefore />
            <RichTextEditorAddColumnAfter />
            <RichTextEditorRemoveColumn />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditorToggleHeaderRow />
            <RichTextEditorAddRowBefore />
            <RichTextEditorAddRowAfter />
            <RichTextEditorRemoveRow />
          </RichTextEditor.ControlsGroup>
          <RichTextEditor.ControlsGroup>
            <RichTextEditorMergeOrSplitCell />
          </RichTextEditor.ControlsGroup>
        </Flex>
      </Popover.Dropdown>
    </Popover>
  );
}

function RichTextEditorHelpButton() {
  return (
    <RichTextEditor.Control
      onClick={() =>
        openModal(
          t('RichTextEditorComponent.shortcutModal.title'),
          <ModalRichTextEditorShortcuts />,
          false,
          true,
          'xl',
        )
      }
      aria-label={t('RichTextEditorComponent.control.shortcuts')}
      title={t('RichTextEditorComponent.control.shortcuts')}
    >
      <IconHelp stroke={1.5} size="1rem" />
    </RichTextEditor.Control>
  );
}

function RichTextEditorInsertTable() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() =>
          editor!
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        }
        aria-label={t('RichTextEditorComponent.control.insertTable')}
        title={t('RichTextEditorComponent.control.insertTable')}
      >
        <IconTablePlus stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorAddColumnBefore() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() => editor!.chain().focus().addColumnBefore().run()}
        aria-label={t('RichTextEditorComponent.control.addColumnBefore')}
        title={t('RichTextEditorComponent.control.addColumnBefore')}
      >
        <IconColumnInsertLeft stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorAddColumnAfter() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() => editor!.chain().focus().addColumnAfter().run()}
        aria-label={t('RichTextEditorComponent.control.addColumnAfter')}
        title={t('RichTextEditorComponent.control.addColumnAfter')}
      >
        <IconColumnInsertRight stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorRemoveColumn() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() => editor!.chain().focus().deleteColumn().run()}
        aria-label={t('RichTextEditorComponent.control.removeColumn')}
        title={t('RichTextEditorComponent.control.removeColumn')}
      >
        <IconColumnRemove stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorAddRowBefore() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() => editor!.chain().focus().addRowBefore().run()}
        aria-label={t('RichTextEditorComponent.control.addRowBefore')}
        title={t('RichTextEditorComponent.control.addRowBefore')}
      >
        <IconRowInsertTop stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorAddRowAfter() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() => editor!.chain().focus().addRowAfter().run()}
        aria-label={t('RichTextEditorComponent.control.addRowAfter')}
        title={t('RichTextEditorComponent.control.addRowAfter')}
      >
        <IconRowInsertBottom stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorRemoveRow() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() => editor!.chain().focus().deleteRow().run()}
        aria-label={t('RichTextEditorComponent.control.deleteRow')}
        title={t('RichTextEditorComponent.control.deleteRow')}
      >
        <IconRowRemove stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorDeleteTable() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() => editor!.chain().focus().deleteTable().run()}
        aria-label={t('RichTextEditorComponent.control.deleteTable')}
        title={t('RichTextEditorComponent.control.deleteTable')}
      >
        <IconTableOff stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}
function RichTextEditorMergeOrSplitCell() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() => editor!.chain().focus().mergeOrSplit().run()}
        aria-label={t('RichTextEditorComponent.control.toggleCellMerge')}
        title={t('RichTextEditorComponent.control.toggleCellMerge')}
      >
        <IconLayoutBoardSplit stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorToggleHeaderColumn() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() => editor!.chain().focus().toggleHeaderColumn().run()}
        aria-label={t('RichTextEditorComponent.control.toggleHeaderColumn')}
        title={t('RichTextEditorComponent.control.toggleHeaderColumn')}
      >
        <IconTableColumn stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorToggleHeaderRow() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() => editor!.chain().focus().toggleHeaderRow().run()}
        aria-label={t('RichTextEditorComponent.control.toggleHeaderRow')}
        title={t('RichTextEditorComponent.control.toggleHeaderRow')}
      >
        <IconTableRow stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorTextIncrease() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() => {
          const currentTextSize: string =
            editor!.getAttributes('textStyle').fontSize || '1em';
          const increasedSize: number =
            parseFloat(currentTextSize.replace('em', '')) + 0.1;
          editor!.chain().focus().setFontSize(`${increasedSize}em`).run();
        }}
        aria-label={t('RichTextEditorComponent.control.increaseTextSize')}
        title={t('RichTextEditorComponent.control.increaseTextSize')}
      >
        <IconTextIncrease stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorTextDecrease() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        onClick={() => {
          const currentTextSize: string =
            editor!.getAttributes('textStyle').fontSize || '1em';
          const decreasedSize: number =
            parseFloat(currentTextSize.replace('em', '')) - 0.1;
          editor!.chain().focus().setFontSize(`${decreasedSize}em`).run();
        }}
        aria-label={t('RichTextEditorComponent.control.decreaseTextSize')}
        title={t('RichTextEditorComponent.control.decreaseTextSize')}
      >
        <IconTextDecrease stroke={2} size="1rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorUndo() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        className={cx(styling.rteButtonCustomStyleDisabled)}
        disabled={!editor!.can().undo()}
        data-disabled={!editor!.can().undo()}
        onClick={() => {
          if (editor!.can().undo()) {
            editor!.chain().focus().undo().run();
          }
        }}
        aria-label={t('RichTextEditorComponent.control.undo')}
        title={t('RichTextEditorComponent.control.undo')}
      >
        <IconArrowBackUp stroke={1.5} size="1.25rem" />
      </RichTextEditor.Control>
    )
  );
}

function RichTextEditorRedo() {
  const { editor } = useRichTextEditorContext();
  const { t, ready } = useTranslation();

  return (
    ready && (
      <RichTextEditor.Control
        className={cx(styling.rteButtonCustomStyleDisabled)}
        disabled={!editor!.can().redo()}
        data-disabled={!editor!.can().redo()}
        onClick={() => {
          if (editor!.can().redo()) {
            editor!.chain().focus().redo().run();
          }
        }}
        aria-label={t('RichTextEditorComponent.control.redo')}
        title={t('RichTextEditorComponent.control.redo')}
      >
        <IconArrowForwardUp stroke={1.5} size="1.25rem" />
      </RichTextEditor.Control>
    )
  );
}

export function RichTextEditorToolbarElements({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  return (
    <>
      <RichTextEditor.ControlsGroup>
        <RichTextEditorUndo />
        <RichTextEditorRedo />
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.ControlsGroup>
        <RichTextEditor.Bold />
        <RichTextEditor.Italic />
        <RichTextEditor.Underline />
        <RichTextEditor.Strikethrough />
        <RichTextEditor.ClearFormatting />
        <RichTextEditor.Highlight />
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.ControlsGroup>
        <RichTextEditorHeaderChoosing />
        <RichTextEditorTextIncrease />
        <RichTextEditorTextDecrease />
        <RichTextEditor.Subscript />
        <RichTextEditor.Superscript />
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.ControlsGroup>
        <RichTextEditor.BulletList />
        <RichTextEditor.OrderedList />
        <RichTextEditorTable />
        <RichTextEditor.Blockquote />
        <RichTextEditor.Hr />
      </RichTextEditor.ControlsGroup>

      <RichTextEditor.ControlsGroup>
        <RichTextEditor.AlignLeft />
        <RichTextEditor.AlignCenter />
        <RichTextEditor.AlignRight />
        <RichTextEditor.AlignJustify />
      </RichTextEditor.ControlsGroup>

      {!isMobile && (
        <RichTextEditor.ControlsGroup>
          <RichTextEditorHelpButton />
        </RichTextEditor.ControlsGroup>
      )}
    </>
  );
}
