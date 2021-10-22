import React, {FC, memo, useCallback} from 'react';

import {ROUTES, URLS} from 'constants/routes';
import colors from 'styles/colors';
import {SocialMedia} from 'types/social-media';
import {socialMediaUrls, socialMediaFooterIcons} from 'utils/social-media';

import FooterNavList from './FooterNavList';
import * as S from './Styles';

interface ComponentProps {
  className?: string;
}

const navLists = [
  {
    header: 'Get TNBC',
    links: [
      {
        title: 'Bounties',
        url: ROUTES.bounties,
      },
      {
        title: 'Careers',
        url: ROUTES.openings,
      },
      {
        isExternal: true,
        newWindow: true,
        title: 'Faucet',
        url: URLS.apps.faucet,
      },
      {
        isExternal: true,
        title: 'Create App',
        url: URLS.developerPortal.projects,
      },
      {
        title: 'Play Games',
        url: ROUTES.arcade,
      },
    ],
  },
  {
    header: 'Developer',
    links: [
      {
        isExternal: true,
        newWindow: false,
        title: 'Home',
        url: URLS.developerPortal.home,
      },
      {
        isExternal: true,
        newWindow: false,
        title: 'Living Whitepaper',
        url: URLS.developerPortal.whitepaper,
      },
      {
        title: 'Tutorials',
        url: ROUTES.tutorials,
      },
      {
        isExternal: true,
        newWindow: false,
        title: 'Projects',
        url: URLS.developerPortal.projects,
      },
      {
        isExternal: true,
        newWindow: false,
        title: 'APIs',
        url: URLS.developerPortal.api,
      },
      {
        isExternal: true,
        newWindow: false,
        title: 'SDKs &  Libraries',
        url: URLS.developerPortal.sdkAndLibraries,
      },
    ],
  },
  {
    header: 'Resources',
    links: [
      {
        title: 'Roadmap',
        url: ROUTES.roadmap,
      },
      {
        title: 'FAQ',
        url: ROUTES.faq,
      },
      {
        isExternal: true,
        newWindow: true,
        title: 'Blog',
        url: URLS.blog,
      },
      {
        title: 'Analytics',
        url: ROUTES.analytics,
      },
      {
        title: 'Media Kit',
        url: ROUTES.assets,
      },
      {
        title: 'Meet the Team',
        url: ROUTES.teams,
      },
      {
        title: 'About Us',
        url: ROUTES.aboutUs,
      },
      {
        title: 'Join the Community',
        url: ROUTES.social,
      },
      {
        title: 'Donate',
        url: ROUTES.donate,
      },
    ],
  },
  {
    header: 'Social',
    links: [
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            {/* material ui's discord icon is slightly different from the design, hence we will use the custom one */}
            <S.DiscordIcon color={colors.palette.neutral['400']} />
            {SocialMedia.discord}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.discord],
      },
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.github]} />
            {SocialMedia.github}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.github],
      },
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.youtube]} />
            {SocialMedia.youtube}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.youtube],
      },
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.reddit]} />
            {SocialMedia.reddit}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.reddit],
      },
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.facebook]} />
            {SocialMedia.facebook}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.facebook],
      },
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.twitter]} />
            {SocialMedia.twitter}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.twitter],
      },
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.instagram]} />
            {SocialMedia.instagram}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.instagram],
      },
      {
        isExternal: true,
        newWindow: true,
        title: (
          <S.SocialMediaLink>
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.linkedin]} />
            {SocialMedia.linkedin}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.linkedin],
      },
    ],
  },
  {
    header: 'Misc',
    links: [
      {
        title: 'Community Guidelines',
        url: ROUTES.guidelines,
      },
      {
        title: 'Terms of Use',
        url: ROUTES.termsOfUse,
      },
      {
        title: 'Privacy Policy',
        url: ROUTES.privacyPolicy,
      },
    ],
  },
];

const Footer: FC<ComponentProps> = ({className}) => {
  const renderNavLists = useCallback(
    () => navLists.map((list) => <FooterNavList header={list.header} key={list.header} links={list.links} />),
    [],
  );

  return (
    <S.Container className={className} data-testid="Footer">
      {renderNavLists()}
    </S.Container>
  );
};

export default memo(Footer);
