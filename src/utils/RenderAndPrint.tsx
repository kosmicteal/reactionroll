import { useEffect, useRef } from 'react';
import { BasicContent } from '../components/pageComponents/pageGeneric/BasicContent';
import computedStyleToInlineStyle from 'computed-style-to-inline-style';
import { useReactToPrint } from 'react-to-print';
import { useDispatch } from 'react-redux';
import { GlobalDispatch } from '../main';

export function RenderAndPrint() {
  const contentRef = useRef<HTMLDivElement>(null);
  const dispatch: GlobalDispatch = useDispatch();

  const handlePrint = useReactToPrint({
    contentRef,
    onAfterPrint() {
      dispatch({ type: 'PRINT_DATA' });
    },
  });

  useEffect(() => {
    computedStyleToInlineStyle(contentRef.current as unknown as HTMLElement, {
      recursive: true,
      properties: [
        'border',
        'border-top',
        'border-bottom',
        'border-left',
        'border-right',
        'background',
        'background-color',
      ],
    });
    handlePrint();
  }, []);

  return (
    <div ref={contentRef}>
      <BasicContent />
    </div>
  );
}
