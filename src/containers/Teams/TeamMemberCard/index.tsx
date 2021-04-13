import React, {FC} from 'react';

import {A, Avatar} from 'components';

import './TeamMemberCard.scss';

interface ComponentProps {
  displayName: string;
  discordUsername: string;
  githubUsername?: string;
  hourlyRate: number;
  isLead: boolean;
  profileImage: string;
  title: string;
}

const TeamMemberCard: FC<ComponentProps> = ({
  displayName,
  discordUsername,
  githubUsername,
  hourlyRate,
  isLead,
  profileImage,
  title,
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
      <div className="TeamMemberCard__details-title">{title}</div>
      <div>Discord: {discordUsername || '-'}</div>
      <div>Github: {githubUsername ? <A href={`https://github.com/${githubUsername}`}>{githubUsername}</A> : '-'}</div>
      <div>
        Hourly Rate: <span className="TeamMemberCard__details-pay">{hourlyRate.toLocaleString()}</span>
      </div>
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
