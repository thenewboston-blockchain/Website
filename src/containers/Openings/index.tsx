import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {BreadcrumbMenu, EmptyPage} from 'components';
import {OpeningCategory, OpeningCategoryUrlParams} from 'types/openings';
import {getOpenings} from 'utils/data';

import OpeningsCategoryFilter from './OpeningsCategoryFilter';
import OpeningsOpening from './OpeningsOpening';
import './Openings.scss';

const Openings = () => {
  const {category} = useParams<OpeningCategoryUrlParams>();
  const [categoryFilter, setOpeningsCategoryFilter] = useState<OpeningCategory>(OpeningCategory.all);

  useEffect(() => {
    setOpeningsCategoryFilter(category);
  }, [category]);

  const getFilteredOpenings = () => {
    let filteredOpenings = getOpenings();

    filteredOpenings =
      categoryFilter === OpeningCategory.all
        ? filteredOpenings
        : filteredOpenings.filter(({categoryName}) => categoryName === categoryFilter);

    return filteredOpenings;
  };

  const renderOpenings = () => {
    const filteredOpenings = getFilteredOpenings();
    if (!filteredOpenings.length) return <EmptyPage />;
    return filteredOpenings.map(
      ({
        applicationMethods,
        categoryName,
        description,
        payNotes,
        position,
        reportsTo,
        responsibilities,
        technologyRequirements,
      }) => (
        <OpeningsOpening
          applicationMethods={applicationMethods}
          categoryName={categoryName}
          description={description}
          payNotes={payNotes}
          position={position}
          reportsTo={reportsTo}
          responsibilities={responsibilities}
          technologyRequirements={technologyRequirements}
        />
      ),
    );
  };

  return (
    <div className="Openings">
      <BreadcrumbMenu
        className="Openings__BreadcrumbMenu"
        menuItems={<OpeningsCategoryFilter className="Openings__OpeningsCategoryFilter" />}
        pageName={category}
        sectionName="Open Positions"
      />
      <div className="Openings__left-menu">
        <OpeningsCategoryFilter className="Openings__OpeningsCategoryFilter" />
      </div>
      <div className="Openings__opening-list">{renderOpenings()}</div>
    </div>
  );
};

export default Openings;
