import { cx } from '@emotion/css';
import { Paper, Container } from '@mantine/core';
import { styling } from '../style';

import { PropsWithChildren } from 'react';

export function ResponsiveContainer({
  isMobile,
  zoomPage,
  children,
}: PropsWithChildren & { isMobile?: boolean; zoomPage?: string }) {
  return isMobile ? (
    <Container hiddenFrom="sm">{children}</Container>
  ) : (
    <Paper
      visibleFrom="sm"
      className={cx(
        styling.paperBackground,
        styling.paperSize,
        styling.centerContainer,
        zoomPage,
      )}
      withBorder
      shadow="md"
    >
      {children}
    </Paper>
  );
}
