import React from 'react';

import {Divider, DocImage} from 'components';
import BlockStructureImage from '../../../assets/BlockStructure.svg';

import './BlockStructure.scss';
import '../../LivingWhitepaperDocs.scss';

const BlockStructure = () => {
  return (
    <div className="BlockStructure">
      <div className="LivingWhitepaperDocs__section-title">Block Structure</div>
      <p className="LivingWhitepaperDocs__description">
        All blocks follow the same general structure. This structure provides a clear description of change to one or
        more objects in the network, including both the original request and the resulting updates. Before outlining the
        general block structure, the key terms to know are the following:
      </p>
      <div className="LivingWhitepaperDocs__emphasized-text">Signature</div>
      <p className="LivingWhitepaperDocs__description">
        Signature Value that confirms authenticity of a digital document. It can be the signature of the PV indicating
        the validity of the block and the addition to its blockchain, or the value that the account owner uses as proof
        that they have authorized the request
      </p>
      <Divider />
      <div className="LivingWhitepaperDocs__emphasized-text">Signed Change Request</div>
      <p className="LivingWhitepaperDocs__description">Request data that has been signed by an account owner</p>
      <Divider />
      <div className="LivingWhitepaperDocs__emphasized-text">Updates</div>
      <p className="LivingWhitepaperDocs__description">Resulting changes to one or more objects</p>
      <DocImage alt="Block Structure" maxWidth={479} src={BlockStructureImage} />

      <div className="LivingWhitepaperDocs__topic-heading">Signed Change Request Fields</div>
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Type</span> - Type of the signed change request (defines
        the message structure)
      </li>
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Signer</span> - Account number (public key) of the
        entity that signed the signed change request
      </li>
      <Divider />
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Message</span> - The shape and contents of this vary
        based on data type
      </li>
      <Divider />
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Signature</span> - Value used as proof that the account
        owner has authorized the request
      </li>

      <div className="LivingWhitepaperDocs__topic-heading">Message Fields</div>
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Account Lock</span> - Unique value used to ensure that
        the same request is not processed more than once
      </li>
      <Divider />
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Fees</span> - Payments to nodes in exchange for
        processing the request
      </li>
      <Divider />
    </div>
  );
};

export default BlockStructure;
