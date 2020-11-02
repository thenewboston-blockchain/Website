import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

import './TableBorderGrid.scss';

interface ComponentProps {
  className?: string;
  headers?: ReactNode[];
  rows: ReactNode[][];
  title?: ReactNode;
}

const TableBorderGrid: FC<ComponentProps> = ({className, headers, rows, title}) => {
  const renderBody = (): ReactNode => {
    return (
      <tbody className={clsx('TableBorderGrid__tbody', {...getCustomClassNames(className, '__tbody', true)})}>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={clsx('TableBorderGrid__tr', {...getCustomClassNames(className, '__tr', true)})}>
            {row.map((item, itemIndex) => (
              <td
                key={itemIndex}
                className={clsx('TableBorderGrid__td', {...getCustomClassNames(className, '__td', true)})}
              >
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
      <thead className={clsx('TableBorderGrid__thead', {...getCustomClassNames(className, '__thead', true)})}>
        <tr
          className={clsx('TableBorderGrid__tr TableBorderGrid__tr--header', {
            ...getCustomClassNames(className, '__tr', true),
          })}
        >
          {headers.map((header, i) => (
            <th key={i} className={clsx('TableBorderGrid__th', {...getCustomClassNames(className, '__th', true)})}>
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
        <div className={clsx('TableBorderGrid__title', {...getCustomClassNames(className, '__title', true)})}>
          {title}
        </div>
      ) : null}
      <div className={clsx('TableBorderGrid', className)}>
        <table className={clsx('TableBorderGrid__table', {...getCustomClassNames(className, '__table', true)})}>
          {renderHeaders()}
          {renderBody()}
        </table>
      </div>
    </div>
  );
};

export default TableBorderGrid;
