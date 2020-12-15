import React, {FC} from 'react';
import {useParams} from 'react-router-dom';

import {ProfileUrlParams} from 'types/profiles';
import ProfileInfo from './ProfileInfo';
import TasksCompleted from './TasksCompleted';
import './Profile.scss';

const Profile: FC = () => {
  const {githubUsername} = useParams<ProfileUrlParams>();
  return (
    <div className="Profile">
      <div className="Profile__left-section">
        <ProfileInfo github_username={githubUsername} />
      </div>
      <div className="Profile__right-section">
        <TasksCompleted github_username={githubUsername} />
      </div>
    </div>
  );
};

export default Profile;
