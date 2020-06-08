import React from 'react';
import {NavLink} from 'react-router-dom';

import LeftMenu from 'containers/LeftMenu';

const APILeftMenu = () => {
  return (
    <LeftMenu>
      <NavLink to="/api/introduction">Introduction</NavLink>
    </LeftMenu>
  );
};

export default APILeftMenu;
