import { Input } from '@mantine/core';
import { t } from 'i18next';
import { anyObject } from '../../../redux/state.interface';

export function SectionTitle({
  defaultValue,
  sectionId,
  columnId,
  handleSectionUpdate,
}: {
  defaultValue: string;
  sectionId: string;
  columnId: string;
  handleSectionUpdate: (payload: anyObject) => void;
}) {
  return (
    <Input
      defaultValue={defaultValue}
      variant="unstyled"
      size="c-sm+"
      fw={700}
      radius="xs"
      placeholder={t('GenericSection.sectionTitlePlaceholder')}
      onBlur={e => {
        handleSectionUpdate({
          sectionId,
          columnId,
          value: {
            title: e.target.value,
          },
        });
      }}
    />
  );
}
