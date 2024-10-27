import { Slider } from '@mantine/core';
import { reduxSelector } from '../redux/selector';
import { useDispatch } from 'react-redux';
import { GlobalDispatch } from '../main';

export function Zoom() {
  const dispatch: GlobalDispatch = useDispatch();
  const currentValue = reduxSelector('SET_ZOOM') as number;

  function handleOnChange(value: number) {
    console.log(value, currentValue);
    if (value !== currentValue) {
      dispatch({ type: 'SET_ZOOM', payload: value });
    }
  }

  return (
    <Slider
      w="300px"
      color="blue"
      size="lg"
      radius="md"
      value={currentValue}
      onChange={handleOnChange}
      min={0.5}
      max={2}
      step={0.1}
      marks={[
        { value: 0.5, label: '50%' },
        { value: 1, label: '100%' },
        { value: 2, label: '200%' },
      ]}
      styles={{ markLabel: { display: 'none' } }}
    />
  );
}
