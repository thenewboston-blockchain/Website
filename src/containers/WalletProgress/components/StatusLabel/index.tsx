import React, {FC} from 'react';
import clsx from 'clsx';

import './StatusLabel.scss';

type Props = {
  isCompleted: boolean;
};

const StatusLabel: FC<Props> = ({isCompleted}) => {
  return (
    <div className={clsx('StatusLabel', isCompleted ? 'StatusLabel--completed' : 'StatusLabel--not-completed')}>
      {isCompleted ? 'Completed' : 'Not Completed'}
    </div>
  );
};

export default StatusLabel;
