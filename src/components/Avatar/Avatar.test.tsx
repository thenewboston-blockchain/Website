import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Avatar, {AvatarProps, getImageSizeBasedOnDeviceRatio} from '.';

describe('Avatar component', () => {
  const baseProps: AvatarProps = {
    alt: 'Test Text',
    size: 60,
    src: 'https://avatars.githubusercontent.com/u/29539278?s=460&u=c949af33256607d5e1d93958398a139ff1d67227&v=4',
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders image', () => {
    render(<Avatar {...baseProps} />);

    expect(screen.getByTestId('Avatar')).toBeTruthy();
  });

  it('renders image with default className', () => {
    render(<Avatar {...baseProps} />);

    expect(screen.getByTestId('Avatar')).toHaveClass('Avatar');
  });

  it('renders image with className passed in', () => {
    render(<Avatar className="test" {...baseProps} />);

    expect(screen.getByTestId('Avatar')).toHaveClass('test');
  });

  describe('getImageSizeBasedOnDeviceRatio', () => {
    it('calculates correct image size based on device pixel ratio', () => {
      const dpr = 3;

      const devicePixelRatioGetter = jest.fn().mockReturnValue(dpr);

      jest.spyOn(global, 'window', 'get').mockImplementation(() =>
        Object.defineProperty({}, 'devicePixelRatio', {
          get: devicePixelRatioGetter,
        }),
      );

      expect(getImageSizeBasedOnDeviceRatio(baseProps.size)).toBe(baseProps.size * dpr);
    });
  });

  describe('renders image with updated url', () => {
    it('renders image with github url', () => {
      const updatedUrl = 'https://avatars.githubusercontent.com/u/29539278?s=60';
      render(<Avatar {...baseProps} />);

      const el = screen.getByTestId('Avatar');

      expect(el).toHaveAttribute('src', updatedUrl);
    });

    it('renders image with slack url', () => {
      const props = {...baseProps, src: 'https://ca.slack-edge.com/T07PJD1FZ-U01EDKBT8LA-a17fa362a21e-512'};
      const updatedUrl = 'https://ca.slack-edge.com/T07PJD1FZ-U01EDKBT8LA-a17fa362a21e-60';
      render(<Avatar {...props} />);

      const el = screen.getByTestId('Avatar');

      expect(el).toHaveAttribute('src', updatedUrl);
    });

    it('renders image with any other url', () => {
      const props = {...baseProps, src: 'https://via.placeholder.com/150'};
      render(<Avatar {...props} />);

      const el = screen.getByTestId('Avatar');

      expect(el).toHaveAttribute('src', props.src);
    });
  });

  it('renders image with alt text passed in', () => {
    render(<Avatar {...baseProps} />);

    expect(screen.getByTestId('Avatar')).toHaveAttribute('alt', baseProps.alt);
  });

  it('renders image with size passed in', () => {
    render(<Avatar {...baseProps} />);

    const el = screen.getByTestId('Avatar');

    expect(el).toHaveAttribute('height', baseProps.size.toString());
    expect(el).toHaveAttribute('width', baseProps.size.toString());
  });

  describe('renders fallback component', () => {
    it('renders fallback component if empty stings passed as src', () => {
      const props = {...baseProps, src: ''};
      render(<Avatar {...props} />);

      const el = screen.getByTestId('Avatar--placeholder');

      expect(el).toBeTruthy();
    });

    it('renders fallback component with size passed in', () => {
      const props = {...baseProps, src: ''};
      render(<Avatar {...props} />);

      const el = screen.getByTestId('Avatar--placeholder');

      expect(el.style).toHaveProperty('height', `${props.size}px`);
      expect(el.style).toHaveProperty('width', `${props.size}px`);
    });
  });
});
