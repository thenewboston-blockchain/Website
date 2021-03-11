import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DocCallout, {DocCalloutProps, CalloutType} from '.';

const baseProps: DocCalloutProps = {
  className: 'Test',
  type: CalloutType.note,
};

const {type} = baseProps;

describe('DocCallout Component', () => {
  it('renders without crashing', () => {
    render(<DocCallout {...baseProps} />);

    expect(screen.getByTestId('DocCallout')).toBeTruthy();
  });

  it('renders with default className', () => {
    render(<DocCallout {...baseProps} />);

    expect(screen.getByTestId('DocCallout')).toHaveClass('DocCallout');
    expect(screen.getByTestId('DocCallout')).toHaveClass(`DocCallout--${type}`);
    expect(screen.getByTestId('DocCallout__header')).toHaveClass('DocCallout__header');
    expect(screen.getByTestId('DocCallout__header')).toHaveClass(`DocCallout__header--${type}`);
  });

  it('renders with className passed in', () => {
    render(<DocCallout {...baseProps} />);

    expect(screen.getByTestId('DocCallout')).toHaveClass('Test');
    expect(screen.getByTestId('DocCallout')).toHaveClass(`Test--${type}`);
    expect(screen.getByTestId('DocCallout__header')).toHaveClass('Test__header');
    expect(screen.getByTestId('DocCallout__header')).toHaveClass(`Test__header--${type}`);
  });

  it('renders with type passed in', () => {
    render(<DocCallout {...baseProps} />);

    expect(screen.getByText(type, {exact: false})).toBeTruthy();
  });
});
