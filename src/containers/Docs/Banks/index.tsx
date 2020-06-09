import React from 'react';

import './Banks.scss';

const Banks = () => {
  return (
    <section className="Banks">
      <h1 className="page-title">Banks</h1>
      <p>
        Banks play a critical role regarding several aspects of the network. They act as the bond between end users and
        the network, and have several responsibilities to each.
      </p>
      <p>
        Regarding network related responsibilities, banks are responsible for assigning trust levels to validators. This
        will allow the network to not only reach consensus of the primary validator, but also determine the line of
        succession from a list of backup validators in the event the primary validator were to go offline.
      </p>
      <p>
        The election of a trusted validator is performed by all banks through the processes of setting a chosen
        validator as their primary validator. The primary validator of their choosing will most often also be the one
        who has earned the highest amount of trust, but is not a strict requirement. Only one primary validator is
        allowed per bank.
      </p>
    </section>
  );
};

export default Banks;
