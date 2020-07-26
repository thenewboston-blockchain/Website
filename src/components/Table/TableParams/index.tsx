import React, {FC, ReactNode} from 'react';
import clsx from 'clsx';

import {getCustomClassNames} from 'utils/components';

import './TableParams.scss';

interface Item {
  dataType: string;
  description: ReactNode;
  param: string;
  sampleValue?: string;
}

interface ComponentProps {
  className?: string;
  headers?: ReactNode[];
  items: Item[];
}

const TableParams: FC<ComponentProps> = ({className, headers, items}) => {
  const renderBody = (): ReactNode => {
    return (
      <tbody className={clsx('TableParams__tbody', {...getCustomClassNames(className, '__tbody', true)})}>
        {items.map(({dataType, description, param, sampleValue}, index) => (
          <tr
            key={index}
            className={clsx('TableParams__tr', {
              'TableParams__tr--even': index % 2 === 0,
              ...getCustomClassNames(className, '__tr', true),
              ...getCustomClassNames(className, '__tr--odd', index % 2 !== 0),
            })}
          >
            <td
              className={clsx('TableParams__td TableParams__td--param', {
                ...getCustomClassNames(className, '__td', true),
                ...getCustomClassNames(className, '__td--param', true),
              })}
            >
              {param}
              <span
                className={clsx('TableParams__data-type', {...getCustomClassNames(className, '__data-type', true)})}
              >
                {dataType}
              </span>
            </td>
            <td
              className={clsx('TableParams__td TableParams__td--description', {
                ...getCustomClassNames(className, '__td', true),
                ...getCustomClassNames(className, '__td--description', true),
              })}
            >
              {description}
            </td>
            {sampleValue ? (
              <td
                className={clsx('TableParams__td TableParams__td--sample-value', {
                  ...getCustomClassNames(className, '__td', true),
                  ...getCustomClassNames(className, '__td--sample-value', true),
                })}
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
      <thead className={clsx('TableParams__thead', {...getCustomClassNames(className, '__thead', true)})}>
        <tr className={clsx('TableParams__tr', {...getCustomClassNames(className, '__tr', true)})}>
          {headers.map((header, i) => (
            <th key={i} className={clsx('TableParams__th', {...getCustomClassNames(className, '__th', true)})}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  return (
    <div className={clsx('TableParams', className)}>
      <table className={clsx('TableParams__table', {...getCustomClassNames(className, '__table', true)})}>
        {renderHeaders()}
        {renderBody()}
      </table>
    </div>
  );
};

export default TableParams;
