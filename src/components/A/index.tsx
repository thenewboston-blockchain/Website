import React, {ReactNode} from 'react';
import clsx from 'clsx';
import {IconType} from '@thenewboston/ui';
import {SFC} from 'types/generic';

import * as S from './Styles';

interface ComponentProps {
  children?: ReactNode;
  dataTestId?: string;
  href: string;
  newWindow?: boolean;
  iconTotalSize?: number;
  iconSize?: number;
  showNewWindowIcon?: boolean;
}

const A: SFC<ComponentProps> = ({
  children,
  className,
  dataTestId = 'A',
  href,
  iconSize = 16,
  iconTotalSize = 20,
  newWindow = true,
  showNewWindowIcon = true,
}) => {
  const renderIcon = newWindow && typeof children === 'string' && showNewWindowIcon;
  const rel = newWindow ? 'noreferrer' : undefined;
  const target = newWindow ? '_blank' : '_self';

  return (
    <a className={clsx('A', className)} data-testid={dataTestId} href={href} rel={rel} target={target}>
      {children}
      {renderIcon && (
        <S.NewWindowIcon
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
