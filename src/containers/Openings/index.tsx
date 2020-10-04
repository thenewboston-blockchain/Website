import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {BreadcrumbMenu, EmptyPage} from 'components';
import {OpeningCategory, OpeningsUrlParams} from 'types/openings';
import {getOpenings} from 'utils/data';

import OpeningsCategoryFilter from './OpeningsCategoryFilter';
import OpeningsOpening from './OpeningsOpening';
import './Openings.scss';
import OpeningDetails from './OpeningDetails';

const Openings = () => {
  const {category, slug: openingSlug} = useParams<OpeningsUrlParams>();
  const [categoryFilter, setOpeningsCategoryFilter] = useState<OpeningCategory>(OpeningCategory.all);

  useEffect(() => {
    setOpeningsCategoryFilter(category);
  }, [category]);

  const getFilteredOpenings = () => {
    let filteredOpenings = getOpenings();

    filteredOpenings =
      categoryFilter === OpeningCategory.all
        ? filteredOpenings
        : filteredOpenings.filter(({categories}) => categories.includes(categoryFilter));

    return filteredOpenings;
  };

  const renderOpenings = () => {
    const filteredOpenings = getFilteredOpenings();
    if (!filteredOpenings.length) return <EmptyPage />;
    return filteredOpenings.map(({categories, description, position, slug}) => (
      <OpeningsOpening
        categories={categories}
        description={description}
        key={position}
        position={position}
        slug={slug}
      />
    ));
  };

  const renderOpeningDetails = () => {
    const filteredOpenings = getFilteredOpenings();
    const opening = filteredOpenings.find(({slug}) => slug === openingSlug);
    if (!opening) return <EmptyPage />;
    return (
      <OpeningDetails
        applicationMethods={opening.applicationMethods}
        categories={opening.categories}
        description={opening.description}
        key={opening.position}
        payNotes={opening.payNotes}
        position={opening.position}
        reportsTo={opening.reportsTo}
        responsibilities={opening.responsibilities}
        slug={opening.slug}
        technologyRequirements={opening.technologyRequirements}
      />
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
      {openingSlug ? (
        <div className="Openings__opening-details">{renderOpeningDetails()}</div>
      ) : (
        <div className="Openings__opening-list">{renderOpenings()}</div>
      )}
    </div>
  );
};

export default Openings;
