import React, {FC} from 'react';
import clsx from 'clsx';

import {NAVBAR_HEIGHT} from 'constants/offsets';
import {useLocation} from 'react-router';
import {useWindowDimensions} from 'hooks';
import BreadcrumbSection from '../../../../components/BreadcrumbSection';

import './Breadcrumb.scss';

type Props = {
  className?: string;
  breadcrumbHeight: number;
};

const TOP_LINK_HEIGHT = 72;
const PROJECT_DETAILS_HEADER_HEIGHT = 180;
const PROJECT_DETAILS_HEADER_HEIGHT_768 = 260;

const Breadcrumb: FC<Props> = ({breadcrumbHeight, className}) => {
  const location = useLocation();
  const {width} = useWindowDimensions();
  const pathnames = location.pathname.slice(1).split('/');
  const projectDetailsHeaderHeight = width > 768 ? PROJECT_DETAILS_HEADER_HEIGHT : PROJECT_DETAILS_HEADER_HEIGHT_768;

  return <div className={clsx('Breadcrumb', className)}>Breadcrumb</div>;
};

export default Breadcrumb;
