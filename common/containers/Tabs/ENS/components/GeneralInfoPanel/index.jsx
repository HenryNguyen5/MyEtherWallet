// @flow
import * as React from 'react';
import GeneralInfoNode from './GeneralInfoNode';
import { NewTabLink } from 'components/NewTabLink';
import type { InfoNode, AssignKeyToArrayLiteral } from './types';
const assignKeyToArrayLiteral = (arr, key = null): AssignKeyToArrayLiteral =>
  arr.map(
    (e, i) =>
      key
        ? React.cloneElement(e, { key: `${key}-${i}` })
        : React.cloneElement(e, { key: i })
  );

const generalInfoNodes: InfoNode[] = [
  {
    name: 'ensPrep',
    headerContent: '1. Preparation',
    innerList: assignKeyToArrayLiteral([
      <li>
        Decide which account you wish to own the name & ensure you have multiple
        backups of that account.
      </li>,
      <li>
        Decide the maximum amount of ETH you are willing to pay for the name
        (your <u>Bid Amount</u>). Ensure that account has enough to cover your
        bid + 0.01 ETH for gas.
      </li>
    ])
  },
  {
    name: 'ensAuct',
    headerContent: '2. Start an Auction / Place a Bid',
    innerList: assignKeyToArrayLiteral([
      <li>Bidding period lasts 3 days (72 hours).</li>,
      <li>
        You will enter the <u>name</u>, <u>Actual Bid Amount</u>,{' '}
        <u>Bid Mask</u>, which is protected by a <u>Secret Phrase</u>
      </li>,
      <li>
        This places your bid, but this information is kept secret until you
        reveal it.
      </li>
    ])
  },
  {
    name: 'ensReveal',
    headerContent: '3. Reveal your Bid',
    innerList: assignKeyToArrayLiteral([
      <li>
        <strong>
          If you do not reveal your bid, you will not be refunded.
        </strong>
      </li>,
      <li> Reveal Period lasts 2 days (48 hours). </li>,
      <li>
        You will unlock your account, enter the <u>Bid Amount</u>, and the{' '}
        <u>Secret Phrase</u>.
      </li>,
      <li>
        In the event that two parties bid exactly the same amount, the first bid
        revealed will win.
      </li>
    ])
  },
  {
    name: 'ensFinalize',
    headerContent: '4. Finalize the Auction',
    innerList: assignKeyToArrayLiteral([
      <li>
        Once the auction has ended (after 5 days / 120 hours), the winner needs
        to finalize the auction in order to claim their new name.
      </li>,
      <li>
        The winner will be refunded the difference between their bid and the
        next-highest bid. If you are the only bidder, you will refunded all but
        0.01 ETH.
      </li>
    ])
  },
  {
    name: 'ensMore',
    headerContent: 'More Information',
    innerList: assignKeyToArrayLiteral([
      <li>
        The auction for this registrar is a blind auction, and is described in
        <NewTabLink
          content=" EIP162"
          href="https://github.com/ethereum/EIPs/issues/162"
        />
        . Basically, no one can see *anything* during the auction.
      </li>,
      <li>
        <NewTabLink
          content="ENS: Read the Docs"
          href="http://docs.ens.domains/en/latest/userguide.html#registering-a-name-with-the-auction-registrar"
        />
      </li>,
      <li>
        <NewTabLink
          content="Announcing the Ethereum Name Service Relaunch Date!"
          href="https://medium.com/the-ethereum-name-service/announcing-the-ethereum-name-service-relaunch-date-4390af6dd9a2"
        />
      </li>
    ])
  }
];

const GeneralInfoList = () =>
  <section>
    {generalInfoNodes.map((data: InfoNode) =>
      <GeneralInfoNode key={data.name} {...data} />
    )}
  </section>;

const GeneralInfoPanel = () =>
  <article className="block">
    <div className="cont-md">
      <h4> What is the process like? </h4>
      <GeneralInfoList />
      <h6>
        <NewTabLink
          content="Help Center: ENS"
          href="https://myetherwallet.groovehq.com/knowledge_base/categories/ens"
        />
        &nbsp;&middot;&nbsp;
        <NewTabLink
          content="Debugging a [BAD INSTRUCTION] Reveal"
          href="https://myetherwallet.groovehq.com/knowledge_base/topics/debugging-a-bad-instruction-reveal"
        />
      </h6>
      <p>
        Please try the above before relying on support for reveal issues as we
        are severely backlogged on support tickets. We're so sorry. :(
      </p>
    </div>
  </article>;

export default GeneralInfoPanel;