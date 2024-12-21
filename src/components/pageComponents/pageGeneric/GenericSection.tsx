import { cx } from '@emotion/css';
import { Divider } from '@mantine/core';
import { CharacterSection } from '../../../redux/state.interface';
import { styling } from '../../../style';
import { Container } from '@column-resizer/react';
import { useTranslation } from 'react-i18next';
import { SectionElements } from './SectionElements';

export function GenericSection({
  section,
  index,
  totalSections,
}: {
  section: CharacterSection;
  index: number;
  totalSections: number;
}) {
  const isFirstSection = index === 0;
  const isLastSection = index === totalSections - 1;

  const { ready } = useTranslation();

  // This is done to allow React keep track when specifically
  // re-render the container while keeping its integrity
  //
  // Maybe there's a less hack-y way to do this?
  const containerKey: string = section.columns.reduce(
    (partialString, a) => partialString + a,
    '',
  );

  return (
    ready && (
      <>
        <Container
          key={containerKey}
          onActivate={() => console.log('a')}
          className={cx(styling.fullWidth)}
        >
          <SectionElements
            section={section}
            isFirstSection={isFirstSection}
            isLastSection={isLastSection}
          />
        </Container>
        <Divider size="md" my="xs" />
      </>
    )
  );
}
