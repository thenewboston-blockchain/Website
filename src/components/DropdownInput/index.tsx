import React, {useState} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {SFC} from 'types/generic';

import './DropdownInput.scss';

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
    <div className={clsx('DropdownInput', className)} data-testid="DropdownInput">
      <select
        className="DropdownInput__select-box"
        data-testid="DropdownInput__select-box"
        value={selectedOption}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option} className="DropdownInput__option" value={option} data-testid="DropdownInput__option">
            {option}
          </option>
        ))}
      </select>
      <Icon className="DropdownInput__chevron-down" icon={IconType.chevronDown} />
    </div>
  );
};

export default DropdownInput;
