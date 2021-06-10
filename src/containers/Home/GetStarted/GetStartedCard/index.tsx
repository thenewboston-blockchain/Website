import React, {FC} from 'react';
import {useHistory} from 'react-router-dom';
import {Icon, IconType} from '@thenewboston/ui';

import {Button} from 'components';
import './GetStartedCard.scss';

type Props = {
  description: string;
  icon: React.ReactNode;
  title: string;
  to: string;
};

const GetStartedCard: FC<Props> = ({description, icon, title, to}) => {
  const history = useHistory();
  return (
    <div className="GetStartedCard">
      <div className="GetStartedCard__top-container">
        {icon}
        <h3 className="GetStartedCard__card-title">{title}</h3>
      </div>
      <div className="GetStartedCard__description">{description}</div>
      <div className="GetStartedCard__button-container">
        <Button className="GetStartedCard__details-button" onClick={() => history.push(to)} variant="link">
          View Details
          <Icon icon={IconType.chevronRight} size={16} />
        </Button>
      </div>
    </div>
  );
};

export default GetStartedCard;
