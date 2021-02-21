import React, {FC} from 'react';
import clsx from 'clsx';

import {isLight} from 'utils/colors';
import './Label.scss';

export interface LabelProps {
  className?: string;
  color: string;
  name: string;
}

const Label: FC<LabelProps> = ({className, color, name}) => {
  const hexColor = `#${color}`;

  return (
    <span
      className={clsx('Label', className)}
      data-testid="Label"
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
