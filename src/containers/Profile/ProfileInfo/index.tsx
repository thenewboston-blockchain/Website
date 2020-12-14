import React, {FC} from 'react';

import {A, Avatar, CopyableAccountNumber, EmptyPage, Icon, IconType, Qr} from 'components';
import Account from 'containers/Account';
import {useBooleanState} from 'hooks';
import {TeamMember} from 'types/teams';
import {getContributorByGithubUsername, getTeamMemberByGithubUsername, getTeamPathname} from 'utils/data';

import './ProfileInfo.scss';

interface ComponentProps {
  github_username: string;
}

const ProfileInfo: FC<ComponentProps> = ({github_username}) => {
  const [editModalIsOpen, toggleEditModal] = useBooleanState(false);
  const contributorDetails = getContributorByGithubUsername(github_username);
  const memberDetails = getTeamMemberByGithubUsername(github_username);

  if (!contributorDetails) {
    return <EmptyPage className="ProfileInfo__empty-page" />;
  }

  const renderBackdrop = (isLead: boolean) => {
    return (
      <div className="ProfileInfo__backdrop-container">
        <div className="ProfileInfo__blue-backdrop" />
        {isLead && <div className="ProfileInfo__lead-flag">Team Lead</div>}
        {/* TODO: make edit icon visible when user is the authenticated profile owner */}
        <Icon
          className="ProfileInfo__edit-profile"
          icon={IconType.pencil}
          onClick={toggleEditModal}
          size={24}
          totalSize={36}
        />
      </div>
    );
  };

  const renderMemberDetails = (member: TeamMember) => {
    const {githubUsername, slackUsername, teams, titles} = member;
    return (
      <>
        {teams &&
          teams.map((team, index) => (
            <div className="ProfileInfo__member-title" key={team.title}>
              {titles[index]} on <A href={`/teams/${getTeamPathname(team.title)}`}>{team.title}</A>
            </div>
          ))}
        <div className="ProfileInfo__member-slack">
          <Icon className="ProfileInfo__member-slack-icon" icon={IconType.slack} size={18} />
          {slackUsername}
        </div>
        <div className="ProfileInfo__member-github">
          <Icon className="ProfileInfo__member-github-icon" icon={IconType.github} size={18} />
          <A className="ProfileInfo__member-github-link" href={`https://github.com/${github_username}`}>
            {githubUsername}
          </A>
        </div>
      </>
    );
  };

  const {account_number: accountNumber, github_avatar_url: githubAvatarUrl} = contributorDetails;

  return (
    <>
      {
        <Account
          accountNumber={accountNumber}
          isOpen={editModalIsOpen}
          displayName={memberDetails ? memberDetails.displayName : github_username}
          toggleModal={toggleEditModal}
          slackName={memberDetails ? memberDetails.slackUsername : ''}
        />
      }
      <div className="ProfileInfo">
        <div className="ProfileInfo__top-section">
          {renderBackdrop(memberDetails?.isLead || false)}
          <Avatar className="ProfileInfo__profile-picture" alt={github_username} size={178} src={githubAvatarUrl} />
        </div>
        <div className="ProfileInfo__details">
          <div className="ProfileInfo__user-details">
            <div className="ProfileInfo__name">{memberDetails ? memberDetails.displayName : github_username}</div>
            {memberDetails && renderMemberDetails(memberDetails)}
          </div>
          <div className="ProfileInfo__account-details">
            <CopyableAccountNumber
              accountNumber={accountNumber}
              className="ProfileInfo__CopyableAccountNumber"
              isCopyButtonAtBottom
            />
            <div className="ProfileInfo__qr-container">
              <Qr text={accountNumber} width={110} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
