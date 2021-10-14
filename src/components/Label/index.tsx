import clsx from 'clsx';
import React from 'react';
import {SFC} from 'types/generic';
import * as S from './Styles';

export interface LabelProps {
  color: string;
  name: string;
}

const Label: SFC<LabelProps> = ({className, color, name}) => {
  const hexColor = `#${color}`;

  return (
    <S.Label className={clsx(className)} data-testid="Label" hexColor={hexColor}>
      {name}
    </S.Label>
  );
};

export default Label;
