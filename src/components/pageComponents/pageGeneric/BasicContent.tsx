import {
  Flex,
  Input,
  Stack,
  UnstyledButton,
  Text,
  NumberInput,
  Divider,
} from '@mantine/core';
import { reduxStore } from '../../../main';
import { reduxActionType, reduxSelector } from '../../../redux/slicer';
import { styling } from '../../../style';
import { cx } from '@emotion/css';
import { ModalCharacterDetails } from '../../modalComponents/ModalCharacterDetails';
import { openModal } from '../../modalComponents/AutoUpdateModal';
import { useMediaQuery } from '@mantine/hooks';
import { concatSelector } from '../../../utils/concatSelectors';
import { IconShieldHeart, IconWand } from '@tabler/icons-react';
import {
  CharacterData,
  CharacterSection,
} from '../../../redux/state.interface';
import { reduxSlice } from '../../../redux/slicer';
import { GenericSection } from './GenericSection';

export function BasicContent() {
  const { selectCharacterValues, selectClass, selectSubclass, selectRace } =
    reduxSlice.selectors;
  const { setName, setCampaign, setSpellDC, setArmorAC } = reduxSlice.actions;
  const { dispatch } = reduxStore;

  const isMobile = useMediaQuery('(max-width: 50em)');
  const values: CharacterData = reduxSelector(selectCharacterValues);

  function handleOnBlur(actionName: reduxActionType, target: string) {
    dispatch(actionName(target));
  }

  const { concatSelectorHasData, concatSelectorResult } = concatSelector(
    [selectClass, selectSubclass, selectRace],
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
              handleOnBlur(setName, e.target.value);
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
              handleOnBlur(setCampaign, e.target.value);
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
                handleOnBlur(setSpellDC, e.target.value);
              }}
            />
            <NumberInput
              defaultValue={values.details?.armorAC}
              leftSection={<IconShieldHeart stroke={2} />}
              className={cx(styling.textSm, styling.caNumber)}
              placeholder="AC"
              hideControls
              onBlur={e => {
                handleOnBlur(setArmorAC, e.target.value);
              }}
            />
          </Flex>
        </Stack>
      </Flex>
      <Divider size="md" my="xs" />
      {values.sections?.map((section: CharacterSection) => {
        return <GenericSection key={crypto.randomUUID()} section={section} />;
      })}
    </>
  );
}
