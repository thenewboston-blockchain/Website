import React from 'react';
import clsx from 'clsx';
import {SFC} from 'types/generic';

import './Shadow.scss';

const Shadow: SFC = ({className}) => <div className={clsx('Shadow', className)} />;

export default Shadow;
