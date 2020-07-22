import React from 'react';

import PrimaryValidatorUpgradeRequest from './PrimaryValidatorUpgradeRequest.png';

import './Resyncing.scss';

const Resyncing = () => {
  const renderPrimaryValidatorUpgradeRequest = () => (
    <>
      <h2>Primary Validator Upgrade Request</h2>

      <p>
        When a bank alters the trust levels of their validators, if the results indicate that there are now confirmation
        validators that are more trusted than the banks primary validator, the bank will send out a request to the
        confirmation validators requesting one of them upgrade to a primary validator. This is because the banks always
        prefer the most trusted validator to be the primary validator for the network.
      </p>

      <table className="border-grid">
        <thead>
          <tr className="heavy">
            <td>Validator</td>
            <td>Trust</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CV_001</td>
            <td>98.21</td>
          </tr>
          <tr>
            <td>CV_002</td>
            <td>93.87</td>
          </tr>
          <tr>
            <td>PV</td>
            <td>86.04</td>
          </tr>
        </tbody>
      </table>

      <p>
        A confirmation validator will accept the request if they themselves have the requesting bank set as their most
        trusted bank. Confirmation validators will always follow the guidance of their most trusted bank.
      </p>
      <p>
        In order to prevent multiple confirmation validators from upgrading to primary validators at the same time (in
        the case that multiple CV's view that bank as their most trusted), the bank will send out these request one by
        one rather than sending out several requests to all CV's simultaneously.
      </p>

      <div className="img-container">
        <img
          alt="primary validator update request"
          className="primary-validator-update-request"
          src={PrimaryValidatorUpgradeRequest}
        />
      </div>

      <p>
        Starting with the most trusted CV and continuing until their current PV is reached, the bank will send out a{' '}
        <strong>/primary_validator_upgrade_request</strong> where the following logic will be performed:
      </p>
      <ul className="mb-20">
        <li>
          if the CV does not have that bank set as their most trusted bank, the CV will respond "no" to the upgrade
          request and the bank will continue along with their next most trusted CV
        </li>
        <li>
          if the CV does have that bank set as their most trusted bank, the CV will respond "yes" to the upgrade request
          and upgrade themselves to a PV
        </li>
      </ul>
      <p>If and when a CV responds "yes", the requesting bank will:</p>
      <ul className="mb-20">
        <li>
          break out of the loop (stop sending <strong>/primary_validator_upgrade_request</strong>)
        </li>
        <li>wait for that CV to upgrade themselves to a PV</li>
        <li>switch to their new PV</li>
      </ul>
    </>
  );

  const renderPrimaryValidatorUpdateNotice = () => (
    <>
      <h2>Primary Validator Update Notice</h2>

      <p>
        This notice is sent from banks to confirmation validators to indicate that the requesting bank is leaving the
        current network and switching to a new primary validator (a new network).
      </p>
      <p>Banks will always set their primary validator to the validator that is the:</p>
      <ul className="mb-20">
        <li>most trusted</li>
        <li>online</li>
        <li>configured as a primary validator</li>
      </ul>
      <p>
        When a bank changes primary validators, any confirmation validators who have that bank set as their most trusted
        need to be made aware of the change in order to correctly sync to the new primary validator.
      </p>
      <p>
        Any confirmation validators that receive this request who do not have the requesting bank set as their most
        trusted will delete the requesting bank. This is because the bank is indicating that it is leaving the network,
        and therefore a connection is no longer needed.
      </p>
    </>
  );

  return (
    <section className="Resyncing">
      <h1 className="page-title">Resyncing</h1>
      <p>
        Confirmation validators will always sync to the primary validator of their most trusted bank. This means that
        confirmation validators need to remain aware whenever certain changes occur at their most trusted banks. These
        changes will be sent to them from their connected banks and include:
      </p>
      {renderPrimaryValidatorUpgradeRequest()}
      {renderPrimaryValidatorUpdateNotice()}
    </section>
  );
};

export default Resyncing;
