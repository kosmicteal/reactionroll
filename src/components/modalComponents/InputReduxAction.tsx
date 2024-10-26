import { TextInput } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { GlobalDispatch } from '../../main';
import { reduxSelector } from '../../redux/selector';

export function InputReduxAction({
  placeholder,
  action,
}: {
  placeholder: string;
  action: string;
}) {
  const dispatch: GlobalDispatch = useDispatch();

  function handleOnBlur(actionName: string, target: string) {
    dispatch({
      type: actionName,
      payload: target,
    });
  }

  return (
    <TextInput
      placeholder={placeholder}
      defaultValue={reduxSelector(action).toString()}
      onBlur={e => {
        handleOnBlur(action, e.target.value);
      }}
    />
  );
}
