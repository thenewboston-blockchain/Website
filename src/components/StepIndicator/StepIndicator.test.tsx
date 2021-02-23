import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StepIndicator from './index';

describe('StepIndicator component', () => {
  test('renders with expected props of iconSize 16 and discord as website', () => {
    render(<StepIndicator number={1} text="Step 1" />);

    const el = screen.getByTestId('StepIndicator');
    expect(el).toBeTruthy();
    expect(el.querySelector('.StepIndicator__bubble')?.innerHTML).toEqual('1');
    expect(el.querySelector('.StepIndicator__text')?.innerHTML).toEqual('Step 1');
  });

  test('renders StepIndicator and get by className', () => {
    render(<StepIndicator number={1} text="Step 1" className="StepIndicator" />);

    const el = screen.getByTestId('StepIndicator');
    expect(el.className).toContain('StepIndicator');
  });

  test('renders StepIndicator and check textNode and query with className', () => {
    const TextNode = <div className="InnerText">Test</div>;

    render(<StepIndicator number={1} text={TextNode} />);

    const text = screen.getByText('Test');

    expect(text).toBeTruthy();
    expect(text.className).toContain('InnerText');
  });
});
