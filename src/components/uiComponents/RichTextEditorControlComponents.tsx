import { useRichTextEditorContext, RichTextEditor } from '@mantine/tiptap';
import {
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
} from '@tabler/icons-react';

export function RichTextEditorInsertTable() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() =>
        editor!
          .chain()
          .focus()
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run()
      }
      aria-label="Insert table"
      title="Insert table"
    >
      <IconTablePlus stroke={2} size="1rem" />
    </RichTextEditor.Control>
  );
}

export function RichTextEditorAddColumnBefore() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor!.chain().focus().addColumnBefore().run()}
      aria-label="Add column before"
      title="Add column before"
    >
      <IconColumnInsertLeft stroke={2} size="1rem" />
    </RichTextEditor.Control>
  );
}

export function RichTextEditorAddColumnAfter() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor!.chain().focus().addColumnAfter().run()}
      aria-label="Add column after"
      title="Add column after"
    >
      <IconColumnInsertRight stroke={2} size="1rem" />
    </RichTextEditor.Control>
  );
}

export function RichTextEditorRemoveColumn() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor!.chain().focus().deleteColumn().run()}
      aria-label="Delete column"
      title="Delete column"
    >
      <IconColumnRemove stroke={2} size="1rem" />
    </RichTextEditor.Control>
  );
}

export function RichTextEditorAddRowBefore() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor!.chain().focus().addRowBefore().run()}
      aria-label="Add row before"
      title="Add row before"
    >
      <IconRowInsertTop stroke={2} size="1rem" />
    </RichTextEditor.Control>
  );
}

export function RichTextEditorAddRowAfter() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor!.chain().focus().addRowAfter().run()}
      aria-label="Add row after"
      title="Add row after"
    >
      <IconRowInsertBottom stroke={2} size="1rem" />
    </RichTextEditor.Control>
  );
}

export function RichTextEditorRemoveRow() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor!.chain().focus().deleteRow().run()}
      aria-label="Delete row"
      title="Delete row"
    >
      <IconRowRemove stroke={2} size="1rem" />
    </RichTextEditor.Control>
  );
}

export function RichTextEditorDeleteTable() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor!.chain().focus().deleteTable().run()}
      aria-label="Delete table"
      title="Delete table"
    >
      <IconTableOff stroke={2} size="1rem" />
    </RichTextEditor.Control>
  );
}
export function RichTextEditorMergeOrSplitCell() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor!.chain().focus().mergeOrSplit().run()}
      aria-label="Toggle cell merge"
      title="Toggle cell merge"
    >
      <IconLayoutBoardSplit stroke={2} size="1rem" />
    </RichTextEditor.Control>
  );
}

export function RichTextEditorToggleHeaderColumn() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor!.chain().focus().toggleHeaderColumn().run()}
      aria-label="Toggle header column"
      title="Toggle header column"
    >
      <IconTableColumn stroke={2} size="1rem" />
    </RichTextEditor.Control>
  );
}

export function RichTextEditorToggleHeaderRow() {
  const { editor } = useRichTextEditorContext();
  return (
    <RichTextEditor.Control
      onClick={() => editor!.chain().focus().toggleHeaderRow().run()}
      aria-label="Toggle header row"
      title="Toggle header row"
    >
      <IconTableRow stroke={2} size="1rem" />
    </RichTextEditor.Control>
  );
}
