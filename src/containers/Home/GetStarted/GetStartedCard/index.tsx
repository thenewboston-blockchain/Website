import React, {FC} from 'react';

import Button from 'components/Button';
import {Icon, IconType} from '@thenewboston/ui';

import './GetStartedCard.scss';

type Props = {
  description: string;
  icon: React.ReactNode;
  title: string;
  to: string;
};

const GetStartedCard: FC<Props> = ({description, icon, title, to}) => {
  return (
    <div className="GetStartedCard">
      <div className="GetStartedCard__top-container">
        {icon}
        <h3 className="GetStartedCard__card-title">{title}</h3>
      </div>
      <div className="GetStartedCard__description">{description}</div>
      <Button
        className="GetStartedCard__details-button"
        onClick={() => window.open(to, '_blank', 'noreferrer noopener')}
        iconRight={<Icon icon={IconType.chevronRight} size={16} />}
        type="empty"
        rounded
      >
        View Details
      </Button>
    </div>
  );
};

export default GetStartedCard;
