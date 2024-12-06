import { LoadingOverlay } from '@mantine/core';

export function FullScreenLoader() {
  return (
    <>
      <LoadingOverlay
        visible={true}
        zIndex={10000}
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ size: 100 }}
      />
    </>
  );
}
