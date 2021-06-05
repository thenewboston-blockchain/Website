import React, {FC} from 'react';
import clsx from 'clsx';

import './DocSubHeader.scss';

interface ComponentProps {
  className?: string;
}

const DocSubHeader: FC<ComponentProps> = ({children, className}) => {
  return (
    <h3 className={clsx('DocSubHeader', className)} data-testid="DocSubHeader">
      {children}
    </h3>
  );
};

export default DocSubHeader;
