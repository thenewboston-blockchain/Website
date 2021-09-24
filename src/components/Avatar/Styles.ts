import styled from 'styled-components';
import colors from 'styles/colors';

import type {Shape} from '.';

interface AvatarProps {
  bordered?: boolean;
  clickable?: boolean;
  shape?: Shape;
}

export const Avatar = styled.img<AvatarProps>`
  border-radius: ${(props) => (props.shape === 'square' ? '8px' : '50%')};
  border: ${(props) => (props.bordered ? `2px solid ${colors.white}` : 'none')};
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
`;

interface PlaceholderProps {
  shape?: Shape;
}

export const Placeholder = styled.div<PlaceholderProps>`
  background: ${colors.palette.gray['100']};
  border-radius: ${(props) => (props.shape === 'square' ? '8px' : '50%')};
`;
