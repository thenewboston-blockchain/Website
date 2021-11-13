import styled from 'styled-components';

import {Container, BreadcrumbMenu} from 'components';

export const DashboardLayout = styled(Container)`
  display: grid;
  grid-template-columns: 300px auto;
  height: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: fit-content(0) auto;
  }
`;

export const DashboardBreadcrumbMenu = styled(BreadcrumbMenu)`
  display: none;

  @media (max-width: 768px) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
    display: block;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
`;

export const DashboardLeftMenu = styled.div`
  grid-column: 1 / span 1;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DashboardMainContent = styled.div`
  grid-column: 2 / span 1;
  overflow-y: auto;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }
`;
