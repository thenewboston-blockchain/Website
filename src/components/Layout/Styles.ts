import styled from 'styled-components';
import zIndex from 'styles/zIndex';
import colors from 'styles/colors';

import {Container} from 'components';
import TopNav from 'containers/TopNav';

const topNavHeight = '60px';
const footerHeight = '348px';

export const Layout = styled.div`
  position: relative;
`;

export const LayoutContent = styled.div`
  min-height: calc(100vh - ${topNavHeight + footerHeight});
`;

export const LayoutFooter = styled(Container)`
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const LayoutTopNavWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: ${zIndex.layout};
`;

export const LayoutTopNav = styled(TopNav)``;

export const LayoutFooterWrapper = styled.div`
  background: ${colors.palette.neutral['075']};
  display: flex;
  justify-content: center;
  padding: 80px 48px;

  @media (max-width: 768px) {
    justify-content: start;
  }
`;
