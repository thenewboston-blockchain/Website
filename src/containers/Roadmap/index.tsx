import React from 'react';

import {PageTitle} from 'components';
import {ROUTES, URLS} from 'constants/routes';

import Hero from './Hero';
import Section from './Section';

import * as S from './Styles';

const Roadmap: React.FC = () => {
  return (
    <>
      <PageTitle title="Roadmap" />

      <Hero />

      <S.Container>
        <Section title="Technological Direction">
          <S.Paragraph mb={32}>
            <S.Highlight>Disclaimer: </S.Highlight>
            In this section, we discuss systems and core tech features that the core team owns entirely or partially,
            along with integrations (projects/apps) that are out of the core team's scope and control, yet the core team
            believes will guide thenewboston community and its partners for 2022. However, for now, we present this
            technological suite in its entirety:
          </S.Paragraph>
          <S.List bold>
            <S.ListItem>Beta Blockchain Infrastructure</S.ListItem>
            <S.ListItem>Wallet+</S.ListItem>
            <S.ListItem>Token System</S.ListItem>
            <S.ListItem>NFT Marketplace</S.ListItem>
            <S.ListItem mb={0}>Bridge</S.ListItem>
          </S.List>
        </Section>

        <Section title="Beta Blockchain Infrastructure">
          <S.Paragraph>
            This is the backbone of thenewboston network, as described in the{' '}
            <S.A newWindow={false} href={URLS.developerPortal.whitepaper}>
              Living Whitepaper
            </S.A>
            , and it is the most important technological product for 2022. The rest of our roadmap depends on it.
          </S.Paragraph>
        </Section>

        <Section title="Wallet+">
          <S.Paragraph mb={16}>
            Wallet+ is the next generation of our TNB Account Manager. It will involve the community even more by
            allowing users to:
          </S.Paragraph>
          <S.List mb={16}>
            <S.ListItem>
              Vote community members into governance to decentralize our key decision processes by distributing
              decision-making power to the entire community and its most trusted members
            </S.ListItem>
            <S.ListItem>Boost nodes to determine Top 20 nodes</S.ListItem>
            <S.ListItem>Deposit coins to earn points</S.ListItem>
            <S.ListItem>Have visibility in the treasury to monitor how coins are being distributed</S.ListItem>
          </S.List>
          <S.Paragraph>
            Besides our beta blockchain, Wallet+ is currently the highest-priority product on the roadmap because the
            Token System, Escrow, and Exchange rely on it for using our blockchain.{' '}
            <S.Link to={ROUTES.walletProgress}>View Wallet+ progress</S.Link>.
          </S.Paragraph>
        </Section>

        <Section title="Token System">
          <S.Paragraph>
            The Token System is a core blockchain feature that will provide the foundation for the blockchain to send
            and receive NFTs (in-game assets, artwork, videos, music, etc), and enable the NFT Marketplace to come to
            fruition. The Token System will also enable new games and apps to be created and to be more interconnected
            than ever before.
          </S.Paragraph>
        </Section>

        <Section title="NFT Marketplace">
          <S.Paragraph>
            NFT Marketplace (integration / app) is where people will use TNBC or other crypto to buy and sell NFTs
            (in-game assets, artwork, videos, music, etc). The NFT Marketplace will interconnect various in-app assets
            into a one-stop-shop, which will then interconnect different types of user bases. While this app is outside
            of the core team's scope, we encourage community members to take on the responsibility of developing it to
            encourage the development and use of NFTs.
          </S.Paragraph>
        </Section>

        <Section title="Bridges">
          <S.Paragraph>
            Bridges enable users to swap their TNBC for other crypto and vice versa easily with no middleman. Users will
            find others instantly to perform these transactions through this service. We expect Bridges to become a
            popular service for all users globally and we're going to be bridging blockchains one bridge at a time. This
            way, we expect to attract the attention of more crypto enthusiasts and attract talent, which will also bring
            utility to the community.
          </S.Paragraph>
        </Section>
      </S.Container>
    </>
  );
};

export default Roadmap;
