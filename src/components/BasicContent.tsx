import {
  Flex,
  Input,
  Stack,
  UnstyledButton,
  Text,
  NumberInput,
  Divider,
  Blockquote,
} from '@mantine/core';
import { useDispatch } from 'react-redux';
import { GlobalDispatch } from '../main';
import { reduxSelector } from '../redux/selector';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { styling } from '../style';
import { cx } from '@emotion/css';
import { ModalCharacterDetails } from './modalComponents/ModalCharacterDetails';
import { openModal } from './AutoUpdateModal';
import { useMediaQuery } from '@mantine/hooks';
import { concatSelector } from '../utils/concatSelectors';
import { IconShieldHeart, IconWand } from '@tabler/icons-react';

export function BasicContent() {
  const dispatch: GlobalDispatch = useDispatch();
  const componentRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 50em)');

  const reactToPrintContent = () => {
    return componentRef.current;
  };
  const handlePrint = useReactToPrint({
    preserveAfterPrint: true,
  });

  if (reduxSelector('PRINT_DATA')) {
    handlePrint(reactToPrintContent);
    dispatch({ type: 'PRINT_DATA' });
  }

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
    <div ref={componentRef}>
      <Flex justify="space-between">
        <Stack gap="0" w="70%">
          <Input
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
                isMobile!,
                <ModalCharacterDetails />,
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
              leftSection={<IconWand stroke={1.5} />}
              className={cx(styling.textSm, styling.caNumber)}
              placeholder="DC"
              hideControls
              onBlur={e => {
                handleOnBlur('SET_SPELLDC', e.target.value);
              }}
            />
            <NumberInput
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
      <Divider style={{ borderTop: '1px solid black' }} my="md" />
      <Blockquote
        color="blue"
        cite="– Forrest Gump"
        icon={<IconShieldHeart stroke={2} />}
        mt="xl"
      >
        Life is like an npm install – you never know what you are going to get.
      </Blockquote>
    </div>
  );
}
