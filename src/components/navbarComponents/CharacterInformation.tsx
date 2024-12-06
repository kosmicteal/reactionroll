import { Code, Flex, NavLink, Paper } from '@mantine/core';
import { IconChevronRight, IconUser } from '@tabler/icons-react';
import { LoadData } from '../LoadData';
import { SaveData } from '../SaveData';
import { reduxSelector } from '../../redux/selector';
import { CharacterData } from '../../redux/state.interface';

export function CharacterInformation() {
  const characterValues = reduxSelector(
    'ACTION_CHARACTER_VALUES',
  ) as CharacterData;

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
          {JSON.stringify(characterValues, null, 2)}
        </Code>
      </Paper>
    </NavLink>
  );
}
