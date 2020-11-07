import React from 'react';
import GoToTop from 'assets/images/up.png';
import './GoToTop.scss';

const GoToTopComp = () => {
  const scrollTop = () => {
    window.scrollTo({behavior: 'smooth', top: 0});
  };

  return <img className="GoToTop__go-to-top" onClick={scrollTop} alt="Go to top button" src={GoToTop} />;
};
export default GoToTopComp;
