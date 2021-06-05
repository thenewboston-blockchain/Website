import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {bemify} from '@thenewboston/utils';

import './A.scss';

interface ComponentProps {
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
  href: string;
  newWindow?: boolean;
  iconTotalSize?: number;
  iconSize?: number;
}

const A: FC<ComponentProps> = ({
  children,
  className,
  dataTestId = 'A',
  href,
  iconSize = 16,
  iconTotalSize = 20,
  newWindow = true,
}) => {
  const renderIcon = newWindow && typeof children === 'string';
  const rel = newWindow ? 'noreferrer' : undefined;
  const target = newWindow ? '_blank' : '_self';

  return (
    <a className={clsx('A', className)} data-testid={dataTestId} href={href} rel={rel} target={target}>
      {children}
      {renderIcon && (
        <Icon
          className={clsx('A__Icon--new-window', {...bemify(className, '__Icon--new-window')})}
          dataTestId={`${dataTestId}__Icon--new-window`}
          icon={IconType.openInNew}
          size={iconSize}
          totalSize={iconTotalSize}
        />
      )}
    </a>
  );
};

export default A;
