import React, {FC} from 'react';

import GitHubLogo from './GitHubLogo.png';
import RedditLogo from './RedditLogo.png';
import SlackLogo from './SlackLogo.png';

import './MarketingButton.scss';

interface ComponentProps {
  website: 'github' | 'reddit' | 'slack';
}

const MarketingButton: FC<ComponentProps> = ({website}) => {
  const images = {
    github: <img alt={website} src={GitHubLogo} />,
    reddit: <img alt={website} src={RedditLogo} />,
    slack: <img alt={website} src={SlackLogo} />,
  };

  const urls = {
    github: 'https://github.com/thenewboston-developers',
    reddit: 'https://www.reddit.com/r/thenewboston/',
    slack:
      'https://thenewboston.slack.com/join/shared_invite/zt-fmj4j8af-reXJKdQADo7QIvAp92Ro5w?fbclid=IwAR1AKKWJ_ljPi8SpfEuQW2oCcZ8r_ho9ebanqH0fDvuppQKxSiN-k5VY4jk#/',
  };

  return (
    <a className="MarketingButton" href={urls[website]} target="_blank" rel="noopener noreferrer">
      {images[website]}
    </a>
  );
};

export default MarketingButton;
