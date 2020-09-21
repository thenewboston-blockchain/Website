import React, {FC} from 'react';
import clsx from 'clsx';

import {isLight} from 'utils/colors';
import './Label.scss';

interface ComponentProps {
  className?: string;
  color: string;
  name: string;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const Label: FC<ComponentProps> = ({className, color, name, onClick}) => {
  const hexColor = `#${color}`;

  return (
    <span
      className={clsx('Label', className)}
      onClick={onClick}
      role="button"
      style={{
        backgroundColor: hexColor,
        color: isLight(hexColor) ? '#000' : '#fff',
      }}
      tabIndex={0}
    >
      {name}
    </span>
  );
};

export default Label;
