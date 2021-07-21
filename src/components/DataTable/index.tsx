import clsx from 'clsx';
import React, {FC, ReactNode} from 'react';

import './DataTable.scss';

type Props = {
  className?: string;
  columns: ReactNode[];
  data: ReactNode[][];
};

const DataTable: FC<Props> = ({className, columns, data}) => {
  const renderTableHeaders = (cols: ReactNode[]): ReactNode => {
    return (
      <>
        {cols.map((col, index) => (
          <th className={clsx('DataTable__table-thead-th', className && `${className}__table-thead-th`)} key={index}>
            {col}
          </th>
        ))}
      </>
    );
  };

  const renderTableRows = (rows: ReactNode[][]): ReactNode => {
    return (
      <>
        {rows.map((row, index) => (
          <tr className={clsx('DataTable__table-tbody-tr', className && `${className}__table-tbody-tr`)} key={index}>
            {row.map((cell, idx) => (
              <td
                className={clsx('DataTable__table-tbody-tr-td', className && `${className}__table-tbody-tr-td`)}
                key={idx}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </>
    );
  };

  return (
    <table className={clsx('DataTable__table', className && `${className}__table`)}>
      <thead className={clsx('DataTable__table-thead', className && `${className}__table-thead`)}>
        {renderTableHeaders(columns)}
      </thead>
      <tbody className={clsx('DataTable__table-tbody', className && `${className}__table-tbody`)}>
        {renderTableRows(data)}
      </tbody>
    </table>
  );
};

export default DataTable;
