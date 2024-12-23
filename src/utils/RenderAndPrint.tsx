import { useEffect, useRef } from 'react';
import { BasicContent } from '../components/pageComponents/pageGeneric/BasicContent';
import computedStyleToInlineStyle from 'computed-style-to-inline-style';
import { useReactToPrint } from 'react-to-print';
import { reduxStore } from '../main';
import { reduxSelector, reduxSlice } from '../redux/slicer';

export function RenderAndPrint() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { selectName } = reduxSlice.selectors;
  const { appPrintData } = reduxSlice.actions;
  const { dispatch } = reduxStore;

  const characterName = reduxSelector(selectName);

  const handlePrint = useReactToPrint({
    pageStyle:
      '@media print {  html {    zoom: 95%;  }  body {    background-image: none !important;  }}',
    documentTitle: `reActionRoll_${characterName}_print`,
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
        'box-sizing',
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
