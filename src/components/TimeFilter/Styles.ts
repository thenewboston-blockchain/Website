import styled from 'styled-components';

import colors from 'styles/colors';
import {h3} from 'styles/fonts';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.h2`
  white-space: nowrap;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

type OptionProps = {
  isActive: boolean;
};

export const Option = styled.button<OptionProps>`
  ${h3.semibold}
  background: transparent;
  border: 0;
  color: ${(props) => (props.isActive ? colors.primary : colors.palette.gray['400'])};
  cursor: pointer;
  line-height: 1.5;
  margin-left: 12px;
  outline: none;
  padding: 0;

  &:hover {
    color: ${colors.primary};
  }
`;
