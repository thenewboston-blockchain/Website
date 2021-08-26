import React from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';

import './ProgressBar.scss';

type Props = {
  height?: number;
  percentage: number;
};

const ProgressBar: SFC<Props> = ({className, height, percentage}) => {
  return (
    <div className={clsx(className, 'ProgressBar__bar')} style={{height}}>
      <div
        className={clsx('ProgressBar__bar', 'ProgressBar__bar--filled')}
        style={{
          height,
          width: `${percentage}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
