import {SocialMedia} from 'types/social-media';

const COMMON_LOGO_SIZING = {
  height: 30,
  width: 30,
};

export const MARKETING_CARD_CONFIG: Record<SocialMedia, {spriteClassName: string; width: number; height: number}> = {
  [SocialMedia.discord]: {
    spriteClassName: 'sprite-Discord',
    ...COMMON_LOGO_SIZING,
  },
  [SocialMedia.facebook]: {
    spriteClassName: 'sprite-Facebook',
    ...COMMON_LOGO_SIZING,
  },
  [SocialMedia.github]: {
    spriteClassName: 'sprite-GitHub',
    ...COMMON_LOGO_SIZING,
  },
  [SocialMedia.gaming]: {
    spriteClassName: 'sprite-TNBGaming',
    ...COMMON_LOGO_SIZING,
  },
  [SocialMedia.instagram]: {
    spriteClassName: 'sprite-Instagram',
    ...COMMON_LOGO_SIZING,
  },
  [SocialMedia.linkedin]: {
    spriteClassName: 'sprite-LinkedIn',
    ...COMMON_LOGO_SIZING,
  },
  [SocialMedia.pinterest]: {
    spriteClassName: 'sprite-Pinterest',
    ...COMMON_LOGO_SIZING,
  },
  [SocialMedia.reddit]: {
    spriteClassName: 'sprite-Reddit',
    ...COMMON_LOGO_SIZING,
  },
  [SocialMedia.twitch]: {
    spriteClassName: 'sprite-Twitch',
    ...COMMON_LOGO_SIZING,
  },
  [SocialMedia.twitter]: {
    spriteClassName: 'sprite-Twitter',
    ...COMMON_LOGO_SIZING,
  },
  [SocialMedia.youtube]: {
    spriteClassName: 'sprite-YouTube',
    ...COMMON_LOGO_SIZING,
  },
};
