import React, {FC, ReactNode} from 'react';

import {DocContainer, StepIndicator} from 'components';

import './ProjectsRules.scss';

const ProjectsRules: FC = () => {
  const steps: ReactNode[] = [
    'Projects must be centered on thenewboston network and/or community.',
    'Projects must clearly add value to thenewboston network and/or community.',
    'For applications involving a user interface (UI), simple mock-ups must be provided in the project proposal. (Basic wireframes are acceptable, high fidelity designs are not a requirement.)',
    'Software projects must be open source.',
    'Projects involving gambling or illegal activities of any kind are not allowed.',
    'Projects promoting abusive advertisements are not allowed.',
    'Projects dealing with explicit content or pornography are not allowed.',
    "Projects that use the user's personal information for any purpose must take prior permission from the user and inform them clearly.",
    'thenewboston is not liable for copyright or other intellectual property rights, property damage, or misuse of coins.',
  ];

  const renderSteps = () => {
    return steps.map((item, i) => (
      <StepIndicator className="ProjectsRules__StepIndicator" number={i + 1} text={item} />
    ));
  };

  return (
    <DocContainer className="ProjectsRules" title="Rules & Guidelines">
      <p>Projects must adhere to all following rules and guidelines to be eligible for funding.</p>
      {renderSteps()}
    </DocContainer>
  );
};

export default ProjectsRules;
