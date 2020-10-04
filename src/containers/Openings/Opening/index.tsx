import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {BreadcrumbMenu, EmptyPage} from 'components';
import {OpeningUrlParams} from 'types/openings';

import OpeningsCategoryFilter from '../OpeningsCategoryFilter';
import './Opening.scss';

const Opening = () => {
  const {category, id} = useParams<OpeningUrlParams>();

  useEffect(() => {
    console.log(category, id);
  }, [category, id]);

  return (
    <div className="Opening">
      <BreadcrumbMenu
        className="Opening__BreadcrumbMenu"
        menuItems={<OpeningsCategoryFilter className="Opening__OpeningsCategoryFilter" />}
        pageName={category}
        sectionName="Open Positions"
      />
      <div className="Opening__left-menu">
        <OpeningsCategoryFilter className="Opening__OpeningsCategoryFilter" />
      </div>
      <div className="Opening__opening">Hello</div>
    </div>
  );
};

export default Opening;
