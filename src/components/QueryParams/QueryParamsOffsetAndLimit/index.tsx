import React from 'react';
import {SFC} from 'types/generic';

import {TableParams} from 'components';

interface ComponentProps {
  returnedEntityName: string;
}

const QueryParamsOffsetAndLimit: SFC<ComponentProps> = ({returnedEntityName}) => {
  return (
    <TableParams
      items={[
        {
          dataType: 'URL parameter',
          description: 'If you want to start at a specific point, an offset can be specified.',
          param: 'offset',
        },
        {
          dataType: 'URL parameter',
          description: `Maximum number of ${returnedEntityName} returned by the node after the offset. (max: 100).`,
          param: 'limit',
        },
      ]}
    />
  );
};

export default QueryParamsOffsetAndLimit;
