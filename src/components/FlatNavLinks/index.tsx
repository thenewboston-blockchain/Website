import React from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {NavOption} from 'types/option';

import './FlatNavLinks.scss';

export interface FlatNavLinksProps {
  className?: string;
  handleOptionClick(option: string): () => void;
  options: NavOption[];
  selectedOption: string;
}

function FlatNavLinks({className, handleOptionClick, options, selectedOption}: FlatNavLinksProps) {
  const renderOptions = () => {
    return options.map((option: NavOption) => (
      <button
        className={clsx('FlatNavLinks__option', {
          'FlatNavLinks__option--active': option.pathname === selectedOption,
          ...bemify(className, '__option'),
          ...bemify(className, '__option--active', option.pathname === selectedOption),
        })}
        key={option.pathname}
        onClick={handleOptionClick(option.pathname)}
      >
        {option.title}
      </button>
    ));
  };

  return (
    <div className={clsx('FlatNavLinks', className)} data-testid="FlatNavLinks">
      {renderOptions()}
    </div>
  );
}

export default FlatNavLinks;
