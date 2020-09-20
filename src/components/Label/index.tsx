import React, {FC} from 'react';
import clsx from 'clsx';

import {isLight} from 'utils/colors';
import './Label.scss';

interface ComponentProps {
  className?: string;
  color: string;
  name: string;
}

const Label: FC<ComponentProps> = ({className, color, name}) => {
  const hexColor = `#${color}`;

  return (
    <span
      className={clsx('Label', className)}
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
