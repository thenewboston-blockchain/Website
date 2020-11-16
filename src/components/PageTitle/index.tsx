import React, {FC} from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';

interface ComponentProps {
  title: string;
}

const PageTitle: FC<ComponentProps> = ({title}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title} | thenewboston</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default PageTitle;
