import React, {FC} from 'react';

import {isLight} from 'utils/colors';
import './Label.scss';

interface ComponentProps {
  color: string;
  name: string;
}

const Label: FC<ComponentProps> = ({color, name}) => {
  const hexColor = `#${color}`;

  return (
    <span
      className="Label"
      style={{
        backgroundColor: hexColor,
        color: isLight(hexColor) ? '#000' : '#fff',
      }}
    >
      {name}
    </span>
  );
};

export default Label;
