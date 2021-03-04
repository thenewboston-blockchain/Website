import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DocImage, {DocImageProps} from '.';

const baseProps: DocImageProps = {
  alt: 'Test Text',
  maxWidth: 60,
  src: 'https://avatars.githubusercontent.com/u/29539278?s=460&u=c949af33256607d5e1d93958398a139ff1d67227&v=4',
};

describe('Avatar component', () => {
  it('renders image', () => {
    render(<DocImage {...baseProps} />);

    expect(screen.getByTestId('DocImage')).toBeTruthy();
  });

  it('renders image with default className', () => {
    render(<DocImage {...baseProps} />);

    expect(screen.getByTestId('DocImage')).toHaveClass('DocImage');
    expect(screen.getByTestId('DocImage__img')).toHaveClass('DocImage__img');
    expect(screen.getByTestId('DocImage__img')).not.toHaveClass('DocImage__bordered');
  });

  it('renders image with className passed in', () => {
    render(<DocImage {...baseProps} className="test" />);

    expect(screen.getByTestId('DocImage')).toHaveClass('test');
    expect(screen.getByTestId('DocImage__img')).toHaveClass('test__img');
  });

  it('renders image with bordered passed in', () => {
    render(<DocImage bordered {...baseProps} />);

    const imgEl = screen.getByTestId('DocImage__img');
    expect(imgEl).toHaveClass('DocImage__bordered');
  });

  it('renders image with src image passed in', () => {
    render(<DocImage {...baseProps} />);

    expect(screen.getByTestId('DocImage__img')).toHaveAttribute('src', baseProps.src);
  });

  it('renders image with alt text passed in', () => {
    render(<DocImage {...baseProps} />);

    expect(screen.getByTestId('DocImage__img')).toHaveAttribute('alt', baseProps.alt);
  });

  it('renders image with maxWidth passed in', () => {
    render(<DocImage {...baseProps} />);

    const el = screen.getByTestId('DocImage__img');

    expect(el.style).toHaveProperty('max-width', `${baseProps.maxWidth}px`);
  });
});
