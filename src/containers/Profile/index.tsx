import React, {FC} from 'react';

import ProfileInfo from './ProfileInfo';
import TasksCompleted from './TasksCompleted';
import './Profile.scss';

interface ComponentProps {
  github_username: string;
}

const Profile: FC<ComponentProps> = ({github_username}) => {
  return (
    <div className="Profile">
      <div className="Profile__left-section">
        <ProfileInfo github_username={github_username} />
      </div>
      <div className="Profile__right-section">
        <TasksCompleted github_username={github_username} />
      </div>
    </div>
  );
};

export default Profile;
