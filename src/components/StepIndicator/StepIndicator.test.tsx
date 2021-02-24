import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StepIndicator, {StepIndicatorProps} from '.';

const baseProps: StepIndicatorProps = {
  number: 1,
  text: <div>Hello world</div>,
};

describe('StepIndicator', () => {
  it('renders proper default className', () => {
    render(<StepIndicator {...baseProps} />);
    const el = screen.getByTestId('StepIndicator');
    const elBubble = screen.getByTestId('StepIndicator__bubble');
    const elText = screen.getByTestId('StepIndicator__text');

    expect(el.className).toBe('StepIndicator');
    expect(elBubble.className).toBe('StepIndicator__bubble');
    expect(elText.className).toBe('StepIndicator__text');
  });

  it('renders with classNames passed in', () => {
    render(<StepIndicator className="test" {...baseProps} />);
    const el = screen.getByTestId('StepIndicator');
    const elBubble = screen.getByTestId('StepIndicator__bubble');
    const elText = screen.getByTestId('StepIndicator__text');

    expect(el.className).toContain('test');
    expect(elBubble.className).toContain('test__bubble');
    expect(elText.className).toContain('test__text');
  });

  it('renders with number and text passed in', () => {
    render(<StepIndicator {...baseProps} />);

    expect(screen.getByTestId('StepIndicator__bubble')).toBeTruthy();
    expect(screen.getByTestId('StepIndicator__bubble').textContent).toEqual('1');

    expect(screen.getByTestId('StepIndicator__text')).toBeTruthy();
    expect(screen.getByTestId('StepIndicator__text').textContent).toEqual('Hello world');
  });
});
