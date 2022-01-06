import styled, {keyframes, css} from 'styled-components';
import colors from 'styles/colors';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Popover = styled.div<{open?: boolean}>`
  background: ${colors.white};
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(85, 108, 214, 0.18);
  opacity: 0;
  outline: none;
  padding: 12px;
  position: absolute;
  visibility: hidden;
  ${(props) =>
    props.open &&
    css`
      animation: ${fadeIn} 0.3s ease-out;
      opacity: 1;
      visibility: visible;
    `}
`;
