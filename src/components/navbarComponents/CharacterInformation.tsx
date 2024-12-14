import { Code, Flex, NavLink, Paper } from '@mantine/core';
import { IconChevronRight, IconUser } from '@tabler/icons-react';
import { LoadData } from '../LoadData';
import { SaveData } from '../SaveData';
import { reduxSelector, reduxSlice } from '../../redux/slicer';

export function CharacterInformation() {
  const { selectCharacterValues } = reduxSlice.selectors;

  return (
    <NavLink
      label="Character information"
      leftSection={<IconUser size="1rem" stroke={2} />}
      rightSection={
        <IconChevronRight
          size="0.8rem"
          stroke={1.5}
          className="mantine-rotate-rtl"
        />
      }
      active
    >
      <Flex mr="lg" mt="md" mb="md" gap={'xs'} justify="space-between">
        <LoadData />
        <SaveData />
      </Flex>
      <Paper shadow="xs" mr="lg" mt="md" mb="md">
        <Code block ta={'left'} h={'20em'} mah={'20em'}>
          {JSON.stringify(reduxSelector(selectCharacterValues), null, 2)}
        </Code>
      </Paper>
    </NavLink>
  );
}
