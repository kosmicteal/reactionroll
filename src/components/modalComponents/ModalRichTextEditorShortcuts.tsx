import { Anchor, Kbd, Table, Tabs, Text } from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { Trans, useTranslation } from 'react-i18next';

export function ModalRichTextEditorShortcuts() {
  const os = useOs();
  const { t, ready } = useTranslation();

  const ctrlModKey =
    os === 'macos' || os === 'ios' ? <Kbd>⌘</Kbd> : <Kbd>Ctrl</Kbd>;

  return (
    ready && (
      <>
        <Text size="xs" m="xs" mb="md">
          {(os === 'undetermined' || os === 'linux') && (
            <Trans
              t={t}
              i18nKey="RichTextEditorComponent.shortcutModal.keyboardWarning"
              components={{
                kbd: <Kbd />,
              }}
            />
          )}
          <Trans
            t={t}
            i18nKey="RichTextEditorComponent.shortcutModal.disclaimer"
            components={{
              anchor: (
                <Anchor
                  href="https://tiptap.dev/docs/editor/core-concepts/keyboard-shortcuts"
                  target="_blank"
                />
              ),
            }}
          />
        </Text>
        <Tabs defaultValue="general" orientation="vertical" mb="lg">
          <Tabs.List>
            <Tabs.Tab value="general">
              {t('RichTextEditorComponent.shortcutModal.general')}
            </Tabs.Tab>
            <Tabs.Tab value="text">
              {t('RichTextEditorComponent.shortcutModal.text')}
            </Tabs.Tab>
            <Tabs.Tab value="paragraph">
              {t('RichTextEditorComponent.shortcutModal.paragraph')}
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="general">
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>
                    {t('RichTextEditorComponent.shortcutModal.command')}
                  </Table.Th>
                  <Table.Th>
                    {t('RichTextEditorComponent.shortcutModal.shortcut')}
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.shortcutModal.copy')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>C</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.shortcutModal.cut')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>X</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.shortcutModal.paste')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>V</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.shortcutModal.pasteNoFormat')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>🡅 Shift</Kbd> + <Kbd>V</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.control.undo')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>Z</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.control.redo')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>🡅 Shift</Kbd> + <Kbd>Z</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td rowSpan={2}>
                    {t('RichTextEditorComponent.shortcutModal.lineBreak')}
                  </Table.Td>
                  <Table.Td>
                    <Kbd>🡅 Shift</Kbd> + <Kbd>Enter</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>Enter</Kbd>
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Tabs.Panel>

          <Tabs.Panel value="text">
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>
                    {t('RichTextEditorComponent.shortcutModal.command')}
                  </Table.Th>
                  <Table.Th>
                    {t('RichTextEditorComponent.shortcutModal.shortcut')}
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.control.boldControlLabel')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>B</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.control.italicControlLabel')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>I</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.control.underlineControlLabel')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>U</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.control.strikeControlLabel')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>🡅 Shift</Kbd> + <Kbd>S</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.control.highlightControlLabel')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>🡅 Shift</Kbd> + <Kbd>H</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.shortcutModal.selectAll')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>A</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.shortcutModal.extend')}
                  </Table.Td>
                  <Table.Td>
                    <Kbd>🡅 Shift</Kbd> + (<Kbd>←</Kbd>/<Kbd>→</Kbd>/<Kbd>↑</Kbd>
                    /<Kbd>↓</Kbd>)
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Tabs.Panel>

          <Tabs.Panel value="paragraph">
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>
                    {t('RichTextEditorComponent.shortcutModal.command')}
                  </Table.Th>
                  <Table.Th>
                    {t('RichTextEditorComponent.shortcutModal.shortcut')}
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.shortcutModal.applyNormal')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>Alt</Kbd> + <Kbd>0</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.shortcutModal.applyHeader')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>Alt</Kbd> + (<Kbd>0</Kbd>...<Kbd>9</Kbd>
                    )
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t(
                      'RichTextEditorComponent.control.orderedListControlLabel',
                    )}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>🡅 Shift</Kbd> + <Kbd>7</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t(
                      'RichTextEditorComponent.control.bulletListControlLabel',
                    )}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>🡅 Shift</Kbd> + <Kbd>8</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t(
                      'RichTextEditorComponent.control.blockquoteControlLabel',
                    )}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>🡅 Shift</Kbd> + <Kbd>B</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.control.alignLeftControlLabel')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>🡅 Shift</Kbd> + <Kbd>L</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t(
                      'RichTextEditorComponent.control.alignCenterControlLabel',
                    )}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>🡅 Shift</Kbd> + <Kbd>E</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t(
                      'RichTextEditorComponent.control.alignRightControlLabel',
                    )}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>🡅 Shift</Kbd> + <Kbd>R</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t(
                      'RichTextEditorComponent.control.alignJustifyControlLabel',
                    )}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>🡅 Shift</Kbd> + <Kbd>J</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t('RichTextEditorComponent.control.subscriptControlLabel')}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>,</Kbd>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    {t(
                      'RichTextEditorComponent.control.superscriptControlLabel',
                    )}
                  </Table.Td>
                  <Table.Td>
                    {ctrlModKey} + <Kbd>.</Kbd>
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </Tabs.Panel>
        </Tabs>
      </>
    )
  );
}
