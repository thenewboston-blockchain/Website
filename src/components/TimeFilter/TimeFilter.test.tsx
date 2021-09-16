import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {Time} from 'types/github';
import TimeFilter, {TimeFilterProps} from '.';

const baseProps: TimeFilterProps = {
  selectedFilter: Time.all,
  setSelectedFilter: jest.fn(),
};

describe('TimeFilter', () => {
  it('renders with classNames passed in', () => {
    render(<TimeFilter className="Test" {...baseProps} />);
    const el = screen.getByTestId('TimeFilter');

    expect(el.className).toContain('Test');
  });

  it('renders only one active option which is the selected option', () => {
    render(<TimeFilter className="Test" {...baseProps} />);
    const elOptions = screen.getAllByTestId('TimeFilter__option');

    const selectedElOption = elOptions.filter((elOption) =>
      elOption.className.includes('Test__option--active'),
    ) as HTMLElement[];
    expect(selectedElOption.length === 1).toBe(true);
    expect(selectedElOption[0].textContent).toBe(baseProps.selectedFilter);
  });

  it('triggers setSelectedFilter when an option is clicked', () => {
    render(<TimeFilter {...baseProps} />);
    const elOptions = screen.getAllByTestId('TimeFilter__option');

    const selectedElOption = elOptions.find((elOption) => elOption.textContent === Time.days30) as HTMLElement;
    selectedElOption.click();
    expect(baseProps.setSelectedFilter).toHaveBeenCalledWith(Time.days30);
  });
});
