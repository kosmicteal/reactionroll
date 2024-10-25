import { css } from '@emotion/css';

const breakpoints = {
  xs: '36em',
  sm: '48em',
  md: '62em',
  lg: '75em',
  xl: '88em',
}

export const styling = {


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

  paperBackground: css`
    background-color: #f0f0f0 !important;
    color: #141414 !important;
    * > input {
      color: #141414 !important;
    }
  `,

  paperSize: css`
    width: 50vw;
    padding: 2vw 3vw;
    aspect-ratio: 1 / sqrt(2);
    @media (max-width: ${breakpoints.xl}) {
      width: 100%;
      background-color: red !important;
    }
  `,
};
