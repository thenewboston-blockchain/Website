import React, {FC} from 'react';

import {A, Avatar} from 'components';

import './TeamMemberCard.scss';

interface ComponentProps {
  displayName: string;
  discordUsername: string;
  githubUsername?: string;
  isLead: boolean;
  profileImage: string;
  titles: string[];
}

const TeamMemberCard: FC<ComponentProps> = ({
  displayName,
  discordUsername,
  githubUsername,
  isLead,
  profileImage,
  titles,
}) => {
  const renderAvatar = () => (
    <div className="TeamMemberCard__user-avatar">
      <Avatar size={144} src={profileImage} />
    </div>
  );

  const renderLeadFlag = () => <div className="TeamMemberCard__lead-flag">Team Lead</div>;

  const renderMemberDetails = () => (
    <div className="TeamMemberCard__details">
      <h2 className="TeamMemberCard__details-name">{displayName}</h2>
      <div className="TeamMemberCard__details-title">{titles.join(', ')}</div>
      <div>Discord: {discordUsername || '-'}</div>
      <div>Github: {githubUsername ? <A href={`https://github.com/${githubUsername}`}>{githubUsername}</A> : '-'}</div>
    </div>
  );

  return (
    <div className="TeamMemberCard">
      {renderAvatar()}
      {isLead && renderLeadFlag()}
      {renderMemberDetails()}
    </div>
  );
};

export default TeamMemberCard;
