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
    aspect-ratio: 1 / sqrt(2);
    @media (max-width: ${breakpoints.xl}) {
      width: 100%;
    }
  `,

  paperPrint: css`
    @media print {
      @page {
        size: auto;
        margin: 10mm;
      }
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
    border-right: 3px var(--mantine-color-default-border) solid;
  `,
  floatContextMenu: css`
    overflow: hidden;
    background: red;
  `,
  richTextEditor: css`
    text-align: start;
    border: none !important;
    * .tiptap {
      padding: 0 !important;
    }
    * .tiptap ul {
      vertical-align: top;
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
    * .tiptap.resize-cursor {
      cursor: ew-resize;
      cursor: col-resize;
    }
  `,
};
