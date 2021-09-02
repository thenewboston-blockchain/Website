import React, {ReactNode} from 'react';
import {SFC} from 'types/generic';

import * as S from './Styles';

type Props = {
  columns: ReactNode[];
  data: ReactNode[][];
};

const DataTable: SFC<Props> = ({className, columns, data}) => {
  const renderTableHeaders = (cols: ReactNode[]): ReactNode => {
    return (
      <>
        {cols.map((col, index) => (
          <S.Th className={className && `${className}__table-thead-th`} key={index}>
            {col}
          </S.Th>
        ))}
      </>
    );
  };

  const renderTableRows = (rows: ReactNode[][]): ReactNode => {
    return (
      <>
        {rows.map((row, index) => (
          <S.Tr className={className && `${className}__table-tbody-tr`} key={index}>
            {row.map((cell, idx) => (
              <S.Td className={className && `${className}__table-tbody-tr-td`} key={idx}>
                {cell}
              </S.Td>
            ))}
          </S.Tr>
        ))}
      </>
    );
  };

  return (
    <S.Table className={className && `${className}__table`}>
      <S.THead className={className && `${className}__table-thead`}>{renderTableHeaders(columns)}</S.THead>
      <tbody className={className && `${className}__table-tbody`}>{renderTableRows(data)}</tbody>
    </S.Table>
  );
};

export default DataTable;
