import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {Container, GoToTop} from 'components';
import Footer from 'containers/Footer';
import TopNav from 'containers/TopNav';
import {SFC} from 'types/generic';
import './Layout.scss';

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
    <div className="Layout" data-testid="Layout">
      <div className="Layout__top-nav-wrapper">
        <TopNav className="Layout__TopNav" />
      </div>
      <div className="Layout__content" data-testid="Layout__content">
        {children}
      </div>
      <div className="Layout__footer-wrapper">
        <GoToTop />
        <Container className="Layout__Footer">
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default Layout;
