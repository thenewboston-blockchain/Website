import React, {FC} from 'react';

import './Rules.scss';

const Rules: FC = () => {
  return (
    <div className="Rules" id="rules">
      <h1 className="Rules__heading">Rules</h1>
      <p className="Rules__tagline">
        Projects must adhere to all following rules and guidelines to be eligible for funding.
      </p>
      <div className="Rules__list">
        <h3 className="Rules__list-heading Rules__list-heading--green">Do's</h3>
        <ol className="Rules__list-items">
          <li className="Rules__list-item">Projects must be centered on thenewboston network and/or community.</li>
          <li className="Rules__list-item">
            Projects must clearly add value to thenewboston network and/or community.
          </li>
          <li className="Rules__list-item">
            For applications involving a user interface (UI), simple mock-ups must be provided in the project proposal.
            (Basic wireframes are acceptable, high fidelity designs are not a requirement.)
          </li>
          <li className="Rules__list-item">Software projects must be open source.</li>
          <li className="Rules__list-item">
            Projects that use the user's personal information for any purpose must take prior permission from the user
            and inform them clearly.
          </li>
        </ol>
      </div>
      <div className="Rules__list">
        <h3 className="Rules__list-heading Rules__list-heading--red">Dont's</h3>
        <ol className="Rules__list-items">
          <li className="Rules__list-item">
            Projects involving gambling or illegal activities of any kind are not allowed.
          </li>
          <li className="Rules__list-item">Projects promoting abusive advertisements are not allowed.</li>
          <li className="Rules__list-item">Projects dealing with explicit content or pornography are not allowed.</li>
          <li className="Rules__list-item">
            thenewboston is not liable for copyright or other intellectual property rights, property damage, or misuse
            of coins.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Rules;
