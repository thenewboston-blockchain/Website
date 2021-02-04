import React, {FC} from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

import './TopNavText.scss';

interface ComponentProps {
  buttonText: string;
  className?: string;
  toUrl: string;
}
// TODO: WTF is this component??
const TopNavText: FC<ComponentProps> = ({buttonText, className, toUrl}) => {
  return (
    <Link to={toUrl}>
      <button className={clsx('TopNavPopover', className)}>{buttonText}</button>
    </Link>
  );
};

export default TopNavText;
