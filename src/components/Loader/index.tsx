import React, {FC, memo} from 'react';
import clsx from 'clsx';

import Icon, {IconType} from 'components/Icon';

import './Loader.scss';

interface ComponentProps {
  className?: string;
}

const Loader: FC<ComponentProps> = ({className}) => {
  return <Icon className={clsx('Loader', className)} icon={IconType.loading} size={15.35} />;
};

export default memo(Loader);
