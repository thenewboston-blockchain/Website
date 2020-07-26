import React, {FC} from 'react';
import clsx from 'clsx';

import "./DocEndpoint.scss";

interface ComponentProps {
  className?: string;
}

const DocEndpoint: FC<ComponentProps> = ({children, className}) => {
  return <h2 className={clsx('DocEndpoint', className)}>{children}</h2>;
};

export default DocEndpoint;
