import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LabelFilter, {LabelFilterProps} from '.';

const RGB_LABEL_COLORS = {
  bug: 'rgb(205, 61, 100)',
  design: 'rgb(199, 194, 234)',
};

const DEFAULT_RGB_LABEL_COLOR = 'rgb(227, 232, 238)';

const baseProps: LabelFilterProps = {
  handleLabelClick: jest.fn(),
  selectedLabelNames: ['bug', 'design'],
};

describe('LabelFilter', () => {
  it('renders proper default className', () => {
    render(<LabelFilter {...baseProps} />);
    const el = screen.getByTestId('LabelFilter');
    const elButtons = screen.getAllByTestId('LabelFilter__button');
    const elLabels = screen.getAllByTestId('Label');

    expect(el.className).toBe('LabelFilter');
    elLabels.every((elLabel) => expect(elLabel.className.includes('LabelFilter__label')).toBe(true));
    elButtons.every((elButton) => expect(elButton.className).toBe('LabelFilter__button'));
  });

  it('renders with classNames passed in', () => {
    render(<LabelFilter className="Test" {...baseProps} />);
    const el = screen.getByTestId('LabelFilter');

    expect(el.className).toContain('Test');
  });

  it('renders selected options with correct background colors', () => {
    render(<LabelFilter {...baseProps} />);
    const elLabels = screen.getAllByTestId('Label');

    const selectedBugLabel = elLabels.find((elLabel) => elLabel.textContent === 'bug') as HTMLElement;
    const selectedDesignLabel = elLabels.find((elLabel) => elLabel.textContent === 'design') as HTMLElement;
    const unselectedLabels = elLabels.filter(
      (elLabel) => elLabel.textContent !== 'bug' && elLabel.textContent !== 'design',
    ) as HTMLElement[];

    expect(selectedBugLabel.style).toHaveProperty('background-color', RGB_LABEL_COLORS.bug);
    expect(selectedDesignLabel.style).toHaveProperty('background-color', RGB_LABEL_COLORS.design);
    unselectedLabels.every((unselectedLabel) =>
      expect(unselectedLabel.style).toHaveProperty('background-color', DEFAULT_RGB_LABEL_COLOR),
    );
  });

  it('triggers handleLabelClick when a label is clicked', () => {
    render(<LabelFilter {...baseProps} />);
    const elLabels = screen.getAllByTestId('Label');

    const selectedLabel = elLabels.find((elLabel) => elLabel.textContent === 'suggestion') as HTMLElement;
    selectedLabel.click();
    expect(baseProps.handleLabelClick).toHaveBeenCalledWith('suggestion');
  });
});
