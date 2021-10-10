import React, {useState} from 'react';
import {IconType} from '@thenewboston/ui';
import {SFC} from 'types/generic';

import * as S from './Styles';

interface ComponentProps<T> {
  callbackOnChange: (selectedOption: string) => void;
  defaultOption: T;
  options: T[];
}

const DropdownInput: SFC<ComponentProps<string>> = ({callbackOnChange, className, defaultOption, options}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption);
  const handleChange = (e: React.FormEvent) => {
    const {value} = e.target as HTMLSelectElement;
    setSelectedOption(value);
    callbackOnChange(value);
  };
  return (
    <S.Container className={className} data-testid="DropdownInput">
      <S.Select data-testid="DropdownInput__select-box" value={selectedOption} onChange={handleChange}>
        {options.map((option) => (
          <S.Option key={option} value={option} data-testid="DropdownInput__option">
            {option}
          </S.Option>
        ))}
      </S.Select>
      <S.ChevronDown data-testid="ChevronDown" icon={IconType.chevronDown} />
    </S.Container>
  );
};

export default DropdownInput;
