import React, {FC, ReactNode} from 'react';

import './BreadcrumbMenu.scss';

interface ComponentProps {
  pageName: string;
  sectionName: string;
}

const BreadcrumbMenu: FC<ComponentProps> = ({pageName, sectionName}) => {
  const renderBreadcrumbs = (): ReactNode => {
    return (
      <div className="breadcrumbs">
        {sectionName} {' > '} {pageName}
      </div>
    );
  };

  return <div className="BreadcrumbMenu">{renderBreadcrumbs()}</div>;
};

export default BreadcrumbMenu;
