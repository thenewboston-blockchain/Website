import React, {FC} from 'react';

import {DocContainer, TableVertical} from 'components';

const GuideComponents: FC = () => {
  return (
    <DocContainer className="GuideComponents" title="Components" lastUpdated="22 Apr 2021">
      <p>
        The system has many components, each of which plays a specific role in secure transfer of coins (the currency of
        the system) between accounts. Other sections of our documentation discuss these elements in more detail, but for
        now, we examine a simplified network composed of the core components. A basic glossary follows:
      </p>
      <TableVertical
        altColors
        rows={[
          ['Account', 'Anonymous digital identity on the network through which a user can send and receive coins'],
          ['Transfer Request', 'A users request to transfer of coins from one account to another'],
          ['Block', 'A change to the network'],
          ['Blockchain', 'Ordered list of blocks'],
          [
            'Signature',
            'Unique value that verifies authenticity of a digital document (included with every block to prove that the user has authorized the request)',
          ],
          [
            'Node',
            'Network server that has several responsibilities, such as checking that requests conform to network protocol and routing blocks',
          ],
          [
            'Node Signed Request (NSR)',
            'Request data that has been signed by a node indicating that it conforms to network protocol',
          ],
          [
            'Primary Validator (PV)',
            'Elected node that accepts node signed requests from other nodes; after successful validation of each request, it creates a new block which is then forwarded to the other validators for verification',
          ],
          [
            'Validator',
            'Elected node that will receive blocks from the PV, validate those results, and if valid add that block to their blockchain',
          ],
          [
            'Confirmation',
            'A block signed by a validator as indication that the block has been added to the blockchain',
          ],
        ]}
      />
    </DocContainer>
  );
};

export default GuideComponents;
