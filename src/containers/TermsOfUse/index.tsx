import React, {FC} from 'react';

import {Container} from 'components';

import './TermsOfUse.scss';

const TermsOfUse: FC = () => {
  return (
    <Container className="TermsOfUse" maxWidth={720}>
      <p className="TermsOfUse__effective">Effective: June 22, 2021</p>
      <p className="TermsOfUse__last-updated">Last Updated: June 22, 2021</p>
      <h1 className="TermsOfUse__heading">Terms of Use</h1>
      <div className="TermsOfUse__main-text">
        <p className="TermsOfUse__text">
          This website (the “Site”) is operated by thenewboston (“we”, “us”, “our”). To contact us, please email
          contact@thenewboston.com.
        </p>
        <p className="TermsOfUse__text">
          By using our Site, you confirm that you accept these Terms of Use (“Terms”) and you agree to comply with them.
          If you do not agree to these Terms, you must not use our Site.
        </p>
      </div>
      <section className="TermsOfUse__section">
        <h2 className="TermsOfUse__section-heading">OTHER TERMS THAT MAY APPLY</h2>
        <p className="TermsOfUse__text">
          These Terms of Use refer to the following additional terms that also apply to your use of our Site:
        </p>
        <ul className="TermsOfUse__list">
          <li className="TermsOfUse__list-item">
            <span className="TermsOfUse__text-highlight">Privacy Policy</span>, which sets out how we process personal
            data we receive from you. If you do not wish your personal data to be processed in this way, you must not
            use this Site.
          </li>
        </ul>
        <p className="TermsOfUse__text">
          In some instances, additional terms and conditions, such as a software or product license, may apply to a
          service or product offered through the Site (“Additional Terms”). To the extent there is a conflict between
          these Terms and any Additional Terms, the Additional Terms will control with respect to such service or
          product unless the Additional Terms expressly state otherwise.
        </p>
      </section>
      <section className="TermsOfUse__section">
        <h2 className="TermsOfUse__section-heading">CHANGES TO THESE TERMS AND OUR SIDE</h2>
        <p className="TermsOfUse__text">
          We amend these Terms from time to time. It is your responsibility to be informed of amendments in these Terms.
          We will provide you with the opportunity to review changes before they become effective by indicating the
          dates they were last updated (“Last updated:”) and the date that they will become effective (“Effective:”).
          Your continued use of our Site after we publish our changes to these Terms will be deemed your acceptance of
          the updated terms. Please check these Terms to ensure you understand the provisions that apply.
        </p>
        <p className="TermsOfUse__text">
          We may also update and change our Site from time to time. We do not guarantee that our Site, or any content on
          it, will always be available or be uninterrupted. We may suspend, withdraw, or restrict the availability of
          all or any part of our Site at any time. You are responsible for ensuring that all persons accessing our Site
          through your internet connection are aware of these Terms of Use and other applicable terms and conditions,
          and that they comply with them.
        </p>
      </section>
      <section className="TermsOfUse__section">
        <h2 className="TermsOfUse__section-heading">NOTICES AND MESSAGES</h2>
        <p className="TermsOfUse__text">
          You agree that we may provide notices and messages relating to our announcements, updates, marketing news to
          you through our Site, applications, or through email (opt-in). Should you wish to stop receiving such
          messages, you may click an unsubscribe-link included in each of our messages and you will no longer receive
          such messages from us (opt-out). We may, however, always send you messages on announcements that are linked to
          previous interactions you have had with us. Please make sure to always update your contact information. If
          your contact information is out of date, you may miss out on important notices from us.
        </p>
      </section>
      <section className="TermsOfUse__section">
        <h2 className="TermsOfUse__section-heading">USING MATERIAL ON OUR SITE</h2>
        <p className="TermsOfUse__text">
          We are the owner or the licensee of all intellectual property rights on our Site and in the material published
          on our Site. These works are protected by copyright laws and all such rights are reserved. You may print off
          copies and download extracts of any page(s) for your personal use, and you may draw the attention of others
          within your organisation to content posted on our Site.
        </p>
        <p className="TermsOfUse__text">
          You must not modify materials you have printed off or downloaded, and you must not use illustrations,
          photographs, video or audio sequences separately from accompanying text. Our status (and that of any
          identified contributors) as authors of content on our Site must always be acknowledged by you.
        </p>
        <p className="TermsOfUse__text">
          The “Resources” section of our Site provides various assets and resources that you may use, subject to any
          restrictions specified for each asset. Except for the Media Assets provided in the Assets section, you must
          not use any part of the content on our Site for commercial purposes without obtaining a licence to do so from
          us or our licensors via contact@thenewboston.com.
        </p>
      </section>
      <section className="TermsOfUse__section">
        <h2 className="TermsOfUse__section-heading">OBTAIN ADVICE BEFORE RELYING ON INFORMATION ON THIS SITE</h2>
        <p className="TermsOfUse__text">
          The content on our Site is provided for general information only and is not intended to amount to advice on
          which you should rely. You must obtain professional advice before taking, or refraining from, any action on
          the basis of content on our Site.
        </p>
        <p className="TermsOfUse__text">
          Although we make reasonable efforts to update the information on our Site, we make no representations,
          warranties or guarantees, whether expressed or implied, that the content on our Site is accurate, complete, or
          up to date.
        </p>
      </section>
      <section className="TermsOfUse__section">
        <h2 className="TermsOfUse__section-heading">WEBSITES WE LINK TO</h2>
        <p className="TermsOfUse__text">
          Where our Site contains links to other sites and resources provided by third parties, these links are provided
          for your information only. Such links must not be interpreted as approval by us of those linked websites or
          information you may obtain from them. We have no control over the content of those sites or resources.
        </p>
        <p className="TermsOfUse__text">
          You are responsible for deciding if you want to access or use third-party applications or sites that are made
          accessible through links from our Site. Third-party applications and sites have their own legal terms and
          privacy policies, and you may be giving others permission to use your information in ways we would not. Except
          to the limited extent it may be required by applicable law, we are not responsible for third party websites or
          apps accessible through links from our Site. Your use of them is at your own risk.
        </p>
      </section>
      <section className="TermsOfUse__section">
        <h2 className="TermsOfUse__section-heading">LOSS OR DAMAGE</h2>
        <p className="TermsOfUse__text">
          We do not exclude or limit our liability to you where it would be unlawful for us to do so. This includes
          liability for death or personal injury caused by our negligence or the negligence of our agents or
          subcontractors, and liability for fraud or fraudulent misrepresentation.
        </p>
        <p className="TermsOfUse__text">If you are a business user:</p>
        <ul className="TermsOfUse__list">
          <li className="TermsOfUse__list-item">
            We exclude all implied conditions, warranties, representations, or other terms that may apply to our Site or
            any content on it.
          </li>
          <li className="TermsOfUse__list-item">
            We will not be liable to you for loss or damage, whether in contract, tort (including negligence), breach of
            statutory duty, or otherwise, arising under or in connection with use of, or inability to use, our Site or
            use of or reliance on any content displayed on our Site. In particular, but without limiting the foregoing,
            we will not be liable for loss of profits, sales, business, or revenue; business interruption; loss of
            anticipated savings; loss of business opportunity, goodwill or reputation; or any indirect or consequential
            loss or damage.
          </li>
        </ul>
        <p className="TermsOfUse__text">If you are a consumer user:</p>
        <ul className="TermsOfUse__list">
          <li className="TermsOfUse__list-item">
            Note that we only provide our Site for domestic and private use. You agree not to use our Site for any
            commercial or business purposes, and we have no liability to you for any loss of profit, loss of business,
            business interruption, or loss of business opportunity.
          </li>
          <li className="TermsOfUse__list-item">
            We will not be liable for damage that you could have avoided by following our advice to apply an update
            offered to you free of charge or for damage that was caused by your failing to correctly follow installation
            instructions or to have in place any minimum system requirements advised by us.
          </li>
        </ul>
      </section>
      <section className="TermsOfUse__section">
        <h2 className="TermsOfUse__section-heading">VIRUSES</h2>
        <p className="TermsOfUse__text">
          We do not guarantee that our Site will be secure or free from bugs or viruses. You are responsible for
          configuring your information technology, computer programmes and platform to access our Site. You should use
          your own virus protection software.
        </p>
        <p className="TermsOfUse__text">
          You must not misuse our Site by knowingly introducing viruses, trojan horses, worms, logic bombs or other
          malicious or technologically harmful material. You must not attempt to gain unauthorised access to our Site,
          the server on which our Site is stored or any server, computer or database connected to our Site. You must not
          attack our Site via a denial-of-service attack or a distributed denial-of service attack. By breaching this
          provision, you would commit a criminal offence under relevant laws and such breaches will be reported to the
          relevant law enforcement authorities. In the event of such a breach, your right to use our Site will cease
          immediately.
        </p>
      </section>
      <section className="TermsOfUse__section">
        <h2 className="TermsOfUse__section-heading">LINKING TO OUR SITE</h2>
        <p className="TermsOfUse__text">
          We grant you the revocable permission to link to the Site for commentary or information-sharing purposes;
          provided, however, that your website, or any third party websites that link to our Site: (a) cannot frame or
          create a browser or border environment around any of the content on our Site or otherwise mirror any part of
          our Site; (b) can not imply that we or the Site are endorsing or sponsoring it or its products, unless we have
          given our prior written consent to you; (c) cannot present false information about or disparage us, our
          products or services; (d) cannot use any of our trademarks without our prior written permission to you; (e)
          must be owned and controlled by you or the person or entity placing the link, or otherwise permit you to
          enable such link subject to these Terms of Use. By linking to this Site, you agree that you do and will
          continue to comply with the above linking requirements. Notwithstanding anything to the contrary contained in
          these Terms of Use, we reserve the right to prohibit linking to our Site for any reason, in our sole and
          absolute discretion, even if the linking complies with the requirements described above.
        </p>
      </section>
      <section className="TermsOfUse__section">
        <h2 className="TermsOfUse__section-heading">TERMINATION</h2>
        <p className="TermsOfUse__text">
          We reserve the right to terminate your access to and use of the Site without notice and liability, including,
          without limitation, if we believe your conduct fails to conform with these Terms of Use. We also reserve the
          right to investigate suspected violations of these Terms of Use.
        </p>
      </section>
      <section className="TermsOfUse__section">
        <h2 className="TermsOfUse__section-heading">GOVERNING LAW AND ENFORCEMENT</h2>
        <p className="TermsOfUse__text">
          The Terms of Use, their subject matter, and their formation (and any non-contractual disputes or claims) are
          governed by the substantive laws of California without reference to any conflict of law statutes. The
          application of the United Nations Convention on Contracts for the International Sale of Goods (CISG) is hereby
          excluded.
        </p>
        <p className="TermsOfUse__text">
          Any disputes arising out of, or in connection with, these Terms of Use will be submitted to the exclusive
          jurisdiction of the courts of the city of Zug.
        </p>
        <p className="TermsOfUse__text">
          If a court with authority over these Terms of Use finds any part of it unenforceable, you and we agree that
          the court can modify the terms to make that part enforceable while still achieving its intent. If the court
          cannot do that, you and we agree to ask the court to remove that unenforceable part and still enforce the rest
          of these Terms of Use.
        </p>
        <p className="TermsOfUse__text">
          To the extent allowed by law, the English language version of these Terms of Use is binding and other
          translations are for convenience only. The Terms of Use (including any Additional Terms that may be provided
          by us in connection with a specific service or product offered on the Site) is the only agreement between us
          regarding the Site and supersedes all prior agreements related to the Site.
        </p>
      </section>
    </Container>
  );
};

export default TermsOfUse;
