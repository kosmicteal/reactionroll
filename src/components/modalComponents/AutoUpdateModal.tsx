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

export const FullFocusModal = ({
  innerProps,
}: ContextModalProps<{ modalBody: PropsWithChildren }>) => (
  <>{innerProps.modalBody.children}</>
);

export const openModal = (
  title: string,
  children: ReactNode,
  isMobile: boolean,
  isFocus?: boolean,
): void =>
  modals.openContextModal({
    modal: isFocus ? 'fullfocus' : 'autoupdate',
    title,
    centered: true,
    fullScreen: isMobile,
    overlayProps: {
      backgroundOpacity: 0.55,
      blur: 3,
    },
    innerProps: { modalBody: { children } },
  });
