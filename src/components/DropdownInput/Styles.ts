import styled from 'styled-components';
import colors from 'styles/colors';
import {b1} from 'styles/fonts';
import {Icon} from '@thenewboston/ui';

export const Container = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

export const Select = styled.select`
  ${b1.regular}
  appearance: none;
  border: 1px solid ${colors.palette.gray['075']};
  border-radius: 3px;
  box-sizing: border-box;
  color: ${colors.primary};
  height: 30px;
  min-width: 100px;
  padding: 6px 32px 6px 6px;
  text-align: left;
  width: fit-content;
`;

export const Option = styled.option`
  ${b1.regular}
  padding: 6px 6px;
`;

export const ChevronDown = styled(Icon)`
  height: 20px;
  pointer-events: none;
  position: absolute;
  right: 0;
  width: 20px;
`;
