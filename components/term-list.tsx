"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const terms = [
  {
    term: "HODL",
    definition:
      "Originally a typo for 'HOLD', now means 'Hold On for Dear Life'. It's a strategy of keeping cryptocurrency long-term, regardless of market fluctuations.",
  },
  {
    term: "FUD",
    definition:
      "Fear, Uncertainty, and Doubt. Often used to describe negative or misleading information spread in the crypto market to influence investors' decisions negatively.",
  },
  {
    term: "FOMO",
    definition:
      "Fear Of Missing Out. The anxiety that an investor might miss out on a potentially profitable investment opportunity, often leading to hasty decisions.",
  },
  {
    term: "Clipping",
    definition:
      "In crypto trading, 'clipping' refers to taking small, quick profits from price movements, often in newly launched tokens or during initial DEX offerings (IDOs).",
  },
  {
    term: "Top Blast",
    definition:
      "To buy at the top of a price movement, often resulting in immediate losses as the price corrects. It's the opposite of buying the dip.",
  },
  {
    term: "KOL",
    definition:
      "Key Opinion Leader. In the crypto world, KOLs are influential individuals whose opinions can significantly impact market trends, token valuations, and community sentiment.",
  },
  {
    term: "Whale",
    definition:
      "An individual or entity holding a large amount of a particular cryptocurrency, capable of influencing market prices through large buy or sell orders.",
  },
  {
    term: "Shill",
    definition:
      "To promote a cryptocurrency project, often aggressively or with bias, typically for personal gain. This can be done by project team members or paid promoters.",
  },
  {
    term: "Rug Pull",
    definition:
      "A type of exit scam where crypto developers abandon a project and run away with investors' funds, often after pumping the price.",
  },
  {
    term: "Gas",
    definition:
      "The fee required to successfully conduct a transaction or execute a smart contract on blockchain networks like Ethereum. Paid in the network's native cryptocurrency.",
  },
  {
    term: "Moon",
    definition:
      "When a cryptocurrency's price rises dramatically in a short period. 'To the moon!' expresses hope for extremely high returns.",
  },
  {
    term: "Shitcoin",
    definition:
      "A derogatory term for cryptocurrencies perceived to have little to no value or no immediate, discernible purpose. Often used for coins with no clear use case or innovative features.",
  },
  {
    term: "Pump and Dump",
    definition:
      "A scheme where a group artificially inflates the price of a cryptocurrency (pump) through misleading statements, then sells off their holdings (dump), causing the price to crash.",
  },
  {
    term: "Bagholder",
    definition:
      "An investor left holding a large amount of a cryptocurrency that has significantly decreased in value, often due to a pump and dump scheme or market crash.",
  },
  {
    term: "Diamond Hands",
    definition:
      "Refers to an investor's ability to hold onto their assets despite high risk, market volatility, or significant losses, showing strong conviction in their investment.",
  },
  {
    term: "Paper Hands",
    definition:
      "The opposite of 'Diamond Hands'. Describes investors who sell their holdings quickly at the first sign of trouble or a small amount of profit, lacking conviction in their investments.",
  },
  {
    term: "Rekt",
    definition:
      "Slang for 'wrecked'. Used when someone has suffered significant financial losses in trading or investing, often due to liquidation in leveraged trades.",
  },
  {
    term: "Degen",
    definition:
      "Short for 'degenerate'. Often used self-referentially or to describe traders who make high-risk, speculative investments with little regard for the potential downsides.",
  },
  {
    term: "Airdrop",
    definition:
      "A distribution of free tokens or coins to a community, often used as a marketing strategy to increase awareness and adoption of a new cryptocurrency project.",
  },
  {
    term: "Weak Hands",
    definition:
      "Similar to 'Paper Hands'. Refers to investors who are quick to sell their holdings during market downturns or at the first sign of trouble, often due to lack of confidence or research.",
  },
  {
    term: "Hopium",
    definition:
      "A blend of 'hope' and 'opium'. Refers to the irrational optimism or unfounded hope that a coin's value will increase, despite contrary indicators or lack of fundamental value.",
  },
  {
    term: "Cope",
    definition:
      "The act of convincing oneself that a failing investment will eventually turn around. Often used to describe irrational justifications for holding onto losing positions.",
  },
  {
    term: "Copium",
    definition:
      "A blend of 'cope' and 'opium'. Similar to 'Hopium', it refers to the psychological state of denial or self-delusion when facing investment losses, where investors create elaborate justifications for why their failing investments will eventually succeed.",
  },
  {
    term: "Floor",
    definition:
      "In the context of NFTs, the 'floor price' is the lowest price at which an NFT from a specific collection is currently available for purchase in the marketplace.",
  },
  {
    term: "Scanning",
    definition:
      "The act of continuously monitoring blockchain transactions, token prices, or social media for potential trading opportunities, market movements, or security threats.",
  },
  {
    term: "Being In",
    definition:
      "Crypto slang for having invested in a particular cryptocurrency or project. Often used in phrases like 'Are you in on [project name]?'",
  },
  {
    term: "Copy Trading",
    definition:
      "A trading strategy where investors automatically copy the trades of more experienced or successful traders, often through specialized platforms or social trading networks.",
  },
  {
    term: "Selling on Us",
    definition:
      "When a trader or investor sells their holdings, potentially causing the price to drop for other investors. Often used in community chats to express disappointment in those who sell.",
  },
  {
    term: "Front Running",
    definition:
      "An unethical practice where a trader uses advance knowledge of pending orders to place their own orders first, taking advantage of predictable price movements.",
  },
  {
    term: "Printing",
    definition:
      "In crypto context, refers to the creation or minting of new cryptocurrency tokens. Often used critically when discussing inflation or token emission policies.",
  },
  {
    term: "Paying",
    definition:
      "In crypto slang, refers to a token or investment that is providing good returns or 'paying out' well. For example, 'This yield farm is really paying right now.'",
  },
  {
    term: "DYOR",
    definition:
      "Do Your Own Research. A common phrase encouraging investors to investigate and understand a project before investing, rather than relying solely on others' opinions or hype.",
  },
  {
    term: "Apeing",
    definition:
      "The act of investing in a cryptocurrency or project with little to no prior research, often due to FOMO or hype. Derived from the phrase 'aping in'.",
  },
  {
    term: "CTO",
    definition:
      "Community Takeover. Refers to when a cryptocurrency project's community takes control of the project's direction, often after the original team has abandoned it or failed to deliver.",
  },
  {
    term: "VC",
    definition:
      "Venture Capital. In crypto, it refers to investors or firms that provide funding to early-stage blockchain projects in exchange for tokens or equity.",
  },
  {
    term: "Comms",
    definition:
      "Short for 'communications'. Often used in crypto communities to request project updates or news from the development team.",
  },
  {
    term: "CA",
    definition:
      "Contract Address. The unique identifier for a smart contract on the blockchain, often used to verify or interact with a specific token or project.",
  },
  {
    term: "Round Tripping",
    definition:
      "A trading strategy where an investor buys and sells the same asset quickly to artificially inflate trading volume or manipulate prices.",
  },
  {
    term: "Entry",
    definition:
      "The price point at which an investor buys into a cryptocurrency or token. 'Good entry' suggests a favorable buying price.",
  },
  {
    term: "PVE",
    definition:
      "Price vs. Everything. A mindset where traders focus solely on price movements, disregarding other factors like fundamentals or project development.",
  },
  {
    term: "Bleeding",
    definition:
      "A continuous, gradual decrease in a cryptocurrency's price over time, often used to describe a bear market or a failing project.",
  },
  {
    term: "Side Wallet",
    definition:
      "A separate cryptocurrency wallet used for specific purposes, often to keep certain investments or activities separate from one's main holdings.",
  },
  {
    term: "Volume",
    definition:
      "The total amount of a cryptocurrency traded within a specific time frame, often used as an indicator of market activity and liquidity.",
  },
  {
    term: "Bundle",
    definition:
      "A collection of different cryptocurrencies or tokens sold together as a package, often used in ICOs or as an investment strategy.",
  },
  {
    term: "Lock Supply",
    definition:
      "The act of making a portion of a token's supply unavailable for a certain period, often done to create scarcity or build trust with investors.",
  },
  {
    term: "LARP",
    definition:
      "Live Action Role Playing. In crypto, it refers to individuals or projects pretending to be something they're not, often to gain attention or credibility.",
  },
  {
    term: "Migrate",
    definition:
      "The process of moving tokens or a project from one blockchain to another, often done to take advantage of better features or lower fees.",
  },
  {
    term: "Fake Domain",
    definition:
      "A website that mimics a legitimate crypto project or exchange, created to scam users by stealing their login credentials or funds.",
  },
  {
    term: "Attention",
    definition:
      "In crypto trading, refers to increased interest or focus on a particular token or project, often leading to price movements.",
  },
  {
    term: "Snipe",
    definition:
      "The act of quickly buying a token right at launch or when it reaches a specific price, often aided by trading bots or scripts.",
  },
  {
    term: "Exit Liquidity",
    definition:
      "The buyers that allow early investors or whales to sell their holdings at a profit, often used negatively to describe retail investors in pump and dump schemes.",
  },
  {
    term: "Supporting the Chart",
    definition:
      "When investors buy a token to prevent its price from falling further, often done by project supporters or team members.",
  },
  {
    term: "Nuking the Chart",
    definition: "A rapid and significant drop in a token's price, often due to large sell orders or negative news.",
  },
  {
    term: "RIP",
    definition:
      "Rest In Peace. Used sarcastically in crypto to acknowledge a significant price drop or the failure of a project.",
  },
  {
    term: "Beta Play",
    definition:
      "Investing in a new or experimental project or feature, often with high risk but potential for high rewards.",
  },
  {
    term: "Holding the Bag",
    definition:
      "Similar to 'Bagholder'. Refers to investors left with worthless or significantly devalued tokens after a price crash or rug pull.",
  },
  {
    term: "Depot",
    definition:
      "Short for 'deposit'. Often used in the context of adding funds to a trading account or liquidity pool.",
  },
  {
    term: "Top Holder",
    definition:
      "An individual or entity that owns a large portion of a particular token's supply, often viewed with a mix of respect and suspicion by the community.",
  },
  {
    term: "Pay Dex",
    definition:
      "Paying fees to a decentralized exchange (DEX) for trading. Can also refer to the practice of projects paying for DEX listings.",
  },
  {
    term: "Getting Liquidated",
    definition:
      "When a trader's leveraged position is forcibly closed due to insufficient funds to maintain the position, often resulting in significant losses.",
  },
  {
    term: "Ledger",
    definition:
      "A hardware wallet for storing cryptocurrencies offline, providing enhanced security against hacks and theft.",
  },
  {
    term: "Fullport",
    definition:
      "Short for 'full portfolio'. Refers to investing all available funds into a single asset or project, a high-risk strategy.",
  },
  {
    term: "Stable",
    definition:
      "Short for 'stablecoin', a type of cryptocurrency designed to maintain a stable value, often pegged to a fiat currency like the US dollar.",
  },
  {
    term: "Sell Your Initials",
    definition:
      "A strategy where an investor sells a portion of their investment equal to their initial investment, allowing them to play with 'house money'.",
  },
  {
    term: "Call the Top",
    definition:
      "To predict the highest price a cryptocurrency will reach before it starts to decline. Often used retrospectively when someone accurately predicts a price peak.",
  },
  {
    term: "Call the Bottom",
    definition:
      "To predict the lowest price a cryptocurrency will reach before it starts to recover. Similar to \"Call the Top\", but for the lowest point.",
  },
  {
    term: "OG",
    definition:
      "Original Gangster. In crypto, refers to early adopters or long-time participants in the cryptocurrency space or a specific project.",
  },
  {
    term: "Sending",
    definition:
      "The act of initiating a cryptocurrency transaction. Can also be used to express agreement or enthusiasm, similar to 'Aping in'.",
  },
  {
    term: "Slow Pick",
    definition:
      "A cryptocurrency that gains value gradually over time, as opposed to a pump and dump or quick moon shot.",
  },
  {
    term: "Lore",
    definition:
      "The backstory, history, or accumulated knowledge about a particular cryptocurrency project or event in the crypto space.",
  },
  {
    term: "Normies",
    definition:
      "A term used by crypto enthusiasts to refer to people not involved or interested in cryptocurrencies or blockchain technology.",
  },
  {
    term: "TG",
    definition:
      "Short for Telegram. A popular messaging app widely used in the crypto community for project updates, discussions, and trading groups.",
  },
  {
    term: "Meta",
    definition:
      "Refers to the current trends or strategies that are considered most effective in the crypto market. The 'meta' can change rapidly based on market conditions.",
  },
  {
    term: "Blasting",
    definition:
      "A rapid increase in a token's price, similar to 'mooning' but often implying a more aggressive or manipulated price movement.",
  },
  {
    term: "Bidding",
    definition:
      "The act of placing buy orders for a cryptocurrency, often used in the context of supporting a token's price or participating in a token sale.",
  },
  {
    term: "Doxxed",
    definition:
      "When the real identities of a crypto project's team members are known and verified, often seen as a sign of legitimacy and accountability.",
  },
  {
    term: "Running With It",
    definition:
      "When investors or traders capitalize on positive momentum, often referring to a community's response to good news or a price increase.",
  },
  {
    term: "Killing the Chart",
    definition:
      "Similar to 'nuking the chart', refers to a severe drop in a token's price, often due to large sell-offs or negative events.",
  },
  {
    term: "Mid",
    definition:
      "Short for 'mediocre'. Used to describe a cryptocurrency or project that is considered average or unremarkable.",
  },
  {
    term: "Taking P",
    definition:
      "Short for 'taking profit'. The act of selling some or all of one's cryptocurrency holdings to realize gains.",
  },
  {
    term: "Work for Your Bags",
    definition:
      "The idea that investors should actively contribute to or promote the projects they've invested in to increase the value of their holdings.",
  },
  {
    term: "PNL",
    definition:
      "Profit and Loss. A term used to describe the financial performance of a trade or investment over a specific period.",
  },
  {
    term: "Reset",
    definition:
      "In crypto trading, refers to a significant price correction that brings a token's value back to a previous, often lower, level.",
  },
  {
    term: "Sleep on It",
    definition:
      "Advice given to avoid making impulsive trading decisions, suggesting to wait and reconsider before taking action.",
  },
  {
    term: "Moon or Dust",
    definition:
      "A high-risk, high-reward investment strategy where the expectation is either significant gains ('moon') or complete loss ('dust').",
  },
  {
    term: "DCAing",
    definition:
      "Dollar Cost Averaging. A strategy of investing a fixed amount at regular intervals, regardless of price, to reduce the impact of volatility.",
  },
  {
    term: "Remove to the Core",
    definition:
      "Similar to 'To The Core', describes a rapid and significant decrease in a cryptocurrency's value, often used humorously or sarcastically.",
  },
  {
    term: "ATH",
    definition:
      "All-Time High. The highest price a cryptocurrency has ever reached since its launch.",
  },
  {
    term: "Bag",
    definition:
      "A significant holding of a particular cryptocurrency. Can be used positively ('nice bag') or negatively ('heavy bag') depending on the investment's performance.",
  },
  {
    term: "Bonding",
    definition:
      "A DeFi mechanism where users provide liquidity or assets to a protocol in exchange for discounted tokens, usually vested over time.",
  },
  {
    term: "Bottom",
    definition:
      "The lowest price point in a cryptocurrency's downward trend, often used when speculating on whether a price decline has ended.",
  },
  {
    term: "Bottom Signal",
    definition:
      "An indicator or event that suggests a cryptocurrency's price has reached its lowest point and may begin to recover.",
  },
  {
    term: "CT",
    definition:
      "Crypto Twitter. The community of cryptocurrency enthusiasts, traders, and influencers on Twitter who discuss crypto-related topics.",
  },
  {
    term: "Fade",
    definition:
      "To take a trading position opposite to the prevailing market sentiment or a popular trade.",
  },
  {
    term: "Fill",
    definition:
      "When a buy or sell order is completed or 'filled' at the desired price level.",
  },
  {
    term: "Fly",
    definition:
      "When a cryptocurrency's price increases rapidly. Similar to 'moon' but often used for shorter-term price movements.",
  },
  {
    term: "Gen-wealth",
    definition:
      "Short for 'Generational Wealth'. Same meaning as 'Generational Wealth' - the idea that crypto investments could create enough wealth to pass down through generations.",
  },
  {
    term: "Generational Wealth",
    definition:
      "The belief that cryptocurrency investments could create enough wealth to sustain multiple generations of a family.",
  },
  {
    term: "gm",
    definition:
      "Short for 'good morning'. A greeting commonly used in crypto communities to show positivity and engagement, regardless of the time of day.",
  },
  {
    term: "Jeet",
    definition:
      "Refers to traders who quickly sell their positions, often at the first sign of profit. Similar to 'paper hands' but with a more negative connotation.",
  },
  {
    term: "mcap",
    definition:
      "Short for Market Capitalization. The total value of a cryptocurrency, calculated by multiplying the current price by the circulating supply.",
  },
  {
    term: "PVP",
    definition:
      "Player Versus Player. In crypto context, refers to zero-sum trading where one trader's profit is another's loss.",
  },
  {
    term: "Ripping",
    definition:
      "When a cryptocurrency's price is increasing rapidly and aggressively. Similar to 'mooning' but often implies more volatile movement.",
  },
  {
    term: "Sink",
    definition:
      "When a cryptocurrency's price drops significantly. Often used to describe rapid, unexpected price decreases.",
  },
  {
    term: "Sitting on My Hands",
    definition:
      "A trading strategy where one deliberately avoids making any trades during uncertain market conditions.",
  },
  {
    term: "Spread",
    definition:
      "The difference between the highest bid and lowest ask price for a cryptocurrency on an exchange.",
  },
  {
    term: "Top",
    definition:
      "The highest price point in a cryptocurrency's upward trend, often used when speculating on whether a price increase has peaked.",
  },
  {
    term: "Top Signal",
    definition:
      "An indicator or event that suggests a cryptocurrency's price has reached its peak and may begin to decline.",
  },
  {
    term: "wagmi",
    definition:
      "Acronym for 'we're all gonna make it'. An expression of optimism and community solidarity in crypto markets.",
  },
]

