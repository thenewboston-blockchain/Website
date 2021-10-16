import styled from 'styled-components';

import {Link} from 'react-router-dom';

import colors from 'styles/colors';
import {fontWeightMedium} from 'styles/fonts/fontWeights';

export const PopoverLink = styled(Link)`
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
