import React from 'react';

const Introduction = () => (
  <>
    <h1 className="page-title">Introduction</h1>
    <p>
      The purpose of the primary validator is to validate transactions. Upon validation of a block, the validator will
      append that block onto their blockchain and also update the balances of all accounts involved. The primary
      validator will then forward the confirmed block to all connected confirmation validators so that the resulting
      balances can be verified.
    </p>
  </>
);

export default Introduction;