// Set "new" terms (adjust this list as needed)
const newTerms = [
  "Copium",
  "Exit Liquidity",
  "Front Running",
  "Moon or Dust",
  "Supporting the Chart"
]

export function TermList({ searchTerm = "" }: { searchTerm?: string }) {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null)
  const [highlightedTerm, setHighlightedTerm] = useState<string | null>(null)
  const termRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Sort terms alphabetically
  const sortedTerms = [...terms].sort((a, b) => a.term.localeCompare(b.term))

  // Filter terms based on search
  const filteredTerms = searchTerm
    ? sortedTerms.filter(
        (item) =>
          item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.definition.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : sortedTerms

  useEffect(() => {
    if (highlightedTerm) {
      const element = termRefs.current[highlightedTerm]
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
        setHighlightedTerm(null)
      }
    }
  }, [highlightedTerm])

  const highlightReferencedTerms = (definition: string) => {
    let highlightedDefinition = definition

    sortedTerms.forEach((term) => {
      const regex = new RegExp(`\\b${term.term}\\b`, "gi")
      highlightedDefinition = highlightedDefinition.replace(regex, (match) => {
        return `<a href="#" class="text-primary font-semibold cursor-pointer" data-term="${match}">${match}</a>`
      })
    })

    return highlightedDefinition
  }

  const handleTermClick = (term: string) => {
    setHighlightedTerm(term)
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredTerms.map((item) => (
        <Card
          key={item.term}
          className="cursor-pointer transition-all hover:shadow-md"
          onClick={() => setExpandedTerm(expandedTerm === item.term ? null : item.term)}
          ref={(el) => {
            termRefs.current[item.term] = el
          }}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{item.term}</CardTitle>
              {newTerms.includes(item.term) && (
                <Badge variant="secondary" className="ml-2">
                  New
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription
              className={expandedTerm === item.term ? "" : "line-clamp-2"}
              dangerouslySetInnerHTML={{
                __html: highlightReferencedTerms(item.definition),
              }}
              onClick={(e) => {
                const target = e.target as HTMLElement
                if (target.dataset.term) {
                  e.preventDefault()
                  e.stopPropagation()
                  handleTermClick(target.dataset.term)
                }
              }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

