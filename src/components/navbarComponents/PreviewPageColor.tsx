import { ColorInput, NavLink } from '@mantine/core';
import { IconChevronRight, IconWallpaper } from '@tabler/icons-react';
import { reduxStore } from '../../main';
import { reduxSlice } from '../../redux/slicer';
import { useTranslation } from 'react-i18next';

export function PreviewPageColor() {
  const { appSetPreviewPaperColour, appSetTextColor } = reduxSlice.actions;
  const { dispatch } = reduxStore;
  const { t, ready } = useTranslation();

  return (
    ready && (
      <NavLink
        label={t('PreviewPageColor.title')}
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
          label={t('PreviewPageColor.pageColor')}
          placeholder={t('PreviewPageColor.colorInputPlaceholder')}
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
          onChangeEnd={value => dispatch(appSetPreviewPaperColour(value))}
        />
        <ColorInput
          format="hex"
          ta="left"
          label={t('PreviewPageColor.textColor')}
          placeholder={t('PreviewPageColor.colorInputPlaceholder')}
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
          onChangeEnd={value => dispatch(appSetTextColor(value))}
        />
      </NavLink>
    )
  );
}
