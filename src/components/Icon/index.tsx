/* eslint-disable react/jsx-props-no-spreading */

import React, {forwardRef, ReactNode} from 'react';
import clsx from 'clsx';
import noop from 'lodash/noop';

import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import MenuRightIcon from 'mdi-react/MenuRightIcon';

import {getCustomClassNames} from 'utils/components';
import './Icon.scss';

// These names are camelCased versions of the names found in https://materialdesignicons.com/
export enum IconType {
  chevronDown,
  menu,
  menuRight,
}

interface ComponentProps {
  className?: string;
  disabled?: boolean;
  icon: IconType;
  onClick?(e: React.MouseEvent<SVGSVGElement, MouseEvent>): void;
  size?: number | string;
}

const Icon = forwardRef<HTMLDivElement, ComponentProps>(({className, disabled = false, icon, onClick, size}, ref) => {
  const iconProps = {
    onClick: disabled ? noop : onClick,
    size,
  };

  const renderIcon = (): ReactNode => {
    const icons = {
      [IconType.chevronDown]: <ChevronDownIcon {...iconProps} />,
      [IconType.menu]: <MenuIcon {...iconProps} />,
      [IconType.menuRight]: <MenuRightIcon {...iconProps} />,
    };
    return icons[icon] || null;
  };

  return (
    <div
      className={clsx('Icon', className, {
        'Icon--disabled': disabled,
        ...getCustomClassNames(className, '--disabled', disabled),
      })}
      ref={ref}
    >
      {renderIcon()}
    </div>
  );
});

export default Icon;
