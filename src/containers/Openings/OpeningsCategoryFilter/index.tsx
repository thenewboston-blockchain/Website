import React, {FC} from 'react';
import clsx from 'clsx';

import {OpeningCategory} from 'types/openings';

import './OpeningsCategoryFilter.scss';

const OPENING_CATEGORY_FILTERS = [
  OpeningCategory.all,
  OpeningCategory.accounting,
  OpeningCategory.community,
  OpeningCategory.design,
  OpeningCategory.engineering,
  OpeningCategory.marketing,
];

interface ComponentProps {
  categoryFilter: OpeningCategory;
  setCategoryFilter(categoryFilter: OpeningCategory): void;
}

const OpeningsCategoryFilter: FC<ComponentProps> = ({categoryFilter, setCategoryFilter}) => {
  const handleOptionClick = (category: OpeningCategory) => (): void => {
    setCategoryFilter(category);
  };

  const renderOptions = () => {
    return OPENING_CATEGORY_FILTERS.map((option) => (
      <div
        className={clsx('OpeningsCategoryFilter__option', {
          'OpeningsCategoryFilter__option--active': option === categoryFilter,
        })}
        key={option}
        onClick={handleOptionClick(option)}
        role="button"
        tabIndex={0}
      >
        {option}
      </div>
    ));
  };

  return <div className="OpeningsCategoryFilter">{renderOptions()}</div>;
};

export default OpeningsCategoryFilter;
