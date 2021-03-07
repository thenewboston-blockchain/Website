import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SlideUp from '.';

const slideUpRoot = document.createElement('div');
slideUpRoot.setAttribute('id', 'slide-up-root');
document.body.appendChild(slideUpRoot);

describe('SlideUp component', () => {
  test('renders with text passed in', () => {
    render(<SlideUp close={() => {}}>Hello World</SlideUp>);
    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  test('calls close prop when component is clicked', () => {
    const close = jest.fn();
    render(<SlideUp close={close}>Hello World</SlideUp>);
    fireEvent.click(screen.getByTestId('SlideUp__overlay'));
    expect(close).toHaveBeenCalled();
  });

  test('renders with className passed in', () => {
    render(<SlideUp close={() => {}} className="test" />);
    expect(screen.getByTestId('SlideUp')).toHaveClass('test');
    expect(screen.getByTestId('SlideUp__content')).toHaveClass('test__content');
  });
});
