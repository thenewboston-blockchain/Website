import React from 'react';
import clsx from 'clsx';

import {SFC} from 'types/generic';
import {isLight} from 'utils/colors';
import './Label.scss';

export interface LabelProps {
  color: string;
  name: string;
}

const Label: SFC<LabelProps> = ({className, color, name}) => {
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
