import React from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';

import './HashLink.scss';

export interface HashLinkProps {
  id: string;
}

const HashLink: SFC<HashLinkProps> = ({className, id}) => {
  return (
    <a className={clsx('HashLink', className)} data-testid="HashLink" href={`#${id}`}>
      #
    </a>
  );
};

export default HashLink;
