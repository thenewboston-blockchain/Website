import React, {FC} from 'react';

import './ReleaseNotes.scss';

const ReleaseNotes: FC = () => {
  return (
    <div className="ReleaseNotes">
      <div className="ReleaseNotes__title">Release notes</div>
      <div className="ReleaseNotes__wip">
        This is still a work in progress. Please check back later for release notes!
      </div>
    </div>
  );
};

export default ReleaseNotes;
