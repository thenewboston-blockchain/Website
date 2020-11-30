import React, {FC} from 'react';

import TasksCompleted from './TasksCompleted';
import './Profile.scss';

const Profile: FC = () => {
  return (
    <div className="Profile">
      <div className="Profile__left-section">Profile Info</div>
      <div className="Profile__right-section">
        <TasksCompleted github_username="jamessspanggg" />
      </div>
    </div>
  );
};

export default Profile;
