import styled from 'styled-components';

import {Link} from 'react-router-dom';
import {A} from 'components';
import colors from 'styles/colors';
import {h4} from 'styles/fonts';

export const Container = styled.ul`
  list-style-type: none;
  margin-right: 80px;
  padding-inline-start: 0;

  &:last-child {
    margin-right: unset;
  }

  @media (max-width: 992px) {
    margin-top: 60px;
  }
`;

export const Header = styled.li`
  ${h4.bold};
  color: ${colors.palette.neutral['800']};
  margin-bottom: 20px;
  text-transform: capitalize;
`;

export const Item = styled.li`
  margin-bottom: 20px;
`;

export const ExternalLink = styled(A)`
  ${h4.regular};
  color: ${colors.palette.neutral['800']};
  text-transform: capitalize;
`;

export const InternalLink = styled(Link)`
  ${h4.regular};
  color: ${colors.palette.neutral['800']};
  text-transform: capitalize;
`;
