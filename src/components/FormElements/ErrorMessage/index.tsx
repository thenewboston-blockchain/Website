import React, {FC} from 'react';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {bemify} from '@thenewboston/utils';

import './ErrorMessage.scss';

interface ErrorMessageProps {
  className?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({children, className}) => {
  return (
    <div className={clsx('ErrorMessage', className)}>
      <Icon
        className={clsx('ErrorMessage__icon', {...bemify(className, '__icon')})}
        icon={IconType.alert}
        size={14}
        totalSize={14}
      />
      <span className={clsx('ErrorMessage__text', {...bemify(className, '__text')})}>{children}</span>
    </div>
  );
};

export default ErrorMessage;
