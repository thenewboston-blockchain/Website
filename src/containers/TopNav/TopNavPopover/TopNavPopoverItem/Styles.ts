import styled, {css} from 'styled-components';

import {Link} from 'react-router-dom';
import {Icon} from '@thenewboston/ui';

import {A} from 'components';
import colors from 'styles/colors';
import {fontWeightMedium} from 'styles/fonts/fontWeights';

const linkStyles = css`
  align-items: center;
  background: ${colors.white};
  border: none;
  border-radius: 6px;
  color: ${colors.primary};
  cursor: pointer;
  display: flex;
  height: 81px;
  outline: none;
  padding: 18px;
  text-align: unset;
  transition: background 0.1s ease-in;
  width: 427px;
`;

export const ExternalLink = styled(A)`
  ${linkStyles}
`;

export const InternalLink = styled(Link)`
  ${linkStyles}
`;

export const PopoverIcon = styled(Icon)`
  align-items: center;
  background: ${colors.palette.gray['900']};
  border-radius: 50%;
  color: ${colors.white};
  display: flex;
  height: 42px;
  justify-content: center;
  margin-right: 18px;
  transition: background-color 0.1s ease-in;
  width: 42px;
`;

export const PopoverTitle = styled.span`
  color: ${colors.palette.gray['800']};
  display: block;
  ${fontWeightMedium}
  margin-bottom: 6px;
`;

export const PopoverDescription = styled.span`
  color: ${colors.palette.gray['400']};
  display: block;
`;
