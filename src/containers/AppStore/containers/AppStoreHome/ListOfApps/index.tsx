import React, {FC} from 'react';

import {Container} from 'components';
import AppCard from '../../../components/AppCard';
import './ListOfApps.scss';

import SampleAppBg from '../../../assets/SampleAppBg.png';
import SampleAppLogo from '../../../assets/SampleAppLogo.png';

const ListOfApps: FC = () => {
  return (
    <Container className="ListOfApps">
      <AppCard
        bannerUrl={SampleAppBg}
        description="Keep all your travel ideas in one place."
        id="1"
        logoUrl={SampleAppLogo}
        title="Portico"
        websiteUrl="https://google.com"
      />
      <AppCard
        bannerUrl={SampleAppBg}
        description="Keep all your travel ideas in one place."
        id="1"
        logoUrl={SampleAppLogo}
        title="Portico"
        websiteUrl="https://google.com"
      />
      <AppCard
        bannerUrl={SampleAppBg}
        description="Keep all your travel ideas in one place."
        id="1"
        logoUrl={SampleAppLogo}
        title="Portico"
        websiteUrl="https://google.com"
      />
      <AppCard
        bannerUrl={SampleAppBg}
        description="Keep all your travel ideas in one place."
        id="1"
        logoUrl={SampleAppLogo}
        title="Portico"
        websiteUrl="https://google.com"
      />
      <AppCard
        bannerUrl={SampleAppBg}
        description="Keep all your travel ideas in one place."
        id="1"
        logoUrl={SampleAppLogo}
        title="Portico"
        websiteUrl="https://google.com"
      />
      <AppCard
        bannerUrl={SampleAppBg}
        description="Keep all your travel ideas in one place."
        id="1"
        logoUrl={SampleAppLogo}
        title="Portico"
        websiteUrl="https://google.com"
      />
      <AppCard
        bannerUrl={SampleAppBg}
        description="Keep all your travel ideas in one place."
        id="1"
        logoUrl={SampleAppLogo}
        title="Portico"
        websiteUrl="https://google.com"
      />
    </Container>
  );
};

export default ListOfApps;
