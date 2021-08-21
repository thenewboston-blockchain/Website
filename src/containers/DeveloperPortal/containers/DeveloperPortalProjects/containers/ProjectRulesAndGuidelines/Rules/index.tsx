import React, {FC} from 'react';

import './Rules.scss';

const Rules: FC = () => {
  return (
    <div className="ProjectRules" id="rules">
      <h1 className="ProjectRules__heading">Rules</h1>
      <p className="ProjectRules__tagline">
        To be eligible for funding, projects must adhere to the following rules and guidelines.
      </p>
      <div className="ProjectRules__list">
        <h3 className="ProjectRules__list-heading">Your project must:</h3>
        <ol className="ProjectRules__list-items">
          <li className="ProjectRules__list-item">Center on thenewboston network and/or community.</li>
          <li className="ProjectRules__list-item">Clearly add value to thenewboston network and/or community.</li>
          <li className="ProjectRules__list-item">
            Include simple mock-ups (in the project proposal) for applications involving a user interface (UI). Basic
            wireframes are acceptable, however, high fidelity designs are not a requirement.
          </li>
          <li className="ProjectRules__list-item">Be open source (for software projects).</li>
          <li className="ProjectRules__list-item">
            Take prior permission from the user and inform them clearly if it uses the user’s personal information for
            any purpose.
          </li>
          <li className="ProjectRules__list-item">
            Have a non-TNB related project name along with a unique logo design.
          </li>
        </ol>
      </div>
      <div className="ProjectRules__list">
        <h3 className="ProjectRules__list-heading">Your project must NOT:</h3>
        <ol className="ProjectRules__list-items">
          <li className="ProjectRules__list-item">Involve gambling or illegal activities of any kind.</li>
          <li className="ProjectRules__list-item">Promote abusive advertisements.</li>
          <li className="ProjectRules__list-item">
            Deal with explicit content or pornography. thenewboston is not liable for copyright or other intellectual
            property rights, property damage, or misuse of coins.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Rules;
