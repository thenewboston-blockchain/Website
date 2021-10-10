import React, {useMemo} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {bemify} from '@thenewboston/utils';
import {SFC} from 'types/generic';

import './Toast.scss';

export type ToastType = 'success' | 'warning';

interface ComponentProps {
  type: ToastType;
}

const Toast: SFC<ComponentProps> = ({children, className, type = 'warning'}) => {
  const iconType = useMemo<IconType>(() => {
    switch (type) {
      case 'success':
        return IconType.checkCircle;
      default:
        return IconType.alertCircleOutline;
    }
  }, [type]);

  return (
    <div
      className={clsx('Toast', className, {
        [`Toast--${type}`]: true,
        ...bemify(className, `--${type}`),
      })}
    >
      <Icon
        className={clsx('Toast__icon', {
          [`Toast__icon--${type}`]: true,
          ...bemify(className, '__icon'),
          ...bemify(className, `__icon--${type}`),
        })}
        icon={iconType}
      />
      <div className={clsx('Toast__text', {...bemify(className, '__text')})}>{children}</div>
    </div>
  );
};

export default Toast;
