import { css } from '@emotion/css';

const breakpoints = {
  xs: '36em',
  sm: '48em',
  md: '62em',
  lg: '75em',
  xl: '88em',
};

const textSize = {
  xl: '3.5em',
  lg: '2.4em',
  md: '1.5em',
  smMd: '1.2em',
  sm: '1em',
};

export const styling = {
  noPrint: css`
    @media print {
      display: none !important;
    }
  `,
  rteButtonCustomStyleDisabled: css`
    html[data-mantine-color-scheme='light'] &[data-disabled] {
      background-color: var(--mantine-color-gray-1) !important;
      color: var(--mantine-color-gray-5) !important;
      cursor: not-allowed !important;
    }
    html[data-mantine-color-scheme='dark'] &[data-disabled] {
      background-color: var(--mantine-color-dark-5) !important;
      color: var(--mantine-color-dark-3) !important;
      cursor: not-allowed !important;
    }
  `,
  smallLogo: css`
    height: 2.3em;
    @media only screen and (max-width: 767px) {
      height: 2em;
    }
  `,
  bigLogo: css`
    width: 100%;
    padding: 2em;
  `,
  printOptions: css`
    @page {
      size: auto;
      margin: 10mm;
    }
  `,

  iconSize: css`
    width: 22px;
    height: 22px;
  `,

  darkSwapIcon: css`
    @mixin dark {
      display: none;
    }

    @mixin light {
      display: block;
    }
  `,

  lightSwapIcon: css`
    @mixin light {
      display: none;
    }

    @mixin dark {
      display: block;
    }
  `,

  centerContainer: css`
    margin: 0 auto;
  `,

  paperSize: css`
    width: 52em;
    padding: 2em 3em;
    max-height: calc(52em * sqrt(2));
    aspect-ratio: 1 / sqrt(2);
    @media (max-width: ${breakpoints.xl}) {
      width: 100%;
    }
  `,

  itemFitContent: css`
    * > div {
      width: fit-content;
    }
  `,
  textXl: css`
    font-size: ${textSize.xl} !important;
  `,
  textMd: css`
    font-size: ${textSize.md} !important;
    & > input {
      font-size: ${textSize.md} !important;
    }
  `,
  textSm: css`
    height: fit-content;
    font-size: ${textSize.sm} !important;
    & > input {
      font-size: ${textSize.sm} !important;
    }
  `,
  caNumber: css`
    font-size: ${textSize.smMd} !important;
    text-align: center;
    & > * > input {
      background-color: transparent;
      text-align: center !important;
      font-size: ${textSize.smMd} !important;
    }
  `,
  topStack: css`
    position: relative;
    & > div {
      position: absolute;
    }
  `,
  hideOnPrint: css`
    @media print {
      * {
        display: none !important;
      }
      * > * {
        display: none !important;
      }
    }
  `,
  characterSection: css`
    padding-top: 0 !important;
  `,
  gridBorder: css`
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-right: calc(0.1875rem * var(--mantine-scale))
      var(--mantine-color-default-border) solid;
    margin: 0 0.5rem;
  `,
  floatContextMenu: css`
    overflow: hidden;
    background: red;
  `,
  richTextEditor: css`
    text-align: start;
    border: none !important;
    & > div > div.mantine-RichTextEditor-content {
      background-color: inherit !important;
    }
    * .tiptap {
      padding: 0 !important;
    }
    * .tiptap ul {
      padding: 0 !important;
      word-break: break-word !important;
    }
    * .tiptap li {
      display: flex;
      flex-wrap: wrap;
      align-items: top;
    }
    * .tiptap li::before {
      content: '• ';
      min-width: 6%;
      font-size: 1.5em;
      height: 1em;
      text-align: start;
      line-height: 1.1em;
    }
    * .tiptap li > p {
      max-width: 90%;
    }
    * .tiptap li > ul {
      width: 100%;
      padding-left: 2em !important;
      margin: 0;
    }
    * .tiptap th {
      transition: border 0.4s ease-in;
      padding: 5px;
      background-color: var(--mantine-color-default-border);
      border: 1px var(--mantine-color-dimmed) solid;
    }
    * .tiptap td {
      transition: border 0.4s ease-in;
      padding: 5px;
      border: 1px var(--mantine-color-dimmed) solid;
    }
    * .tiptap th.column-resize-dragging {
      border-right: 4px var(--mantine-color-anchor) solid;
    }
    * .tiptap td.column-resize-dragging {
      border-right: 4px var(--mantine-color-anchor) solid;
    }
    * .tiptap th:has(.column-resize-handle) {
      border-right: 4px var(--mantine-color-anchor) solid;
    }
    * .tiptap td:has(.column-resize-handle) {
      border-right: 4px var(--mantine-color-anchor) solid;
    }
    * .tiptap th:has(.column-resize-handle) p {
      margin: 0 !important;
    }
    * .tiptap td:has(.column-resize-handle) p {
      margin: 0 !important;
    }
    * .tiptap th.selectedCell {
      background-color: var(--mantine-primary-color-light-hover);
    }
    * .tiptap td.selectedCell {
      background-color: var(--mantine-primary-color-light-hover);
    }
    * .tiptap.resize-cursor {
      cursor: ew-resize;
      cursor: col-resize;
    }
  `,
  navBar: css`
    background-color: var(--mantine-color-body-blur) !important;
    backdrop-filter: blur(5px) !important;
  `,
};
