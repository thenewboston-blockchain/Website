import React, {FC} from 'react';
import clsx from 'clsx';

import './HashLink.scss';

export interface HashLinkProps {
  className?: string;
  id: string;
}

const HashLink: FC<HashLinkProps> = ({className, id}) => {
  return (
    <a className={clsx('HashLink', className)} data-testid="HashLink" href={`#${id}`}>
      #
    </a>
  );
};

export default HashLink;
