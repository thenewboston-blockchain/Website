import React, {FC} from 'react';

import {DocContainer, DocImage} from 'components';

import DoubleSpend from './DoubleSpend.png';

const GuideTrust: FC = () => {
  return (
    <DocContainer className="GuideTrust" title="Trust" lastUpdated="07 Dec 2020">
      <p>
        The single most important concept in this network architecture is the concept of trust. It is also where this
        network deviates most from traditional Blockchain based digital currencies that abide by common consensus
        mechanisms such as Proof of Work (PoW) or Proof of Stake (PoS). In order to understand the reasoning behind a
        trust-based distributed network, it is first important to understand the problem that all existing mechanisms
        are attempting to solve: the problem of consensus.
      </p>
      <p>
        The use of the Blockchain as a distributed ledger was the foundation that allowed for the rapid growth of
        Bitcoin as a digital currency. It offered the idea that currency itself could now exist without the need for a
        central bank or single entity in control. Instead, a public distributed ledger could be shared over a
        peer-to-peer network allowing anyone in the world to view, save, and update the ledger. It was a concept that
        revolutionized the way the world thought about currency and the transfer of value. However, this novel idea
        brought along with it a very interesting question. If anyone in the world could view, save, and update this
        Blockchain resulting in many different variations of the same object, which one would be the "true" Blockchain?
      </p>
      <p>
        In a Blockchain, every new block added is dependent on the last. As new transactions occur all across the world,
        Bitcoin nodes known as "miners" attempt to validate these transactions, bundle them together into a block, and
        append it to the Blockchain. However, when several miners simultaneously announce that their block is the block
        that all other nodes should append to, the network must reach a consensus to decide which miner to trust. Given
        that the purpose of the Blockchain is to act as a record of all transactions and therefore account balances of
        the network, it is critical that consensus is achieved.
      </p>
      <p>
        The first attempt to solve this problem came in the form of Proof of Work. Proof of Work limits the simultaneous
        announcements from miners by adding an additional requirement to each and every block that is produced. This new
        requirement can be thought of as a solution to a puzzle that is difficult to compute. On average, across the
        entire Bitcoin network (which consists of an incredible amount of computing power) a new solution is only found
        approximately every 10 minutes. This is why the median confirmation time for a Bitcoin transaction is 10
        minutes. It is not due to the amount of time required to confirm the transactions, which only takes a fraction
        of a second. Rather, it is the time required to solve the puzzle.
      </p>
      <p>
        Although PoW is an appropriate consensus mechanism in many use cases, such as purchasing items online when a 10
        minute transaction confirmation time is adequate, it is not practical when considering more common day-to-day
        transactions. If you were to imagine purchasing a candy bar from a vending machine and needing to wait 10
        minutes for the network to validate your transaction before receiving the candy bar, it is clear to see why
        widespread adoption of a digital currency utilizing PoW is unrealistic.
      </p>
      <p>
        In acknowledgement of the challenges brought forth with PoW, including not only the long transaction times but
        also the enormous amount of energy wasted on solving puzzles, it was clear that a new consensus mechanism was
        required. From there, a new solution called Proof of Stake was born.
      </p>
      <p>
        Proof of Stake states that rather than solving puzzles, network nodes would instead vote for the block that
        would be added as the next block on the Blockchain. To ensure that the voting process was fair, voting power
        (technically "mining power") is proportional to the number of coins held by a node. This is supported by the
        philosophy that nodes with the most coins would also have the most incentive to maintain a secure and reliable
        network. While PoS provides many benefits over PoW such as confirmation time improvements and lower energy
        requirements for miners, it also comes with challenges of its own. The most well known being a network attack,
        commonly referred to as a "51% attack."
      </p>
      <p>
        A 51% attack occurs when a single entity controls 51% or more of the network's currency. Since voting power is
        proportional to the amount of currency held, a majority holder of the currency could essentially act as a
        dictator, making the notion of "consensus" on the network obsolete. Given the ever growing wealth inequality
        that is visible across the entire global economy, it is difficult to ignore the inherent possibility of a 51%
        attack. In addition, a network where the most wealthy individuals are given the most power is an all too
        familiar road that many wish to avoid.
      </p>
      <p>
        In understanding the challenges that existing consensus mechanisms are attempting to solve, and acknowledging
        the new issues that these mechanisms have brought forward, it is apparent that a new method of reaching network
        consensus must be found. To find an elegant solution to a very difficult problem, it is often helpful to
        simplify the problem itself. Although the motivation for this problem arises out of the need to maintain a fair
        peer-to-peer distributed network, the true problem has very little to do with networking or technology at all.
        The challenges can be seen more clearly by taking a look at one of the most well-known issues in digital
        currency, the double-spend problem.
      </p>
      <p>
        Double-spend is the issue that arises in a distributed network when validation is split across multiple nodes,
        where malicious individuals are able to spend more currency than they own. In the example below, both of the
        validators inspect a single transaction and compare it against their own copies of the exact same verified
        balance sheet to ensure that the sender has the appropriate amount of funds. Both of the validators will
        independently reach the conclusion that the sender does indeed have enough funds to cover the transaction,
        therefore the transaction must be valid. It is only later when a third node becomes aware of both transactions
        that the issue is discovered.
      </p>

      <DocImage alt="double spend diagram" maxWidth={1400} src={DoubleSpend} />

      <p>
        For the bank node that first receives both transactions (Bank 3), it will be clear that both transactions can
        not be valid. In addition, given that in a peer-to-peer network different nodes are often spread out all across
        the world, the order in which transactions are received is largely dependent on the physical distance between
        the two servers. This makes it difficult to determine exactly which transaction truly happened first.
      </p>
      <p>
        When we view the problem as Bank 3, we need to decide between two valid transactions, one from Bank 1 and the
        other from Bank 2. Since both transactions can indeed be independently viewed as "valid," they can therefore be
        canceled out and removed from the equation entirely. What we are left with is a rather straightforward problem,
        one in which Bank 3 must decide between Bank 1 and Bank 2. In the end, the question for Bank 3 is not about the
        transactions at all, but a much more simplified one:
      </p>
      <p>"Who do I trust?"</p>
      <p>
        Since the creation of the very first distributed Blockchain, this seemingly simple question has become one of
        the most difficult challenges in all of computer science. We have already reviewed the two most widely used
        answers to this question, those being "the nodes with the most computing power" and "the nodes with the most
        money." However, in an effort to find a mathematical formula that is capable of quantifying the level of "trust"
        needed to support a distributed peer-to-peer payment network, it is important to remember the purpose behind any
        such formula at all. It is not a formula itself that is needed, but merely a method in which computers can
        quickly provide an answer to the very familiar question:
      </p>
      <p>"Who do I trust?"</p>
      <p>
        Before we can turn to computer science or mathematics for an answer to this problem, we must first be able to
        answer this question as human beings. Only then may we then attempt to translate that solution into a
        mathematical formula or programmable function. As an individual viewing a network composed of multiple computers
        spread out across the world, all working towards achieving consensus regarding transaction validation, the
        question that every one of us must answer on our own is:
      </p>
      <p>"Who do we trust?" </p>
      <p>
        It is our belief that we have incorrectly turned to computer science in search of a solution to a question in
        which computers are simply not capable of solving. In an effort to quantify the level of "trust", we have lost
        sight of what "trust" truly means. Trust is not a formula. It is not an equation in which a given set of inputs
        should always lead to an expected output. It is an ever evolving, ever changing feeling in which only life is
        capable of experiencing. It is the unseen bond in which time can both strengthen or break.
      </p>
      <p>
        In creating a computer network designed not only to expedite, but more importantly accurately reflect the
        unified consensus of global human decision making, it is critical that humans remain in control of the
        foundation in which the network is built. Only then are we able to build a network in which the trust between
        nodes may remain flexible. A network in which trust may not only be strengthened over time but more importantly,
        one which will allow for that trust to be broken.
      </p>
      <p>
        To maintain efficiency of an automated distributed network, nodes must still be given a value that will allow
        them to answer the question of "Who do I trust?", but the value provided should not stem from a mathematical
        equation or pre-defined formula. This value must always originate from humans. It should remain flexible to
        allow for adjustment as needed over time. The method in which this value is determined will be different for
        every individual, yet this is the method that most accurately reflects true human nature.
      </p>
      <p>
        By establishing a network architecture in which discrepancies in transactions are able to be solved quickly and
        efficiently through the use of human quantified trust, it is possible to construct a highly scalable, highly
        reliable, and highly performant globally distributed network. A trust-based network architecture would
        immediately reject any node deemed untrustworthy, regardless of computing power or the amount of wealth that
        node controlled.
      </p>
    </DocContainer>
  );
};

export default GuideTrust;
