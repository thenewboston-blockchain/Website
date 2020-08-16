import React, {FC} from 'react';

import {DocImage} from 'components';

import ResyncUpgradeNotice from './ResyncUpgradeNotice.png';

const UpgradeNotice: FC = () => (
  <>
    <p>
      After a confirmation validator has upgraded to the primary validator, it will send out an upgrade notice to all
      connected banks. This is a notice from a previous CV that they are now a PV. If the requesting validator is more
      trusted than the bank's current PV, the bank will switch to the new PV. This is because the banks always prefer
      the most trusted validator to be the PV for the network.
    </p>
    <p>
      If the requesting validator is less trusted than the bank's current PV, the bank will delete the requesting
      validator. This is because banks can only have one PV.
    </p>
    <DocImage alt="upgrade notice" maxWidth={400} src={ResyncUpgradeNotice} />
  </>
);

export default UpgradeNotice;
