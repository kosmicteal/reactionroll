import { Flex, Input, Stack, UnstyledButton, Text } from '@mantine/core';
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

export function BasicContent() {
  const dispatch: GlobalDispatch = useDispatch();
  const componentRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 50em)');

  const reactToPrintContent = () => {
    return componentRef.current;
  };
  const handlePrint = useReactToPrint({});

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
      <Stack gap="0">
        <Flex justify="space-between">
          <Input
            variant="unstyled"
            size="title"
            radius="xs"
            placeholder="Character Name"
            onBlur={e => {
              handleOnBlur('SET_NAME', e.target.value);
            }}
          />
          <Input
            variant="unstyled"
            size="md-nb"
            ta="end"
            radius="xs"
            placeholder="Campaign"
            onBlur={e => {
              handleOnBlur('SET_NAME', e.target.value);
            }}
          />
        </Flex>
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
            c={concatSelectorHasData ? '' : 'var(--mantine-color-placeholder)'}
            className={cx(styling.textMd)}
          >
            {concatSelectorHasData
              ? concatSelectorResult
              : 'Character Class (Subclass) - Complete Race'}
          </Text>
        </UnstyledButton>
      </Stack>
    </div>
  );
}
