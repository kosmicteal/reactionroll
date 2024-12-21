import { RichTextEditor } from '@mantine/tiptap';
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
import { RichTextEditorToolbarElements } from './RichTextEditorControlComponents';

import { useTranslation } from 'react-i18next';
import { richTextEditorLabelsHelper } from '../../utils/richTextEditorLabelsHelper';
import { useMediaQuery } from '@mantine/hooks';

interface RichTextEditorProps {
  value: string;
  onBlur: (value: string) => void;
}

export function RichTextEditorComponent({
  value,
  onBlur,
}: RichTextEditorProps) {
  const { t, ready } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 50em)');

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
        placeholder: t('RichTextEditorComponent.placeholder'),
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

  return (
    ready && (
      <RichTextEditor
        editor={editor}
        labels={richTextEditorLabelsHelper()}
        className={cx(styling.richTextEditor)}
        variant="subtle"
      >
        {isFocused && (
          <RichTextEditor.Toolbar sticky>
            <RichTextEditorToolbarElements isMobile />
          </RichTextEditor.Toolbar>
        )}
        {isFocused &&
          !isMobile &&
          createPortal(
            <RichTextEditorToolbarElements />,
            document.getElementById('editor-component')!,
          )}

        <RichTextEditor.Content />
      </RichTextEditor>
    )
  );
}
