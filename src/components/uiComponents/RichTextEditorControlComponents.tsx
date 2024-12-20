import { cx } from '@emotion/css';
import { useRichTextEditorContext, RichTextEditor } from '@mantine/tiptap';
import {
  IconArrowBackUp,
  IconArrowForwardUp,
  IconColumnInsertLeft,
  IconColumnInsertRight,
  IconColumnRemove,
  IconLayoutBoardSplit,
  IconRowInsertBottom,
  IconRowInsertTop,
  IconRowRemove,
  IconTableColumn,
  IconTableOff,
  IconTablePlus,
  IconTableRow,
  IconTextDecrease,
  IconTextIncrease,
} from '@tabler/icons-react';
import { styling } from '../../style';
import { useTranslation } from 'react-i18next';

export function RichTextEditorInsertTable() {
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

export function RichTextEditorAddColumnBefore() {
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

export function RichTextEditorAddColumnAfter() {
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

export function RichTextEditorRemoveColumn() {
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

export function RichTextEditorAddRowBefore() {
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

export function RichTextEditorAddRowAfter() {
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

export function RichTextEditorRemoveRow() {
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

export function RichTextEditorDeleteTable() {
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
export function RichTextEditorMergeOrSplitCell() {
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

export function RichTextEditorToggleHeaderColumn() {
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

export function RichTextEditorToggleHeaderRow() {
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

export function RichTextEditorTextIncrease() {
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

export function RichTextEditorTextDecrease() {
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

export function RichTextEditorUndo() {
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

export function RichTextEditorRedo() {
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
