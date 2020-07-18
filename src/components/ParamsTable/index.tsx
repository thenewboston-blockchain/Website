import React, {FC, ReactNode} from 'react';

import './ParamsTable.scss';

interface Item {
  dataType: string;
  description: ReactNode;
  param: string;
  sampleValue?: string;
}

interface ComponentProps {
  items: Item[];
  tableHeading?: ReactNode;
}

const ParamsTable: FC<ComponentProps> = ({items, tableHeading}) => {
  const renderItems = () =>
    items.map(({dataType, description, param, sampleValue}) => (
      <tr>
        <td>
          {param}
          <span className="data-type">{dataType}</span>
        </td>
        <td>{description}</td>
        {sampleValue && <td>{sampleValue}</td>}
      </tr>
    ));

  return (
    <div className="ParamsTable">
      <table className="request-params">
        {tableHeading && tableHeading}
        {renderItems()}
      </table>
    </div>
  );
};

export default ParamsTable;
