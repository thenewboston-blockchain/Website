import {css} from 'styled-components';
import colors from 'styles/colors';
import {fontWeightMedium} from 'styles/fonts/fontWeights';

export const topNavButton = css`
  align-items: center;
  background: transparent;
  border: none;
  color: ${colors.palette.gray['500']};
  cursor: pointer;
  display: flex;
  ${fontWeightMedium};
  justify-content: center;
  transition: color 0.1s ease;

  &:hover,
  &:active {
    color: ${colors.primary};
  }
`;
