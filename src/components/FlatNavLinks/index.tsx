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
const thenewbostonpythonclient: any = 'thenewboston-python-client';
const thenewbostonpython: any = 'thenewboston-python';

const tnbpython: any = 'TNB-python';
const tnbpythonclient: any = 'TNB-python-client';

let setOption: any;
function filterTheNewBoston(repo: any) {
  if (repo === thenewbostonpython || repo === thenewbostonpythonclient) {
    if (repo === thenewbostonpython) {
      setOption = tnbpython;
    } else {
      setOption = tnbpythonclient;
    }
  } else {
    setOption = repo;
  }
  return setOption;
}

function FlatNavLinks<T = string>({
  className,
  handleOptionClick,
  options,
  selectedOption,
}: ComponentProps<T>): JSX.Element {
  const renderOptions = () => {
    return options.map((option) => (
      <div
        className={clsx('FlatNavLinks__option', {
          'FlatNavLinks__option--active': option === selectedOption,
          ...getCustomClassNames(className, '__option', true),
          ...getCustomClassNames(className, '__option--active', option === selectedOption),
        })}
        key={option as any}
        onClick={handleOptionClick(option)}
        role="button"
        tabIndex={0}
      >
        {filterTheNewBoston(option)}
      </div>
    ));
  };

  return <div className={clsx('FlatNavLinks', className)}>{renderOptions()}</div>;
}

export default FlatNavLinks;
