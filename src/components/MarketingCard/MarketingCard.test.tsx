import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {SocialMedia} from 'types/social-media';
import {socialMediaUrls, socialMediaHandles, socialMediaDescriptions} from 'utils/social-media';

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

  it('renders with default className', () => {
    render(<MarketingCard {...baseProps} />);

    expect(screen.getByTestId('A')).toHaveClass('MarketingCard');
    expect(screen.getByTestId('MarketingCard__img')).toHaveClass('MarketingCard__img');
    expect(screen.getByTestId('MarketingCard__handle')).toHaveClass('MarketingCard__handle');
    expect(screen.getByTestId('MarketingCard__description')).toHaveClass('MarketingCard__description');
    expect(screen.getByTestId('MarketingCard__description__handle')).toHaveClass('MarketingCard__description__handle');
  });

  it('renders with className passedIn', () => {
    const props = {...baseProps, className: 'Test'};

    render(<MarketingCard {...props} />);

    expect(screen.getByTestId('A')).toHaveClass('Test');
    expect(screen.getByTestId('MarketingCard__img')).toHaveClass('Test__img');
    expect(screen.getByTestId('MarketingCard__handle')).toHaveClass('Test__handle');
    expect(screen.getByTestId('MarketingCard__description')).toHaveClass('Test__description');
    expect(screen.getByTestId('MarketingCard__description__handle')).toHaveClass('Test__description__handle');
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
