import React, {FC, ReactNode, useEffect} from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

import './TopNav.scss';

interface ComponentProps {
  buttonText: string;
  className?: string;
  toUrl: string;
}

const TopNavText: FC<ComponentProps> = ({buttonText, className, toUrl}) => {
  return (
    <Link to={toUrl}>
      <button className={clsx('TopNavPopoverButton', className)}>{buttonText}</button>
    </Link>
  );
};

export default TopNavText;
