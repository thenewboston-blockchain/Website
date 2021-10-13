import styled from 'styled-components';
import colors from 'styles/colors';

interface ProgressBarContainerProps {
  height?: number;
}
export const ProgressBarContainer = styled.div<ProgressBarContainerProps>`
  background-color: ${colors.palette.gray['100']};
  position: relative;
  width: 100%;
  border-radius: 100px;
  height: ${(props) => props.height || 8}px;
`;

interface ProgressBarProps {
  height?: number;
  percentage: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  left: 0;
  top: 0;
  position: absolute;
  background-color: ${colors.palette.green['300']};
  height: ${(props) => props.height || 8}px;
  width: ${(props) => props.percentage}%;
`;
