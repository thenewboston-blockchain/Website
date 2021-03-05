import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DropdownInput from '.';

const BaseProps = {
  callbackOnChange: jest.fn(),
  defaultOption: 'first',
  options: ['first', 'second'],
};

describe('DropdownInput component', () => {
  test('renders without crashing', () => {
    render(<DropdownInput {...BaseProps} />);
    const el = screen.getByTestId('DropdownInput');
    expect(el.className).toContain('DropdownInput');
  });

  test('renders options', () => {
    render(<DropdownInput {...BaseProps} />);
    const options = screen.getAllByTestId('DropdownInput__option');
    expect(options.length).toEqual(BaseProps.options.length);
  });
  test('renders options with BaseProps.options value', () => {
    render(<DropdownInput {...BaseProps} />);
    const options = screen.getAllByTestId('DropdownInput__option');
    expect(options.length).toEqual(BaseProps.options.length);
    options.forEach((option, index) => {
      expect(option).toHaveValue(BaseProps.options[index]);
    });
  });

  test('renders options with classname', () => {
    render(<DropdownInput {...BaseProps} />);
    const options = screen.getAllByTestId('DropdownInput__option');
    expect(options.length).toEqual(BaseProps.options.length);

    options.forEach((option) => {
      expect(option).toHaveClass('DropdownInput__option');
    });
  });

  test('renders Icon with DropdownInput__chevron-down', () => {
    render(<DropdownInput {...BaseProps} />);
    const component = screen.getByTestId('DropdownInput');
    expect(component.querySelector('.DropdownInput__chevron-down')).toBeTruthy();
  });

  test('renders select box with className DropdownInput__select-box', () => {
    render(<DropdownInput {...BaseProps} />);
    expect(screen.getByTestId('DropdownInput__select-box')).toHaveClass('DropdownInput__select-box');
  });

  test('change select value to be second', () => {
    render(<DropdownInput {...BaseProps} />);

    fireEvent.change(screen.getByTestId('DropdownInput__select-box'), {
      target: {
        value: 'second',
      },
    });

    expect(screen.queryByDisplayValue('first')).toBeFalsy();
    expect(screen.queryByDisplayValue('second')).toBeTruthy();
  });

  test('ensure callbackOnChange is called once', () => {
    render(<DropdownInput {...BaseProps} />);

    fireEvent.change(screen.getByTestId('DropdownInput__select-box'), {
      target: {
        value: 'second',
      },
    });

    expect(BaseProps.callbackOnChange).toBeCalledTimes(1);
  });
});
