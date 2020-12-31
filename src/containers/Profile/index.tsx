import React, {FC, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import {Loader} from 'components';
import {selectUsers} from 'selectors/state';
import ProfileInfo from './ProfileInfo';
import TasksCompleted from './TasksCompleted';

import './Profile.scss';

interface ProfileUrlParams {
  userId: string;
}

const Profile: FC = () => {
  const {userId} = useParams<ProfileUrlParams>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const users = useSelector(selectUsers);
  const user = users[userId];

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        await axios.get(`${process.env.REACT_APP_BACKEND_API}/users/${userId}`);
      } catch (error) {
        setErrorMessage('Error retrieving user');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  const renderLeftSection = () => {
    if (!user) return null;
    return (
      <div className="Profile__left-section">
        <ProfileInfo user={user} />
      </div>
    );
  };

  const renderRightSection = () => {
    if (!user) return null;
    return (
      <div className="Profile__right-section">
        <TasksCompleted github_username={user.github_username} />
      </div>
    );
  };

  if (errorMessage) return <h4>{errorMessage}</h4>;
  if (loading) return <Loader />;

  return (
    <div className="Profile">
      {renderLeftSection()}
      {renderRightSection()}
    </div>
  );
};

export default Profile;
