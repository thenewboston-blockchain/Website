import React from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';
import './FlatNavLinks.scss';

interface ComponentProps<T, U> {
  className?: string;
  handleOptionClick(option: U): () => void;
  options: T[];
  selectedOption: U;
}

function FlatNavLinks<T = string, U = string>({
  className,
  handleOptionClick,
  options,
  selectedOption,
}: ComponentProps<T, U>): JSX.Element {
  const renderOptions = () => {
    return options.map((option: any) => (
      <div
        className={clsx('FlatNavLinks__option', {
          'FlatNavLinks__option--active': option.pathname === selectedOption,
          ...getCustomClassNames(className, '__option', true),
          ...getCustomClassNames(className, '__option--active', option.pathname === selectedOption),
        })}
        key={option.pathname as any}
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
