import React, {FC} from 'react';

import {Icon, IconType} from '@thenewboston/ui';
import {useHistory} from 'react-router';

import './Navigation.scss';

type Props = {
  path: string;
  type: 'left' | 'right';
  text: string;
};

const Navigation: FC<Props> = ({text, type, path}) => {
  const history = useHistory();

  return (
    <div className="Navigation" onClick={() => history.push(path)} role="button" tabIndex={0}>
      {type === 'left' && (
        <Icon className="Navigation__left-icon" icon={IconType.chevronLeft} size={16} totalSize={16} />
      )}
      <span className="Navigation__text">{text}</span>
      {type === 'right' && (
        <Icon className="Navigation__right-icon" icon={IconType.chevronRight} size={16} totalSize={16} />
      )}
    </div>
  );
};

export default Navigation;
