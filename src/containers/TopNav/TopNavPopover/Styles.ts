import styled, {css} from 'styled-components';

import {Icon} from '@thenewboston/ui';

import colors from 'styles/colors';
import {b1} from 'styles/fonts';
import {fontWeightBold} from 'styles/fonts/fontWeights';
import {topNavButton} from 'styles/mixins';

export const PopoverButton = styled.button<{isOpened?: boolean}>`
  ${topNavButton};
  ${b1.regular};
  min-width: 130px; /* explicitly set min width to prevent content shifting when font is bolded due to hover */

  ${(props) =>
    props.isOpened &&
    css`
      color: ${colors.palette.neutral['900']};
      ${fontWeightBold};
    `}
`;

export const PopoverIcon = styled(Icon)<{isOpened?: boolean}>`
  margin-left: 3px;
  transition: transform 0.3s ease-in-out;

  ${(props) =>
    props.isOpened &&
    css`
      transform: rotateX(180deg) translateZ(-1px);
    `}
`;
