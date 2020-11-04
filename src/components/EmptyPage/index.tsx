import React, {FC} from 'react';

import './EmptyPage.scss';

const EmptyPage: FC = () => {
  return (
    <div className="EmptyPage">
      <h1>No items to display</h1>
    </div>
  );
};

export default EmptyPage;
