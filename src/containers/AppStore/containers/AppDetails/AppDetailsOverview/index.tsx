import React, {FC} from 'react';
import clsx from 'clsx';
import {Container} from 'components';

import './AppDetailsOverview.scss';

type Props = {
  className?: string;
  description: string;
};

const AppDetailsOverview: FC<Props> = ({className, description}) => {
  return (
    <Container className={clsx('AppDetailsOverview', className)}>
      <div className="AppDetailsOverview__content">
        <div className="AppDetailsOverview__title">Overview</div>
        <pre className="AppDetailsOverview__description">{description}</pre>
      </div>
    </Container>
  );
};

export default AppDetailsOverview;
