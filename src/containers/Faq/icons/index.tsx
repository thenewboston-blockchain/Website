import React from 'react';

import {FaqFilterType} from 'types/faq';
import {CustomIconProps} from './types';
import AllIcons from './AllIcon';
import CoinsIcon from './CoinsIcon';
import CommunityIcon from './CommunityIcon';
import HowToIcon from './HowToIcon';
import ProjectsIcon from './ProjectsIcon';

const FaqIcons = ({size, state, topic}: CustomIconProps & {topic: FaqFilterType}) => {
  switch (topic) {
    case FaqFilterType.all:
      return <AllIcons size={size} state={state} />;
    case FaqFilterType.coins:
      return <CoinsIcon size={size} state={state} />;
    case FaqFilterType.community:
      return <CommunityIcon size={size} state={state} />;
    case FaqFilterType.howTo:
      return <HowToIcon size={size} state={state} />;
    case FaqFilterType.projects:
      return <ProjectsIcon size={size} state={state} />;
    default:
      return null;
  }
};

export default FaqIcons;
