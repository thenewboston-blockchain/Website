import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {GoToTop} from 'components';
import Footer from 'containers/Footer';
import {SFC} from 'types/generic';

import * as S from './Styles';

const Layout: SFC = ({children}) => {
  const {hash, pathname} = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [hash, pathname]);

  return (
    <S.Layout data-testid="Layout">
      <S.LayoutTopNavWrapper>
        <S.LayoutTopNav />
      </S.LayoutTopNavWrapper>
      <S.LayoutContent data-testid="Layout__content">{children}</S.LayoutContent>
      <S.LayoutFooterWrapper>
        <GoToTop />
        <S.LayoutFooter>
          <Footer />
        </S.LayoutFooter>
      </S.LayoutFooterWrapper>
    </S.Layout>
  );
};

export default Layout;
