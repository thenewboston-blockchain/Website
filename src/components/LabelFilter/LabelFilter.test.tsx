import '@testing-library/jest-dom/extend-expect';
import {render, screen} from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import LabelFilter, {LabelFilterProps} from '.';

const HEX_LABEL_COLORS = {
  bug: '#cd3d64',
  design: '#c7c2ea',
};

const DEFAULT_HEX_LABEL_COLOR = '#e3e8ee';

const baseProps: LabelFilterProps = {
  handleLabelClick: jest.fn(),
  selectedLabelNames: ['bug', 'design'],
};

describe('LabelFilter', () => {
  it('renders with custom className', () => {
    const customClassName = 'Custom__LabelFilter';
    render(<LabelFilter className={customClassName} {...baseProps} />);
    const el = screen.getByTestId('LabelFilter');

    expect(el.className).toContain(customClassName);
  });

  it('renders selected options with correct background colors', () => {
    render(<LabelFilter {...baseProps} />);
    const elLabels = screen.getAllByTestId('Label');

    const selectedBugLabel = elLabels.find((elLabel) => elLabel.textContent === 'bug') as HTMLElement;
    const selectedDesignLabel = elLabels.find((elLabel) => elLabel.textContent === 'design') as HTMLElement;
    const unselectedLabels = elLabels.filter(
      (elLabel) => elLabel.textContent !== 'bug' && elLabel.textContent !== 'design',
    ) as HTMLElement[];

    expect(selectedBugLabel).toHaveStyleRule('background-color', HEX_LABEL_COLORS.bug);
    expect(selectedDesignLabel).toHaveStyleRule('background-color', HEX_LABEL_COLORS.design);
    unselectedLabels.every((unselectedLabel) =>
      expect(unselectedLabel).toHaveStyleRule('background-color', DEFAULT_HEX_LABEL_COLOR),
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
