import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {ClassName} from 'types/generic';
import DocSubSection, {DocSubSectionProps} from './index';

const props: DocSubSectionProps & ClassName = {
  className: 'className-test',
  id: 'id-test',
  title: 'title-test',
};

const sectionTestId = 'DocSubSection__h2';
const idTestId = 'HashLink';

describe('DocSubSection', () => {
  it('renders without crashing', () => {
    render(<DocSubSection {...props} />);
  });

  it('renders with default className', () => {
    render(<DocSubSection {...props} />);
    const section = screen.getByTestId(sectionTestId);
    const id = screen.getByTestId(idTestId);

    expect(section).toHaveClass(sectionTestId);
    expect(id).toHaveClass('DocSubSection__HashLink');
  });

  it('renders with passed className', () => {
    render(<DocSubSection {...props} />);
    const section = screen.getByTestId(sectionTestId);

    expect(section).toHaveClass('className-test__h2');
  });

  it('renders with correct hashlink id', () => {
    render(<DocSubSection {...props} />);
    const id = screen.getByTestId(idTestId);
    const href = id.getAttribute('href');

    expect(href).toBe('#id-test');
  });

  it('renders with correct title', () => {
    render(<DocSubSection {...props} />);
    const section = screen.getByTestId(sectionTestId);

    expect(section).toHaveTextContent('title-test');
  });

  it('renders with title as React Element', () => {
    const titleComp = <title>h1 test title</title>;

    render(<DocSubSection title={titleComp} />);
    const section = screen.getByTestId(sectionTestId);

    expect(section).toHaveTextContent('h1 test title');
  });
});
