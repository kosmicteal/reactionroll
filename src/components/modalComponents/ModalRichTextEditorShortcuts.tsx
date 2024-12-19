import { Anchor, Kbd, Table, Tabs, Text } from '@mantine/core';

export function ModalRichTextEditorShortcuts() {
  return (
    <>
      <Text size="xs" m="xs" mb="md">
        If you are using Mac, use <Kbd>⌘</Kbd> instead of <Kbd>Ctrl</Kbd>. This
        app uses{' '}
        <Anchor
          href="https://tiptap.dev/docs/editor/core-concepts/keyboard-shortcuts"
          target="_blank"
        >
          Tiptap&#39;s editor
        </Anchor>{' '}
        as a base.
      </Text>
      <Tabs defaultValue="general" orientation="vertical" mb="lg">
        <Tabs.List>
          <Tabs.Tab value="general">General shortcuts</Tabs.Tab>
          <Tabs.Tab value="text">Text format and selection</Tabs.Tab>
          <Tabs.Tab value="paragraph">Paragraph formatting</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="general">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Command</Table.Th>
                <Table.Th>Shortcut</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>Copy</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Cut</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>X</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Paste</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>V</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Paste without formatting</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>V</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Undo</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Z</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Redo</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>Z</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td rowSpan={2}>Add a line break</Table.Td>
                <Table.Td>
                  <Kbd>Shift</Kbd> + <Kbd>Enter</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Enter</Kbd>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Tabs.Panel>

        <Tabs.Panel value="text">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Command</Table.Th>
                <Table.Th>Shortcut</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>Bold</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>B</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Italicize</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>I</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Underline</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>U</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Strikethrough</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>S</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Highlight</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>H</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Code</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>E</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Select all</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>A</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Extend selection one character to left</Table.Td>
                <Table.Td>
                  <Kbd>Shift</Kbd> + <Kbd>←</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Extend selection one character to right</Table.Td>
                <Table.Td>
                  <Kbd>Shift</Kbd> + <Kbd>→</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Extend selection one line up</Table.Td>
                <Table.Td>
                  <Kbd>Shift</Kbd> + <Kbd>↑</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Extend selection one line down</Table.Td>
                <Table.Td>
                  <Kbd>Shift</Kbd> + <Kbd>↓</Kbd>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Tabs.Panel>

        <Tabs.Panel value="paragraph">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Command</Table.Th>
                <Table.Th>Shortcut</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>Apply normal text style</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Alt</Kbd> + <Kbd>0</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Apply heading style (number)</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Alt</Kbd> + <Kbd>(number)</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Ordered list</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>7</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Bullet list</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>8</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Blockquote</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>B</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Left align</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>L</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Center align</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>E</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Right align</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>R</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Justify</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>J</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Subscript</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>,</Kbd>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>Superscript</Table.Td>
                <Table.Td>
                  <Kbd>Ctrl</Kbd> + <Kbd>.</Kbd>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
