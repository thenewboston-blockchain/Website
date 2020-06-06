import React from 'react';

import Logo from 'assets/images/logo.png';
import './TopNav.scss';

const TopNav = () => {
  return (
    <header className="TopNav">
      <div className="thenewboston">
        <img alt="thenewboston logo" className="logo" src={Logo} />
        <span>thenewboston</span>
      </div>
      <nav className="TopNav__links">
        <a className="active" href="#">
          Home
        </a>
        <a href="#">Second</a>
        <a href="#">Third Item</a>
      </nav>
    </header>
  );
};

export default TopNav;
