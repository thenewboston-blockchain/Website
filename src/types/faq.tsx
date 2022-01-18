import React from 'react';
import {A} from 'components';
import {URLS} from 'constants/routes';

export interface FaqContent {
  answer: JSX.Element | string;
  id: string;
  isTop?: boolean; // top questions to be featured on homepage
  question: JSX.Element | string;
}

export enum FaqFilterType {
  all = 'all',
  coins = 'coins',
  community = 'community',
  projects = 'projects',
  howTo = 'HowTo',
}

export const faqFilters: {
  [key: string]: {
    key: FaqFilterType;
    label: string;
  };
} = {
  [FaqFilterType.all]: {
    key: FaqFilterType.all,
    label: 'All',
  },
  [FaqFilterType.coins]: {
    key: FaqFilterType.coins,
    label: 'Coins',
  },
  [FaqFilterType.community]: {
    key: FaqFilterType.community,
    label: 'Community',
  },
  [FaqFilterType.projects]: {
    key: FaqFilterType.projects,
    label: 'Projects',
  },
  [FaqFilterType.howTo]: {
    key: FaqFilterType.howTo,
    label: 'How to Guides',
  },
};

export type TopicQuestionAndAnswers = {
  topic: Exclude<FaqFilterType, FaqFilterType.all>;
  content: FaqContent[];
};

