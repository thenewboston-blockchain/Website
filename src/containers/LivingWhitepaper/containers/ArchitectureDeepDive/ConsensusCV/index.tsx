import React from 'react';

import {Divider, DocImage} from 'components';
import HaltRequestedImage from '../../../assets/HaltRequested.svg';
import BlockchainHaltedImage from '../../../assets/BlockchainHalted.svg';
import LongestBlockchainImage from '../../../assets/LongestBlockchain.svg';
import SyncingBlockchainsImage from '../../../assets/SyncingBlockchains.svg';
import LastStepImage from '../../../assets/LastStep.svg';

import './ConsensusCV.scss';
import '../../LivingWhitepaperDocs.scss';

const ConsensusCV = () => {
  return (
    <div className="ConsensusCV">
      <div className="LivingWhitepaperDocs__section-title">Consensus between Confirmation Validators</div>
      <p className="LivingWhitepaperDocs__description">
        The decision of whether or not to skip a PV is determined by consensus between the CVs. This process happens
        when a PV’s blocks are scrutinized and directly affects the schedule. When a majority of CVs vote to skip the PV
        during its turn, all CVs must reach consensus on exactly which block the next PV should take over. This is
        because in the middle of each turn, there is no guarantee that all CVs will be perfectly in sync and they might
        have blockchains of varying length. The process for switching to a new PV before the turn finishes follows.
      </p>
      <p className="LivingWhitepaperDocs__description">
        At the beginning of each turn, when a new PV takes over, each CV keeps an independent record of all other CVs'
        voting statuses.
      </p>
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Step 1</span> - If a CV finds an issue with the PV
        (performance, error, offline, and so on) this CV sets its status to halt requested and broadcasts that message
        out to all other validators.
      </li>
      <DocImage alt="Halt Requested CV" maxWidth={624} src={HaltRequestedImage} />
      <Divider />
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Step 2</span> - When the other CVs receive a majority of
        halt requests, the receiving CV will halt production of their blockchain.
      </li>
      <Divider />
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Step 3</span> - After stopping production, that CV will
        set its own status to blockchain halted and broadcast that message along with the block number of its HEAD block
        (its last block before halting) out to all other CVs.
      </li>
      <DocImage alt="Blockchain Halted CV" maxWidth={349} src={BlockchainHaltedImage} />
      <Divider />
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Step 4</span> - All CVs follow similar logic resulting
        in each CV receiving the HEAD block from its peers.
      </li>
      <Divider />
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Step 5</span> - When the majority of blockchain halted
        requests have been received, the CVs begin the syncing process. This involves first calculating the longest
        blockchain.
      </li>
      <DocImage alt="Longest Blockchain" maxWidth={349} src={LongestBlockchainImage} />
      <Divider />
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Step 6</span> - Once the longest blockchain has been
        determined, all other CVs sync their own blockchains up to that block.
      </li>
      <DocImage alt="Syncing Blockchain" maxWidth={349} src={SyncingBlockchainsImage} />
      <Divider />
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Step 7</span> - Once synced, CVs send out a sync switch
        request.
      </li>
      <Divider />
      <li className="LivingWhitepaperDocs__description">
        <span className="LivingWhitepaperDocs__emphasized-text">Step 8</span> - When the majority of CVs receive a sync
        switch request, they all switch over to the new PV
      </li>
      <DocImage alt="Last Step CV" maxWidth={554} src={LastStepImage} />
      <Divider />
    </div>
  );
};

export default ConsensusCV;
