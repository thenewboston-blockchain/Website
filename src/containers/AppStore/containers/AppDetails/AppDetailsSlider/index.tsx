import React, {FC} from 'react';
import clsx from 'clsx';

import {Container} from 'components';

import './AppDetailsSlider.scss';

type Props = {
  className?: string;
  imageUrls: string[];
};

const AppDetailsSlider: FC<Props> = ({className, imageUrls}) => {
  // TODO: implement image slider
  return (
    <div className={clsx('AppDetailsSlider', className)}>
      <Container className="AppDetailsSlider__container">Image Slider</Container>
    </div>
  );
};

export default AppDetailsSlider;
