import { cx } from '@emotion/css';
import { Paper, Container } from '@mantine/core';
import { styling } from '../style';

import { PropsWithChildren } from 'react';

export function ResponsiveContainer({
  isMobile,
  zoomPage,
  containerTheme,
  children,
}: PropsWithChildren & {
  isMobile?: boolean;
  zoomPage?: string;
  containerTheme?: string;
}) {
  return isMobile ? (
    <Container hiddenFrom="sm">{children}</Container>
  ) : (
    <Paper
      visibleFrom="sm"
      className={cx(
        styling.paperSize,
        styling.centerContainer,
        containerTheme,
        zoomPage,
      )}
      data-mantine-color-scheme="light"
      withBorder
      shadow="md"
    >
      {children}
    </Paper>
  );
}
