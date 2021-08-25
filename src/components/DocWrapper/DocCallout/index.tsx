import React, {useMemo} from 'react';
import clsx from 'clsx';
import capitalize from 'lodash/capitalize';
import {Icon, IconType} from '@thenewboston/ui';
import {bemify} from '@thenewboston/utils';

import {SFC} from 'types/generic';
import './DocCallout.scss';

export enum CalloutType {
  note = 'note',
  important = 'important',
  warning = 'warning',
}

export interface DocCalloutProps {
  type: CalloutType;
}

const DocCallout: SFC<DocCalloutProps> = ({children, className, type}) => {
  const modifier = useMemo<string>(() => `--${type}`, [type]);

  const icon = useMemo(() => {
    const classNames = clsx('DocCallout__icon', `DocCallout__icon${modifier}`, {
      ...bemify(className, '__icon'),
      ...bemify(className, `__icon${modifier}`),
    });

    const dataTestId = `DocCallout__icon${modifier}`;

    switch (type) {
      case CalloutType.important:
        return <Icon className={classNames} dataTestId={dataTestId} icon={IconType.alertCircle} />;
      case CalloutType.warning:
        return <Icon className={classNames} dataTestId={dataTestId} icon={IconType.alert} />;
      default:
        return <Icon className={classNames} dataTestId={dataTestId} icon={IconType.information} />;
    }
  }, [className, modifier, type]);

  return (
    <div
      className={clsx('DocCallout', `DocCallout${modifier}`, className, {
        ...bemify(className, modifier),
      })}
      data-testid="DocCallout"
    >
      <div
        className={clsx('DocCallout__header', `DocCallout__header${modifier}`, {
          ...bemify(className, '__header'),
          ...bemify(className, `__header${modifier}`),
        })}
        data-testid="DocCallout__header"
      >
        {icon} {capitalize(type)}
      </div>
      {children}
    </div>
  );
};

export default DocCallout;
