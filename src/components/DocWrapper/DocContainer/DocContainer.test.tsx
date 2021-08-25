import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {ClassName} from 'types/generic';
import DocContainer, {DocContainerProps} from '.';

const baseProps: DocContainerProps & ClassName = {
  className: 'Test',
  id: 'test-id',
  lastUpdated: '06 Mar 2021',
  title: 'Test Title',
};

const idTest = 'HashLink';

describe('DocContainer Component', () => {
  it('renders without crashing', () => {
    render(<DocContainer {...baseProps} />);

    expect(screen.getByTestId('DocContainer')).toBeTruthy();
  });

  it('renders with default className', () => {
    render(<DocContainer {...baseProps} />);

    expect(screen.getByTestId('DocContainer')).toHaveClass('DocContainer');
    expect(screen.getByTestId('DocContainer__wrapper')).toHaveClass('DocContainer__wrapper');
    expect(screen.getByTestId('DocContainer__page-title')).toHaveClass('DocContainer__page-title');
  });

  it('renders with className passed in', () => {
    render(<DocContainer {...baseProps} />);

    expect(screen.getByTestId('DocContainer')).toHaveClass('Test');
    expect(screen.getByTestId('DocContainer__wrapper')).toHaveClass('Test__wrapper');
    expect(screen.getByTestId('DocContainer__page-title')).toHaveClass('Test__page-title');
  });

  it('renders with correct hashlink id', () => {
    render(<DocContainer {...baseProps} />);

    const id = screen.getByTestId(idTest);
    const href = id.getAttribute('href');

    expect(href).toBe('#test-id');
  });

  it('renders with lastUpdated passed in', () => {
    render(<DocContainer {...baseProps} />);
    const {lastUpdated} = baseProps;

    expect(lastUpdated).toMatch(
      /^(([0-9]|[0-2][0-9]|[3][0-1]) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (20[0-9][0-9]))$/,
    );
    expect(screen.getAllByText(`Updated on ${lastUpdated}`)).toBeTruthy();
  });

  it('renders with title passed in', () => {
    render(<DocContainer {...baseProps} />);

    expect(screen.queryByText('Test Title')).toBeTruthy();
  });
});
