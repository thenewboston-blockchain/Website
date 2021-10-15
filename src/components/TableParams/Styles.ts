import styled, {css} from 'styled-components';
import {fontWeightRegular, fontWeightSemiBold} from 'styles/fonts/fontWeights';
// import colors from 'styles/colors';
// import type {Shape} from '.';

export const TableParams = styled.div`
  border: 1px solid #e6e6e6;
  margin: 0 0 20px;
  max-width: 100%;
  overflow-x: auto;
`;

export const Thead = styled.thead`
  text-align: left;
`;

export const Tr = styled.tr`
  &--even {
    background-color: #f6f6f6;
  }
`;

export const Th = styled.th`
  padding: 4px 8px;
`;
export const Td = styled.td`
    min-width: 260px;
    padding: 2px 8px;

    &--param {
      ${css}
      ${fontWeightSemiBold}
      padding-right: 12px;
      white-space: nowrap;
    }

    &--sample-value {
      color: #9b9b9b;
     ${css}
      font-size: 13px;
    }

    &--description {
      width: 100%;
    }
  }

  &__data-type {
    color: #9b9b9b;
    ${css}
    font-size: 12px;
    ${fontWeightRegular}
    padding-left: 6px;
  }
  `;

export const commonFontFamily = css`
  font-family: var(--font-family-mono);
`;
