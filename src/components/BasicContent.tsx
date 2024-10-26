import { Flex, Input, Stack, UnstyledButton } from '@mantine/core';
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

export function BasicContent() {
  const dispatch: GlobalDispatch = useDispatch();
  const componentRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 50em)');

  const reactToPrintContent = () => {
    return componentRef.current;
  };
  const handlePrint = useReactToPrint({
    pageStyle: cx(styling.paperSize),
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

  const detailsButton = `${reduxSelector('SET_CLASS')} (${reduxSelector('SET_SUBCLASS')}) - ${reduxSelector('SET_RACE')}`;

  return (
    <div ref={componentRef}>
      <Flex>
        <Stack gap="0">
          <Input
            variant="unstyled"
            size="title"
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
            className={cx(styling.textMd)}
          >
            {detailsButton}
          </UnstyledButton>
        </Stack>
        <Stack gap="0">
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
        </Stack>
      </Flex>
    </div>
  );
}
