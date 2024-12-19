import { TextInput } from '@mantine/core';
import {
  reduxActionType,
  reduxSelector,
  reduxSelectorType,
} from '../../redux/slicer';
import { reduxStore } from '../../main';

export function InputReduxAction({
  placeholder,
  selector,
  action,
}: {
  placeholder: string;
  selector: reduxSelectorType;
  action: reduxActionType;
}) {
  const { dispatch } = reduxStore;

  function handleOnBlur(actionName: reduxActionType, target: string) {
    dispatch(actionName(target));
  }

  return (
    <TextInput
      placeholder={placeholder}
      defaultValue={reduxSelector(selector)}
      onBlur={e => {
        handleOnBlur(action, e.target.value);
      }}
    />
  );
}
