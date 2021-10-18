import React from 'react';
import colors from 'styles/colors';
import fonts from 'styles/fonts/base';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {SocialMedia} from 'types/social-media';
import {socialMediaDescriptions, socialMediaHandles, socialMediaUrls} from 'utils/social-media';

import MarketingCard, {MarketingCardProps} from '.';

const baseProps: MarketingCardProps = {
  website: SocialMedia.twitter,
};

describe('MarketingCard component', () => {
  it('renders without crashing', () => {
    render(<MarketingCard {...baseProps} />);
  });

  it('renders social media handle', () => {
    render(<MarketingCard {...baseProps} />);

    expect(screen.getAllByText(socialMediaHandles[baseProps.website])).toBeTruthy();
  });

  it('renders social media description', () => {
    render(<MarketingCard {...baseProps} />);

    expect(screen.getAllByText(socialMediaDescriptions[baseProps.website])).toBeTruthy();
  });

  it('renders social media image', () => {
    render(<MarketingCard {...baseProps} />);

    expect(screen.getByTestId('MarketingCard__img')).toHaveAttribute('alt', baseProps.website);
  });

  it('renders with default styles', () => {
    render(<MarketingCard {...baseProps} />);

    expect(screen.getByTestId('A')).toHaveStyle(`background: ${colors.white}; color: ${colors.primary};`);
    expect(screen.getByTestId('MarketingCard__handle')).toHaveStyle(`font-weight: ${fonts.weight.semiBold};`);
    expect(screen.getByTestId('MarketingCard__description')).toHaveStyle('grid-column: 1 / 3;');
    expect(screen.getByTestId('MarketingCard__description__handle')).toHaveStyle(
      `display: none; font-weight: ${fonts.weight.semiBold};`,
    );
  });

  it('renders with social media link', () => {
    render(<MarketingCard {...baseProps} />);

    expect(screen.getByTestId('A')).toHaveAttribute('href', socialMediaUrls[baseProps.website]);
  });

  it('renders with custom link passedIn', () => {
    const props = {...baseProps, customLink: 'https://thenewsboston.com'};

    render(<MarketingCard {...props} />);

    expect(screen.getByTestId('A')).toHaveAttribute('href', props.customLink);
  });
});
