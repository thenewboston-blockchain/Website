import React from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {SFC} from 'types/generic';
import {NavOption} from 'types/option';

import * as S from './Styles';

export interface FlatNavLinksProps {
  handleOptionClick(option: string): () => void;
  options: NavOption[];
  selectedOption: string;
}

const FlatNavLinks: SFC<FlatNavLinksProps> = ({className, handleOptionClick, options, selectedOption}) => {
  const renderOptions = () => {
    return options.map((option: NavOption) => (
      <S.OptionButton
        isActive={option.pathname === selectedOption}
        className={clsx({
          ...bemify(className, '__option'),
        })}
        key={option.pathname}
        onClick={handleOptionClick(option.pathname)}
      >
        {option.title}
      </S.OptionButton>
    ));
  };

  return (
    <S.Container className={className} data-testid="FlatNavLinks">
      {renderOptions()}
    </S.Container>
  );
};

export default FlatNavLinks;
