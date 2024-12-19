import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import Placeholder from '@tiptap/extension-placeholder';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TextStyle from '@tiptap/extension-text-style';
import { FontSize } from '../../utils/fontSizeTiptap';
import { cx } from '@emotion/css';
import { styling } from '../../style';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import { IconHeading, IconHelp, IconTable } from '@tabler/icons-react';
import { Popover, Flex } from '@mantine/core';
import {
  RichTextEditorAddColumnAfter,
  RichTextEditorAddColumnBefore,
  RichTextEditorAddRowAfter,
  RichTextEditorAddRowBefore,
  RichTextEditorDeleteTable,
  RichTextEditorInsertTable,
  RichTextEditorMergeOrSplitCell,
  RichTextEditorRedo,
  RichTextEditorRemoveColumn,
  RichTextEditorRemoveRow,
  RichTextEditorTextDecrease,
  RichTextEditorTextIncrease,
  RichTextEditorToggleHeaderColumn,
  RichTextEditorToggleHeaderRow,
  RichTextEditorUndo,
} from './RichTextEditorControlComponents';

interface RichTextEditorProps {
  value: string;
  onBlur: (value: string) => void;
}

export function RichTextEditorComponent({
  value,
  onBlur,
}: RichTextEditorProps) {
  const [isFocused, setIsFocused] = useState(false);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Superscript,
      SubScript,
      Highlight,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      TextStyle,
      FontSize,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({
        placeholder: 'Write your contents here.',
      }),
    ],
    content: value,
    onFocus: () => {
      setIsFocused(true);
    },
    onBlur: ({ editor }) => {
      onBlur(editor.getHTML());
      setIsFocused(false);
    },
  });

  function RichTextEditorHeaderChoosing() {
    return (
      <Popover position="top" withArrow shadow="md">
        <Popover.Target>
          <RichTextEditor.Control aria-label="Heading" title="Heading">
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
          <RichTextEditor.Control aria-label="Table" title="Table">
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
    const { editor } = useRichTextEditorContext();
    return (
      <RichTextEditor.Control
        onClick={() => editor?.commands.insertContent('⭐')}
        aria-label="Show rich text editor shortcuts"
        title="Show rich text editor shortcuts"
      >
        <IconHelp stroke={1.5} size="1rem" />
      </RichTextEditor.Control>
    );
  }

  return (
    <RichTextEditor
      editor={editor}
      className={cx(styling.richTextEditor)}
      variant="subtle"
    >
      {isFocused &&
        createPortal(
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

            <RichTextEditor.ControlsGroup>
              <RichTextEditorHelpButton />
            </RichTextEditor.ControlsGroup>
          </>,
          document.getElementById('editor-component')!,
        )}

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
