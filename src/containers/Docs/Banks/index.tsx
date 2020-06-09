import React from 'react';

import BanksAndWallets from './BanksAndWallets.png';
import RegistrationBankMembers from './RegistrationBankMembers.png';
import ValidatorElection from './ValidatorElection.png';

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
      <div className="img-container">
        <img alt="validator election" className="validator-election" src={ValidatorElection} />
      </div>
      <p>
        Given the architecture of a peer-to-peer network, all bank nodes are always in constant communication with one
        another. This will allow them to view each other's trust levels of all validators on the network. Through doing
        so, banks will reach consensus on the most trusted validator and that validator will be appointed as the elected
        primary validator for the network. All banks in the network are responsible for assigning their own trust levels
        to each validator. Banks in the network will often set their primary validator as the one that was appointed
        through network consensus, yet assign higher trust levels to other validators as a way of indicating their
        “vote” for the ideal validator. This allows banks to remain part of the network while also recommending an
        alternative validator through open communication.
      </p>
      <p>
        Banks will also look to earn the trust of other banks in the network to increase their network trust consensus.
        This is done by providing reliable service and accurate information to other bank nodes. They are also
        responsible for monitoring network activity and reporting any mischievous behavior. This will help ensure that
        the same accounts are not joining multiple banks. If there are accounts discovered on the network who are
        members at multiple banks, it will be announced to the network and remain visible to all nodes until the issue
        is resolved.
      </p>
      <p>
        Banks will also perform additional network tasks such as updating other banks when one of their members receives
        points through a transaction as described earlier. Banks may also keep track of all network account numbers and
        the banks that those accounts belong to. This last responsibility is not a requirement, but will help build
        trust from other banks.
      </p>
      <p>
        In addition to the responsibilities to the network, banks also have responsibilities to their members. When
        users first download account manager applications and create their accounts, they will then select a bank in
        which they wish to become a member of. Upon successful registration with the bank, they are then able to connect
        to the network through that bank and may begin sending transactions.
      </p>
      <p>
        Banks prevent users from the need to set up and maintain their own network servers. Banks will also assign trust
        levels to all of their members, similar to how trust levels are assigned to validators. The specific method of
        assigning trust levels to members is entirely up to the bank itself, but in general banks will often assign
        trust levels based on several factors including:
      </p>
      <ul>
        <li>time as a member (older members are generally more trusted)</li>
        <li>previous attempts to register with multiple banks</li>
        <li>previous attempts to pay with insufficient funds</li>
        <li>improper formatting of Txs</li>
      </ul>
      <p>
        Lastly, banks will collect transaction fees from member transactions. The transaction fees are determined by the
        individual banks. This will give users the ability to join banks with the most reliable service and who offer
        the lowest transaction fees. Transaction fees are also determined on a per member basis, allowing the banks to
        reward their most trustworthy members. Transaction fees charged to members will often be tier based, as
        determined by the members trust level, rather than determining the fees for each individual member one by one.
      </p>
      <p>
        As briefly mentioned earlier, before users are able to use a bank's services they must first register one (or
        more) of their accounts with that bank. This process involves paying a registration fee to the bank.
        Registration fees are necessary to prove that the account applied at the given bank. Otherwise, any bank would
        be able to lie and state that another bank’s member had applied there, therefore harming the reputation and
        trust level of that user account.
      </p>
      <p>
        Initially, the account registration will be placed in a “pending” status as that bank checks with all other
        banks on the network to ensure that the account is not already a registered member at another bank. As those
        other banks receive this inquiry, they will know not to accept the new account themselves and also report any
        attempts from that account to register. The process of temporarily denying account registration by the other
        banks is referred to as “locking out” the account. Banks will “unlock” the account when an update from the
        inquiring bank is received informing them of the results (that the account was either accepted or rejected). If
        no update is received, banks will have to query the original bank to review both their registration and member
        lists in order to obtain the updated status of that user account.
      </p>
      <div className="img-container">
        <img alt="registration bank members" className="registration-bank-members" src={RegistrationBankMembers} />
      </div>
      <p>
        During this check, if it is discovered that the account is already an existing member at another bank, the new
        bank will block that account and broadcast their misbehavior to the network. The bank in which they are already
        a member may block them as well, but a more likely scenario is simply a reduced trust level of the member. They
        will also check that the account does not have an untrusted reputation (this does not apply to new accounts). If
        the account is found to be untrusted, the registration status will be set to “rejected” and the account will
        need to register at a different bank.
      </p>
      <p>
        If there are no issues discovered during this check, the registration status will be set to “accepted” and the
        user account (now a member) can begin using the network through that bank. The relationship between the member
        and the bank will grow over time, along with their trust for each other. Time is one of the largest factors
        regarding trust.
      </p>
      <p>
        All accounts on the network should only belong to one bank. When the network discovers an account who is a
        member at multiple banks, the network will punish both the offending (new) bank and the user account in the form
        of reduced trust. In addition, if a bank is caught misleading other banks (not revealing their members,
        providing false information, etc...) they will be punished by the network in the form of reduced trust.
      </p>
      <div className="img-container">
        <img alt="banks and wallets" className="banks-and-wallets" src={BanksAndWallets} />
      </div>
      <p>
        Important Note: If and when a bank server goes down, the funds of all members belonging to that bank remain
        secure. This is because unlike a real-world bank, network banks do not store points. All account balances are
        maintained and updated by the central validator and both the balance sheet and the transaction ledger are
        continuously backed up by several backup validators in the case where the primary validator goes down. Banks act
        simply as routers and initial validation mechanisms to enhance the performance of the network by distributing
        the processing power that would otherwise be required by a single node. When a bank server fails, the network
        will become aware of the failed server and acknowledge that the previous members are now free to join a new bank
        without incurring any trust penalty.
      </p>
      <p>
        As nodes on the network receive new information (such as accepting new members) they will broadcast it out to
        all other nodes on the network by sending out POST requests. This is how nodes will communicate and stay updated
        of network activity. Only when nodes are initially deployed or if they realize there is a missing piece of data
        that was never received, do they need to make a GET request to retrieve the missing data.
      </p>
      <p>
        This architecture does not imply that a single human individual should only ever have one account. It is
        perfectly acceptable and even encouraged for individuals to have multiple accounts, only that they do not use
        the same account across multiple banks.
      </p>
      <p>To leave a bank, simply make a request to the bank to remove your user account from their members list.</p>
    </section>
  );
};

export default Banks;
