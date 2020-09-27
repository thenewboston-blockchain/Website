import React, {FC} from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom';
import clsx from 'clsx';

import {OPENING_CATEGORIES} from 'constants/openings';
import {GenericVoidFunction} from 'types/generic';
import {OpeningCategory, OpeningCategoryUrlParams} from 'types/openings';

import './OpeningsCategoryFilter.scss';

const OPENING_CATEGORY_FILTERS = [OpeningCategory.all, ...OPENING_CATEGORIES];

interface ComponentProps {
  className?: string;
}

const OpeningsCategoryFilter: FC<ComponentProps> = ({className}) => {
  const {category} = useParams<OpeningCategoryUrlParams>();
  const history = useHistory();
  const location = useLocation();

  const handleOptionClick = (i: OpeningCategory): GenericVoidFunction => (): void => {
    const route = location.pathname.split('/')[1];
    history.push(`/${route}/${i}`);
  };

  const renderOptions = () => {
    return OPENING_CATEGORY_FILTERS.map((option) => (
      <div
        className={clsx('OpeningsCategoryFilter__option', {
          'OpeningsCategoryFilter__option--active': option === category,
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

  return <div className={clsx('OpeningsCategoryFilter', className)}>{renderOptions()}</div>;
};

export default OpeningsCategoryFilter;
