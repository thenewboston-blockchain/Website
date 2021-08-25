import React, {memo} from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';

import './RequiredAsterisk.scss';

const RequiredAsterisk: SFC = ({className}) => {
  return (
    <span data-testid="RequiredAsterisk" className={clsx('RequiredAsterisk', className)}>
      *
    </span>
  );
};

export default memo(RequiredAsterisk);
