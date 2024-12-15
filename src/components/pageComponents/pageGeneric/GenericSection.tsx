import { cx } from '@emotion/css';
import {
  HoverCard,
  Grid,
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

export function GenericSection({ section }: { section: CharacterSection }) {
  const { setUpdateSectionValue, setRemoveSection } = reduxSlice.actions;
  const { dispatch } = reduxStore;

  function handleSectionUpdate(payload: anyObject) {
    dispatch(setUpdateSectionValue(payload));
  }

  return (
    <>
      <HoverCard
        shadow="md"
        position="top-end"
        transitionProps={{ transition: 'fade-up' }}
      >
        <HoverCard.Target>
          <Grid key={crypto.randomUUID()}>
            {section.columns.map(
              (column: CharacterSectionColumn, idx: number) => {
                return (
                  <Grid.Col
                    key={crypto.randomUUID()}
                    span={column.span || 12}
                    className={
                      idx < section.columns.length - 1
                        ? cx(styling.characterSection, styling.gridBorder)
                        : cx(styling.characterSection)
                    }
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
                  </Grid.Col>
                );
              },
            )}
          </Grid>
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

      <Divider size="md" my="md" />
    </>
  );
}
