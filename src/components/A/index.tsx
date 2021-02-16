import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import {Icon, IconType} from 'components';
import './A.scss';

interface ComponentProps {
  children?: ReactNode;
  className?: string;
  href: string;
  newWindow?: boolean;
}

const A: FC<ComponentProps> = ({children, className, href, newWindow = true}) => {
  const renderIcon = newWindow && typeof children === 'string';
  const rel = newWindow ? 'noreferrer' : undefined;
  const target = newWindow ? '_blank' : '_self';

  return (
    <a className={clsx('A', className)} href={href} rel={rel} target={target}>
      {children}
      {renderIcon && (
        <Icon
          className={clsx('A__Icon--new-window', {...bemify(className, '__Icon--new-window')})}
          icon={IconType.openInNew}
          size={16}
          totalSize={20}
        />
      )}
    </a>
  );
};

export default A;
