import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(85, 108, 214, 0.18);
  margin: 48px auto 64px;
  max-width: 480px;
  padding: 32px;
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  text-align: center;
`;

export const Error = styled.div`
  color: ${colors.alert};
  margin-bottom: 18px;
`;
