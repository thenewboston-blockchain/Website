import React from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';
import {NavOption} from 'types/option';

import './FlatNavLinks.scss';

interface ComponentProps {
  className?: string;
  handleOptionClick(option: string): () => void;
  options: NavOption[];
  selectedOption: string;
}

function FlatNavLinks({className, handleOptionClick, options, selectedOption}: ComponentProps) {
  const renderOptions = () => {
    return options.map((option: NavOption) => (
      <div
        className={clsx('FlatNavLinks__option', {
          'FlatNavLinks__option--active': option.pathname === selectedOption,
          ...getCustomClassNames(className, '__option', true),
          ...getCustomClassNames(className, '__option--active', option.pathname === selectedOption),
        })}
        key={option.pathname}
        onClick={handleOptionClick(option.pathname)}
        role="button"
        tabIndex={0}
      >
        {option.title}
      </div>
    ));
  };

  return <div className={clsx('FlatNavLinks', className)}>{renderOptions()}</div>;
}

export default FlatNavLinks;
