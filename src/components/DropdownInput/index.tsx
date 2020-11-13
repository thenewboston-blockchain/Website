import React, {FC, useState} from 'react';
import './DropdownInput.scss';

interface ComponentProps {
  callbackOnChange: (selectedOptionId: number) => void;
  options: any[];
}

const DropdownInput: FC<ComponentProps> = ({callbackOnChange, options}) => {
  const [selectedOption, setSelectedOption] = useState<string>('none');
  const handleChange = (e: any) => {
    setSelectedOption(e.target.value);
    callbackOnChange(e.target.value);
  };
  return (
    <div className="DropdownInput">
      <select className="DropdownInput__select-box" value={selectedOption} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} className="DropdownInput__option" value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInput;
