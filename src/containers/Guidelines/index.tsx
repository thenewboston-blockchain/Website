import React, {FC} from 'react';

import {Container, PageTitle} from 'components';

import './Guidelines.scss';

const Guidelines: FC = () => {
  return (
    <>
      <PageTitle title="Community Guidelines" />
      <Container className="Guidelines" maxWidth={720}>
        <h1 className="Guidelines__title">Community Guidelines</h1>
        <h2 className="Guidelines__subtitle">Overview</h2>
        <p>We at thenewboston have two goals:</p>
        <ul className="Guidelines__list">
          <li>Create the greatest digital currency, and</li>
          <li>Have the greatest community on the web.</li>
        </ul>
        <p>
          We are working hard daily to achieve the first goal, but to achieve the second goal, it is important that we
          all work together to make this happen. To ensure that this happens, we have created our community guidelines
          to ensure that each and every member of our community stays protected. These rules will apply wherever the
          thenewboston community exists, including Discord, Youtube channel, Reddit, and other social media platforms.
          The infringement upon these guidelines may result in your message getting deleted, getting a disciplinary
          action, or a ban, depending on the severity of the situation.
        </p>
        <ol className="Guidelines__list">
          <li>Using Excessively abusive, threatening, or obscene language.</li>
          <li>Sexual or other forms of harassment.</li>
          <li>Making malicious, false and harmful statements about others.</li>
          <li>Impersonating as another member or person from the community.</li>
          <li>Publicly disclosing another individual's private information.</li>
          <li>Thefts involving another individual's coin or wallet.</li>
          <li>Posting excessive spam.</li>
          <li>Posting excessively violent, graphic, or highly sexual content.</li>
        </ol>
        <h1 className="Guidelines__title">Core Member Conduct and Rules Policy</h1>
        <h2 className="Guidelines__subtitle">Objective</h2>
        <p>
          thenewboston adopts this member Conduct and Work Rules Policy to ensure orderly operations and provide the
          best possible work environment. thenewboston expects members and others who are engaged to provide services,
          such as temporary personnel, consultants, and independent contractors, to follow these rules of conduct while
          collaborating with and/or performing work-related activity.
        </p>
        <p>Maintaining and enforcing this policy is intended to protect the interest and safety</p>
        <h2 className="Guidelines__subtitle">Procedures</h2>
        <p>
          thenewboston is responsible for providing a safe and secure workplace and strives to ensure that all
          individuals associated with the organization are treated in a respectful and fair manner. Though it is not
          possible to list all forms of behavior that are unacceptable in the workplace, the following are examples of
          behavior that would be considered infractions of thenewboston rules of conduct. Such behavior may result in
          disciplinary action, up to and including termination of membership. This list is not intended to be
          exhaustive:
        </p>
        <ol className="Guidelines__list">
          <li>All the guidelines listed in the community guidelines.</li>
          <li>Theft or inappropriate removal or possession of the treasure and/or team wallet.</li>
          <li>Fighting or threatening violence in the workplace.</li>
          <li>Using intimidation tactics or making threats.</li>
          <li>Sabotaging another individual's work.</li>
          <li>Unauthorized disclosure of business "secrets" or confidential information.</li>
          <li>
            Falsifying organization records or reports, including one's time records or the time records of another
            member.
          </li>
        </ol>
      </Container>
    </>
  );
};

export default Guidelines;
