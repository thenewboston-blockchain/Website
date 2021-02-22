/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DocList, {DocListProps} from './index';

describe('DocList', () => {
  let props: DocListProps;

  beforeEach(() => {
    props = {
      className: 'test-class',
      variant: 'ul',
    };
  });

  it('renders without crashing', () => {
    render(<DocList {...props}>Hello World</DocList>);
  });

  it('renders with proper default className', () => {
    render(<DocList {...props}>Hello World</DocList>);
    const list = screen.getByTestId(`DocList--${props.variant}`);

    expect(list).toHaveClass('DocList');
  });

  it('renders unorderd list when specified in variant prop', () => {
    render(<DocList {...props}>Hello World</DocList>);
    const list = screen.getByTestId(`DocList--ul`);

    expect(list).toBeTruthy();
    expect(list).toHaveClass(`DocList--ul`);
  });

  it('renders unorderd list with passed in className', () => {
    render(<DocList {...props}>Hello World</DocList>);
    const list = screen.getByTestId(`DocList--ul`);

    expect(list).toHaveClass('test-class');
  });

  it('renders orderd list when specified in variant prop', () => {
    render(<DocList variant="ol">Hello World</DocList>);
    const list = screen.getByTestId(`DocList--ol`);

    expect(list).toBeTruthy();
    expect(list).toHaveClass(`DocList--ol`);
  });

  it('renders orderd list with passed in className', () => {
    render(
      <DocList className={props.className} variant="ol">
        Hello World
      </DocList>,
    );
    const list = screen.getByTestId(`DocList--ol`);

    expect(list).toHaveClass('test-class');
  });
});
