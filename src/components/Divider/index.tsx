import React from 'react';

import clsx from 'clsx';
import './Divider.scss';

const Divider = ({className}: {className?: string}) => {
  return <div className={clsx('Divider', className)} />;
};

export default Divider;
