~~~
title: "On TheDAO and Proof-of-Stake Governance"
description: ""
date: "2016-06-21"
author: "Jae Kwon"
categories: 
    - "DAO"
    - "proof-of-stake"
    - "consensus"
    - "gnuclear"
~~~

## Introduction

This post will describe some of the discussions surrounding TheDAO hack, how
Ethereum might soft-fork in a relatively safe manner, and how it relates to
Gnuclear, a novel proof-of-stake cryptocurrency with built-in governance to
address issues related to bugs and theft.

## TheDAO Hack

An attacker (the hacker) has stolen more than 3.5mm ether (around $45mm) from
the DAO yesterday.  The attack [is described
here](http://vessenes.com/deconstructing-thedao-attack-a-brief-code-tour/).

Since then, the [Ethereum
Foundation](https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability/)
has asked the community to decide on whether they want to soft-fork to freeze
the funds of the hacker.  The Parity and Geth clients have released (differing?)
updates that let the miner choose whether to soft-fork, or not.  Furthermore,
Slock.it has come out with a
[counter-attack](https://twitter.com/jaekwon/status/744609177738219520) against
the hacker.

Meanwhile, the community is arguing about the pros and cons of a soft-fork, and
a hard-fork to return the funds, or [negotiating-with/extorting the
hacker](https://twitter.com/crainbf/status/743842869010665472) to return most of
the funds without a hard-fork.  An [open letter](http://pastebin.com/CcGUBgDG)
as well as an
[interview](https://www.cryptocoinsnews.com/exclusive-full-interview-transcript-alleged-dao-attacker/)
allegedly from the hacker is circulating in the web discussing
plausibly-deniable bribes against the miners to prevent a soft-fork at all, but
so far there had been no cryptographically verified messages from the hacker.

A soft-fork to freeze the hacker's child DAO would buy the community more time
to decide on a more permanent course of action, whether it is to hard-fork to
return the funds, to freeze the funds indefinitely, to "negotiate" or extort the
hacker to return most of the funds, or to let the hacker keep the funds.

Either way, a soft-fork already undermines the stated premise of Ethereum

_"Ethereum is a decentralized platform for applications that run exactly as
programmed without any chance of fraud, censorship, or third-party influence"_ -
[ethereum.org](https://twitter.com/oditorium/status/744421990103134208)

So, Ethereum is in a difficult position where it must either let the hacker get
away with the theft of TheDAO's ether, or, undermine its stated premise.  The
arguments in favor of mitigating the hack is clear. Few in the Ethereum
community really want 5% of the entire token supply of Ethereum to go to the
hacker -- the actual DAO experiment hadn't even begun!  And yet, a coordinated
action to reverse the attack or freeze the stolen funds is to undermine
Ethereum's stated premise.  Some argue that to do so would destroy the very
purpose and value of Ethereum.

## What Ethereum Could Do

There are four parties involved in TheDAO attack.

* The DAO token holders (DTH)
* The ether holders
* The Ethereum miners
* Everyone else

_The DAO token holders (DTH)_ are quite obviously the victim of this tragedy.
_The ether holders_ are necessarily involved because most of the suggested
courses of action start with a soft-fork to freeze the attacker's funds
currently held locked in the child DAO.  Ultimately, whether any soft-fork or
hard-fork will happen at all hinges on the support from the _Ethereum miners_,
though theoretically they are incentivized to follow the will of the community.
_Everyone else_ is composed of the greater cryptocurrency community, including
those who are actively attempting to harm the system.

### The DAO Wars

<blockquote class="twitter-tweet" data-lang="en"><p lang="en"
dir="ltr">&quot;The future is happening fast. Hacker wars around the largest
decentralized organisation in the world.&quot; <a
href="https://twitter.com/hashtag/DAOwars?src=hash">#DAOwars</a> <a
href="https://t.co/f7zO3s1D6N">pic.twitter.com/f7zO3s1D6N</a></p>&mdash; Simon
de la Rouviere (@simondlr) <a
href="https://twitter.com/simondlr/status/744926345679994881">June 20,
2016</a></blockquote>

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<br />
First of all, it should be noted that both Bitcoin and Ethereum themselves are
DAOs, just as TheDAO is.  Some claim that Bitcoin and Ethereum are in
competition with each other.  Thus, the Ethereum community would be wise to note
that there is probably a distributed Sybil attack in social media to confuse
Ethereum while it is vulnerable.

In short, any discussion in social media concerning what Ethereum "ought to do"
or any comments about what will or will not happen to Ethereum with any
decision, ought to be taken with a grain of salt.  Any polling of the Ethereum
community should be done via cryptographic signatures from current ether
holders.  Any polling of the Ethereum miners should be done via the mining
process.

### The Intention of TheDAO Investors

It's pretty obvious that the "feature" that enabled the hacker to abscond with
TheDAO's ether was indeed a bug.  Arguments that it isn't a bug generally point
to two things: the text of TheDAO's terms and conditions, and the stated premise
of Ethereum.  For the former, we point the reader to [this nuanced
article](http://www.bloomberg.com/view/articles/2016-06-17/blockchain-company-s-smart-contracts-were-dumb),
and we accept that the latter premise is flawed -- more on that later.

The participants of TheDAO experiment were interested in seeing the investment
mechanics -- as written in English by the [Slock.it team's DAO
whitepaper](https://download.slock.it/public/DAO/WhitePaper.pdf) -- unfold as a
social and cryptoeconomic experiment.  There were plenty of precautions taken to
ensure that the DAO contract code was bug-free, and so many in the DTH weren't
expecting the funds to get drained before a single real proposal had a chance to
see the light of day.

To find out, one could simply ask the DAO holders or the original funders with
an on-chain or off-chain poll (with cryptographic signature verification, of
course).  However, noone is actually challenging the assumption that the DTH
would vote in favor of a statement that claims that they were victims of grand
theft token.

### Too Big to Fail

Some say that TheDAO should not be rescued for the same reasons why we shouldn't
bail out banks.

Comparing the rescue of TheDAO to the oligopoly of the too-big-to-fail US banks
is a stretch.  The analogy would be better had if TheDAO failed due to bad
investments, or if it had somehow turned into a ponzi scheme.  But that is not
the case here.  The very mechanism that was designed to protect the DTH were
unexpectedly used against them.  If any bank (or the Fed) were to roll back
their database after getting hacked in a singular event, as long as it could do
so and recover cleanly, nobody would complain that the bank were rescued.

### Moral Hazard - Tyrrany of the Majority

Some argue that a soft-fork or hard-fork would bring about dangerous moral
hazard, that rolling back the hacker's stolen ether is a case of the majority
expropriating a minority.

This is mostly a matter of perspective.  Once we drop Ethereum's original
premise, it becomes apparent that the former argument's logical extreme would
make the absurd claim that the "acquisition" of tokens via theft of private keys
at gunpoint would also constitute fair-game.  That's perfectly fine as a
personal subjective philosophy, but if society as a whole decides to counteract
theft, the might of society is likewise justified.

In this light, not returning the stolen funds might be a case of a minority
expropriating a majority.

### Moral Hazard - Slippery Slope

Some argue that once you allow one contract to be rolled back, you open
Pandora's box to allow anything to be rolled back. For example, a nation-state
or powerful interest might compel the Ethereum Foundation to censor legitimate
transactions with no victim at all.

The way to get around this problem is to require a majority consensus from the
remaining ether holders.  For most issues that people would want a roll-back
for, the ether holders would likely vote against the measure.  But in the cases
where a large chunk of the tokens are at stake, the remaining ether holders may
prefer to allow for such a roll-back, if the alternative is deemed worse.

However, there's an obvious problem with this solution.  It would be very
difficult to get a significant quorum of ether holders to vote for anything at
all, because there's no expectation for ether holders to be active in voting for
proposals.  The miners are a more active group, but they aren't necessarily
representative of the community of ether holders.

While not perfect, here's a sketch of what could be done for this issue and for
future issues in Ethereum 1.0:

#### Polling the Ether Holders

1. First, construct a well written proposal that proposes a soft-fork to freeze
   the hacker's child DAO.  Come up with a reasonable deadline for voting, like
1 week. Post this proposal on social media.

2. Program a simple smart contract that accepts a signed transaction by ether
   holders. For the sake of our collective sanity this contract won't accept any
ether.  It doesn't even have to record anything in its state.  The user votes
with voting-power in proportion to their ether holdings.  Only simple accounts
can vote.

3. Right after the deadline, for all the accounts that have voted, note the
   amount of ether left in their account and count that toward the vote's total
tally.  This must be done atomically at a single block-height, otherwise users
might vote more than once with the same coins.  Note that this requires off-line
chain-scanning and computation.

The result is a poll of the ether holders.  It is far from perfect,
because a lot of users won't vote, and, ether held in complex contracts won't
get any votes.  Also, it presupposes agreement about where to vote.  But just
maybe, if enough ether holders vote (e.g. more than 25% of all ether) and there
is a super-majority (e.g. more than 67% in favor of a soft-fork, of those who
voted), then it seems prudent to consider that to be a vote by the Ethereum
community in favor of a soft-fork.

#### Coordinating the Ethereum Miners

Next, the miners should follow the will of the Ethereum community and prepare
for a soft-fork.  Miners could be required to announce their readiness for a
soft-fork in each block.  Once a sufficient supermajority has been reached (e.g.
67% or more) in a window of say 12 hours, all the miners can activate their
soft-fork logic.  For safety, it's important that all the miners agree on the
exact behavior of this soft-fork, and that they only soft-fork once a
supermajority quorum has been reached.

#### Preventing Spam

There is still the question of why TheDAO should get special attention while
lesser contracts with much less value at stake might get ignored.  Ideally there
is a permissionless way to bring up all such matters to the attention of the
community, but since community engagement of this sort is quite expensive -- one
could calculate how many man-hours are necessary to evaluate each proposal --
maybe there ought to be a market or fee mechanism to determine what deserves the
chance of a soft-fork freeze or a hard-fork roll-back.

### After the Soft-Fork

After a soft-fork, if there is one, I would argue that the community should
negotiate with the hacker to get back most of the funds, and let the hacker keep
a small portion like, like 8%.  Some people argue that the hacker deserves all
of the stolen tokens.  Others argue that the hacker shouldn't be incentivized
any further because they already had control over the timing of market forces
(e.g. they could have shorted the market just prior to the attack).  My opinion
is that we should by default reward hackers a small amount for finding
vulnerabilities, as long as they "voluntarily" return the vast majority of the
stolen funds.  A social contract to reward hackers a small amount would be akin
to enabling an automated penetration-testing bounty system, and would likely
accelerate security improvements, rather than hinder it.

To allow all such hackers to keep all of their stolen funds, in general, is to
subject ourselves to the existing power structures that be, e.g.  to
nation-states with immense intelligence capabilities like the NSA.  It's great
that we have a cryptocurrency whose premise is based on extreme crypto-anarchy
(Bitcoin), but, if we allow all of our cryptocurrency systems to be coopted by
the same technocratic bias, we deserve what we get.  On the other hand, if we
don't reward hackers sufficiently, we risk creating a fragile house of cards.

## What About the Premise?

Ethereum's original premise was destined to change.

_"... a decentralized platform for applications that run exactly as
programmed without any chance of fraud, censorship, or third-party influence"_

Such a thing cannot exist in practice.  Fraud happens at all levels, especially
at the human level.  For all we know, this whole DAO heist could have been
premedidated all along -- though the creators should be given the benefit of the
doubt.  Private keys can be swindled.  If there is a sudden influx of legitimate
transactions, the system can be coerced into dropping the majority of
transactions.  And there is always a chance of third-party influence.

Some argue that dropping this premise would undermine the entire purpose, and
therefore the value, of Ethereum.  That's hogwash.  There's great value to be
had in a system that allows for the execution of contracts written as code.
_Code as Law_ doesn't have to mean that the code cannot be revised if it is
found to be buggy, in the same way that many existing legal jurisdictions look
into the intent of contracts, in the case of typos or mistakes -- code doesn't
need to be any different.  Ethereum lets us write contracts in Solidity, to be
interpreted by a virtual machine, rather by an army of expensive lawyers.
Allowing for deliberated roll-backs does not take that value away.  On the
contrary, it would strengthen the Ethereum community.

Finally, it could be argued that the original premise of _unstoppable code_ is
[not
desirable anyways.](https://medium.com/@lemurvanstar/immutability-of-any-blockchain-is-an-unrealistic-attempt-at-perfection-that-will-never-be-possible-4e4fcae59804)

## An Alternative System

Here we describe [Gnuclear](https://github.com/gnuclear/gnuclear-whitepaper),
alternative cryptocurrency with a governance system baked in that can address
issues of theft or bugs in a more streamlined and defined way.  Gnuclear is a
proof-of-stake cryptocurrency powered by Tendermint BFT consensus.

### A Different Premise

First, we start with a different premise.

_Gnuclear is a multi-asset, scalable, proof-of-stake-2.0
cryptocurrency run by stakeholders, for the benefit of stakeholders_.

There's no magic here, just a straight up business run by a distributed set of
stakeholders using a BFT consensus algorithm.  There are no impossible
guarantees, and everything is up for change.  If you don't like it, you don't
have to use it.  If the stakeholders come to a deadlock due to disagreement,
they will have all the information they need to split, thanks to its design
principle of transparency and accountability.

Stated a different way, the thesis of Gnuclear (and Tendermint) is that we can
create distributed autonomous organizations built on accountable BFT blockchain
systems that are self-incentivized and antifragile.

### The Freedom to be Permissioned

Centralized (non-blockchain) organizations usually function in a permissioned
way.  With a few exceptions, corporations get to select who they want to allow
into their organizations.  There are valid arguments for and against such
self-interested discretion, but those who argue in favor of Laissez-faire
cooperation often use economic competitiveness as justification. There's no
reason to think that the same can't work in a blockchain environment, where
validators in a proof-of-stake system must be permissioned into the network by
some form of consensus.

Besides permissioning of its validators and stakeholders, a distributed ledger
can use permissioning at the application-logic level to create a better curated
and _well regulated_ system for the benefit of its users.  For example, imagine
that each top-level contract in Ethereum has a mandatory field specifying which
regulatory group (similar to TheDAO's curators) can decide on whether the spirit
of the contract had been violated by bug or by theft.  Then, for the benefit of
the ledger's less-sophisticated users, the stakeholders may wish to whitelist
certain regulatory groups at the system level.

This field could be left _null_ if the contract developers wanted to explicitly
allow for absolute no roll-backs, but at least there would be a standard so that
client-software can inform the user about the consequences of sending money to
that contract -- like when visiting a website with a broken cert.

Note that this not analogous to arguing for a walled-garden internet.  The
internet is composed of many independent domains with differing strategies on
membership and permissions, and this has proven to be immensely valuable,
enabling a Cambrian explosion of strategies.  Nor is this analogous to arguing
in favor of a federation of data-silos.  Blockchains depend on transparency for
their security.  A federation of permissioned and unpermissioned distributed
ledgers is not at all like a federation of data-silos.

Think of blockchains as sovereign transparent ecosystems, and the stakeholders
of a blockchain as independent entities that are self-incentivized to make that
blockchain succeed, in a sea of competing ledgers.  Permissioning may be a
superior strategy for winning market-share in certain niches.

### Proof-of-Stake on Tendermint

Gnuclear is powered by Tendermint's BFT consensus algorithm, and is thus is
specially designed for classical BFT consensus.

For example, it's a known fact that in a non-synchronous environment (read: in
the real world with faulty networks), no consensus algorithm can tolerate more
than 1/3 of Byzantine actors.  This means that if 1/3 or more validators are
Byzantine, they could halt or fork the blockchain ledger.  Satoshi Nakamoto
wrote that Bitcoin can handle up to 1/2, but that only works because clients are
suppose to wait on the order of an hour for confirmation, thereby allowing the
network to be modeled as a (slow) fully-synchronous system.  In other words, if
you want a distributed ledger that can commit transactions to finality quickly
(on the order of seconds), Tendermint offers an optimal solution.

More information on how to solve the nothing-at-stake problem and the long-range
forking problem are documented in the [gnuclear
whitepaper](https://github.com/gnuclear/gnuclear-whitepaper#preventing-long-range-attacks).

#### Gnuclear Governance

That a 1/3 coalition of Byzantine voting power can halt the network in
Tendermint necessitates an interesting governance model in Gnuclear in order to
prevent halts from happening, which would result in decreased revenue and
confidence in the ledger.  In other words, since a 1/3 coalition can temporarily
halt the ledger, it creates an incentive for the stakeholders to find a
compromise.

The Gnuclear proposal system polls the stakeholders to see what they would do if
the proposal were passed, and calls off the proposal if it appears that the
proposal is contentious enough to cause a halt or filibuster.  Instead of
actually halting the blockchain and punishing everyone, it imposes a slight
penalty for everyone involved.

<blockquote>
  <p>
    For each proposal, voters may vote with the following options:
  </p>
  <ul>
    <li>Yay</li>
    <li>YayWithForce</li>
    <li>Nay</li>
    <li>NayWithForce</li>
    <li>Abstain</li>
  </ul>
  <p>
      A strict majority of Yay or YayWithForce votes (or Nay or NayWithForce votes)
    is required for the proposal to be decided as accepted (or decided as failed),
    but <sup>1</sup>&frasl;<sub>3</sub>+ can veto the majority decision by voting
    with force.  When a strict majority is vetoed, everyone gets punished by losing
    <code>VetoPenaltyFeeBlocks</code> (DEFAULT 1 day&rsquo;s worth of blocks) worth
    of fees (except taxes which will not be affected), and the party that vetoed the
    majority decision will be additionally punished by losing
    <code>VetoPenaltyQuarks</code> (DEFAULT 0.1%) of its quarks.
  </p>
  <footer>
    - <em><a href="https://github.com/gnuclear/gnuclear-whitepaper#governance">on Gnuclear governance</a></em>
  </footer>
</blockquote>

It's interesting to compare this to the 1/2 or 2/3 required quorum for different
types of proposals in various existing governance systems.  In Gnuclear, it's a
unified system -- a simple majority is sufficient to pass any measure, unless
there is a simultaneous veto by a 1/3 minority.

#### Need for a Constitution

Some things can't be easily automated as code.  For example, determining:

* whether theft has occurred
* whether sophisticated DDoS attacks are happening
* whether a contract threatens the integrity of the ledger that it's in
* whether a contract threatens the integrity of other systems or beings
* how to change the incentive strategy in the face of changing economic
  circumstances
* how to react to other extrinsic circumstances

For these issues, the Gnuclear governance system lets stakeholders vote on
human-readible proposals called TextProposals.

Given such freedom in what can be decided by humans, even the best governing
structures cannot prevent the system from disintegrating if the constitutents
cannot agree on process.  A breakdown of communication or understanding can
quickly lead to a breakdown of live-consensus, and ultimately can lead to a
blockchain halt or split.

For this reason, there needs to be a written constitution, or a human-protocol,
that must be followed.  In the very least, the constitution must contain the
following:

* Validators must execute the blockchain protocol decided on by consensus.
* This constitution may be amended by passing a TextProposal.

Different ledgers may have additional elements in their constitution.  For
example, the constitution may provide guidance on what constitutes a theft or
bug, and how to deal with it.  Or, it may say that no validator may disuss
soft-forks or roll-backs.  It won't guarantee that the validators won't actually
soft-fork the ledger, but it does allow the ledger to specialize and attract
stakeholders with compatible interests.

#### Stake Delegation

In Gnuclear proof-of-stake, there are three groups to consider: the validators,
the staked delegators, and the non-staked token holders. The validators get to
vote on any proposal (in fact, they must vote to avoid incurring a penalty). By
default the delegators inherit the vote of the delegated validators, but
delegators can override the vote manually.

Non-staked token holders who aren't putting their tokens at stake (and thus are
not participating in the consensus process) do not get to vote on proposals.  In
a future post we'll discuss the pros and cons of this design decision.

#### Accountability and Reputation

A major benefit of the Gnuclear proof-of-stake system over any proof-of-work
system is about accountability and reputation.

Take for example, the alleged hacker's plan to [bribe Ethereum
miners](https://www.cryptocoinsnews.com/exclusive-full-interview-transcript-alleged-dao-attacker/)
to prevent a soft-fork.  Though this threat has little credibility until
cryptographic evidence is published, the hypothetical threat is real.  Since
proof-of-work miners are completely anonymous with no associable stake in the
system, there's not a whole lot that could be done to prevent such a bribe,
except to bribe even more. Furthermore, there is little incentive for the miners
to be enganged in these political issues, so the alleged hacker's note about
plausible deniability is also real.

In Gnuclear, these issues resolved, because stakeholders are pseudonymous with
associated stake, and validators are required to vote on all proposals.

This pseudonymous reputation system also enables true antifragility. A
blockchain split in a proof-of-stake blockchain is very different than a
blockchain split in a proof-of-work blockchain.  In a proof-of-work blockchain,
nobody rational would follow a fork with less than 50% of the mining power
behind it because it would be vulnerable to attack by anonymous miners _unless
there were also a change in the hashing algorithm that required an investment in
different kinds of hardware_.  In Tendermint proof-of-stake, a blockchain split
can result in increased security for both child blockchains.

_For a related explantion of Tendermint's fork-accountability, refer to the
Gnuclear whitepaper section on [Tendermint
consensus](https://github.com/gnuclear/gnuclear-whitepaper#consensus)._

### Conclusion

* It's people all the way down.
* Ethereum doesn't have to cater to extremists.
* Either way, lets create a diverse ecosystem of antifragile distributed
  ledgers.
* Check out [Gnuclear](http://github.com/gnuclear/gnuclear-whitepaper) and [join
  the discussionsi](http://forum.tendermint.com:3000/)!
