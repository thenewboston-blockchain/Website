import React, {FC} from 'react';
import clsx from 'clsx';

interface ComponentProps {
  className?: string;
  href: string;
  target?: string;
}

const A: FC<ComponentProps> = ({children, className, href, target = '_blank'}) => {
  return (
    <a className={clsx('A', className)} href={href} rel="noopener noreferrer" target={target}>
      {children}
    </a>
  );
};

export default A;
