import {
  Flex,
  Input,
  Stack,
  UnstyledButton,
  Text,
  NumberInput,
  Divider,
} from '@mantine/core';
import { useDispatch } from 'react-redux';
import { GlobalDispatch } from '../main';
import { reduxSelector } from '../redux/selector';
import { styling } from '../style';
import { cx } from '@emotion/css';
import { ModalCharacterDetails } from './modalComponents/ModalCharacterDetails';
import { openModal } from './modalComponents/AutoUpdateModal';
import { useMediaQuery } from '@mantine/hooks';
import { concatSelector } from '../utils/concatSelectors';
import { IconShieldHeart, IconWand } from '@tabler/icons-react';
import { CharacterData } from '../redux/state.interface';

export function BasicContent() {
  const dispatch: GlobalDispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 50em)');
  const values: CharacterData = reduxSelector(
    'GET_CHARACTER_VALUES',
  ) as CharacterData;

  function handleOnBlur(actionName: string, target: string) {
    dispatch({
      type: actionName,
      payload: target,
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
    </>
  );
}
