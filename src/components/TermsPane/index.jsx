import React, { useState, useRef } from "react";
import s from "./style.scss";

export default function TermsPane() {
  return (
    <>
      <h1 id="terms" className={s.header}>BlocFX Terms and conditions</h1>

      <section className={s.section}>
        <p>
          These Terms of Use (the "Terms"), the Privacy Policy and any other
          agreements between BlocFX and its customers will include the following
          definitions:
        </p>
        <ul>
          <li>
            1. "Customer," "user," "you," and "your" refers to the person or
            entity accessing and/or using Godex.io and accepting these Terms.
          </li>
          <li>
            2. "Company," "our," «BlocFX,» "Website," "we," “site” and "us"
            collectively refers to the online website and platform "BlocFX" and
            its owners, directors, officers, employees, operators, agents,
            insurers, suppliers, and attorneys.
          </li>
          <li>
            3. "Party" may refer to either you or us, and "Parties" refers to
            both you and us. For the avoidance of any doubt, the contracting
            parties in our Terms are you and BlocFX. In this Terms words
            referring the singular include the plural and vice versa and words
            referring gender include all genders.
          </li>
          <li>
            4. "Cryptocurrency," "asset," "digital asset," "coin," "funds,"
            "ledger entry," and "token" refer to blockchain-based software
            ledger data entries.
          </li>
        </ul>
        <h2>1. Acceptance of these Terms</h2>
        <p>
          By using our website, you agree to accept and follow our Terms and all
          applicable laws and rules, and you agree that you are responsible for
          compliance with, and that you are compliant with, all applicable laws
          and rules. If you do not agree with any of our Terms, you are
          prohibited from using our service; in this case you should stop using
          the Website immediately. Any use of the Website is your deemed
          acceptance of our Terms and and we reserve the right to change these
          agreements without notice to you.
        </p>
        <h3 className={s.subItem}>1.1 Changing</h3>
        <p className={s.subItem}>
          BlocFX reserves the right to revise our terms at any time without
          notice to you. By using the website, you agree to read the current
          version of Terms and comply with the current version of our Terms and
          conditions.
        </p>
        <h2>2. Admissibility</h2>
        <p>By using the Website, you represent and warrant that you are:</p>
        <ul>
          <li>
            1. At least 18 years old, and you have full legal capacity to
            contract in accordance with applicable law,
          </li>
          <li>
            2. You transfer to BlocFX only funds that belongs to you and which
            was obtained only by lawful means,
          </li>
          <li>
            3. Not performing, undertaking, engaging in, aiding, or abetting any
            unlawful activity through your interaction with us or through using
            of BlocFX, and
          </li>
          <li>
            4. Complying with and obeying all applicable laws, rules and
            regulations.
          </li>
        </ul>
        <p>
          We reserve the right to terminate your access to the site at our sole
          discretion and without any explanation. Using this site is prohibited
          if prohibited by applicable law.
        </p>
        <h2>3. Restrictions</h2>
        <h3 className={s.subItem}>3.1 Permitted sources of funds</h3>
        <p className={s.subItem}>
          You are prohibited from sending BlocFX digital assets that have been
          directly or indirectly obtained through any criminal or fraudulent
          activity, including terrorism or tax evasion. BlocFX reserves the
          right to refuse, postpone or cancel a transaction, which it perceives
          as a risk associated with criminal or fraudulent activity.
        </p>
        <p className={s.subItem}>
          Godex.io services may be used only as a mechanism of software ledger
          entry translation between the User and BlocFX. You are prohibited from
          using BlocFX for the purpose of translating ledger entries from other
          parties and/or to other parties.
        </p>
        <h3 className={s.subItem}>3.2 Prohibited Jurisdictions</h3>
        <p className={s.subItem}>
          By using BlocFX, you declare that you are not located in such areas or
          have the citizenship of such countries as Cuba, Iran, North Korea,
          Crimea, Sudan, Syria, the United States of America (including the
          island territories of the United States), Bangladesh and Bolivia,
          along with any other country on the United Nations security Council
          sanctions list and its equivalent. BlocFX reserves the right to choose
          its markets and jurisdictions to operate with and may restrict or
          refuse to provide its services to residents of certain countries.
          BlocFX also reserves the right to use various methods to prevent users
          from using the services listed above. You must comply with this
          section of the agreement, even if the BlocFX methods to prevent the
          use of the Services do not guarantee it or can be bypassed. By
          accessing this site or any services of it, you represent and warrant
          that you are not physically located in these prohibited jurisdictions.
        </p>
        <h3 className={s.subItem}>3.3 Restrictions of use</h3>
        <p className={s.subItem}>
          By accessing or using BlocFX website or other BlocFX products,
          including but not limited to API, you agree that you will not violate
          the law, contract, intellectual property or other rights of third
          parties or commit offenses, and that you are solely responsible for
          your behavior when using the website and our services. By using the
          site, you also agree that you will not:
        </p>
        <ul className={s.subItem}>
          <li>
            1. Damage, disable, overload or attack the functioning of the
            Website in any manner;
          </li>
          <li>
            2. Use any robot, spider, grabbers, crawler, scraper or other
            automated means or interface not provided by us to access to the
            Website or to extract data;
          </li>
          <li>
            3. Use trading bots or other software automatically interacting with
            the site through any interface.
          </li>
        </ul>
        <p className={s.subItem}>
          BlocFX reserves the right to refuse to provide services to the user if
          there are suspicions of violation of the above rules.
        </p>
        <h2>4. Deposits, Rates and Confirmations.</h2>
        <p>
          Because market information is highly volatile and can change quickly
          without necessarily notifying users of these changes, the price
          provided by Godex may not represent accurate market price. Using the
          site, the user accepts and understands the possible risks associated
          with changes in the exchange rate of cryptocurrencies, and Godex is
          not responsible for any possible financial losses.
        </p>
        <p>
          Godex fixes the exchange rate within 30 minutes of the transaction
          being created. After this interval, if the Deposit is not received,
          the site reserves the right to cancel the order. The user must send
          the exact specified number of cryptocurrencies on the address provided
          by exchange page.
        </p>
        <p>
          The user undertakes to use additional identificators to send a
          Deposit, if they are provided by the site, such as Payment ID,
          Message, Memo, Destination Tag and so on. Ignoring these additional
          identificators, the user agrees that he is aware that his Deposit may
          be lost.
        </p>
        <p>
          Godex is not responsible for funds sent to an address other than the
          one indicated on the exchange page, or for funds sent without an
          additional identificator, if this additional identificator is
          specified on the exchange page.
        </p>
        <p>
          It is important to note that a payment being broadcast to the
          blockchain network does not constitute an acceptance by Godex of that
          payment. Different crypto assets requires different amount of network
          confirmations to be fully verified and received. These reasons,
          independent of Godex, may affect the order execution time.
        </p>
        <h3 className={s.subItem}>4.1 Rate changes</h3>
        <p className={s.subItem}>
          Cryptocurrencies and Digital Assets rates are highly volatile and
          transitory. We cannot be responsible for any risk in use of the
          Website, including but not limited to exchange rate risk and market
          risk. All sales and transactions after the BlocFX exchange are final
          and amount is non-refundable.
        </p>
        <p className={s.subItem}>
          If the cryptocurrency market is undergoing dramatic rate changes,
          BlocFX may need an additional time to exchange cryptocurrency at a
          fixed rate. In this case, the execution time of the exchange can
          significantly increase, or the cryptocurrency may be returned to the
          user at the choice of the company.
        </p>
        <p className={s.subItem}>
          The parties agree that by ”dramatic rate changest" they mean changes
          in cryptocurrency rates equal to 3% and higher in any direction.
        </p>
        <p className={s.subItem}>
          If there have been any changes in the cryptocurrency market and the
          user has decided to take advantage of any vulnerability of the site,
          BlocFX can not complete the exchange operations of this User and may
          require extra processing time or returns him the cryptocurrency.
        </p>
        <h2>5. Refund Policy</h2>
        <p>
          Returns and refunds policy: transactions of cryptocurrencies, tokens
          and digital assets are inherently irreversible and their exchange
          rates are highly volatile. Godex is not responsible for any risk
          associated with the use of the site, including but not limited to
          financial and market risks. All trades and orders completed with Godex
          are final.
        </p>
        <p>
          Refund of funds sent by the user is possible if the site interface
          displays the status 'Overdue', and if the user's funds were received
          by Godex. Website won't indicate whether or not the failed exchange
          will result in a refund of the user’s deposited asset, so the user
          contact our support team and provide the exchange ID and also some
          additional information.
        </p>
        <p>
          The outgoing asset will be exchanged and sent to the user if the
          “Order Status” page indicates a successful exchange by displaying
          “Finished”. In this case, a refund is not provided.
        </p>
        <p>
          Godex requests from users on a case-by-case basis. Any decisions by
          Godex regarding returns or exchanges are final and are not subject to
          further discussion.
        </p>
        <p>
          Godex only accepts one-time deposit per Exchange ID. If your funds are
          deposited in a transaction with more than one deposit, you will need
          to contact support to get a refund. The exchange rate will not be
          respected and your exchange cannot be completed.
        </p>
        <h3 className={s.subItem}>5.1 Refund period</h3>
        <p className={s.subItem}>
          Users have a maximum 90 days period to return any assets that are
          stored in the BlocFX system due to any error, whether caused by user
          or us. Refund requests sent after the 90-day period will not be
          accepted. Any decisions made by BlocFX in respect of refund in these
          circumstances is final.
        </p>
        <h3 className={s.subItem}>5.2 Unsupported currencies</h3>
        <p className={s.subItem}>
          Unsupported digital assets that are deposited into our system on
          unrelated wallets cannot be refunded. BlocFX reserves the right to
          consider such case individually. Any decisions made by BlocFX with
          respect to such assets deposited when they are no longer supported are
          final.
        </p>
        <h3 className={s.subItem}>5.3 Minimum Refund Amounts</h3>
        <p className={s.subItem}>
          For deposits less than a certain amount, BlocFX does not provide
          refunds. The amount of this minimum is determined at the discretion of
          BlocFX. Users are advised not to use the service for orders of the
          size of 30$ or less.
        </p>
        <h3 className={s.subItem}>5.4 Extra ID’s</h3>
        <p className={s.subItem}>
          If user has ignored the warning of the site about the importance of
          sending a deposit using extra identificators (extra ID) (including but
          not limited to Payment ID, Destination Tag, Memo, Message) and send
          deposit without using this extra ID, the exchange can not be completed
          and Golex does not provide a refund for this coins.
        </p>
        <h2>6. Countering Phishing Scams</h2>
        <p>
          BlocFX is not responsible for the funds that were sent to a fake
          phishing websites that imitates BlocFX. It is the user's
          responsibility to verify that they are visiting the correct domain and
          to locate the security certificate in the URL bar of their browser.
          Users should not trust personal messages and requests from people who
          claim to represent Godex. If you cannot verify that this is an
          official request from Godex and in case of any doubt, please contact
          us directly to check any messages. Stay diligent and please report any
          phishing to our team at support@blocfx.io
        </p>
        <h2>7. Privacy and Transparency Statement</h2>
        <p>
          BlocFX maintains the privacy of its users by not requesting any
          information that is unnecessary for the use of the service or to
          comport with our obligations under applicable law. BlocFX only stores
          some data as long as is necessary to provide a necessary level of
          support for its users (for example, when refunds is needed or some
          problems take place)
        </p>
        <h2>8. Copyright</h2>
        <p>
          Any graphic or text or information materials contained in the site are
          protected by applicable copyright and trademark laws and treaties
        </p>
      </section>
    </>
  );
}
