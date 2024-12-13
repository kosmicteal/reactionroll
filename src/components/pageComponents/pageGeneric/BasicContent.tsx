import {
  Flex,
  Input,
  Stack,
  UnstyledButton,
  Text,
  NumberInput,
  Divider,
  Grid,
  HoverCard,
  ActionIcon,
  Group,
} from '@mantine/core';
import { useDispatch } from 'react-redux';
import { GlobalDispatch } from '../../../main';
import { reduxSelector } from '../../../redux/selector';
import { styling } from '../../../style';
import { cx } from '@emotion/css';
import { ModalCharacterDetails } from '../../modalComponents/ModalCharacterDetails';
import { openModal } from '../../modalComponents/AutoUpdateModal';
import { useMediaQuery } from '@mantine/hooks';
import { concatSelector } from '../../../utils/concatSelectors';
import {
  IconArrowBigDown,
  IconArrowBigUp,
  IconShieldHeart,
  IconTrash,
  IconWand,
} from '@tabler/icons-react';
import {
  CharacterData,
  CharacterSection,
  CharacterSectionColumn,
} from '../../../redux/state.interface';

export function BasicContent() {
  const dispatch: GlobalDispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 50em)');
  const values: CharacterData = reduxSelector(
    'ACTION_CHARACTER_VALUES',
  ) as CharacterData;

  function handleOnBlur(actionName: string, target: string) {
    dispatch({
      type: actionName,
      payload: target,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSectionUpdate(payload: any) {
    dispatch({
      type: 'UPDATE_COLUMN_SECTION',
      payload,
    });
  }

  const { concatSelectorHasData, concatSelectorResult } = concatSelector(
    ['SET_CLASS', 'SET_SUBCLASS', 'SET_RACE'],
    ['$0', ' ($0)', ' - $0'],
  );

  return (
    <>
      <Flex justify="space-between">
        <Stack gap="0" w="70%">
          <Input
            defaultValue={values.name}
            variant="unstyled"
            size="c-md"
            radius="xs"
            placeholder="Character Name"
            onBlur={e => {
              handleOnBlur('SET_NAME', e.target.value);
            }}
          />
          <UnstyledButton
            variant="transparent"
            ta="start"
            onClick={() => {
              openModal(
                'Class and Race information',
                <ModalCharacterDetails />,
                isMobile!,
              );
            }}
          >
            <Text
              c={
                concatSelectorHasData ? '' : 'var(--mantine-color-placeholder)'
              }
              className={cx(styling.textSm)}
            >
              {concatSelectorHasData
                ? concatSelectorResult
                : 'Character Class (Subclass) - Complete Race'}
            </Text>
          </UnstyledButton>
        </Stack>
        <Stack w="30%">
          <Input
            defaultValue={values.campaign}
            variant="unstyled"
            size="c-sm"
            ta="end"
            radius="xs"
            placeholder="Campaign"
            onBlur={e => {
              handleOnBlur('SET_CAMPAIGN', e.target.value);
            }}
          />
          <Flex gap="xl">
            <NumberInput
              defaultValue={values.details?.spellDC}
              leftSection={<IconWand stroke={1.5} />}
              className={cx(styling.textSm, styling.caNumber)}
              placeholder="DC"
              hideControls
              onBlur={e => {
                handleOnBlur('SET_SPELLDC', e.target.value);
              }}
            />
            <NumberInput
              defaultValue={values.details?.armorAC}
              leftSection={<IconShieldHeart stroke={2} />}
              className={cx(styling.textSm, styling.caNumber)}
              placeholder="AC"
              hideControls
              onBlur={e => {
                handleOnBlur('SET_ARMORAC', e.target.value);
              }}
            />
          </Flex>
        </Stack>
      </Flex>
      <Divider size="md" my="md" />
      {values.sections?.map((section: CharacterSection) => {
        return (
          <div key={crypto.randomUUID()}>
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
                              ? cx(styling.gridBorder)
                              : ''
                          }
                        >
                          <Input
                            defaultValue={column.title}
                            variant="unstyled"
                            size="c-sm"
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
                          <div>{column.textContent}</div>
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
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_COLUMN_SECTION',
                        payload: section.sectionId,
                      })
                    }
                  >
                    <IconTrash
                      style={{ width: '70%', height: '70%' }}
                      stroke={1.5}
                    />
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
          </div>
        );
      })}
    </>
  );
}
