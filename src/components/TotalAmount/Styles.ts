import styled from 'styled-components';

import colors from 'styles/colors';
import {h2} from 'styles/fonts';

export const Container = styled.div`
  white-space: nowrap;
`;

export const Amount = styled.div`
  ${h2.semibold}
  color: ${colors.tertiary};
  margin-top: 8px;
`;

export const Title = styled.div`
  color: ${colors.palette.gray['500']};
`;
