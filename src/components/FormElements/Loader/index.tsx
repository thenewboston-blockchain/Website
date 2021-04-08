import React, {FC, memo} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import './Loader.scss';

interface ComponentProps {
  className?: string;
}

const Loader: FC<ComponentProps> = ({className}) => {
  return <Icon className={clsx('Loader', className)} icon={IconType.loading} size={15.35} totalSize="unset" />;
};

export default memo(Loader);
