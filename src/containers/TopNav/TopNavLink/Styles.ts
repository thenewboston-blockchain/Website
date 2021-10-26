import styled from 'styled-components';

import {Link} from 'react-router-dom';

import {topNavButton} from 'styles/mixins';

export const TopNavLink = styled(Link)`
  ${topNavButton};
`;
