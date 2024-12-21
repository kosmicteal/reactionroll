import { cx } from '@emotion/css';
import { Flex, Tooltip, ActionIcon } from '@mantine/core';
import {
  IconTrash,
  IconArrowBigUp,
  IconArrowBigDown,
} from '@tabler/icons-react';
import { t } from 'i18next';
import { styling } from '../../../style';
import { reduxStore } from '../../../main';
import { reduxSlice } from '../../../redux/slicer';

export function SectionCRUDGroup({
  isMobile = false,
  isFirstSection,
  isLastSection,
  sectionId,
}: {
  isMobile?: boolean;
  isFirstSection: boolean;
  isLastSection: boolean;
  sectionId: string;
}) {
  const { setRemoveSection, moveSectionDown, moveSectionUp } =
    reduxSlice.actions;
  const { dispatch } = reduxStore;

  const buttonSize = isMobile ? 'xl' : 'md';
  return (
    <Flex
      gap="xs"
      direction={isMobile ? 'column' : 'row'}
      className={cx(styling.noPrint)}
    >
      <Tooltip label={t('GenericSection.removeSection')}>
        <ActionIcon
          variant="outline"
          color="red"
          size={buttonSize}
          aria-label={t('GenericSection.removeSection')}
          onClick={() => dispatch(setRemoveSection(sectionId))}
        >
          <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label={t('GenericSection.moveSectionUp')}>
        <ActionIcon
          data-disabled={isFirstSection}
          disabled={isFirstSection}
          variant="outline"
          size={buttonSize}
          aria-label={t('GenericSection.moveSectionUp')}
          onClick={() => dispatch(moveSectionUp(sectionId))}
        >
          <IconArrowBigUp
            style={{ width: '70%', height: '70%' }}
            stroke={1.5}
          />
        </ActionIcon>
      </Tooltip>
      <Tooltip label={t('GenericSection.moveSectionDown')}>
        <ActionIcon
          data-disabled={isLastSection}
          disabled={isLastSection}
          variant="outline"
          size={buttonSize}
          aria-label={t('GenericSection.moveSectionDown')}
          onClick={() => dispatch(moveSectionDown(sectionId))}
        >
          <IconArrowBigDown
            style={{ width: '70%', height: '70%' }}
            stroke={1.5}
          />
        </ActionIcon>
      </Tooltip>
    </Flex>
  );
}
