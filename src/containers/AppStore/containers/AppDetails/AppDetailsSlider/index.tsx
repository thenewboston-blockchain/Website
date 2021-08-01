import React, {FC} from 'react';
import clsx from 'clsx';

import {Container} from 'components';
import ImageCarousel from '../../../components/ImageCarousel';

import './AppDetailsSlider.scss';

type Props = {
  className?: string;
  imageUrls: string[];
};

const AppDetailsSlider: FC<Props> = ({className, imageUrls}) => {
  return (
    <div className={clsx('AppDetailsSlider', className)}>
      <Container className="AppDetailsSlider__container">
        <ImageCarousel imageUrls={imageUrls} />
      </Container>
    </div>
  );
};

export default AppDetailsSlider;
