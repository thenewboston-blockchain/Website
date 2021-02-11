import React, {FC, useMemo} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import Icon, {IconType} from 'components/Icon';

import './Toast.scss';

export type ToastType = 'success' | 'warning';

interface ComponentProps {
  className?: string;
  type: ToastType;
}

const Toast: FC<ComponentProps> = ({children, className, type = 'warning'}) => {
  const iconType = useMemo<IconType>(() => {
    switch (type) {
      case 'success':
        return IconType.thumbsUp;
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
        size={20}
      />
      <div className={clsx('Toast__text', {...bemify(className, '__text')})}>{children}</div>
    </div>
  );
};

export default Toast;
