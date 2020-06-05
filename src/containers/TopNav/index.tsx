import React from 'react';

import Logo from 'assets/images/logo.png';
import './TopNav.scss';

const TopNav = () => {
  return (
    <div className="TopNav">
      <div className="thenewboston">
        <img alt="thenewboston logo" className="logo" src={Logo} />
        <span>thenewboston</span>
      </div>
      <a className="active" href="#">
        Home
      </a>
      <a href="#">Second</a>
      <a href="#">Third Item</a>
    </div>
  );
};

export default TopNav;
