import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {ClassName} from 'types/generic';
import DocCallout, {CalloutType, DocCalloutProps} from '.';

const baseProps: DocCalloutProps & ClassName = {
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

  it('renders the children content', () => {
    render(<DocCallout {...baseProps}>Hello World</DocCallout>);

    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  it('renders properly for CalloutType note', () => {
    render(<DocCallout {...baseProps} type={CalloutType.note} />);

    expect(screen.getByText('Note')).toBeTruthy();
    expect(screen.getByTestId('DocCallout__icon--note')).toBeTruthy();
  });

  it('renders properly for CalloutType important', () => {
    render(<DocCallout {...baseProps} type={CalloutType.important} />);

    expect(screen.getByText('Important')).toBeTruthy();
    expect(screen.getByTestId('DocCallout__icon--important')).toBeTruthy();
  });

  it('renders properly for CalloutType warning', () => {
    render(<DocCallout {...baseProps} type={CalloutType.warning} />);

    expect(screen.getByText('Warning')).toBeTruthy();
    expect(screen.getByTestId('DocCallout__icon--warning')).toBeTruthy();
  });
});
