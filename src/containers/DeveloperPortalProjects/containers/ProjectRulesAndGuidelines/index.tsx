import React from 'react';

import {Divider} from 'components';
import DeveloperPortalLayout from '../../components/DeveloperPortalLayout';
import HowProposalsWork from './HowProposalsWork';
import MilestonesAndPayouts from './MilestonesAndPayouts';
import ProposalSubmissionProcess from './ProposalSubmissionProcess';
import Rules from './Rules';

import './ProjectRulesAndGuidelines.scss';

const ProjectRulesAndGuidelines = () => {
  return (
    <DeveloperPortalLayout pageName="Project Rules & Guidelines">
      <div className="ProjectRulesAndGuidelines__container">
        <div className="ProjectRulesAndGuidelines__page-title">Project Rules & Guidelines</div>
        <HowProposalsWork />
        <Divider className="ProjectRulesAndGuidelines__divider" />
        <Rules />
        <Divider className="ProjectRulesAndGuidelines__divider" />
        <ProposalSubmissionProcess />
        <Divider className="ProjectRulesAndGuidelines__divider" />
        <MilestonesAndPayouts />
      </div>
    </DeveloperPortalLayout>
  );
};

export default ProjectRulesAndGuidelines;
