import styled from 'styled-components';
import colors from 'styles/colors';

interface AvatarProps {
  bordered?: boolean;
  clickable?: boolean;
  shape?: 'circle' | 'square';
}

export const Avatar = styled.img<AvatarProps>`
  border-radius: ${(props) => (props.shape === 'square' ? '8px' : '50%')};
  border: ${(props) => (props.bordered ? `2px solid ${colors.white}` : 'none')};
  cursor: ${(props) => (props.clickable ? 'pointer' : 'none')};
`;

export const Placeholder = styled.div`
  background: ${colors.palette.gray['100']};
  border-radius: 50%;
`;
