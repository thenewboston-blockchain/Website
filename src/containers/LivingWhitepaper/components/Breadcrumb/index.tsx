import React, {FC, useState} from 'react';
import clsx from 'clsx';

import {Icon, IconType} from '@thenewboston/ui';
import {Popover} from 'components';
import {useLocation} from 'react-router';
import {Link} from 'react-router-dom';
import {useWindowDimensions} from 'hooks';
import {PATHNAME_TO_TITLE_MAPPING, PATHNAME_TO_DROPDOWN_SELECTIONS} from '../../constants';

import './Breadcrumb.scss';

type Props = {
  className?: string;
};

// TODO: need to handle drop down when width is less than 992px, which is a pain in the...
const Breadcrumb: FC<Props> = ({className}) => {
  const location = useLocation();
  const {width} = useWindowDimensions();
  const [dropdownEl, setDropdownEl] = useState<HTMLButtonElement | null>(null);
  const pathnames = location.pathname.slice(1).split('/');

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!e) return;

    if (dropdownEl) {
      setDropdownEl(null);
    } else {
      setDropdownEl(e.currentTarget);
    }
  };

  return (
    <div className={clsx('Breadcrumb', className)}>
      {pathnames.map((pathname, index) => {
        if (index < pathnames.length - 1) {
          return (
            <div className="Breadcrumb__link-container" key={pathname}>
              <span className="Breadcrumb__link">{PATHNAME_TO_TITLE_MAPPING[pathname]}</span>
              <Icon className="Breadcrumb__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
            </div>
          );
        }
        return (
          <div className="Breadcrumb__link-container" key={pathname}>
            {width > 992 ? (
              <span className="Breadcrumb__link--active">{PATHNAME_TO_TITLE_MAPPING[pathname]}</span>
            ) : (
              <>
                <button className="Breadcrumb__button" onClick={toggleDropdown}>
                  <span className="Breadcrumb__link--active">{PATHNAME_TO_TITLE_MAPPING[pathname]}</span>
                  <Icon
                    className="Breadcrumb__icon"
                    id={pathname}
                    icon={IconType.chevronDown}
                    size={16}
                    totalSize={16}
                  />
                </button>
                <Popover
                  anchorEl={dropdownEl}
                  anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
                  className="Breadcrumb__Popover"
                  closePopover={() => setDropdownEl(null)}
                  id={pathname}
                  open={!!dropdownEl}
                  transformOrigin={{horizontal: 'center', vertical: 'top'}}
                  transformOffset={{horizontal: 0, vertical: 12}}
                >
                  {PATHNAME_TO_DROPDOWN_SELECTIONS[pathname].map((selections) => {
                    return (
                      <Link className="Breadcrumb__Popover-link" to={selections.url}>
                        {selections.title}
                      </Link>
                    );
                  })}
                </Popover>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
