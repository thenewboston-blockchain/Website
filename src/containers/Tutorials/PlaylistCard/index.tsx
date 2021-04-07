import React, {FC} from 'react';

import './PlaylistCard.scss';

interface PlaylistCardProps {
  title: string;
}

const PlaylistCard: FC<PlaylistCardProps> = ({title}) => {
  return <div className="PlaylistCard">{title}</div>;
};

export default PlaylistCard;
