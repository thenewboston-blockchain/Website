import React, {FC} from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

import './TopNavButton.scss';

interface ComponentProps {
  buttonText: string;
  className?: string;
  toUrl: string;
}

const TopNavButton: FC<ComponentProps> = ({buttonText, className, toUrl}) => {
  return (
    <Link to={toUrl}>
      <button className={clsx('TopNavButton', className)}>{buttonText}</button>
    </Link>
  );
};

export default TopNavButton;
