import React, {FC} from 'react';

import {useWindowDimensions} from 'hooks';
import BlazingFastIcon from '../../icons/BlazingFastIcon.png';
import CommunityBuiltIcon from '../../icons/CommunityBuiltIcon.png';
import LowFeesIcon from '../../icons/LowFeesIcon.png';
import './HomeValuesCard.scss';

const HomeValuesCard: FC = () => {
  const {width} = useWindowDimensions();
  let iconSize: number;
  if (width < 992 && width > 768) {
    iconSize = 64;
  } else {
    iconSize = 88;
  }
  return (
    <div className="HomeValuesCard">
      <div className="HomeValuesCard__main">
        <div className="HomeValuesCard__column">
          <img alt="Low Fees" className="HomeValuesCard__icon" height={iconSize} src={LowFeesIcon} width={iconSize} />
          <div className="HomeValuesCard__column-text-container">
            <div className="HomeValuesCard__column-title">Low Fees</div>
            <div className="HomeValuesCard__column-description">
              Our infrastructure incentivizes low network fees which creates endless development possibilities.
            </div>
          </div>
        </div>
        <div className="HomeValuesCard__column">
          <img
            alt="Blazing Fast"
            className="HomeValuesCard__icon"
            height={iconSize}
            src={BlazingFastIcon}
            width={iconSize}
          />
          <div className="HomeValuesCard__column-text-container">
            <div className="HomeValuesCard__column-title">Blazing Fast</div>
            <div className="HomeValuesCard__column-description">
              With an average blocktime of 0.015 seconds and 3,238 transactions per second, account updates are nearly
              instant.
            </div>
          </div>
        </div>
        <div className="HomeValuesCard__column">
          <img
            alt="Blazing Fast"
            className="HomeValuesCard__icon"
            height={iconSize}
            src={CommunityBuiltIcon}
            width={iconSize}
          />
          <div className="HomeValuesCard__column-text-container">
            <div className="HomeValuesCard__column-title">Community Built</div>
            <div className="HomeValuesCard__column-description">
              We have a solid community of developers, designers and project managers building apps on our blockchain.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeValuesCard;
