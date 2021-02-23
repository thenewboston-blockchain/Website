import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {SocialMedia} from 'types/social-media';
import {socialMediaUrls} from 'utils/social-media';

import SocialMediaIcon from './index';

const SIZE = 16;

describe('SocialMediaIcon component', () => {
  test('renders with expected props of iconSize 16 and discord as website', () => {
    render(<SocialMediaIcon iconSize={SIZE} website={SocialMedia.discord} />);

    const el = screen.getByTestId('A');
    expect(el).toBeTruthy();
    expect(el.hasAttribute('href')).toBeTruthy();
    expect(el.getAttribute('href')).toEqual(socialMediaUrls[SocialMedia.discord]);

    const svgIcon = el.querySelector('.mdi-icon');
    expect(svgIcon?.getAttribute('width')).toEqual(SIZE.toString());
    expect(svgIcon?.getAttribute('height')).toEqual(SIZE.toString());
  });
});
