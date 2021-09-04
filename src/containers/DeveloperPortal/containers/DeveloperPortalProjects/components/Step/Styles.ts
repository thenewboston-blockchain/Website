import styled from 'styled-components';

import colors from 'styles/colors';

type Props = {
  size: number;
};

export const Container = styled.div<Props>`
  align-items: center;
  border-radius: 10px;
  background: ${colors.palette.cyan['900']};
  color: ${colors.white};
  font-size: ${(props) => props.size / 2}px;
  display: flex;
  height: ${(props) => props.size}px;
  justify-content: center;
  width: ${(props) => props.size}px;
`;
