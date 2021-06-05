import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {SocialMedia} from 'types/social-media';
import {socialMediaUrls} from 'utils/social-media';

import SocialMediaIcon from './index';

const SIZE = 16;
const TOTAL_SIZE = 32;

describe('SocialMediaIcon component', () => {
  test('renders with expected link', () => {
    render(<SocialMediaIcon iconSize={SIZE} totalSize={TOTAL_SIZE} website={SocialMedia.discord} />);
    const el = screen.getByTestId('A');

    expect(el).toBeTruthy();
    expect(el.getAttribute('href')).toEqual(socialMediaUrls[SocialMedia.discord]);
  });

  test('renders with correct iconSize and totalSize', () => {
    render(<SocialMediaIcon iconSize={SIZE} totalSize={TOTAL_SIZE} website={SocialMedia.facebook} />);
    const el = screen.getByTestId('A');
    const icon = screen.getByTestId('Icon');
    const svgIcon = el.querySelector('.mdi-icon');

    expect(svgIcon?.getAttribute('width')).toEqual(SIZE.toString());
    expect(svgIcon?.getAttribute('height')).toEqual(SIZE.toString());
    expect(icon.style).toHaveProperty('height', `${TOTAL_SIZE.toString()}px`);
    expect(icon.style).toHaveProperty('width', `${TOTAL_SIZE.toString()}px`);
  });

  test('renders with default className', () => {
    render(<SocialMediaIcon iconSize={SIZE} totalSize={TOTAL_SIZE} website={SocialMedia.facebook} />);
    const el = screen.getByTestId('A');

    expect(el.className).toContain('SocialMediaIcon');
  });

  test('renders with className passed in', () => {
    render(
      <SocialMediaIcon className="test-class" totalSize={TOTAL_SIZE} iconSize={SIZE} website={SocialMedia.facebook} />,
    );
    const el = screen.getByTestId('A');

    expect(el.className).toContain('test-class');
  });
});
