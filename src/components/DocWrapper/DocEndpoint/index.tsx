import React from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';

import './DocEndpoint.scss';

export interface DocEndpointProps {
  endpoint: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
}

const DocEndpoint: SFC<DocEndpointProps> = ({className, endpoint, method}) => {
  return (
    <h2 className={clsx('DocEndpoint', className)} data-testid="DocEndpoint">
      {method} {endpoint}
    </h2>
  );
};

export default DocEndpoint;
