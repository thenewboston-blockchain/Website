import React, {FC, useMemo} from 'react';
import clsx from 'clsx';
import capitalize from 'lodash/capitalize';
import {bemify} from '@thenewboston/utils';
import {Icon, IconType} from 'components';

import './DocCallout.scss';

export enum CalloutType {
  note = 'note',
  important = 'important',
  warning = 'warning',
}

interface ComponentProps {
  className?: string;
  type: CalloutType;
}

const DocCallout: FC<ComponentProps> = ({children, className, type}) => {
  const modifier = useMemo<string>(() => `--${type}`, [type]);

  const icon = useMemo(() => {
    const classNames = clsx('DocCallout__icon', `DocCallout__icon${modifier}`, {
      ...bemify(className, '__icon'),
      ...bemify(className, `__icon${modifier}`),
    });

    switch (type) {
      case CalloutType.important:
        return <Icon className={classNames} icon={IconType.alertCircle} />;
      case CalloutType.warning:
        return <Icon className={classNames} icon={IconType.alert} />;
      default:
        return <Icon className={classNames} icon={IconType.information} />;
    }
  }, [className, modifier, type]);

  return (
    <div
      className={clsx('DocCallout', `DocCallout${modifier}`, className, {
        ...bemify(className, modifier),
      })}
    >
      <div
        className={clsx('DocCallout__header', `DocCallout__header${modifier}`, {
          ...bemify(className, '__header'),
          ...bemify(className, `__header${modifier}`),
        })}
      >
        {icon} {capitalize(type)}
      </div>
      {children}
    </div>
  );
};

export default DocCallout;
