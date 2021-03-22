import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import './TableVertical.scss';

export interface TableVerticalProps {
  altColors?: boolean;
  className?: string;
  innerBorders?: boolean;
  rows: ReactNode[][];
}

const TableVertical: FC<TableVerticalProps> = ({altColors = false, className, innerBorders = false, rows}) => {
  const renderBody = (): ReactNode => {
    return (
      <tbody
        className={clsx('TableVertical__tbody', {...bemify(className, '__tbody')})}
        data-testid="TableVertical__tbody"
      >
        {rows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={clsx('TableVertical__tr', {
              'TableVertical__tr--even': altColors && rowIndex % 2 === 0,
              ...bemify(className, '__tr'),
              ...bemify(className, '__tr--even', altColors && rowIndex % 2 === 0),
            })}
            data-testid="TableVertical__tr"
          >
            {row.map((item, itemIndex) => (
              <td
                key={itemIndex}
                className={clsx('TableVertical__td', {
                  'TableVertical__td--border': innerBorders,
                  ...bemify(className, '__td'),
                  ...bemify(className, '__td--border', innerBorders),
                })}
                data-testid="TableVertical__td"
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
      <table className={clsx('TableVertical', className)} data-testid="TableVertical">
        {renderBody()}
      </table>
    </div>
  );
};

export default TableVertical;
