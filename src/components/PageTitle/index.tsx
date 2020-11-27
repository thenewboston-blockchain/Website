import React, {FC} from 'react';
import {Helmet} from 'react-helmet-async';

interface ComponentProps {
  title: string;
}

const PageTitle: FC<ComponentProps> = ({title}) => {
  return (
    <Helmet>
      <title>{title} | thenewboston</title>
    </Helmet>
  );
};

export default PageTitle;