export const faqQuestionsAndAnswers: TopicQuestionAndAnswers[] = [
  {
    content: [
      {
        answer: 'No. There hasn’t been an ICO and there will never be one.',
        id: 'is-there-ico',
        question: 'Is there going to be an ICO?',
      },
      {
        answer: (
          <span>
            Coins are only minted through adding value to the platform. Approved projects that build apps on top of
            thenewboston blockchain receive coin payouts when specific milestones are reached.
          </span>
        ),
        id: 'how-are-coins-minted',
        isTop: true,
        question: 'How are coins minted?',
      },
      {
        answer: 'No, we have our own blockchain.',
        id: 'is-this-erc20-token',
        question: 'Is this an ERC20 token?',
      },
      {
        answer:
          'Locked coins are frozen and can’t be moved without incurring a penalty. Locking coins is always voluntary.',
        id: 'locked-up-coins',
        question: 'What does it mean when coins are "locked up"?',
      },
      {
        answer: 'To build a better economy which helps people from all over the world.',
        id: 'goal-of-project',
        question: 'What is the goal of the project?',
      },
      {
        answer:
          'Eventually, each TNBC will be divisible up to eight decimal places. We are still considering whether to limit it to four decimal places for beta, or launch beta with eight right away. Four would require nodes to update later on but will be easier to work with in the near future.',
        id: 'decimal-points',
        question: 'How many decimal points will there be in beta?',
      },
      {
        answer:
          "This distribution model is ultimately up to all of you, community members and owners of TNBC. Distribution is also why everyone's decision of which Governors to elect is important, and why this decision must not just be based on who is the most well liked. It is also their ideas and beliefs around economics and how coins should be distributed that matter. If a majority of Governors that support funding NGOs are elected then these NGOs will be funded. Currently though, during alpha, it would not be fair to the community and the Governors to make these decisions. Until we have a transparent voting mechanism in place, we will only fund the development effort and projects that add clear value to the network and/or the community.",
        id: 'distribution-model',
        question: 'What is the distribution model of TNBC?',
      },
      {
        answer:
          "All distributed coins reward contributions that add value to the network and/or the community. This way contributors do not compete like miners for block rewards, rather they work together to make our community and digital currency network as valuable as it can be. This is also why we don't have airdrops or faucets included in our core distribution model. While they are great in terms of distributing coins to a wide audience, there is no value given to the network, so these would devalue everyone's coins. That's why all rain and our faucet are funded only by contributors/donations.",
        id: 'coins-distribution',
        question: 'How are the coins getting distributed?',
      },
      {
        answer: (
          <span>
            Any time the terms "fair" or "value" come up, things get tricky because there is no single definition for
            either that everyone could ever agree on. In terms of an incentive structure that would best benefit the
            network and adoption of the currency, we believe that faucet distribution has its limitations. One of the
            major barriers preventing further adoption of cryptocurrencies is that there isn't always a clear economic
            incentive to solve the problems that really need solving. For example, if a crypto that is mined ever needs
            a new payment integration or mobile app, who would work on that? What would their incentive be? The idea
            that because there might be many people that own that currency, there are also going to be a lot of people
            with the incentive to work on such tasks is not realistic. That's why, for example, numerous popular cryptos
            have few integrations and bad looking UIs. With the incentive model of rewarding contributors an amount of
            coins based on the value they have given to the network and/or the community, it not only allows us to
            tackle these issues, but brings a more diverse range of contributors and community members to thenewboston
            overall.
          </span>
        ),
        id: 'fair-distribution',
        question: 'What is “fair distribution” for TNBC?',
      },
      {
        answer:
          'TNBC is not a p2p currency. All transactions are stored on a public blockchain. However, we are interested in separate project ideas such as a p2p crypto exchange where users can trade coins with one another over encrypted WebSockets.',
        id: 'p2p',
        question: 'Is TNBC p2p?',
      },
      {
        answer:
          "We are including multisig type logic in our beta network which will allow Governors to mint new coins, but it won't work only for that use case. In our network, the Government changes based on who gets voted in and because that information is stored on the blockchain, no actual keys are needed - rather, only logical keys are essential. For them to control a separate crypto account, they would need the actual multisig key. This would require updates for every unique set of governors, and would involve transferring those funds. Such a method would not only be slow but it would be costly as well.",
        id: 'support-multisig',
        question: 'Does TNBC support multisig?',
      },
      {
        answer:
          'thenewboston (TNB) is our community and coins (C) are our currency. So TNB + C is why we use TNBC as our ticker and hashtag.',
        id: 'meaning-tnbc',
        question: 'What’s the meaning of the name “TNBC” and how does it relate to crypto?',
      },
      {
        answer:
          'There is the possibility that the majority of Governors vote not to mint. Then, there would be a max cap.',
        id: 'max-supply',
        question: 'Will there be a max supply?',
      },
      {
        answer:
          "That will ultimately be up to the Government. When too few coins are minted, then there may not be enough incentive for new developers to continue building apps, payment integrations, fixing bugs, and so on. However, if they mint and distribute too many, then, of course, that has a negative impact on the overall value of everyone's coins.",
        id: 'continuous-distribution',
        question:
          'Is there going to be a continuous distribution of coins, or once they are all given out, no more are being created?',
      },
      {
        answer:
          'To spend your coins, all top 20 nodes would have to agree on your balance. For every transaction the nodes look independently at your previous balance, apply the updates from the transaction, and calculate the results. Those results are then hashed and compared with the other nodes to ensure all reached the same result.',
        id: 'spending',
        question: `If everyone is connecting to my bank and I say my balance is a million TNBC, who says it isn't a million and what stops me from "spending" my million?`,
      },
      {
        answer: (
          <>
            <p>
              Our tech docs outline what would happen if the PV was proven to be malicious. The two main situations that
              were covered are:
            </p>
            <ul>
              <li>
                When the PV intentionally tries to fork the network by sending two or more different versions or the
                same block (valid signatures on different blocks with the same block number).
              </li>
              <li>
                When the PV intentionally or unintentionally generates an invalid block. Intentional in the case they
                were attempting to cheat, and unintentional if there was an error in their calculation (bug, database
                issue, and so on).
              </li>
            </ul>
            <p>
              In either of these cases, when the Confirmation Validators (CVs) discover this issue, they will broadcast
              the evidence out to all other CVs and they will all switch over to the next validator in line as PV, based
              on the schedule. The process is actually a bit more technical than that for anyone who hasn’t read through
              the docs, but that’s the gist of it.
            </p>
            <p>
              There is also another situation regarding a non-responsive PV. This is when the PV is intentionally or
              unintentionally ignoring requests from one or more nodes. IHere, the CVs would also need to communicate
              with one another and switch over to a new PV. What makes this situation more challenging is that there is
              no signed evidence, like duplicate signatures or an incorrect calculation, so the answer to “is the PV
              responsive?” becomes a bit more subjective.
            </p>
            <p>
              We can break the problem down by looking at the network from the perspective of a single CV. If we are a
              CV and someone is using us as their active node (soon to be called a “connection” node) and we forward
              their request to the PV, if we receive an error from the PV or a sign that the server is offline, we can
              request a change in PV right away. However, the tricky part comes when we don’t get an error from the PV,
              indicating that they received the request with no issues, but then we just don’t see those changes on the
              blockchain. This shows one of two things.
            </p>
            <ul>
              <li>
                The PV has a large amount of blocks in their queue and is currently bottlenecked/taking time to work
                through them all. In this case, those changes will appear on the blockchain eventually.
              </li>
              <li>
                The PV decided to maliciously ignore our request, most likely because it wasn’t beneficial to them
                (perhaps the request was for boosting a competing node).
              </li>
            </ul>
            <p>
              From our (the CV’s) perspective, it is impossible to know the true reason for this. Because of that, the
              architecture was designed so the CV doesn’t need to figure out the reason. Whether the PV is intentionally
              or unintentionally ignoring the request is irrelevant. The CV can label the PV as having network issues
              and indicate to all others that they would prefer a switch in PV.
            </p>
            <p>
              Although we didn’t write this logic yet (which will most likely be post beta) the CV can also begin to
              route its blocks through another CV rather than directly to the PV. This will either force the PV to
              validate the blocks or prove to that other CV that the PV is indeed experiencing network issues.
            </p>
            <p>
              So the question that remains in all of this is how long exactly the CV must wait before requesting a
              change in PV. Because there is no one right answer to that, we allow this to be configurable by the node
              maintainer. Users will see what value the node maintainer sets for this when they choose which nodes to
              boost. The node maintainer will set a value that they feel is acceptable when factoring in network
              latency, network load, historical average transaction times, and so on. This value will probably change
              overtime. As the network grows and needs to handle more traffic, we will encounter many unforeseen
              bottlenecks which might require a higher value to be set. Then again, as more developers fix these
              bottlenecks and optimize the network we will be able to lower this value to a point where all CVs will
              have very high performance requirements for the PV. That is the direction we are aiming for.
            </p>
          </>
        ),
        id: 'pv-stalling',
        question: `What happens if a Primary Validator (PV) stalls the network on purpose?`,
      },
    ],
    topic: FaqFilterType.coins,
  },
  {
    content: [
      {
        answer:
          'Most crypto projects start with an idea and then try to build a community. We started as an open source community that started building its own cryptocurrency when Bucky Roberts found a way to speed up blockchain transaction time to nearly real-time.',
        id: 'how-is-project-different',
        question: 'How is this project different from other cryptos?',
      },
      {
        answer: 'Like bitcoin and ethereum we have our own blockchain and block explorer. The code is all open source',
        id: 'how-is-project-similar',
        question: 'How is this project similar to other cryptos?',
      },
      {
        answer: (
          <span>
            <A newWindow={false} href="/download">
              https://thenewboston/download
            </A>
          </span>
        ),
        id: 'where-download-wallet',
        isTop: true,
        question: 'Where can I download the Wallet?',
      },
      {
        answer:
          'thenewboston started in 2008 when Bucky Roberts started uploading educational tech videos to YouTube. The channel grew organically as his videos helped thousands start careers in tech.',
        id: 'history-of-thenewboston',
        question: 'What is the history of thenewboston?',
      },
      {
        answer: (
          <span>
            We have a <A href="https://discord.gg/thenewboston">Discord server</A> where most of our communication takes
            place. Feel free to follow us on our various{' '}
            <A newWindow={false} href="/social">
              social media accounts
            </A>{' '}
            as well.
          </span>
        ),
        id: 'how-do-i-join',
        isTop: true,
        question: 'How do I join the community?',
      },
      {
        answer:
          'thenewboston has always been a community which helps each other. A cryptocurrency platform is a natural extension of this as we see the potential for crypto to change the world economy. We plan to continue to produce educational content and apps that help people grow and make their lives better.',
        id: 'vision-for-community',
        question: 'What is the vision for the community?',
      },
      {
        answer: (
          <span>
            Check out our{' '}
            <A
              newWindow={false}
              href={`${URLS.developerPortal.whitepaper}/principal-entities#principal-entities-governance`}
            >
              docs
            </A>
          </span>
        ),
        id: 'how-does-governance-work',
        question: 'How does the governance system work?',
      },
      {
        answer: (
          <span>
            Check out our{' '}
            <A newWindow href="https://blog.thenewboston.com/category/crypto-101-series/">
              Crypto 101 series in our blog
            </A>{' '}
            and{' '}
            <A newWindow={false} href="/tutorials/Digital%20Currency">
              YouTube videos
            </A>
            .
          </span>
        ),
        id: 'new-to-crypto',
        isTop: true,
        question: 'I’m new to crypto, where can I learn more?',
      },
      {
        answer: (
          <>
            <p>
              The barriers preventing further adoption at the moment relate to the tasks that we are currently working
              on, including, yet not limited to:
            </p>
            <ul>
              <li>
                Education. Community members need to understand clearly how the architecture works (so, we are working
                on updating the website, planning tutorials, and so on)
              </li>
              <li>
                Support from and collaboration with other crypto communities. Even though thenewboston has 2.5 million
                subscribers, a solid social media following, and so on (which all sound like a lot), what we are aiming
                for we can't accomplish alone. We will need to unite many other crypto and development communities and
                we have already seen a glimpse of this with community members of Nano and Banano. This will come much
                later, but it is very inspiring to see the collaboration and support between our communities even this
                early.
              </li>
              <li>
                Beta. The beta architecture will include a transparent voting system for the government and nodes. This
                is critical to decentralization.
              </li>
              <li>
                Payment integrations. For website owners to integrate with the network, we need easy-to-use payment
                integrations and developer libraries (currently in development).
              </li>
              <li>
                Good and services. The value of any currency is what it can be exchanged for. Once we have payment
                integrations, then websites and, later, physical stores can begin selling their goods and services. That
                is going to be a major milestone for us.
              </li>
            </ul>
          </>
        ),
        id: 'drawbacks-of-tnbc',
        isTop: true,
        question: 'What are the drawbacks of TNBC?',
      },
      {
        answer: (
          <>
            <p>
              In reality, there was never a comparison between different architectures. It was more like "this is
              actually a great idea and would be a huge improvement to the traditional economy, however, for this thing
              to take off, someone should solve all these bottlenecks".
            </p>
            <p>
              It all started when Bucky read through the Bitcoin architecture, drew up how all the data was flowing
              through the network, and laid everything out, so he could see it on his coffee table in his living room.
              In terms of tech, the main inefficiencies were:
            </p>
            <ul>
              <li>
                Mining. Miners were solving this energy intensive problem which had nothing to do with the transaction
                validation itself, rather this was a "human" problem of distributed consensus
              </li>
              <li>
                Wasted work. As soon as one miner found a block, the work from all other miners on the network was
                thrown out.
              </li>
            </ul>
            <p>
              So, the key thought was "instead of reaching consensus on every single block, why don't they just reach
              consensus on which miner will produce blocks for an amount of time?" That idea needed a lot of tweaking,
              of course, but that was the beginning. It enabled an improved incentive, a better distribution structure,
              and allowed for different types of work and value to be rewarded, such as design, marketing, mobile
              development, and so on.
            </p>
          </>
        ),
        id: 'buckys-study',
        question: 'Which cryptocurrency did Bucky study with extreme detail before working on thenewboston?',
      },
      {
        answer:
          "In beta, once the 20 nodes get added to the schedule, they are all equal. The same applies to the Governors. Their say isn't weighted by votes/boost. So, an attack would need to involve the majority of Governors or the majority of top 20 nodes. Also, those would theoretically be the top trusted members of the community (Governors) or the top trusted nodes on the entire network.",
        id: 'weight-of-vote',
        question: 'What is the “weight” of each vote in beta?',
      },
      {
        answer:
          'All "promises" between friends can be public and published to the blockchain for everyone to see. We are still considering having those exchanges to be private/encrypted p2p, then the "seller" could decrypt and publish these promises only if the buyer never sends the funds.',
        id: 'promises',
        question: 'My friends always break promises, what do I do?',
      },
      {
        answer: (
          <>
            <p>
              Our philosophy is that the amount of coins awarded to each individual is determined based on the amount of
              value that was given to the network and/or the community. The exact amount of coins that get minted is
              decided by our Government which is voted in through an open and transparent voting system by the
              community.
            </p>
            <p>
              We chose this method of distribution over a more decentralized method, such as mining, because it allows
              for a distribution model that reflects the real world more accurately. Here contributors such as
              designers, marketers, mobile developers, and so on can earn coins through a variety of methods.
            </p>
          </>
        ),
        id: 'philosophy',
        question: 'What is the Philosophy of thenewboston?',
      },
      {
        answer: (
          <>
            <p>
              As more people join our Discord from other crypto communities, we emphasize that these other
              cryptocurrencies are not our competition. In fact, we plan to create a tutorial series about many other
              cryptos including Nano, Monero, Bitcoin, Ethereum, and so on.
            </p>
            <p>
              While most other crypto communities out there are busy talking poorly about one another, we are going to
              swim against the current. We are going to bring these communities together by adding as much value as we
              can to them in the form of tutorials, marketing content, blog posts, and so on.
            </p>
            <p>
              Why would we possibly spend our limited resources promoting these other communities rather than our own?
              Because the more value we give to their communities, the more value we are going to get right back. Every
              time we create an awesome tutorial series about another crypto, those tutorials will get circulated and
              shared throughout those communities. Want to learn about Ethereum? Check out these videos by thenewboston.
              Wondering what the fastest cryptos are? Check out this blog post about TNBC and Nano.
            </p>
            <p>
              The goal of this project is not to become the #1 crypto. The goal of this project is to build a better
              economy. It’s a goal that sounds so big it’s almost unimaginable, but that’s exactly what we’re aiming
              for.
            </p>
            <p>
              It’s up to us to build what no one else can. We, as thenewboston community, are in a very unique position
              where we can educate, build, and add value to so many other tech communities. We are a community that can
              work together, help each other out, and through that, we truly believe we will accomplish what no other
              development community ever has before.
            </p>
          </>
        ),
        id: 'view-on-other-cryptos',
        question: 'What is our view on other cryptocurrencies?',
      },
      {
        answer:
          'Whenever we get our payment libraries built out, we expect that the first websites to accept TNBC are going to be sold out of whatever they are selling in about 3 seconds!',
        id: 'sell-goods',
        question: 'Why not be the first website to sell goods on TNBC?',
      },
      {
        answer: (
          <span>
            In Bucky’s words: “I finished the very first version of the docs about a year ago. I reached out to Justin
            and Kristy after that, since I worked with them before, and they are some of the best team members I've ever
            worked with. I just told them about the project, shared the initial idea, and they said they were
            interested. Then we started building.”
          </span>
        ),
        id: 'hello-world-video',
        isTop: true,
        question: 'What is the story behind the “Hello World” video?',
      },
      {
        answer:
          "If we build this right, then there will be very few reasons not to use it. The current financial system is really not that great. Banks can freeze your funds with limited justification, overdraft fees, ATM fees, lifelong debt is now the norm, it takes 5-7 business days just to send money in sometimes, and good luck sending money to your family or friends in another country without paying an arm and a leg in fees. We would like to focus as much as possible not so much on our competition whether that be traditional currencies or other cryptocurrencies, but more so on just making our currency the best that we can. Any reason for anyone not to use our currency, it's our job to remove that barrier.",
        id: 'future-of-tnbc',
        isTop: true,
        question: 'What is the future of TNBC?',
      },
      {
        answer:
          "Take our current world and replace USD with TNBC, that's what we're aiming for. However, even though that's the magnitude of our goal we don't think it would actually be the best economic model. We hope that, eventually, cryptocurrencies will dominate in general, because everything would be more open and transparent and the economy overall would be more fair. We would imagine, however, that there would be multiple cryptocurrencies given that each one has their own unique benefits. Some are faster than others, some better for privacy, other maybe better for smart contracts, and so on.",
        id: 'tnbc-in-20-years',
        isTop: true,
        question: 'Where do you see TNBC in 20 years?',
      },
      {
        answer: 'April 4th 2021 - the memo day. Our first memo was “Bacon”.',
        id: 'first-memo',
        isTop: true,
        question: 'What was the first memo on thenewboston network?',
      },
    ],
    topic: FaqFilterType.community,
  },
  {
    content: [
      {
        answer: (
          <span>
            Create an issue here:{' '}
            <A href="https://github.com/thenewboston-developers/Projects/issues">
              https://github.com/thenewboston-developers/Projects/issues
            </A>
          </span>
        ),
        id: 'how-to-propose-project',
        isTop: true,
        question: 'How do I propose a project?',
      },
      {
        answer:
          'There are multiple projects under way. Two examples are a marketplace and a system that lets people pay for online goods with the coin.',
        id: 'what-apps-are-being-built',
        question: 'What apps are being built on top of this blockchain?',
      },
      {
        answer: <span>To be determined.</span>,
        id: 'product-roadmap',
        question: 'Is there a product roadmap?',
      },
    ],
    topic: FaqFilterType.projects,
  },
  {
    content: [
      {
        answer: (
          <span>
            <A newWindow={false} href="/wallet/get-started">
              Here
            </A>
          </span>
        ),
        id: 'wallet-guides',
        question: 'Are there guides for using the Wallet?',
      },
      {
        answer: (
          <span>
            <A newWindow={false} href="/wallet/create-bank">
              Bank
            </A>
            ,{' '}
            <A newWindow={false} href="/wallet/create-validator">
              PV
            </A>
            .
          </span>
        ),
        id: 'how-to-create-bank-pv',
        question: 'How do I create a bank or PV?',
      },
    ],
    topic: FaqFilterType.howTo,
  },
];
