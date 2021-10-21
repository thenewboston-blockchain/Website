import styled from 'styled-components';
import {isLight} from 'utils/colors';

interface StyledLabelProps {
  hexColor: string;
}

export const Label = styled.span<StyledLabelProps>`
  background-color: ${({hexColor}) => hexColor};
  border-radius: 2em;
  color: ${({hexColor}) => (isLight(hexColor) ? '#000' : '#fff')};
  display: inline-block;
  font-weight: var(--font-weight-semibold);
  padding: 2px 8px;

  &:focus {
    outline: none;
  }
`;
