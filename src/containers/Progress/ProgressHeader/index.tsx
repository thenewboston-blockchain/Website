import React, {FC} from 'react';
import format from 'date-fns/format';

import './ProgressHeader.scss';

const formatDate = (date: Date | null): string => (date ? format(date, 'MM/dd') : 'N/A');

type Props = {
  goal: string;
  startDate: Date | null;
  endDate: Date | null;
  weekNumber: number | null;
};

const ProgressHeader: FC<Props> = ({endDate, goal, startDate, weekNumber}) => {
  return (
    <div className="ProgressHeader">
      <div className="ProgressHeader__header">Weekly Progress</div>
      <div className="ProgressHeader__header-overview">
        Stay updated with our weekly progress. Each task that each team works on helps us achieve our greater goal of
        reaching beta.
      </div>
      <div className="ProgressHeader__divider" />
      <div className="ProgressHeader__date">
        <span className="ProgressHeader__date-range">
          {formatDate(startDate)} - {formatDate(endDate)}
        </span>
        <span className="ProgressHeader__date-week">Week {weekNumber || '-'}</span>
      </div>
      <div className="ProgressHeader__goal">{goal}</div>
    </div>
  );
};

export default ProgressHeader;
