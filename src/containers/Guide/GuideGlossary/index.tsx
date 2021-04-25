import React, {FC} from 'react';

import {DocContainer, TableVertical} from 'components';

const GuideGlossary: FC = () => {
  return (
    <DocContainer className="GuideGlossary" title="Glossary" lastUpdated="25 Apr 2021">
      <p>This is a glossary of terms related to thenewboston network.</p>
      <TableVertical
        altColors
        rows={[
          ['Account', 'Anonymous digital identity on the network through which a user can send and receive coins'],
          ['Account Balance', 'The amount of coins owned by an account'],
          [
            'Account Lock',
            'A hash value that must be included in signed requests in order to authorize changes on behalf of the account',
          ],
          ['Account Number', 'Identifier for an account'],
          ['Block', 'A description of a change to one or more objects in the network'],
          ['Blockchain', 'Ordered list of blocks'],
          [
            'Confirmation',
            'A block signed by a validator as indication that the block has been added to the blockchain',
          ],
          [
            'Confirmation Validator (CV)',
            'Validator that will receive blocks from the PV, validate those results, and if valid add that block to their blockchain',
          ],
          ['Genesis Block', 'The very first block in the blockchain that defines the initial structure of the network'],
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
            "Validator that accepts requests from other nodes; after successful validation of each request, it creates a new block which is first added to it's own blockchain and then forwarded to the confirmation validators",
          ],
          ['Schedule', 'A list of upcoming validators'],
          ['Signature', 'Value that confirms authenticity of a digital document'],
          ['Signed Request (SR)', 'Request data that has been signed by an account owner'],
          [
            'Validator',
            'Elected node responsible for the validation of data and the generation of blocks to add to the blockchain',
          ],
        ]}
      />
    </DocContainer>
  );
};

export default GuideGlossary;
