import React, {FC} from 'react';
import clsx from 'clsx';

import './ProgressBar.scss';

type Props = {
  className?: string;
  height?: number;
  percentage: number;
};

const ProgressBar: FC<Props> = ({className, height, percentage}) => {
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
