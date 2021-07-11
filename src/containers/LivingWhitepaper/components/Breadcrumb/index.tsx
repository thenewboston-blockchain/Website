import React from 'react';

import clsx from 'clsx';

import './Breadcrumb.scss';

type Props = {
  className?: string;
};

const Breadcrumb = ({className}: Props) => {
  return <div className={clsx('Breadcrumb', className)}>Developer {'>'} Living Whitepaper</div>;
};

export default Breadcrumb;
