import React, {FC} from 'react';

import AppDetailsTopSection from './AppDetailsTopSection';
import AppDetailsSlider from './AppDetailsSlider';
import AppDetailsOverview from './AppDetailsOverview';

import SampleAppLogo from '../../assets/SampleAppLogo.png';

import './AppDetails.scss';

type Props = {
  appId: string;
};

const AppDetails: FC<Props> = ({appId}) => {
  // TODO: call API based on appId

  return (
    <>
      <AppDetailsTopSection
        description="Keep all your travel ideas in one place."
        logoUrl={SampleAppLogo}
        title="Portico"
        websiteUrl="https://google.com"
      />
      <AppDetailsSlider className="AppDetails__slider" imageUrls={[]} />
      <AppDetailsOverview
        className="AppDetails__overview"
        description={`Keep all your travel ideas in one place.
Portico helps you save, plan, organize and share amazing adventures. Built for the curious explorer, Portico is the ultimate tool for you (and your friends) to gather all your travel ideas and trip information in one place. Get inspired, get ready, and have some fun, even before you depart.

Our goal is to inspire you to travel more and make it easier to do so. We believe the beauty of travel lies in being able to shed our life for a moment and to walk in another’s shoes, to better understand another culture. But travel planning can be overwhelming. We aim to simplify the trip planning process and make it more fun.

Check out www.portico.travel to see the whole platform.`}
      />
    </>
  );
};

export default AppDetails;
