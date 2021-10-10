import styled from 'styled-components';
import {Icon} from '@thenewboston/ui';
import colors from 'styles/colors';

export const Container = styled.div`
  max-width: 240px;
`;

export const TopContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const Label = styled.div`
  color: ${colors.palette.gray['500']};
`;

export const AccountNumber = styled.div`
  word-break: break-word;
`;

export const CopyContainer = styled.div`
  align-items: center;
  color: ${colors.secondary};
  cursor: pointer;
  display: flex;
`;

export const CopyIcon = styled(Icon)`
  margin-right: 6px;
`;
