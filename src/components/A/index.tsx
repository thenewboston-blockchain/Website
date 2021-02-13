import React, {FC} from 'react';
import clsx from 'clsx';

interface ComponentProps {
  className?: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: string;
}

const A: FC<ComponentProps> = ({children, className, href, onClick, target = '_blank'}) => {
  return (
    <a className={clsx('A', className)} href={href} onClick={onClick} rel="noopener noreferrer" target={target}>
      {children}
    </a>
  );
};

export default A;
