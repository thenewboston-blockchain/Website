import React, {FC} from 'react';
import clsx from 'clsx';

import './DocCallout.scss';

interface ComponentProps {
  className?: string;
}

const DocCallout: FC<ComponentProps> = ({children, className}) => {
  return (
    <div className={clsx('DocCallout', className)}>
      <strong>Note:</strong> {children}
    </div>
  );
};

export default DocCallout;
