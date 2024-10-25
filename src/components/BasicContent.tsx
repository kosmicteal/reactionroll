import { Input } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { GlobalDispatch } from '../main';
import { reduxSelector } from '../redux/selector';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { styling } from '../style';
import { cx } from '@emotion/css';

export function BasicContent() {
  const dispatch: GlobalDispatch = useDispatch();
  const componentRef = useRef(null);

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

  return (
    <div ref={componentRef}>
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
        radius="xs"
        placeholder="Class"
        onBlur={e => {
          handleOnBlur('SET_CLASS', e.target.value);
        }}
      />
    </div>
  );
}
