import { Button, Flex, Stack } from '@mantine/core';
import { IconColumns1, IconColumns2 } from '@tabler/icons-react';

export function ModalAddSection() {
  return (
    <>
      <Flex w={'100%'} justify="space-between" align="center" gap="xl">
        <Button w={'100%'} h={'6em'}>
          <Stack align="center" justify="center" gap="md">
            <IconColumns1 size={25} />
            Add single section
          </Stack>
        </Button>
        <Button w={'100%'} h={'6em'}>
          <Stack align="center" justify="center" gap="md">
            <IconColumns2 size={25} />
            Add column section
          </Stack>
        </Button>
      </Flex>
    </>
  );
}
