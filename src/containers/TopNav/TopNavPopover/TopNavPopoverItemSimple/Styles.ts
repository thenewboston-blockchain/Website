import styled, {css} from 'styled-components';

import {Link} from 'react-router-dom';

import {A} from 'components';
import colors from 'styles/colors';
import {fontWeightMedium} from 'styles/fonts/fontWeights';

const linkStyles = css`
  align-items: center;
  background: ${colors.white};
  border-radius: 6px;
  color: ${colors.palette.gray['900']};
  cursor: pointer;
  display: block;
  ${fontWeightMedium};
  line-height: 1.2;
  outline: none;
  padding: 12px 18px;
  transition: background 0.1s ease-in;
  white-space: nowrap;

  &:focus {
    background: ${colors.palette.gray['050']};
  }

  &:hover {
    background: ${colors.palette.blue['100']};
  }
`;

export const InternalLink = styled(Link)`
  ${linkStyles};
`;

export const ExternalLink = styled(A)`
  ${linkStyles};
`;
