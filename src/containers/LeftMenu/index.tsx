import React from 'react';

import './LeftMenu.scss';

const LeftMenu = () => {
  return (
    <div className="LeftMenu">
      <a className="active" href="#">
        Home
      </a>
      <a href="#">Second</a>
      <a href="#">Third Item</a>
    </div>
  );
};

export default LeftMenu;
