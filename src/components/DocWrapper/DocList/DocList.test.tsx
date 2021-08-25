import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {ClassName} from 'types/generic';
import DocList, {DocListProps} from './index';

const props: DocListProps & ClassName = {
  className: 'test-class',
  variant: 'ul',
};

const testIdUl = 'DocList--ul';
const testIdOl = 'DocList--ol';

describe('DocList', () => {
  it('renders without crashing', () => {
    render(<DocList {...props}>Hello World</DocList>);
  });

  it('renders with proper default className', () => {
    render(<DocList {...props}>Hello World</DocList>);
    const listUl = screen.getByTestId(testIdUl);
    const listOl = screen.getByTestId(testIdUl);

    expect(listUl).toHaveClass('DocList');
    expect(listOl).toHaveClass('DocList');
  });

  it('renders unordered list when specified in variant prop', () => {
    render(<DocList {...props}>Hello World</DocList>);
    const list = screen.getByTestId(testIdUl);

    expect(list).toBeTruthy();
    expect(list).toHaveClass(testIdUl);
  });

  it('renders unordered list with passed in className', () => {
    render(<DocList {...props}>Hello World</DocList>);
    const list = screen.getByTestId(testIdUl);

    expect(list).toHaveClass('test-class');
    expect(list).toHaveClass('test-class--ul');
  });

  it('renders ordered list when specified in variant prop', () => {
    render(<DocList variant="ol">Hello World</DocList>);
    const list = screen.getByTestId(testIdOl);

    expect(list).toBeTruthy();
    expect(list).toHaveClass(testIdOl);
  });

  it('renders ordered list with passed in className', () => {
    render(
      <DocList className={props.className} variant="ol">
        Hello World
      </DocList>,
    );
    const list = screen.getByTestId(testIdOl);

    expect(list).toHaveClass('test-class');
    expect(list).toHaveClass('test-class--ol');
  });
});
