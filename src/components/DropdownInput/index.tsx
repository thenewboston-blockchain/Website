import React, {FC, useState} from 'react';

import Icon, {IconType} from 'components/Icon';

import './DropdownInput.scss';

interface ComponentProps<T> {
  callbackOnChange: (selectedOption: string) => void;
  defaultOption: T;
  options: T[];
}

const DropdownInput: FC<ComponentProps<string>> = ({callbackOnChange, defaultOption, options}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultOption);
  const handleChange = (e: React.FormEvent) => {
    const {value} = e.target as HTMLSelectElement;
    setSelectedOption(value);
    callbackOnChange(value);
  };
  return (
    <div className="DropdownInput">
      <select className="DropdownInput__select-box" value={selectedOption} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} className="DropdownInput__option" value={option}>
            {option}
          </option>
        ))}
      </select>
      <Icon className="DropdownInput__chevron-down" icon={IconType.chevronDown} />
    </div>
  );
};

export default DropdownInput;
