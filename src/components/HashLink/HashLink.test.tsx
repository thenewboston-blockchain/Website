import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HashLink, {HashLinkProps} from './index';

const props: HashLinkProps = {
  className: 'className-test',
  id: 'id-test',
};

const testId = 'HashLink';

describe('HashLink', () => {
  it('renders without crashing', () => {
    render(<HashLink {...props} />);
  });

  it('renders with default className', () => {
    render(<HashLink {...props} />);

    const link = screen.getByTestId(testId);

    expect(link).toHaveClass(testId);
  });

  it('renders with passed className', () => {
    render(<HashLink {...props} />);

    const link = screen.getByTestId(testId);

    expect(link).toHaveClass('className-test');
  });

  it('renders with correct id', () => {
    render(<HashLink {...props} />);

    const link = screen.getByTestId(testId);
    const href = link.getAttribute('href');

    expect(href).toBe('#id-test');
  });
});
