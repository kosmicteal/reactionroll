import { cx } from '@emotion/css';
import { Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { styling } from '../../style';
import { ModalAddSection } from '../modalComponents/ModalAddSection';
import { openModal } from '../modalComponents/ModalWrappers';
import { reduxSlice, reduxSelector } from '../../redux/slicer';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';

export function AddGenericSectionButton() {
  const { selectIsOverflowing } = reduxSlice.selectors;

  const isOverflowing = reduxSelector(selectIsOverflowing) as boolean;
  const isMobile = useMediaQuery('(max-width: 50em)');

  const { t, ready } = useTranslation();

  return (
    ready && (
      <Button
        mb="xs"
        disabled={isOverflowing}
        className={cx(styling.hideOnPrint)}
        leftSection={<IconPlus size={14} />}
        variant="default"
        onClick={() => {
          openModal(
            t('ModalAddSection.title'),
            <ModalAddSection />,
            isMobile!,
            true,
          );
        }}
      >
        {t('AddGenericSectionButton.button')}
      </Button>
    )
  );
}
