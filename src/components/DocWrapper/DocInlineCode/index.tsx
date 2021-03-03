import React, {FC} from 'react';
import clsx from 'clsx';

import './DocInlineCode.scss';

interface ComponentProps {
  className?: string;
}

const DocInlineCode: FC<ComponentProps> = ({children, className}) => {
  return (
    <code className={clsx('DocInlineCode', className)} data-testid="DocInlineCode">
      {children}
    </code>
  );
};

export default DocInlineCode;
