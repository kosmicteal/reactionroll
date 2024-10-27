import { Flex, Button } from '@mantine/core';
import { ContextModalProps, modals } from '@mantine/modals';
import { PropsWithChildren, ReactNode } from 'react';

export const AutoUpdateModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: PropsWithChildren }>) => (
  <>
    {innerProps.modalBody.children}
    <Flex>
      <Button fullWidth mt="md" onClick={() => context.closeModal(id)}>
        Close modal
      </Button>
    </Flex>
  </>
);

export const openModal = (
  title: string,
  isMobile: boolean,
  children: ReactNode,
): void =>
  modals.openContextModal({
    modal: 'autoupdate',
    title,
    centered: true,
    fullScreen: isMobile,
    overlayProps: {
      backgroundOpacity: 0.55,
      blur: 3,
    },
    innerProps: { modalBody: { children } },
  });
