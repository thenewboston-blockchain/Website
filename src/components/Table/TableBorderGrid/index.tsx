import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';

import './TableBorderGrid.scss';

export interface TableBorderGridProps {
  className?: string;
  headers?: ReactNode[];
  rows: ReactNode[][];
  title?: ReactNode;
}

const TableBorderGrid: FC<TableBorderGridProps> = ({className, headers, rows, title}) => {
  const renderBody = (): ReactNode => {
    return (
      <tbody className={clsx('TableBorderGrid__tbody', {...bemify(className, '__tbody')})}>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={clsx('TableBorderGrid__tr', {...bemify(className, '__tr')})}>
            {row.map((item, itemIndex) => (
              <td key={itemIndex} className={clsx('TableBorderGrid__td', {...bemify(className, '__td')})}>
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };

  const renderHeaders = (): ReactNode => {
    if (!headers) return;

    return (
      <thead className={clsx('TableBorderGrid__thead', {...bemify(className, '__thead')})}>
        <tr
          className={clsx('TableBorderGrid__tr TableBorderGrid__tr--header', {
            ...bemify(className, '__tr'),
          })}
        >
          {headers.map((header, i) => (
            <th key={i} className={clsx('TableBorderGrid__th', {...bemify(className, '__th')})}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  return (
    <div>
      {title ? (
        <div
          className={clsx('TableBorderGrid__title', {...bemify(className, '__title')})}
          data-testid="TableBorderGrid__title"
        >
          {title}
        </div>
      ) : null}
      <div className={clsx('TableBorderGrid', className)} data-testid="TableBorderGrid">
        <table
          className={clsx('TableBorderGrid__table', {...bemify(className, '__table')})}
          data-testid="TableBorderGrid__table"
        >
          {renderHeaders()}
          {renderBody()}
        </table>
      </div>
    </div>
  );
};

export default TableBorderGrid;
