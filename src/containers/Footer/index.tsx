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
        title: 'Tutorials',
        url: URLS.developerPortal.tutorials,
      },
    ],
  },
  {
    header: 'Resources',
    links: [
      {
        title: 'Media Kit',
        url: ROUTES.assets,
      },
      {
        title: 'Join the Community',
        url: ROUTES.social,
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
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.github]} size={20} totalSize={20} />
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
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.youtube]} size={20} totalSize={20} />
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
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.reddit]} size={20} totalSize={20} />
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
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.facebook]} size={20} totalSize={20} />
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
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.twitter]} size={20} totalSize={20} />
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
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.instagram]} size={20} totalSize={20} />
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
            <S.SocialMediaIcon icon={socialMediaFooterIcons[SocialMedia.linkedin]} size={20} totalSize={20} />
            {SocialMedia.linkedin}
          </S.SocialMediaLink>
        ),
        url: socialMediaUrls[SocialMedia.linkedin],
      },
    ],
  },
  {
    header: 'Legal',
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
