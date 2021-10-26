import styled from 'styled-components';
import colors from 'styles/colors';

export const ProgressBar = styled.div`
  background-color: ${colors.palette.gray['100']};
  border-radius: 100px;
  height: 8px;
  position: relative;
  width: 100%;
`;

export const ProgressFilled = styled(ProgressBar)`
  background-color: ${colors.palette.green['300']};
  left: 0;
  position: absolute;
  top: 0;
`;
