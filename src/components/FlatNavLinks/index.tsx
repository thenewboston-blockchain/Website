import React from 'react';
import clsx from 'clsx';

import './FlatNavLinks.scss';

interface ComponentProps<T> {
  handleOptionClick(option: T): () => void;
  options: T[];
  selectedOption: T;
}

function FlatNavLinks<T = string>({handleOptionClick, options, selectedOption}: ComponentProps<T>) {
  const renderOptions = () => {
    return options.map((option) => (
      <div
        className={clsx('FlatNavLinks__option', {
          'FlatNavLinks__option--active': option === selectedOption,
        })}
        key={option as any}
        onClick={handleOptionClick(option)}
        role="button"
        tabIndex={0}
      >
        {option}
      </div>
    ));
  };

  return <div className="FlatNavLinks">{renderOptions()}</div>;
}

export default FlatNavLinks;
