import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

import './TableVertical.scss';

interface ComponentProps {
  altColors?: boolean;
  className?: string;
  innerBorders?: boolean;
  rows: ReactNode[][];
}

const TableVertical: FC<ComponentProps> = ({altColors = false, className, innerBorders = false, rows}) => {
  const renderBody = (): ReactNode => {
    return (
      <tbody className={clsx('TableVertical__tbody', {...getCustomClassNames(className, '__tbody', true)})}>
        {rows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={clsx('TableVertical__tr', {
              'TableVertical__tr--even': altColors && rowIndex % 2 === 0,
              ...getCustomClassNames(className, '__tr', true),
              ...getCustomClassNames(className, '__tr--even', altColors && rowIndex % 2 === 0),
            })}
          >
            {row.map((item, itemIndex) => (
              <td
                key={itemIndex}
                className={clsx('TableVertical__td', {
                  'TableVertical__td--border': innerBorders,
                  ...getCustomClassNames(className, '__td', true),
                  ...getCustomClassNames(className, '__td--border', innerBorders),
                })}
              >
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div>
      <table className={clsx('TableVertical', className)}>{renderBody()}</table>
    </div>
  );
};

export default TableVertical;
