import styled from 'styled-components';
import colors from 'styles/colors';

import {Loader as SharedLoader} from 'components';
import AppDetailsSlider from './AppDetailsSlider';
import AppDetailsOverview from './AppDetailsOverview';

export const Slider = styled(AppDetailsSlider)`
  margin-bottom: 64px;
`;

export const Overview = styled(AppDetailsOverview)`
  margin-bottom: 88px;
`;

export const Loader = styled(SharedLoader)`
  margin: 0 auto;
`;

export const ErrorContainer = styled.div`
  align-items: center;
  color: ${colors.danger};
  display: flex;
  height: 64px;
  justify-content: center;
`;
