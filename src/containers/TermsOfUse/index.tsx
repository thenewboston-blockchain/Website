import React, {FC} from 'react';

import {A, PageTitle} from 'components';

import './TermsOfUse.scss';

const TermsOfUse: FC = () => {
  return (
    <>
      <PageTitle title="Terms Of Use" />
      <div className="TermsOfUse">
        <p>Effective as of April 5, 2021.</p>

        <h1 className="TermsOfUse__title">Terms of Use</h1>
        <p>
          Welcome to thenewboston (the "Service"). The following Terms of Use apply when you view or use the Service
          located at:{' '}
          <A href="https://thenewboston.com" newWindow={false}>
            https://thenewboston.com
          </A>
          . Please review the following terms carefully. By accessing or using the Service, you signify your agreement
          to these Terms of Use. If you do not agree to these Terms of Use, you may not access or use the Service.
        </p>

        <h2 className="TermsOfUse__subtitle">Privacy Policy</h2>
        <p>
          The company respects the privacy of its Service users. Please refer to the Company's Privacy Policy which
          explains how we collect, use, and disclose information that pertains to your privacy. When you access or use
          the Service, you signify your agreement to this Privacy Policy.
        </p>
        <h2 className="TermsOfUse__subtitle">Registration; Rules for User Conduct and Use of the Service</h2>
        <p>
          You need to be at least 16 years old to register for and use the Service. If you are a user who signs up for
          the Service, the company will create a personalized account, which includes a unique username and a password
          to access the Service and allow you to receive messages from the Company. You agree to notify us immediately
          of any unauthorized use of your password and/or account. The Company will not be responsible for any
          liabilities, losses, or damages arising out of the unauthorized use of your member name, password and/or
          account.
        </p>

        <h2 className="TermsOfUse__subtitle">Use Restrictions</h2>
        <p>
          Your permission to use the Site is conditioned upon the following Use Restrictions and Conduct Restrictions:
          You agree that you will not under any circumstances:
        </p>
        <ul className="TermsOfUse__list">
          <li>
            post any information that is abusive, threatening, obscene, defamatory, libelous, or racially, sexually,
            religiously, or otherwise objectionable and offensive;
          </li>
          <li>use the service for any unlawful purpose or for the promotion of illegal activities;</li>
          <li>attempt to, or harass, abuse or harm another person or group;</li>
          <li>use another user's account without permission;</li>
          <li>provide false or inaccurate information when registering an account;</li>
          <li>interfere or attempt to interfere with the proper functioning of the Service;</li>
          <li>
            make any automated use of the system, or take any action that we deem to impose or to potentially impose an
            unreasonable or disproportionately large load on our servers or network infrastructure;
          </li>
          <li>
            bypass any robot exclusion headers or other measures we take to restrict access to the Service or use any
            software, technology, or device to scrape, spider, or crawl the Service or harvest or manipulate data
          </li>
          <li>
            publish or link to malicious content intended to damage or disrupt another user's browser or computer.
          </li>
        </ul>

        <h2 className="TermsOfUse__subtitle">Posting and Conduct Restrictions</h2>
        <p>
          When you create your own personalized account, you may be able to provide ("User Content"). You are solely
          responsible for the User Content that you post, upload, link to or otherwise make available via the Service.
          You agree that we are only acting as a passive conduit for your online distribution and publication of your
          User Content. The Company, however, reserves the right to remove any User Content from the Service at its
          discretion. The following rules pertain to User Content. By transmitting and submitting any User Content while
          using the Service, you agree as follows:
        </p>
        <ul className="TermsOfUse__list">
          <li>
            You are solely responsible for your account and the activity that occurs while signed in to or while using
            your account;
          </li>
          <li>You will not post information that is malicious, false or inaccurate;</li>
          <li>
            You will not submit content that is copyrighted or subject to third party proprietary rights, including
            privacy, publicity, trade secret, etc., unless you are the owner of such rights or have the appropriate
            permission from their rightful owner to specifically submit such content; and
          </li>
          <li>
            You hereby affirm we have the right to determine whether any of your User Content submissions are
            appropriate and comply with these Terms of Service, remove any and/or all of your submissions, and terminate
            your account with or without prior notice.
          </li>
        </ul>
        <p>
          You understand and agree that any liability, loss or damage that occurs as a result of the use of any User
          Content that you make available or access through your use of the Service is solely your responsibility. The
          Company is not responsible for any public display or misuse of your User Content. The Company does not, and
          cannot, pre-screen or monitor all User Content. However, at our discretion, we, or the technology we employ,
          may monitor and/or record your interactions with the Service.
        </p>

        <h2 className="TermsOfUse__subtitle">Online Content Disclaimer</h2>
        <p>
          Opinions, advice, statements, offers, or other information or content made available through the Service, but
          not directly by the Company, are those of their respective authors, and should not necessarily be relied upon.
          Such authors are solely responsible for such content. The Company does not guarantee the accuracy,
          completeness, or usefulness of any information on the Service and neither does the Company adopt nor endorse,
          nor is the Company responsible for the accuracy or reliability of any opinion, advice, or statement made by
          parties other than the Company. The Company takes no responsibility and assumes no liability for any User
          Content that you or any other user or third party posts or sends over the Service. Under no circumstances will
          the Company be responsible for any loss or damage resulting from anyone's reliance on information or other
          content posted on the Service, or transmitted to users. Though the Company strives to enforce these Terms of
          Use, you may be exposed to User Content that is inaccurate or objectionable. The Company reserves the right,
          but has no obligation, to monitor the materials posted in the public areas of the service or to limit or deny
          a user's access to the Service or take other appropriate action if a user violates these Terms of Use or
          engages in any activity that violates the rights of any person or entity or which we deem unlawful, offensive,
          abusive, harmful or malicious. The Company shall have the right to remove any such material that in its sole
          opinion violates, or is alleged to violate, the law or this agreement or which might be offensive, or that
          might violate the rights, harm, or threaten the safety of users or others. Unauthorized use may result in
          criminal and/or civil prosecution under the law. If you become aware of misuse of our Service, please contact
          us at{' '}
          <A href="https://thenewboston.com" newWindow={false}>
            https://thenewboston.com
          </A>
          .
        </p>

        <h2 className="TermsOfUse__subtitle">Links to other sites and/or materials </h2>
        <p>
          As part of the Service, the Company may provide you with convenient links to third party website(s) ("Third
          Party Sites") as well as content or items belonging to or originating from third parties (the"Third Party
          Applications, Software or Content"). These links are provided as a courtesy to Service subscribers. The
          Company has no control over Third Party Sites and Third Party Applications, Software or Content or the
          promotions, materials, information, goods or services available on these Third Party Sites or Third Party
          Applications, Software or Content. Such Third Party Sites and Third Party Applications, Software or Content
          are not investigated, monitored or checked for accuracy, appropriateness, or completeness by the Company, and
          the Company is not responsible for any Third Party Sites accessed through the Site or any Third Party
          Applications, Software or Content posted on, available through or installed from the Site, including the
          content, accuracy, offensiveness, opinions, reliability, privacy practices or other policies of or contained
          in the Third Party Sites or the Third Party Applications, Software or Content. Inclusion of, linking to or
          permitting the use or installation of any Third Party Site or any Third Party Applications, Software or
          Content does not imply approval or endorsement thereof by the Company. If you decide to leave the Site and
          access the Third Party Sites or to use or install any Third Party Applications, Software or Content, you do so
          at your own risk and you should be aware that our terms and policies no longer govern. You should review the
          applicable terms and policies, including privacy and data gathering practices, of any site to which you
          navigate from the Site or relating to any applications you use or install from the site.
        </p>

        <h2 className="TermsOfUse__subtitle">Copyright Complaints and Copyright Agent</h2>
        <div>
          <strong>(a) Termination of Repeat Infringe Accounts.</strong> The Company respects the intellectual property
          rights of others and requests that the users do the same. The Company has adopted and implemented a policy
          that provides for the termination in appropriate circumstances of users of the Service who are repeat
          infringers The Company may terminate access for participants or users who are found repeatedly to provide or
          post protected third party content without necessary rights and permissions.
        </div>
        <br />
        <div>
          <strong>(b) Take-Down Notices.</strong> If you are a copyright owner or an agent thereof and believe, in good
          faith, that any materials provided on the Service infringe upon your copyrights, you may submit a notification
          pursuant by sending the following information in writing to the Company's designated copyright agent at
          thenewboston:
          <ul>
            <li>The date of your notification;</li>
            <li>
              A Physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive
              right that is allegedly infringed;
            </li>
            <li>
              A description of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at
              a single online site are recovered by a single notification, a representative list of such works at that
              site;
            </li>
            <li>
              A description of the material that is claimed to be infringing or to be the subject of infringing activity
              and information sufficient to enable us to locate such work;
            </li>
            <li>
              Information reasonably sufficient to permit the service provider to contact you, such as an address,
              telephone number, and/or email address;
            </li>
            <li>
              A statement that you have a good faith belief that use of the material in the manner complained of is not
              authorized by the copyright owner, its agent, or the law; and
            </li>
            <li>
              A statement that the information in the notification is accurate, and under penalty of perjury, that you
              are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
            </li>
          </ul>
        </div>
        <br />
        <div>
          <strong>(c) Counter-Notices.</strong> If you believe that your User Content that has been removed from the
          Site is not infringing, or that you have the authorization from the copyright owner, the copyright owner's
          agent, or pursuant to the law, to post and use the content in your User Content, you may send a counter-notice
          containing the following information to our copyright agent using the contact information set forth above:
          <ul>
            <li>
              Your physical or electronic signature; A description of the content that has been removed and the location
              at which the content appeared before it was removed;
            </li>
            <li>
              A statement that you have a good faith belief that the content was removed as a result of mistake or a
              misidentification of the content; and
            </li>
            <li>
              Your name, address, telephone number, and email address, a statement that you consent to the laws of
              California and a statement that you will accept service of process from the person who provided
              notification of the alleged infringement.
            </li>
          </ul>
        </div>
        <p>
          If a counter-notice is received by the Company copyright agent, the Company may send a copy of the
          counter-notice to the original complaining party informing such person that it may reinstate the removed
          content in 10 business days. Unless the copyright owner files an action seeking a court order against the
          content provider, member or user, the removed content may (in the Company's discretion) be reinstated on the
          Site in 10 to 14 business days or more after receipt of the counter-notice.
        </p>

        <h2 className="TermsOfUse__subtitle">License Grant</h2>
        <p>
          By posting any User Content via the Service, you expressly grant, and you represent and warrant that you have
          a right to grant, to the Company a royalty-free, sub licensable, transferable, perpetual, irrevocable,
          non-exclusive, worldwide license to use, reproduce, modify, publish, list information regarding, edit,
          translate, distribute, publicly perform, publicly display, and make derivative works of all such User Content
          and your name, voice, and/or likeness as contained in your User Content, if applicable, in whole or impart,
          and in any form, media or technology, whether now known or hereafter developed, for use in connection with the
          Service.
        </p>

        <h2 className="TermsOfUse__subtitle">Intellectual Property</h2>
        <p>
          You acknowledge and agree that we and our licensors retain ownership of all intellectual property rights of
          any kind related to the Service, including applicable copyrights, trademarks and other proprietary rights.
          Other product and business names that are mentioned on the Service may be trademarks of their respective
          owners. We reserve all rights that are not expressly granted to you under this Agreement.
        </p>

        <h2 className="TermsOfUse__subtitle">Email may not be used to provide notice</h2>
        <p>
          Communications made through the Service's e-mail and messaging system, will not constitute legal notice to the
          Company or any of its officers, employees, agents or representatives in any situation where notice to the
          Company is required by contract or any law or regulation.
        </p>

        <h2 className="TermsOfUse__subtitle">User consent to receive communications in electronic form</h2>
        <p>
          For contractual purposes, you (a) consent to receive communications from the Company in an electronic form via
          the email address you have submitted; and (b) agree that all Terms of Use, agreements, notices, disclosures,
          and other communications that the Company provides to you electronically satisfy any legal requirement that
          such communications would satisfy if it were in writing. The foregoing does not affect your non-waivable
          rights. We may also use your email address, to send you other messages, including information about the
          Company and special offers. You may opt out of such email by changing your account settings or sending an
          email to thenewboston. Opting out may prevent you from receiving messages regarding the Company or Special
          Offers.
        </p>

        <h2 className="TermsOfUse__subtitle">Warranty</h2>
        <p>
          THE SERVICE, IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, THE COMPANY
          EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY, REGARDING THE SERVICE INCLUDING
          WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, SECURITY,
          ACCURACY AND NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, THE COMPANY MAKES NO WARRANTY OR REPRESENTATION
          THAT ACCESS TO OR OPERATION OF THE SERVICE WILL BE UNINTERRUPTED OR ERROR FREE. YOU ASSUME FULL RESPONSIBILITY
          AND RISK OF LOSS RESULTING FROM YOUR DOWNLOADING AND/OR USE OF FILES, INFORMATION, CONTENT OR OTHER MATERIAL
          OBTAINED FROM THE SERVICE. SOME JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF WARRANTY, SO THIS
          PROVISION MAY NOT APPLY TO YOU.
        </p>

        <h2 className="TermsOfUse__subtitle">Limitation of damages; Release</h2>
        <p>
          TO THE EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, DIRECTORS, OR
          EMPLOYEES, OR ITS LICENSORS OR PARTNERS, BE LIABLE TO YOU FOR ANY LOSS OF PROFITS, USE, OR DATA, OR FOR ANY
          INCIDENTAL, INDIRECT, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, HOWEVER ARISING, THAT RESULT FROM (A) THE
          USE, DISCLOSURE, OR DISPLAY OF YOUR USER CONTENT; (B) YOUR USE OR INABILITY TO USE THE SERVICE; (C) THE
          SERVICE GENERALLY OR THE SOFTWARE OR SYSTEMS THAT MAKE THE SERVICE AVAILABLE; OR (D) ANY OTHER INTERACTIONS
          WITH THE COMPANY OR ANY OTHER USER OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
          NEGLIGENCE) OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY HAS BEEN INFORMED OF THE POSSIBILITY OF
          SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. SOME
          JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF LIABILITY, SO THIS PROVISION MAY NOT APPLY TO YOU. If you
          have a dispute with one or more users or a merchant of a product or service that you review using the Service,
          you release us (and our officers, directors, agents, subsidiaries, joint ventures and employees) from claims,
          demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or
          in any way connected with such disputes.
        </p>

        <h2 className="TermsOfUse__subtitle">Modifications of Terms of Use</h2>
        <p>
          We can amend these Terms of Use at any time and will update these Terms of Use in the event of any such
          amendments. It is your sole responsibility to check the Site from time to time to view any such changes in the
          Agreement. If you continue to use the Site, you signify your agreement to our revisions to these Terms of Use.
          However, we will notify you of material changes to the terms by posting a notice on our homepage and/or
          sending an email to the email address you provided to us upon registration. For this additional reason, you
          should keep your contact and profile information current. Any changes to these Terms or waiver of the
          Company's rights hereunder shall not be valid or effective except in a written agreement bearing the physical
          signature of an officer of the Company. No purported waiver or modification of this Agreement by the Company
          via telephonic or email communications shall be valid.
        </p>

        <h2 className="TermsOfUse__subtitle">General Terms</h2>
        <p>
          If any part of this Agreement is held invalid or unenforceable, that portion of the Agreement will be
          construed consistent with applicable law. The remaining portions will remain in full force and effect. Any
          failure on the part of the Company to enforce any provision of this Agreement will not be considered a waiver
          of our right to enforce such provision. Our rights under this Agreement will survive any termination of this
          Agreement. You agree that any cause of action related to or arising out of your relationship with the Company
          must commence within ONE year after the cause of action accrues. Otherwise, such cause of action is
          permanently barred. These Terms of Use and your use of the Site are governed by the laws of California,
          without regard to conflict of law provisions. The Company may assign or delegate these Terms of Service and/or
          the Company's Privacy Policy, in whole or in part, to any person or entity at any time with or without your
          consent. You may not assign or delegate any rights or obligations under the Terms of Service or Privacy Policy
          without the Company's prior written consent, and any unauthorized assignment and delegation by you is void.
          YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE, UNDERSTAND THE TERMS OF USE, AND WILL BE BOUND BY THESE
          TERMS AND CONDITIONS. YOU FURTHER ACKNOWLEDGE THAT THESE TERMS OF USE TOGETHER WITH THE PRIVACY POLICY AT{' '}
          <A href="https://thenewboston.com" newWindow={false}>
            https://thenewboston.com
          </A>{' '}
          REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US AND THAT IT SUPERSEDES ANY PROPOSAL
          OR PRIOR AGREEMENT ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO THE SUBJECT MATTER OF
          THIS AGREEMENT.
        </p>
      </div>
    </>
  );
};

export default TermsOfUse;
