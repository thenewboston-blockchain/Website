import React, {FC} from 'react';

import {Divider} from 'components';

import DeveloperPortalLayout from '../../components/DeveloperPortalLayout';
import AccountsImage from '../../assets/accounts.svg';
import KeysImage from '../../assets/keys.svg';
import NodesImage from '../../assets/nodes.svg';
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
      </div>
    </DeveloperPortalLayout>
  );
};

export default PrincipalEntities;
