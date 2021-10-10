import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TableParams from './index';

const TestItems = [
  {
    dataType: 'TestType',
    description: <div>FirstSampleNode</div>,
    param: 'FirstTestParam',
  },
  {
    dataType: 'TestTypeWithSampleValue',
    description: <div>SecondSampleNode</div>,
    param: 'SecondTestParam',
    sampleValue: 'SampleValue',
  },
  {
    dataType: 'TestTypeWithSampleValue',
    description: <div>ThirdSampleNode</div>,
    param: 'ThirdTestParam',
    sampleValue: 'SampleValue',
  },
];

const TestCases = [
  {
    dataType: 'TestType',
    description: <div>SecondSampleNode</div>,
    param: 'FirstTestParam',
    text: 'FirstSampleNode',
  },
  {
    dataType: 'TestTypeWithSampleValue',
    description: <div>SecondSampleNode</div>,
    param: 'SecondTestParam',
    sampleValue: 'SampleValue',
    text: 'SecondSampleNode',
  },
  {
    dataType: 'TestTypeWithSampleValue',
    description: <div>ThirdSampleNode</div>,
    param: 'ThirdTestParam',
    sampleValue: 'SampleValue',
    text: 'ThirdSampleNode',
  },
];

interface DummyProps {
  text: string;
}
const DummyHeader = ({text}: DummyProps) => <div>{text}</div>;
const TestHeaders = [
  <DummyHeader text="FirstHeader" />,
  <DummyHeader text="SecondHeader" />,
  <DummyHeader text="ThirdHeader" />,
];

describe('TableParams component', () => {
  describe('render component without headers', () => {
    test('renders component with testid', () => {
      render(<TableParams items={TestItems} />);

      const tableParams = screen.getByTestId('TableParams');
      const tableBody = screen.getByTestId('TableParams__tbody');

      expect(tableParams).toBeTruthy();
      expect(tableBody).toBeTruthy();
    });

    test('check number of items equal number of TestItems', () => {
      render(<TableParams items={TestItems} />);

      const tableBody = screen.getByTestId('TableParams__tbody');
      const items = tableBody.querySelectorAll('tr');

      expect(items).toBeTruthy();
      expect(items.length).toEqual(TestItems.length);
    });

    describe('Check first item in table body', () => {
      test('has className TableParams__tr and TableParams__tr--even', () => {
        render(<TableParams items={TestItems} />);

        const tableBody = screen.getByTestId('TableParams__tbody');
        const items = tableBody.querySelectorAll('tr');
        const firstItem = items[0];

        expect(firstItem).toHaveClass('TableParams__tr');
        expect(firstItem.classList.contains('TableParams__tr--even')).toBeTruthy();
      });
    });

    describe('Check tbody rows', () => {
      test('for param', () => {
        render(<TableParams items={TestItems} />);

        const params = screen.getAllByTestId('TableParams__td--param');

        expect(params.length).toEqual(TestItems.length);

        TestCases.forEach((testCase, index) => {
          expect(params[index]).toHaveTextContent(testCase.param);
        });
      });

      test('for dataType', () => {
        render(<TableParams items={TestItems} />);

        const dataTypes = screen.getAllByTestId('TableParams__data-type');

        expect(dataTypes.length).toEqual(TestItems.length);

        TestCases.forEach((testCase, index) => {
          expect(dataTypes[index]).toHaveTextContent(testCase.dataType);
        });
      });

      test('for description', () => {
        render(<TableParams items={TestItems} />);

        const descriptions = screen.getAllByTestId('TableParams__td--description');

        expect(descriptions.length).toEqual(TestItems.length);

        TestCases.forEach((testCase, index) => {
          expect(descriptions[index]).toHaveTextContent(testCase.text);
        });
      });

      test('for sampleValue', () => {
        render(<TableParams items={TestItems} />);
        const sampleValues = screen.getAllByTestId('TableParams__td--sample-value');

        expect(sampleValues.length).toEqual(2);
        expect(screen.getAllByText('SampleValue').length).toEqual(2);
      });
    });
  });

  describe('render component headers', () => {
    test('Check if thead exists', () => {
      render(<TableParams headers={TestHeaders} items={TestItems} />);

      const thead = screen.getByTestId('TableParams__thead');
      expect(thead).toBeTruthy();
    });

    test('Check if number of headers equal TestHeaders length', () => {
      render(<TableParams headers={TestHeaders} items={TestItems} />);

      const thead = screen.getByTestId('TableParams__thead');
      expect(thead.querySelectorAll('.TableParams__th').length).toEqual(TestHeaders.length);
    });

    test('Check if all headers exists', () => {
      render(<TableParams headers={TestHeaders} items={TestItems} />);

      expect(screen.getByText('FirstHeader')).toBeTruthy();
      expect(screen.getByText('SecondHeader')).toBeTruthy();
      expect(screen.getByText('ThirdHeader')).toBeTruthy();
    });
  });

  test('TableParams has default classNames', () => {
    render(<TableParams headers={TestHeaders} items={TestItems} />);
    expect(screen.getByTestId('TableParams')).toHaveClass('TableParams');
    expect(screen.getByTestId('TableParams__table')).toHaveClass('TableParams__table');
    expect(screen.getByTestId('TableParams__thead')).toHaveClass('TableParams__thead');
    expect(screen.getByTestId('TableParams__tbody')).toHaveClass('TableParams__tbody');
  });

  test('TableParams renders with correct custom classNames', () => {
    render(<TableParams className="CustomClassName" headers={TestHeaders} items={TestItems} />);
    expect(screen.getByTestId('TableParams')).toHaveClass('CustomClassName');
    expect(screen.getByTestId('TableParams__table')).toHaveClass('CustomClassName__table');
    expect(screen.getByTestId('TableParams__thead')).toHaveClass('CustomClassName__thead');
    expect(screen.getByTestId('TableParams__tbody')).toHaveClass('CustomClassName__tbody');

    const paramEls = screen.getAllByTestId('TableParams__td--param');
    paramEls.forEach((item) => {
      expect(item).toHaveClass('CustomClassName__td--param');
    });

    const dataTypeEls = screen.getAllByTestId('TableParams__data-type');
    dataTypeEls.forEach((item) => {
      expect(item).toHaveClass('CustomClassName__data-type');
    });

    const descriptionEls = screen.getAllByTestId('TableParams__td--description');
    descriptionEls.forEach((item) => {
      expect(item).toHaveClass('CustomClassName__td--description');
    });

    const sampleValueEls = screen.getAllByTestId('TableParams__td--sample-value');
    sampleValueEls.forEach((item) => {
      expect(item).toHaveClass('CustomClassName__td--sample-value');
    });
  });
});
