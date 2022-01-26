import styled from 'styled-components';
import colors from 'styles/colors';
import {h1} from 'styles/fonts';

export const Container = styled.div`
  margin-bottom: 48px;
`;

export const Heading = styled.h2`
  ${h1.bold}
  color: ${colors.palette.neutral['800']};
  margin-bottom: 16px;
`;
