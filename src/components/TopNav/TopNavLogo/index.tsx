import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import Logo from 'assets/svgs/thenewboston-primary.svg';
import './TopNavLogo.scss';

const TopNavLogo: FC = () => (
  <NavLink className="TopNavLogo" to="/">
    <img alt="thenewboston Logo" className="TopNavLogo__img" src={Logo} />
  </NavLink>
);

export default TopNavLogo;
