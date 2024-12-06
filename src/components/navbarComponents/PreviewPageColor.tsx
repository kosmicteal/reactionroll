import { ColorInput, NavLink } from '@mantine/core';
import { IconChevronRight, IconWallpaper } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { GlobalDispatch } from '../../main';

export function PreviewPageColor() {
  const dispatch: GlobalDispatch = useDispatch();

  return (
    <NavLink
      label="Preview page color"
      leftSection={<IconWallpaper size="1rem" stroke={2} />}
      rightSection={
        <IconChevronRight
          size="0.8rem"
          stroke={1.5}
          className="mantine-rotate-rtl"
        />
      }
      active
    >
      <ColorInput
        format="hex"
        ta="left"
        label="Preview page background color"
        placeholder="None, use #FFFFFF to reset"
        pr="lg"
        pt="xs"
        pb="md"
        swatches={[
          '#ffffff00',
          '#f0f0f0',
          '#242424',
          '#d2e6cf',
          '#d8e8f7',
          '#f7d8f4',
          '#fffdf0',
        ]}
        onChangeEnd={value =>
          dispatch({ type: 'SET_PREVIEW_PAPER_COLOUR', payload: value })
        }
      />
      <ColorInput
        format="hex"
        ta="left"
        label="Text color"
        placeholder="None, use #FFFFFF to reset"
        pr="lg"
        pb="lg"
        swatches={[
          '#ffffff00',
          '#f0f0f0',
          '#242424',
          '#d2e6cf',
          '#d8e8f7',
          '#f7d8f4',
          '#fffdf0',
        ]}
        onChangeEnd={value =>
          dispatch({ type: 'SET_TEXT_COLOUR', payload: value })
        }
      />
    </NavLink>
  );
}
