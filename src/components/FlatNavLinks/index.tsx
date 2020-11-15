import React from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';
import './FlatNavLinks.scss';

interface ComponentProps<T> {
  className?: string;
  handleOptionClick(option: T): () => void;
  options: T[];
  selectedOption: T;
}

function FlatNavLinks<T = string>({
  className,
  handleOptionClick,
  options,
  selectedOption,
}: ComponentProps<T>): JSX.Element {
  const renderOptions = () => {
    return options.map((option) => (
      <button
        className={clsx('FlatNavLinks__option', {
          'FlatNavLinks__option--active': option === selectedOption,
          ...getCustomClassNames(className, '__option', true),
          ...getCustomClassNames(className, '__option--active', option === selectedOption),
        })}
        key={option as any}
        onClick={handleOptionClick(option)}
      >
        {option}
      </button>
    ));
  };

  return <div className={clsx('FlatNavLinks', className)}>{renderOptions()}</div>;
}

export default FlatNavLinks;
