import React, {FC} from 'react';

import {A, Avatar, CopyableAccountNumber, EmptyPage, Icon, IconType, Qr} from 'components';
import {getContributorByGithubUsername, getTeamMemberByGithubUsername} from 'utils/data';
import {TeamMember} from 'types/teams';

import './ProfileInfo.scss';

interface ComponentProps {
  github_username: string;
}

const ProfileInfo: FC<ComponentProps> = ({github_username}) => {
  const memberDetails = getTeamMemberByGithubUsername(github_username);
  const contributorDetails = getContributorByGithubUsername(github_username);

  if (!contributorDetails) {
    return <EmptyPage className="ProfileInfo__empty-page" />;
  }

  const renderCoverImage = (alt: string, imageUrl: string | null, isLead: boolean) => {
    return (
      <div>
        {imageUrl ? (
          <img alt={alt} className="ProfileInfo__cover-image" src={imageUrl} />
        ) : (
          <div className="ProfileInfo__cover-image--empty" />
        )}
        {isLead && <div className="ProfileInfo__lead-flag">Team Lead</div>}
        <Icon
          className="ProfileInfo__edit-cover-image"
          icon={IconType.pencil}
          onClick={() => null}
          size={18}
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
            <div className="ProfileInfo__member-title">
              {titles[index]} on {team.title}
            </div>
          ))}
        <div className="ProfileInfo__member-slack">
          <Icon icon={IconType.slack} onClick={() => null} size={18} />
          {slackUsername}
        </div>
        <div className="ProfileInfo__member-github">
          <Icon icon={IconType.github} onClick={() => null} size={18} />
          <A className="ProfileInfo__member-github-link" href={`https://github.com/${github_username}`}>
            {githubUsername}
          </A>
        </div>
      </>
    );
  };

  const {account_number: accountNumber, github_avatar_url: githubAvatarUrl} = contributorDetails;
  const coverImageUrl = null;

  return (
    <div className="ProfileInfo">
      {renderCoverImage(`${github_username}'s cover image`, coverImageUrl, memberDetails?.isLead || false)}
      <Avatar className="ProfileInfo__profile-picture" alt={github_username} size={178} src={githubAvatarUrl} />
      <div className="ProfileInfo__user-details">
        <div className="ProfileInfo__name">{memberDetails ? memberDetails.displayName : github_username}</div>
        {memberDetails && renderMemberDetails(memberDetails)}
      </div>
      <div className="ProfileInfo__account-details">
        <CopyableAccountNumber accountNumber={accountNumber} className="ProfileInfo__CopyableAccountNumber" />
        <div className="ProfileInfo__qr-container">
          <Qr text={accountNumber} width={100} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
