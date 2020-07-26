import React, {FC} from 'react';
import clsx from 'clsx';

import './DocEndpoint.scss';

interface ComponentProps {
  className?: string;
  endpoint: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
}

const DocEndpoint: FC<ComponentProps> = ({className, endpoint, method}) => {
  return (
    <h2 className={clsx('DocEndpoint', className)}>
      {method} {endpoint}
    </h2>
  );
};

export default DocEndpoint;
