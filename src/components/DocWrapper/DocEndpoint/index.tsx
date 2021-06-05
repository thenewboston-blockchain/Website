import React, {FC} from 'react';
import clsx from 'clsx';

import './DocEndpoint.scss';

export interface DocEndpointProps {
  className?: string;
  endpoint: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
}

const DocEndpoint: FC<DocEndpointProps> = ({className, endpoint, method}) => {
  return (
    <h2 className={clsx('DocEndpoint', className)} data-testid="DocEndpoint">
      {method} {endpoint}
    </h2>
  );
};

export default DocEndpoint;
