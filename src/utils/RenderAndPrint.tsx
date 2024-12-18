import { useEffect, useRef } from 'react';
import { BasicContent } from '../components/pageComponents/pageGeneric/BasicContent';
import computedStyleToInlineStyle from 'computed-style-to-inline-style';
import { useReactToPrint } from 'react-to-print';
import { reduxStore } from '../main';
import { reduxSlice } from '../redux/slicer';

export function RenderAndPrint() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { appPrintData } = reduxSlice.actions;
  const { dispatch } = reduxStore;

  const handlePrint = useReactToPrint({
    preserveAfterPrint: true,
    pageStyle: '@media print { html { zoom: 95% } }',
    documentTitle: 'reactionroll_print',
    contentRef,
    onAfterPrint() {
      dispatch(appPrintData());
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
