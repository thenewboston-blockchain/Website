import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {ClassName} from 'types/generic';
import HashLink, {HashLinkProps} from './index';

const props: HashLinkProps & ClassName = {
  id: 'id-test',
};

const testId = 'HashLink';

describe('HashLink', () => {
  it('renders without crashing', () => {
    render(<HashLink {...props} />);
  });

  it('renders with custom className', () => {
    const customClassName = 'Custom__HashLink';
    render(<HashLink className={customClassName} {...props} />);

    const link = screen.getByTestId(testId);

    expect(link).toHaveClass(customClassName);
  });

  it('renders with correct id', () => {
    render(<HashLink {...props} />);

    const link = screen.getByTestId(testId);
    const href = link.getAttribute('href');

    expect(href).toBe('#id-test');
  });
});
