import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Avatar, {AvatarProps, getFormattedSrc, getImageSizeBasedOnDeviceRatio} from '.';

describe('Avatar component', () => {
  const baseProps: AvatarProps = {
    size: 60,
    src: 'https://thenewboston.com',
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders fallback image', () => {
    render(<Avatar {...baseProps} />);
    expect(screen.getByTestId('Avatar--placeholder')).toBeTruthy();
  });

  it('renders fallback image with className passed in', () => {
    render(<Avatar className="test" {...baseProps} />);

    expect(screen.getByTestId('Avatar--placeholder')).toHaveClass('test');
  });

  it('renders fallback image with size passed in', () => {
    render(<Avatar className="test" {...baseProps} />);

    const placeholder = screen.getByTestId('Avatar--placeholder');

    expect(placeholder).toHaveStyle({height: `${baseProps.size.toString()}px`});
    expect(placeholder).toHaveStyle({width: `${baseProps.size.toString()}px`});
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

  describe('getFormattedSrc', () => {
    it('gets correct url for github', () => {
      const url =
        'https://avatars.githubusercontent.com/u/29539278?s=460&u=c949af33256607d5e1d93958398a139ff1d67227&v=4';
      const updatedUrl = 'https://avatars.githubusercontent.com/u/29539278?s=60';
      const result = getFormattedSrc(url, baseProps.size);

      expect(result).toEqual(updatedUrl);
    });

    it('gets correct url for any other url', () => {
      const url = 'https://via.placeholder.com/150';
      const result = getFormattedSrc(url, baseProps.size);

      expect(result).toEqual(url);
    });
  });
});
