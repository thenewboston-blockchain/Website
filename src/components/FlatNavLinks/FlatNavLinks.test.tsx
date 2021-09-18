import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FlatNavLinks, {FlatNavLinksProps} from '.';

describe('FlatNavLinks component', () => {
  let handleOptionClick: jest.Mock;
  let props: FlatNavLinksProps;

  beforeEach(() => {
    handleOptionClick = jest.fn();
    props = {
      handleOptionClick,
      options: [
        {pathname: '/test1', title: 'Test 1'},
        {pathname: '/test2', title: 'Test 2'},
      ],
      selectedOption: '/test1',
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', () => {
    render(<FlatNavLinks {...props} />);

    expect(screen.getByTestId('FlatNavLinks')).toBeTruthy();
  });

  it('renders all the options passed in', () => {
    render(<FlatNavLinks {...props} />);

    const elements = screen.getAllByRole('button');

    expect(elements.length).toBe(props.options.length);
  });

  it('renders with className passed in', () => {
    render(<FlatNavLinks {...props} className="test" />);

    const parent = screen.getByTestId('FlatNavLinks');
    const child = screen.getAllByRole('button')[0];

    expect(parent).toHaveClass('test');
    expect(child).toHaveClass('test__option');
  });

  it('renders with title passed in', () => {
    render(<FlatNavLinks {...props} />);

    const elements = screen.getAllByRole('button');
    const isWorking = elements.every((el, i) => el.textContent === props.options[i].title);

    expect(isWorking).toBeTruthy();
  });

  it('triggers handleOptionClick when an option is clicked', () => {
    render(<FlatNavLinks {...props} />);

    const child = screen.getAllByRole('button')[0];

    child.click();
    expect(handleOptionClick).toHaveBeenCalled();
  });
});
