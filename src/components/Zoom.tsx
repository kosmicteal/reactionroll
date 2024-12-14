import { Slider } from '@mantine/core';
import { reduxSelectorOld } from '../redux/selector';
import { useDispatch } from 'react-redux';
import { GlobalDispatch, reduxStore } from '../main';
import { reduxSelector, reduxSlice } from '../redux/slicer';

export function Zoom() {
  const { selectZoom } = reduxSlice.selectors;
  const { appSetZoom } = reduxSlice.actions;
  const { dispatch } = reduxStore;

  const currentValue = reduxSelector(selectZoom) as number;

  function handleOnChange(value: number) {
    if (value !== currentValue) {
      dispatch(appSetZoom(value));
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
