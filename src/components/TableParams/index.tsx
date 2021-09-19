import React, {ReactNode} from 'react';
import clsx from 'clsx';
import {bemify} from '@thenewboston/utils';
import {SFC} from 'types/generic';

import './TableParams.scss';

interface Item {
  dataType: string;
  description: ReactNode;
  param: string;
  sampleValue?: string;
}

interface ComponentProps {
  headers?: ReactNode[];
  items: Item[];
}

const TableParams: SFC<ComponentProps> = ({className, headers, items}) => {
  const renderBody = (): ReactNode => {
    return (
      <tbody className={clsx('TableParams__tbody', {...bemify(className, '__tbody')})} data-testid="TableParams__tbody">
        {items.map(({dataType, description, param, sampleValue}, index) => (
          <tr
            key={index}
            className={clsx('TableParams__tr', {
              'TableParams__tr--even': index % 2 === 0,
              ...bemify(className, '__tr'),
              ...bemify(className, '__tr--odd', index % 2 !== 0),
            })}
          >
            <td
              className={clsx('TableParams__td TableParams__td--param', {
                ...bemify(className, '__td'),
                ...bemify(className, '__td--param'),
              })}
              data-testid="TableParams__td--param"
            >
              {param}
              <span
                className={clsx('TableParams__data-type', {...bemify(className, '__data-type')})}
                data-testid="TableParams__data-type"
              >
                {dataType}
              </span>
            </td>
            <td
              className={clsx('TableParams__td TableParams__td--description', {
                ...bemify(className, '__td'),
                ...bemify(className, '__td--description'),
              })}
              data-testid="TableParams__td--description"
            >
              {description}
            </td>
            {sampleValue ? (
              <td
                className={clsx('TableParams__td TableParams__td--sample-value', {
                  ...bemify(className, '__td'),
                  ...bemify(className, '__td--sample-value'),
                })}
                data-testid="TableParams__td--sample-value"
              >
                {sampleValue}
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
    );
  };

  const renderHeaders = (): ReactNode => {
    if (!headers) return;

    return (
      <thead className={clsx('TableParams__thead', {...bemify(className, '__thead')})} data-testid="TableParams__thead">
        <tr className={clsx('TableParams__tr', {...bemify(className, '__tr')})}>
          {headers.map((header, i) => (
            <th key={i} className={clsx('TableParams__th', {...bemify(className, '__th')})}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  return (
    <div className={clsx('TableParams', className)} data-testid="TableParams">
      <table className={clsx('TableParams__table', {...bemify(className, '__table')})} data-testid="TableParams__table">
        {renderHeaders()}
        {renderBody()}
      </table>
    </div>
  );
};

export default TableParams;
