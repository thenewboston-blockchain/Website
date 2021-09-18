import React, {FC, ReactNode} from 'react';

import {Container, MarketingCard, PageTitle} from 'components';
import {SocialMedia} from 'types/social-media';

import './Social.scss';

const Social: FC = () => {
  const renderSocialCards = (): ReactNode => (
    <div className="Social__button-container">
      <MarketingCard website={SocialMedia.discord} />
      <MarketingCard website={SocialMedia.github} />
      <MarketingCard website={SocialMedia.youtube} />
      <MarketingCard website={SocialMedia.gaming} />
      <MarketingCard website={SocialMedia.reddit} />
      <MarketingCard website={SocialMedia.linkedin} />
      <MarketingCard website={SocialMedia.facebook} />
      <MarketingCard website={SocialMedia.twitter} />
      <MarketingCard website={SocialMedia.instagram} />
      <MarketingCard website={SocialMedia.twitch} />
      <MarketingCard website={SocialMedia.pinterest} />
    </div>
  );

  return (
    <>
      <PageTitle title="Join the Community!" />
      <Container className="Social">
        <h1 className="Social__heading">Be a part of the community</h1>
        <h2 className="Social__subtext">
          Explore ways to get involved, earn coins and stay up-to-date with the latest announcements and events.
        </h2>
        {renderSocialCards()}
      </Container>
    </>
  );
};

export default Social;
