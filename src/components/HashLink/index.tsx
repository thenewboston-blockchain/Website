import React, {FC} from 'react';
import clsx from 'clsx';

import './HashLink.scss';

interface ComponentProps {
  className?: string;
  id: string;
}

const HashLink: FC<ComponentProps> = ({className, id}) => {
  return (
    <a className={clsx('HashLink', className)} href={`#${id}`}>
      #
    </a>
  );
};

export default HashLink;
