import React, {FC, useState} from 'react';

import './SideMenu.scss';

type Props = {
  breadcrumbHeight: number;
};

const SideMenu: FC<Props> = ({breadcrumbHeight}) => {
  return <div className="SideMenu">Sidemenu</div>;
};

export default SideMenu;
