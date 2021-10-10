import styled, {css} from 'styled-components';
import colors from 'styles/colors';
import {fontWeightMedium} from 'styles/fonts/fontWeights';
import {h4} from 'styles/fonts';

export const Container = styled.div`
  margin-top: 30px;
  padding: 1px;

  @media (max-width: 992px) {
    margin-top: 16px;
  }
`;

export const OptionButton = styled.button<{isActive?: boolean}>`
  align-items: center;
  background: transparent;
  border: 0;
  border-radius: 6px;
  color: ${colors.palette.gray['500']};
  cursor: pointer;
  display: flex;
  ${fontWeightMedium};
  height: 36px;
  line-height: 1.5;
  margin-bottom: 4px;
  padding: 4px 0 4px 36px;
  transition: background-color 0.1s;
  width: 100%;

  &:hover {
    ${h4.regular};
    color: ${colors.palette.blue['900']};
  }

  ${(props) =>
    props.isActive &&
    css`
      ${h4.bold};
      color: ${colors.palette.blue['900']};
    `}
`;
