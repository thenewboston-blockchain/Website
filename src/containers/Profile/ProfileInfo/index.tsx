import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Icon, IconType} from '@thenewboston/ui';

import {A, Avatar, CopyableAccountNumber, Qr} from 'components';
import EditUserModal from 'containers/EditUserModal';
import {useBooleanState} from 'hooks';
import {selectActiveUser} from 'selectors/state';
import {User} from 'types/app/User';
import {TeamMember} from 'types/teams';
import {getTeamMemberByGithubUsername, getTeamPathname} from 'utils/data';

import './ProfileInfo.scss';

interface ComponentProps {
  user: User;
}

interface ProfileUrlParams {
  userId: string;
}

const ProfileInfo: FC<ComponentProps> = ({user}) => {
  const activeUser = useSelector(selectActiveUser);
  const memberDetails = getTeamMemberByGithubUsername(user.github_username);
  const {userId} = useParams<ProfileUrlParams>();
  const [editUserModalIsOpen, toggleEditUserModal] = useBooleanState(false);

  const renderBackdrop = (isLead: boolean) => {
    return (
      <div className="ProfileInfo__backdrop-container">
        <div className="ProfileInfo__blue-backdrop" />
        {isLead && <div className="ProfileInfo__lead-flag">Team Lead</div>}
        {activeUser?.pk === userId && (
          <Icon
            className="ProfileInfo__edit-profile"
            icon={IconType.pencil}
            onClick={toggleEditUserModal}
            size={24}
            totalSize={36}
          />
        )}
      </div>
    );
  };

  const renderMemberDetails = (member: TeamMember) => {
    const {teams, titles} = member;
    return (
      <>
        {teams &&
          teams.map((team, index) => (
            <div className="ProfileInfo__member-title" key={team.title}>
              {titles[index]} on <A href={`/teams/${getTeamPathname(team.title)}`}>{team.title}</A>
            </div>
          ))}
        <div className="ProfileInfo__member-discord">
          <Icon className="ProfileInfo__member-discord-icon" icon={IconType.discord} size={18} />
          {user.discord_username}
        </div>
        <div className="ProfileInfo__member-github">
          <Icon className="ProfileInfo__member-github-icon" icon={IconType.github} size={18} />
          <A className="ProfileInfo__member-github-link" href={`https://github.com/${user.github_username}`}>
            {user.github_username}
          </A>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="ProfileInfo">
        <div className="ProfileInfo__top-section">
          {renderBackdrop(memberDetails?.isLead || false)}
          <Avatar className="ProfileInfo__profile-picture" size={178} src={user.profile_image} />
        </div>
        <div className="ProfileInfo__details">
          <div className="ProfileInfo__user-details">
            <div className="ProfileInfo__name">{user.display_name}</div>
            {memberDetails && renderMemberDetails(memberDetails)}
          </div>
          {user.account_number && (
            <div className="ProfileInfo__account-details">
              <CopyableAccountNumber
                accountNumber={user.account_number}
                className="ProfileInfo__CopyableAccountNumber"
                isCopyButtonAtBottom
              />
              <div className="ProfileInfo__qr-container">
                <Qr text={user.account_number} width={110} />
              </div>
            </div>
          )}
        </div>
      </div>
      {editUserModalIsOpen && <EditUserModal close={toggleEditUserModal} />}
    </>
  );
};

export default ProfileInfo;
