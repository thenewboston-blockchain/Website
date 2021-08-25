import React, {useState} from 'react';
import {useHistory} from 'react-router';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';
import {SFC} from 'types/generic';

import './Navigation.scss';

type Props = {
  path: string;
  type: 'left' | 'right';
  text: string;
};

const Navigation: SFC<Props> = ({className, text, type, path}) => {
  const history = useHistory();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={clsx('Navigation', className)}
      onClick={() => history.push(path)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
    >
      {type === 'left' &&
        (isHovered ? (
          <Icon className="Navigation__left-icon" icon={IconType.arrowLeft} size={20} totalSize={24} />
        ) : (
          <Icon className="Navigation__left-icon" icon={IconType.chevronLeft} size={16} totalSize={16} />
        ))}
      <span className="Navigation__text">{text}</span>
      {type === 'right' &&
        (isHovered ? (
          <Icon className="Navigation__right-icon" icon={IconType.arrowRight} size={20} totalSize={24} />
        ) : (
          <Icon className="Navigation__right-icon" icon={IconType.chevronRight} size={16} totalSize={16} />
        ))}
    </div>
  );
};

export default Navigation;
