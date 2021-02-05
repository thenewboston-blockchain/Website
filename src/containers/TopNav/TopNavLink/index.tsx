import React, {FC} from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

import './TopNavLink.scss';

interface ComponentProps {
  className?: string;
  text: string;
  to: string;
}

const TopNavLink: FC<ComponentProps> = ({className, text, to}) => {
  return (
    <Link className={clsx('TopNavLink', className)} to={to}>
      {text}
    </Link>
  );
};

export default TopNavLink;
