import React from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';
import './FlatNavLinks.scss';

interface ComponentProps<T> {
  className?: string;
  handleOptionClick(option: any): () => void;
  options: any;
  selectedOption: any;
}

function FlatNavLinks<T = string>({
  className,
  handleOptionClick,
  options,
  selectedOption,
}: ComponentProps<T>): JSX.Element {
  const renderOptions = () => {
    return options.map((option: any) => (
      <div
        className={clsx('FlatNavLinks__option', {
          'FlatNavLinks__option--active': option.url === selectedOption,
          ...getCustomClassNames(className, '__option', true),
          ...getCustomClassNames(className, '__option--active', option.url === selectedOption),
        })}
        key={option.url as any}
        onClick={handleOptionClick(option.url)}
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
