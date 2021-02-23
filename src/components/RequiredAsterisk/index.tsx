import React, {FC, memo} from 'react';
import clsx from 'clsx';

import './RequiredAsterisk.scss';

interface ComponentProps {
  className?: string;
}

const RequiredAsterisk: FC<ComponentProps> = ({className}) => {
  return (
    <span data-testid="RequiredAsterisk" className={clsx('RequiredAsterisk', className)}>
      *
    </span>
  );
};

export default memo(RequiredAsterisk);
