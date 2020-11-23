import React, {FC} from 'react';

import {DocContainer, StepIndicator} from 'components';

import './ProjectProposalsRules.scss';

const ProjectProposalsRules: FC = () => {
  return (
    <DocContainer className="ProjectProposalsRules" title="Rules & Guidelines">
      <h2>Rules and Guidelines for Project Proposals</h2>
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={1}
        text="Your project must connect to thenewboston in a way or another."
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={2}
        text="Must be an open-source project."
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={3}
        text="Projects involving gambling or illegal activities of any kind are not allowed."
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={4}
        text="Projects promoting abusive advertisements are not allowed."
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={5}
        text="Projects dealing with explicit content or pornography are not allowed."
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={6}
        text="Projects promoting pedophilia or inappropriate interaction targeted at a minor are not allowed."
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={7}
        text="Projects which use the user's personal information for any purpose must take prior permission from the user or inform them clearly."
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={8}
        text="thenewboston is not liable for copyright or other intellectual property rights, property damage, misuse of coins."
      />
    </DocContainer>
  );
};

export default ProjectProposalsRules;
