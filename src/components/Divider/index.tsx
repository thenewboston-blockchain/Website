import React from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';
import './Divider.scss';

const Divider: SFC = ({className}) => {
  return <div className={clsx('Divider', className)} />;
};

export default Divider;
