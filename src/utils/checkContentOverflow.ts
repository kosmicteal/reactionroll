import detectElementOverflow from 'detect-element-overflow';

export function checkContentOverflow(): boolean {
  if (document.getElementById('canvas') && document.getElementById('content')) {
    const { collidedBottom } = detectElementOverflow(
      document.getElementById('canvas')!,
      document.getElementById('content')!,
    );
    return !collidedBottom || false;
  }
  return false;
}
