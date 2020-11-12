import React, {FC, useState} from 'react';
import './DropdownInput.scss';

interface ComponentProps {
  options: any[];
  callbackOnChange: (selectedOptionId: number) => void;
}

export const DropdownInput: FC<ComponentProps> = ({options, callbackOnChange}) => {
  const [selectedOption, setSelectedOption] = useState<string>('none');
  const handleChange = (e: any) => {
    setSelectedOption(e.target.value);
    callbackOnChange(e.target.value);
  };
  return (
    <div className="DropdownInput">
      <select className="DropdownInput__select-box" value={selectedOption} onChange={handleChange}>
        {options.map((option) => (
          <option className="DropdownInput__option" value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
