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
        text={
          <>
            Your project must <strong>connect to thenewboston</strong> in a way or another.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={2}
        text={
          <>
            Must be an <strong>open-source</strong> project.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={3}
        text={
          <>
            <strong>Direct distribution</strong> of thenewboston digital currency from the treasury is not allowed.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={4}
        text={
          <>
            Projects involving <strong>gambling</strong> or <strong>illegal activities</strong> of any kind are not
            allowed.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={5}
        text={
          <>
            Projects promoting <strong>abusive advertisements</strong> are <strong>not</strong> allowed.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={6}
        text={
          <>
            Projects dealing with <strong>explicit content</strong> or <strong>pornography</strong> are not allowed.
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={7}
        text={
          <>
            Projects promoting <strong>pedophilia</strong> or <strong>inappropriate interaction</strong> targeted at a
            minor are not allowed.{' '}
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={8}
        text={
          <>
            Projects which use <strong>the user's personal information</strong> for any purpose must take prior
            permission from the user or inform them clearly.{' '}
          </>
        }
      />
      <StepIndicator
        className="ProjectProposalsRules__StepIndicator"
        number={9}
        text={
          <>
            <strong>thenewboston</strong> is not liable for <strong>copyright</strong> or other{' '}
            <strong>intellectual property rights, property damage, misuse of coins</strong>.
          </>
        }
      />
    </DocContainer>
  );
};

export default ProjectProposalsRules;
