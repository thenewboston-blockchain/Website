import React from 'react';

import {FaqTopic} from 'constants/faq';
import {CustomIconProps} from './types';

import AllIcons from './AllIcon';
import CoinsIcon from './CoinsIcon';
import CommunityIcon from './CommunityIcon';
import HowToIcon from './HowToIcon';
import ProjectsIcon from './ProjectsIcon';

const FaqIcons = ({onClick, size, state, topic}: CustomIconProps & {topic: FaqTopic}) => {
  switch (topic) {
    case FaqTopic.All:
      return <AllIcons onClick={onClick} size={size} state={state} />;
    case FaqTopic.Coins:
      return <CoinsIcon onClick={onClick} size={size} state={state} />;
    case FaqTopic.Community:
      return <CommunityIcon onClick={onClick} size={size} state={state} />;
    case FaqTopic.HowToGuides:
      return <HowToIcon onClick={onClick} size={size} state={state} />;
    case FaqTopic.Projects:
      return <ProjectsIcon onClick={onClick} size={size} state={state} />;
    default:
      return null;
  }
};

export default FaqIcons;
