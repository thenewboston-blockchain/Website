export const PATHNAME_TO_TITLE_MAPPING: Record<string, string> = {
  architecture: 'Architecture - Deep Dive',
  developer: 'Developer',
  'principal-entities': 'Principal Entities on the Network',
  'principal-events': 'Principal Events and Processes on the Network',
  whitepaper: 'Living Whitepaper',
};

export enum ArchitectureDeepDiveId {
  BlockStructure = 'block-structure',
  SignedChangeRequest = 'signature-change-request',
  MessageFields = 'message-fields',
  AccountLock = 'account-lock',
  NodeIdentifier = 'node-identifier',
  SampleRequestAndResponse = 'sample-request-and-response',
  AddingValidators = 'adding-validators',
  Consensus = 'consensus',
  NetworkInitialization = 'network-initialization',
  Faq = 'faq',
}

export enum PrincipleEntitiesId {
  Overview = 'overview',
  BlockchainOptimizations = 'blockchain-optimizations',
  Account = 'account',
  Nodes = 'nodes',
  BlocksAndBlockchain = 'blocks-and-blockchain',
  Validators = 'validators',
  NodeRoles = 'node-roles',
  LockedCoinsAndBoosts = 'locked-coins-and-boosts',
  CoinsVsPoints = 'coins-vs-points',
  Governance = 'governance',
  Budget = 'budget',
  Fees = 'fees',
  Glossary = 'glossary',
}

export const principalEntitiesPath = '/developer/whitepaper/principal-entities';
export const principalEventsPath = '/developer/whitepaper/principal-events';
export const architecturePath = '/developer/whitepaper/architecture';

export const PATHNAME_TO_DROPDOWN_SELECTIONS: Record<string, {title: string; url: string}[]> = {
  architecture: [
    {
      title: 'Block structure',
      url: `${architecturePath}#${ArchitectureDeepDiveId.BlockStructure}`,
    },
    {
      title: 'Signed Change Request Fields',
      url: `${architecturePath}#${ArchitectureDeepDiveId.SignedChangeRequest}`,
    },
    {
      title: 'Message Fields',
      url: `${architecturePath}#${ArchitectureDeepDiveId.MessageFields}`,
    },
    {
      title: 'Account Lock',
      url: `${architecturePath}#${ArchitectureDeepDiveId.AccountLock}`,
    },
    {
      title: 'Node Identifier',
      url: `${architecturePath}#${ArchitectureDeepDiveId.NodeIdentifier}`,
    },
    {
      title: 'Sample Request and Response',
      url: `${architecturePath}#${ArchitectureDeepDiveId.SampleRequestAndResponse}`,
    },
    {
      title: 'Adding Validators to the Schedule',
      url: `${architecturePath}#${ArchitectureDeepDiveId.AddingValidators}`,
    },
    {
      title: 'Consensus between Confirmation Validators',
      url: `${architecturePath}#${ArchitectureDeepDiveId.Consensus}`,
    },
    {
      title: 'Network Initialization',
      url: `${architecturePath}#${ArchitectureDeepDiveId.NetworkInitialization}`,
    },
    {
      title: 'FAQ',
      url: `${architecturePath}#${ArchitectureDeepDiveId.Faq}`,
    },
  ],
  'principal-entities': [
    {
      title: 'Overview',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Overview}`,
    },
    {
      title: 'Blockchain Optimizations',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.BlockchainOptimizations}`,
    },
    {
      title: 'Account',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Account}`,
    },
    {
      title: 'Nodes',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Nodes}`,
    },
    {
      title: 'Blocks and Blockchain',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.BlocksAndBlockchain}`,
    },
    {
      title: 'Validators',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Validators}`,
    },
    {
      title: 'Node Roles',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.NodeRoles}`,
    },
    {
      title: 'Locked Coins and Boosts',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.LockedCoinsAndBoosts}`,
    },
    {
      title: 'Coins vs. Points',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.CoinsVsPoints}`,
    },
    {
      title: 'Governance',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Governance}`,
    },
    {
      title: 'Budget',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Budget}`,
    },
    {
      title: 'Fees',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Fees}`,
    },
    {
      title: 'Glossary of Main Entities',
      url: `${principalEntitiesPath}#${PrincipleEntitiesId.Glossary}`,
    },
  ],
  // TODO: fill in the rest
  'principal-events': [],
  whitepaper: [
    {
      title: PATHNAME_TO_TITLE_MAPPING['principal-entities'],
      url: principalEntitiesPath,
    },
    {
      title: PATHNAME_TO_TITLE_MAPPING['principal-events'],
      url: principalEventsPath,
    },
    {
      title: PATHNAME_TO_TITLE_MAPPING.architecture,
      url: architecturePath,
    },
  ],
};
