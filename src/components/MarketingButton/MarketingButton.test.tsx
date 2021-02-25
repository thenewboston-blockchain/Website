import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {SocialMedia} from 'types/social-media';
import {socialMediaUrls} from 'utils/social-media';
import MarketingButton from './index';

import YouTubeLogo from './logos/YouTubeLogo.png';

describe('MarketingButton component', () => {
  test('renders with expected props of discord as website', () => {
    render(<MarketingButton website={SocialMedia.discord} />);

    const el = screen.getByTestId('MarketingButton');
    expect(el).toBeTruthy();
    expect(el.hasAttribute('href')).toBeTruthy();
    expect(el.getAttribute('href')).toEqual(socialMediaUrls[SocialMedia.discord]);
  });

  test('renders correctly with default className', () => {
    render(<MarketingButton website={SocialMedia.discord} />);
    const marketingButton = screen.getByTestId('MarketingButton');
    const image = screen.getByTestId('MarketingButton__img');

    expect(marketingButton.className).toContain('MarketingButton');
    expect(image.className).toContain('MarketingButton__img');
  });

  test('renders correctly with className passed in', () => {
    render(<MarketingButton website={SocialMedia.discord} className="test-class" />);
    const marketingButton = screen.getByTestId('MarketingButton');
    const image = screen.getByTestId('MarketingButton__img');

    expect(marketingButton.className).toContain('test-class');
    expect(image.className).toContain('test-class__img');
  });

  test('renders MarketingButton with customLink with Youtube icon', () => {
    const CustomLink = 'https://youtube.com';
    render(<MarketingButton customLink={CustomLink} website={SocialMedia.youtube} />);

    const el = screen.getByTestId('MarketingButton');
    expect(el).toBeTruthy();
    expect(el.hasAttribute('href')).toBeTruthy();
    expect(el.getAttribute('href')).toEqual(CustomLink);

    const image = el.querySelector('.MarketingButton__img');

    expect(image?.getAttribute('alt')).toEqual(SocialMedia.youtube);
    expect(image?.getAttribute('src')).toEqual(YouTubeLogo);
  });
});
