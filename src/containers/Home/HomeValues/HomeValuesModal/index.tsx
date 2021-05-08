import React, {FC} from 'react';

import {useWindowDimensions} from 'hooks';
import BlazingFastIcon from './BlazingFastIcon';
import CommunityBuiltIcon from './CommunityBuiltIcon';
import LowFeesIcon from './LowFeesIcon';

import './HomeValuesModal.scss';

const HomeValuesModal: FC = () => {
  const {width} = useWindowDimensions();
  let iconSize = 88;
  if (width < 992 && width > 768) {
    iconSize = 64;
  } else {
    iconSize = 88;
  }
  return (
    <div className="HomeValuesModal">
      <div className="HomeValuesModal__main">
        <div className="HomeValuesModal__column">
          <LowFeesIcon size={iconSize} />
          <div className="HomeValuesModal__column-text-container">
            <div className="HomeValuesModal__column-title">Low Fees</div>
            <div className="HomeValuesModal__column-description">
              Our infrastructure incentivizes low network fees which creates endless development possibilities.
            </div>
          </div>
        </div>
        <div className="HomeValuesModal__column">
          <BlazingFastIcon size={iconSize} />
          <div className="HomeValuesModal__column-text-container">
            <div className="HomeValuesModal__column-title">Blazing Fast</div>
            <div className="HomeValuesModal__column-description">
              With an average blocktime of 0.015 seconds and 3238 transactions per second, account updates are nearly
              instant.
            </div>
          </div>
        </div>
        <div className="HomeValuesModal__column">
          <CommunityBuiltIcon size={iconSize} />
          <div className="HomeValuesModal__column-text-container">
            <div className="HomeValuesModal__column-title">Community Built</div>
            <div className="HomeValuesModal__column-description">
              We have a solid community of developers, designers and project managers building apps on our blockchain.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeValuesModal;
