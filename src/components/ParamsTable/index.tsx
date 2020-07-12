import React, {FC, ReactNode} from 'react';

interface Item {
  dataType: string;
  description: ReactNode;
  param: string;
}

interface ComponentProps {
  items: Item[];
}

const ParamsTable: FC<ComponentProps> = ({items}) => {
  const renderItems = () =>
    items.map(({dataType, description, param}) => (
      <tr>
        <td>
          {param}
          <span className="data-type">{dataType}</span>
        </td>
        <td>{description}</td>
      </tr>
    ));

  return <table className="request-params">{renderItems()}</table>;
};

export default ParamsTable;
