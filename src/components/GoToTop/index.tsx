import React, {FC, useState} from 'react';
import GoToTop from 'assets/images/go-to-top.png';
import './GoToTop.scss';

const GoToTopComp: FC<ComponentProps> = () => {
  const scrollTop = () => {
    window.scrollTo({behavior: 'smooth', top: 0});
  };

  return <img className="GoToTop__go-to-top" onClick={scrollTop} alt="Go to top button" src={GoToTop} />;
};
export default GoToTopComp;
