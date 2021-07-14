import React, {FC} from 'react';

import {Divider} from 'components';

import DeveloperPortalLayout from '../../components/DeveloperPortalLayout';
import AccountsImage from '../../assets/accounts.svg';
import BudgetsImage from '../../assets/budgets.svg';
import KeysImage from '../../assets/keys.svg';
import NodesImage from '../../assets/nodes.svg';
import NodeBoostingImage from '../../assets/node-boosting.svg';
import './PrincipalEntities.scss';

const PrincipalEntities: FC = () => {
  return (
    <DeveloperPortalLayout pageName="Living Whitepaper | Principal Entities">
      <div className="PrincipalEntities">
        <h6 className="PrincipalEntities__heading">Principal Entities on the Network</h6>
        <section className="PrincipalEntities__section">
          <h2 className="PrincipalEntities__section-heading">Overview</h2>
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-paragraph--mb-48">
            This documentation outlines an efficient and scalable peer-to-peer consensus mechanism that allows for
            highly efficient transaction validation within a decentralized network.
            <br /> The key idea behind this architecture is that when building a distributed payment ledger, it is not
            the transaction processing itself that requires distribution across multiple servers. Multiple servers
            processing the same transactions in parallel is an inherent inefficiency in a distributed network because
            work is duplicated. It is rather the ability to elect fairly a single validation server and consensual
            acceptance of the produced results that require distribution among nodes.
          </p>
          <h3 className="PrincipalEntities__section-sub-heading">Blockchain Optimizations</h3>
          <p className="PrincipalEntities__section-paragraph">
            Regarding the creation of a distributed public ledger, there are several key differences between
            thenewboston network structure and traditional Blockchain architectures.
          </p>
          <p className="PrincipalEntities__section-paragraph">
            An inherent defect in various Blockchain architectures is the inefficient composition of blocks. For
            example, blocks in the Bitcoin Blockchain comprise multiple unrelated transactions. So, within every block,
            the earliest transactions experience significant delays, while later transactions continue to accumulate
            until the entire block gets verified. Focusing on Blockchain performance and nothing else, in an ideal
            architecture, transactions must be validated immediately after they are received, instead of waiting for
            them to bundle along with additional transactions.
          </p>
          <p className="PrincipalEntities__section-paragraph">
            By removing unrelated transactions from blocks, thenewboston can substantially reduce the average network
            block size by constructing blocks that group related transactions only. So, for thenewboston network,
            transfers refer to groups of transactions that must be processed together.
          </p>
          <p className="PrincipalEntities__section-paragraph">
            These improvements, along with others discussed throughout this documentation, reduce the overall energy
            consumption and processing power that the network requires. This increased efficiency enables transactions
            between accounts to be verified within seconds (or less).
          </p>
        </section>
        <Divider className="PrincipalEntities__divider" />
        <section className="PrincipalEntities__section">
          <h2 className="PrincipalEntities__section-heading">Account</h2>
          <p className="PrincipalEntities__section-paragraph">
            Accounts are anonymous digital identities on the network where coins can be sent to and from.
            <br />
            Account managers are software apps (such as client desktop software) that individuals use to create new
            accounts, manage existing accounts, send coins, and receive coins.
          </p>
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-paragraph--mb-0 PrincipalEntities__section-text--bold">
            Every account has:
          </p>
          <ul className="PrincipalEntities__section-list">
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--spaced">
              <span className="PrincipalEntities__section-text PrincipalEntities__section-text--black">
                Account number
              </span>
              , which acts as a receiving address. Other users can send coins to the owner of an account using that
              account number, so every account number is public on the network (public key).
            </li>
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--spaced">
              <span className="PrincipalEntities__section-text PrincipalEntities__section-text--black">
                Account signing key
              </span>
              , which secures the account and proves ownership of the account (private key).
            </li>
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--spaced">
              <span className="PrincipalEntities__section-text PrincipalEntities__section-text--black">
                Account state
              </span>
              , which defines a set of attributes about the current account state, such as account balance (the amount
              of coins owned by an account). These attributes change over time, as opposed to account number and account
              signing key which stay the same.
            </li>
          </ul>
          <p className="PrincipalEntities__section-paragraph">
            When sending coins, users enter the amount they wish to send along with the account number of the recipient
            and, optionally, a memo. They then submit this data to the network for processing. To receive coins, users
            must share their own account number with other users on the network.
          </p>
          {/* TODO: replace all images with ProgressiveImage */}
          <div className="PrincipalEntities__section-image-container">
            <img alt="Account Simple" className="PrincipalEntities__section-image" src={AccountsImage} loading="lazy" />
          </div>
          <p className="PrincipalEntities__section-paragraph">
            When users first download an account manager, it guides them through creating a key pair. A{' '}
            <span className="PrincipalEntities__section-text--highlight">key pair</span> comprises a signing key
            (private key) and an account number (public key).
          </p>
          <div className="PrincipalEntities__section-image-container">
            <img
              alt="Account Simple"
              className="PrincipalEntities__section-image"
              src={KeysImage}
              loading="lazy"
              width="200px"
            />
          </div>
          <p className="PrincipalEntities__section-paragraph">
            Every account number is unique across the entire network, so it verifies the sender when validating
            transactions. Each signing key secures an account and proves ownership of the account, so it must always
            remain private to the account owner because it allows them to{' '}
            <span className="PrincipalEntities__section-text--highlight">sign requests</span> securely for all
            transactions on the network.
          </p>
          <p className="PrincipalEntities__section-paragraph">
            The account number along with a signature prove ownership of the signing key, and consequently the account
            owner, without revealing the signing key itself.
          </p>
          <p className="PrincipalEntities__section-paragraph">
            Users can have more than one account and they can create and manage several accounts (key pairs) through the
            same account manager app. This is similar to an individual that has multiple email addresses and manages all
            of these email accounts using a single app.
          </p>
        </section>
        <Divider className="PrincipalEntities__divider" />
        <section className="PrincipalEntities__section">
          <h2 className="PrincipalEntities__section-heading">Nodes</h2>
          <p className="PrincipalEntities__section-paragraph">
            The network uses multiple nodes, which are servers with several responsibilities. Nodes connect users or
            client apps to the network, or enable important processes, such as transaction validation.
          </p>
          <div className="PrincipalEntities__nodes">
            <div className="PrincipalEntities__nodes-left">
              <img
                alt="Account Simple"
                className="PrincipalEntities__section-image"
                src={NodesImage}
                loading="lazy"
                width="100px"
              />
            </div>
            <div className="PrincipalEntities__nodes-right">
              <p className="PrincipalEntities__section-paragraph">
                <span className="PrincipalEntities__section-text--highlight">Connection node</span> is the node that
                receives a request from a user or a client app, and shares this request with other nodes on the network
                for further processing. <br />
                When users first download applications like the Wallet, they are assigned to a default connection node,
                however, they can choose to connect to the network through a different connection node later.
              </p>
            </div>
          </div>
        </section>
        <Divider className="PrincipalEntities__divider" />
        <section className="PrincipalEntities__section">
          <h2 className="PrincipalEntities__section-heading">Blocks and Blockchain</h2>
          <p className="PrincipalEntities__section-paragraph">
            <span className="PrincipalEntities__section-text--highlight">Blocks</span> are structures that store data.
            These data describe changes to the network and originate from signed change requests, such as:
          </p>
          <ul className="PrincipalEntities__section-list">
            <li className="PrincipalEntities__section-list-item">Transfers of coins between accounts</li>
            <li className="PrincipalEntities__section-list-item">New nodes being added to the network</li>
            <li className="PrincipalEntities__section-list-item">Locking of coins</li>
          </ul>
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-paragraph--mt-32">
            <span className="PrincipalEntities__section-text--highlight">Blockchain</span> is a group of blocks ordered
            chronologically.
          </p>
        </section>
        <Divider className="PrincipalEntities__divider" />
        <section className="PrincipalEntities__section">
          <h2 className="PrincipalEntities__section-heading">Validators</h2>
          <p className="PrincipalEntities__section-paragraph">
            <span className="PrincipalEntities__section-text--highlight">Validators</span> are elected nodes that handle
            the validation of data and the generation of blocks that are added to the blockchain.
          </p>
        </section>
        <Divider className="PrincipalEntities__divider" />
        <section className="PrincipalEntities__section">
          <h2 className="PrincipalEntities__section-heading">Node Roles</h2>
          <p className="PrincipalEntities__section-paragraph">Nodes perform one of these roles:</p>
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-paragraph--mb-8 PrincipalEntities__section-text--black">
            Regular node
          </p>
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-paragraph--my-0">
            A network server that has several responsibilities, such as
          </p>
          <ul className="PrincipalEntities__section-list">
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--dense">
              Checking that requests confirm to network protocols
            </li>
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--dense">
              Routing blocks to Primary Validator node
            </li>
          </ul>
          <Divider className="PrincipalEntities__section-divider" />
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-paragraph--mb-8 PrincipalEntities__section-text--black">
            Primary Validator (PV) node
          </p>
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-paragraph--my-0">
            A validator that accepts signed change requests from regular nodes and, after successful validation of each
            request:
          </p>
          <ul className="PrincipalEntities__section-list">
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--dense">
              Creates a new block
            </li>
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--dense">
              Adds that block to the PV’s own blockchain
            </li>
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--dense">
              Forwards it to the confirmation validators
            </li>
          </ul>
          <Divider className="PrincipalEntities__section-divider" />
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-paragraph--mb-8 PrincipalEntities__section-text--black">
            Confirmation Validator (CV) node
          </p>
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-paragraph--my-0">
            A validator that:
          </p>
          <ul className="PrincipalEntities__section-list">
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--dense">
              Receives blocks from the PV
            </li>
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--dense">
              Starts the validation process for the PV’s results
            </li>
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--dense">
              If a block is valid, adds it as a new block to their own blockchain
            </li>
          </ul>
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-paragraph--mt-32">
            At any point, the network has multiple regular nodes, a single PV, and a number of CVs.
          </p>
        </section>
        <Divider className="PrincipalEntities__divider" />
        <section className="PrincipalEntities__section">
          <h2 className="PrincipalEntities__section-heading">Locked Coins and Boosts</h2>
          <p className="PrincipalEntities__section-paragraph">
            Users of the network can lock any amount of coins that they own. By locking coins, the network places a
            freeze on those coins for a set amount of time to prevent them from being withdrawn. This reduces the amount
            of coins in circulation while increasing their stability and value.
          </p>
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-text--bold">
            In return for locked coins, users receive:
          </p>
          <ul className="PrincipalEntities__section-list">
            <li className="PrincipalEntities__section-list-item">Points</li>
            <li className="PrincipalEntities__section-list-item">The ability to boost a node of their choice</li>
          </ul>
          <p className="PrincipalEntities__section-paragraph">
            <span className="PrincipalEntities__section-text--highlight">Points</span> are used to perform various
            actions on the network. Unlike coins, points refill over time. The refill rate is proportional to the amount
            of coins locked.
          </p>
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-paragraph--mb-32">
            <span className="PrincipalEntities__section-text--highlight">Boosts</span> are locked coins that represent a
            user’s trust in a node to act as a validator.
          </p>
          <p className="PrincipalEntities__section-paragraph">
            Users on the network can endorse their trusted nodes by using the boosting system. All nodes (both regular
            nodes and validators) can receive boosts. In this way, node owners receive rewards for serving the network
            and its users, and for offering trusted and reliable services to them. The following example outlines how
            users A and B lock 40 coins in total to offer 40 boosts to Node A. Similarly, user C boosts Node B by
            locking 25 coins.
          </p>
          <div className="PrincipalEntities__section-image-container">
            <img
              alt="Node Boosting"
              className="PrincipalEntities__section-image"
              src={NodeBoostingImage}
              loading="lazy"
              width="360px"
            />
          </div>
          <p className="PrincipalEntities__section-paragraph">
            This mechanism enables a healthy competition between nodes over users’ trust, resulting in better quality of
            service offered throughout the network.
          </p>
        </section>
        <Divider className="PrincipalEntities__divider" />
        <section className="PrincipalEntities__section">
          <h2 className="PrincipalEntities__section-heading">Coins vs. Points</h2>
          <p className="PrincipalEntities__section-paragraph">
            The value of thenewboston coins will increase as the community develops more apps for our network. All apps,
            however, require user interaction. Some common app interactions include leaving comments, sending messages,
            changing passwords, and so on. The more frequently an app is used, the higher the bandwidth costs for server
            owners will become.
          </p>
          <p className="PrincipalEntities__section-paragraph">
            Blockchain networks typically rely on{' '}
            <span className="PrincipalEntities__section-text--highlight">transaction fees</span> to reward server owners
            and prevent spam. While fees solve the spam problem by making it expensive to attack or spam the network,
            they also introduce a new challenge. As an analogy, imagine users having to pay a fee every time they send
            an email or change their password. If users have to pay charges for every interaction they perform, they
            will eventually stop using these apps. For a blockchain network that targets supporting app development,
            preventing spam, and incentivizing server owners, there is a better solution.
          </p>
          <p className="PrincipalEntities__section-paragraph">
            The goal of the point system is to address these challenges and solve these issues. By locking coins, users
            receive points in return for services to the network.
          </p>
          <p className="PrincipalEntities__section-paragraph PrincipalEntities__section-text--bold">
            Points fill back up over time and help solve challenges such as:
          </p>
          <ul className="PrincipalEntities__section-list">
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--spaced">
              <span className="PrincipalEntities__section-text PrincipalEntities__section-text--black">
                App Development
              </span>{' '}
              - Interactions like leaving comments or sending messages do not have a monetary cost (coins), rather they
              require refillable points.
            </li>
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--spaced">
              <span className="PrincipalEntities__section-text PrincipalEntities__section-text--black">
                Spam Prevention
              </span>{' '}
              - Users have a limited number of interactions they can perform based on how many points they have, so
              spending points for spamming users makes it an overall bad idea.
            </li>
            <li className="PrincipalEntities__section-list-item PrincipalEntities__section-list-item--spaced">
              <span className="PrincipalEntities__section-text PrincipalEntities__section-text--black">
                Incentives to Server Owners
              </span>{' '}
              - Server owners have no direct financial incentive. However, because users can only gain points by locking
              up their coins, when server owners receive points for their services, this increases the value of all
              coins by reducing the overall available supply. Receiving more points leads to more locked coins and less
              available coin supply.
            </li>
          </ul>
        </section>
        <Divider className="PrincipalEntities__divider" />
        <section className="PrincipalEntities__section">
          <h2 className="PrincipalEntities__section-heading">Budget</h2>
          <p className="PrincipalEntities__section-paragraph">
            The existing / alpha Treasury will be burnt in favor of an updated minting process by the Treasury Board.
            Minted coins will be deposited to the budget account which is collectively managed by all members of the
            government. Both the minting process and the dispersion of coins from the budget require a majority of
            signatures, similar to a multisig transaction.
          </p>
          <div className="PrincipalEntities__section-image-container">
            <img
              alt="Budgets"
              className="PrincipalEntities__section-image"
              src={BudgetsImage}
              loading="lazy"
              width="420px"
            />
          </div>
        </section>
        <Divider className="PrincipalEntities__divider" />
        <section className="PrincipalEntities__section">
          <h2 className="PrincipalEntities__section-heading">Fees</h2>
          <p className="PrincipalEntities__section-paragraph">
            Through the collection of fees individuals receive rewards for maintaining nodes on the network. Users pay
            these fees to their connection node in exchange for the processing of their requests.
          </p>
          <p className="PrincipalEntities__section-paragraph">
            Node owners set their own fee amounts. Users will always consider these amounts when choosing their
            connection nodes, and although they will often consider additional factors (such as server reliability), the
            node fee will be the key consideration for most users of the network.
          </p>
          <p className="PrincipalEntities__section-paragraph">
            Besides the node fee, there is an additional fee paid to the PV. The governors set this fee by majority
            vote, rather than having each validator set their own fee. This prevents nodes from having to determine a
            new PV fee when new validators join the network, or when existing PV responsibilities change. The PV fee is
            set directly on the blockchain, resulting in one unified PV fee across the entire network.
          </p>
        </section>
        <Divider className="PrincipalEntities__divider" />
      </div>
    </DeveloperPortalLayout>
  );
};

export default PrincipalEntities;
