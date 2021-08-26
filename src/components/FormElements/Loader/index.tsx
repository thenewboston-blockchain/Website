import React, {memo} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {SFC} from 'types/generic';

import './Loader.scss';

const Loader: SFC = ({className}) => {
  return <Icon className={clsx('Loader', className)} icon={IconType.loading} size={15.35} totalSize="unset" />;
};

export default memo(Loader);
