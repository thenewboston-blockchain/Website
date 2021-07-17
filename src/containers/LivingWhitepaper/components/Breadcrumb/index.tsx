import React, {FC} from 'react';
import clsx from 'clsx';

import {Icon, IconType} from '@thenewboston/ui';
import {useLocation} from 'react-router';
import {useWindowDimensions} from 'hooks';
import {PATHNAME_TO_TITLE_MAPPING} from '../../constants';

import './Breadcrumb.scss';

type Props = {
  className?: string;
};

// TODO: need to handle drop down when width is less than 992px, which is a pain in the...
const Breadcrumb: FC<Props> = ({className}) => {
  const location = useLocation();
  const {width} = useWindowDimensions();
  const pathnames = location.pathname.slice(1).split('/');

  return (
    <div className={clsx('Breadcrumb', className)}>
      {pathnames.map((pathname, index) => {
        if (index < pathnames.length - 1) {
          return (
            <div className="Breadcrumb__link-container">
              <span className="Breadcrumb__link">{PATHNAME_TO_TITLE_MAPPING[pathname]}</span>
              <Icon className="Breadcrumb__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
            </div>
          );
        }
        return (
          <div className="Breadcrumb__link-container">
            <span className="Breadcrumb__link--active">{PATHNAME_TO_TITLE_MAPPING[pathname]}</span>
            {width < 992 && <Icon className="Breadcrumb__icon" icon={IconType.chevronDown} size={16} totalSize={16} />}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
