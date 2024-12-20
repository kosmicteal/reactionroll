import { useTranslation } from 'react-i18next';

export function richTextEditorLabelsHelper() {
  const { t, ready } = useTranslation();
  return ready
    ? {
        boldControlLabel: t('RichTextEditorComponent.control.boldControlLabel'),
        hrControlLabel: t('RichTextEditorComponent.control.hrControlLabel'),
        italicControlLabel: t(
          'RichTextEditorComponent.control.italicControlLabel',
        ),
        underlineControlLabel: t(
          'RichTextEditorComponent.control.underlineControlLabel',
        ),
        strikeControlLabel: t(
          'RichTextEditorComponent.control.strikeControlLabel',
        ),
        clearFormattingControlLabel: t(
          'RichTextEditorComponent.control.clearFormattingControlLabel',
        ),
        linkControlLabel: t('RichTextEditorComponent.control.linkControlLabel'),
        unlinkControlLabel: t(
          'RichTextEditorComponent.control.unlinkControlLabel',
        ),
        bulletListControlLabel: t(
          'RichTextEditorComponent.control.bulletListControlLabel',
        ),
        orderedListControlLabel: t(
          'RichTextEditorComponent.control.orderedListControlLabel',
        ),
        h1ControlLabel: t('RichTextEditorComponent.control.h1ControlLabel'),
        h2ControlLabel: t('RichTextEditorComponent.control.h2ControlLabel'),
        h3ControlLabel: t('RichTextEditorComponent.control.h3ControlLabel'),
        h4ControlLabel: t('RichTextEditorComponent.control.h4ControlLabel'),
        h5ControlLabel: t('RichTextEditorComponent.control.h5ControlLabel'),
        h6ControlLabel: t('RichTextEditorComponent.control.h6ControlLabel'),
        blockquoteControlLabel: t(
          'RichTextEditorComponent.control.blockquoteControlLabel',
        ),
        alignLeftControlLabel: t(
          'RichTextEditorComponent.control.alignLeftControlLabel',
        ),
        alignCenterControlLabel: t(
          'RichTextEditorComponent.control.alignCenterControlLabel',
        ),
        alignRightControlLabel: t(
          'RichTextEditorComponent.control.alignRightControlLabel',
        ),
        alignJustifyControlLabel: t(
          'RichTextEditorComponent.control.alignJustifyControlLabel',
        ),
        codeControlLabel: t('RichTextEditorComponent.control.codeControlLabel'),
        codeBlockControlLabel: t(
          'RichTextEditorComponent.control.codeBlockControlLabel',
        ),
        subscriptControlLabel: t(
          'RichTextEditorComponent.control.subscriptControlLabel',
        ),
        superscriptControlLabel: t(
          'RichTextEditorComponent.control.superscriptControlLabel',
        ),
        colorPickerControlLabel: t(
          'RichTextEditorComponent.control.colorPickerControlLabel',
        ),
        unsetColorControlLabel: t(
          'RichTextEditorComponent.control.unsetColorControlLabel',
        ),
        highlightControlLabel: t(
          'RichTextEditorComponent.control.highlightControlLabel',
        ),
      }
    : undefined;
}
