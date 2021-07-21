import React, {FC} from 'react';

import {Divider, Navigation} from 'components';

import DeveloperPortalLayout from '../../components/DeveloperPortalLayout';
import DataFlows from './DataFlows';
import ElectionProcess from './ElectionProcess';
import ForkPrevention from './ForkPrevention';
import Overview from './Overview';
import PointsRefilling from './PointsRefilling';
import PVNonResponsiveness from './PVNonResponsiveness';
import RatesAndAmount from './RatesAndAmount';
import Scheduling from './Scheduling';
import ScheduleAdjustment from './ScheduleAdjustment';

import './PrincipalEventsAndProcesses.scss';

const PrincipalEventsAndProcesses: FC = () => {
  return (
    <DeveloperPortalLayout pageName="Living Whitepaper | Principal Events and Processes">
      <div className="PrincipalEvents">
        <h6 className="PrincipalEvents__heading">Principal Events and Processes on the Network</h6>
        <Overview />
        <Divider className="PrincipalEvents__divider" />
        <Scheduling />
        <Divider className="PrincipalEvents__divider" />
        <DataFlows />
        <Divider className="PrincipalEvents__divider" />
        <ScheduleAdjustment />
        <Divider className="PrincipalEvents__divider" />
        <ForkPrevention />
        <Divider className="PrincipalEvents__divider" />
        <PVNonResponsiveness />
        <Divider className="PrincipalEvents__divider" />
        <PointsRefilling />
        <Divider className="PrincipalEvents__divider" />
        <ElectionProcess />
        <Divider className="PrincipalEvents__divider" />
        <RatesAndAmount />
        <Divider className="PrincipalEvents__divider" />
        <div className="PrincipalEntities__bottom-bar">
          <Navigation path="/developer/whitepaper/architecture" text="Architecture - Deep Dive" type="right" />
        </div>
      </div>
    </DeveloperPortalLayout>
  );
};

export default PrincipalEventsAndProcesses;
