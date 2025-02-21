"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const terms = [
  {
    term: "Airdrop",
    definition:
      "A distribution of free tokens or coins to a community, often used as a marketing strategy to increase awareness and adoption of a new cryptocurrency project.",
  },
  {
    term: "Apeing",
    definition:
      "The act of investing in a cryptocurrency or project with little to no prior research, often due to FOMO or hype. Derived from the phrase 'aping in'.",
  },
  {
    term: "Aping In",
    definition:
      "The act of investing heavily and quickly into a cryptocurrency or project, often driven by FOMO or strong conviction. Originated from the idea of acting impulsively like an ape.",
  },
  {
    term: "ATH",
    definition:
      "All-Time High. The highest price a cryptocurrency has ever reached since its launch.",
  },
  {
    term: "Attention",
    definition:
      "Increased interest or focus on a particular token or project, often leading to price movements. Crypto Twitter (CT) typically dictates what gets attention in the market, with influential accounts capable of shifting focus to specific projects.",
  },
  {
    term: "Average Entry",
    definition:
      "The average price at which an investor has accumulated their position in a particular cryptocurrency, calculated across multiple buy-ins.",
  },
  {
    term: "Bag",
    definition:
      "A significant holding of a particular cryptocurrency. Can be used positively ('nice bag') or negatively ('heavy bag') depending on the investment's performance.",
  },
  {
    term: "Bagholder",
    definition:
      "An investor left holding a large amount of a cryptocurrency that has significantly decreased in value, often due to a pump and dump scheme or market crash.",
  },
  {
    term: "Being In",
    definition:
      "Crypto slang for having invested in a particular cryptocurrency or project. Often used in phrases like 'Are you in on [project name]?'",
  },
  {
    term: "Beta Play",
    definition:
      "A project that attempts to replicate or improve upon an existing successful project. For example, Shiba Inu is considered a beta play of Dogecoin. Beta plays often try to capitalize on the original project's success while adding new features or improvements.",
  },
  {
    term: "Bidding",
    definition:
      "The act of placing buy orders for a cryptocurrency, often used in the context of supporting a token's price or participating in a token sale.",
  },
  {
    term: "Blasting",
    definition:
      "A rapid increase in a token's price, similar to 'mooning' but often implying a more aggressive or manipulated price movement.",
  },
  {
    term: "Bleeding",
    definition:
      "A continuous, gradual decrease in a cryptocurrency's price over time, often used to describe a bear market or a failing project.",
  },
  {
    term: "Bonding",
    definition:
      "The active process of a token transitioning from its initial distribution phase to being available on a decentralized exchange. When someone says 'it's bonding right now!' or 'it just bonded!', they're referring to the token completing its initial fundraising phase and migrating to open trading on a DEX, where liquidity is established and the token can be freely traded.",
  },
  {
    term: "Bonding Curve",
    definition:
      "A mathematical formula that determines token pricing based on supply. As more tokens are purchased, the price increases along a predefined curve. This creates a transparent and fair token distribution mechanism where early buyers pay less, but everyone can participate. The curve typically has a target market cap at which point the token transitions to open market trading.",
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
    term: "Bundle",
    definition:
      "When multiple wallets are controlled by the same entity but deliberately separated to appear as different traders. Often used to hide large positions or manipulate trading patterns.",
  },
  {
    term: "CA",
    definition:
      "Contract Address. The unique identifier for a smart contract on the blockchain, often used to verify or interact with a specific token or project.",
  },
  {
    term: "Call the Bottom",
    definition:
      "To predict the lowest price a cryptocurrency will reach before it starts to recover. Similar to \"Call the Top\", but for the lowest point.",
  },
  {
    term: "Call the Top",
    definition:
      "To predict the highest price a cryptocurrency will reach before it starts to decline. Often used retrospectively when someone accurately predicts a price peak.",
  },
  {
    term: "Clipping",
    definition:
      "In crypto trading, 'clipping' refers to taking small, quick profits from price movements, often in newly launched tokens or during initial DEX offerings (IDOs).",
  },
  {
    term: "Comms",
    definition:
      "Short for 'communications'. Often used in crypto communities to request project updates or news from the development team.",
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
    term: "Copy Trading",
    definition:
      "A trading strategy where investors automatically copy the trades of more experienced or successful traders, often through specialized platforms or social trading networks.",
  },
  {
    term: "Crash",
    definition:
      "A sudden and severe drop in price, more dramatic than a dip or correction. Often accompanied by panic selling and can affect either specific tokens or the entire market.",
  },
  {
    term: "CT",
    definition:
      "Crypto Twitter. The community of cryptocurrency enthusiasts, traders, and influencers on Twitter who discuss crypto-related topics.",
  },
  {
    term: "CTO",
    definition:
      "Community Takeover. Refers to when a cryptocurrency project's community takes control of the project's direction, often after the original team has abandoned it or failed to deliver.",
  },
  {
    term: "DCAing",
    definition:
      "Dollar Cost Averaging. A strategy of investing a fixed amount at regular intervals, regardless of price, to reduce the impact of volatility.",
  },
  {
    term: "Degen",
    definition:
      "Short for 'degenerate'. Often used self-referentially or to describe traders who make high-risk, speculative investments with little regard for the potential downsides.",
  },
  {
    term: "Depot",
    definition:
      "Short for 'deposit'. Often used in the context of adding funds to a trading account or liquidity pool.",
  },
  {
    term: "Diamond Hands",
    definition:
      "Refers to an investor's ability to hold onto their assets despite high risk, market volatility, or significant losses, showing strong conviction in their investment.",
  },
  {
    term: "Doxxed",
    definition:
      "When the real identities of a crypto project's team members are known and verified, often seen as a sign of legitimacy and accountability.",
  },
  {
    term: "DYOR",
    definition:
      "Do Your Own Research. A common phrase encouraging investors to investigate and understand a project before investing, rather than relying solely on others' opinions or hype.",
  },
  {
    term: "Entry",
    definition:
      "The price point at which an investor buys into a cryptocurrency or token. 'Good entry' suggests a favorable buying price.",
  },
  {
    term: "Exit Liquidity",
    definition:
      "The buyers that allow early investors or whales to sell their holdings at a profit, often used negatively to describe retail investors in pump and dump schemes.",
  },
  {
    term: "Fade",
    definition:
      "To take a trading position opposite to the prevailing market sentiment or a popular trade.",
  },
  {
    term: "Fake Domain",
    definition:
      "A website that mimics a legitimate crypto project or exchange, created to scam users by stealing their login credentials or funds.",
  },
  {
    term: "Fake Github",
    definition:
      "A fraudulent or copied GitHub repository created to make a crypto project appear more legitimate or technically developed than it actually is.",
  },
  {
    term: "Fill",
    definition:
      "When a buy or sell order is completed at a specific price. A 'good fill' means the order was executed at or better than the desired price, while a 'bad fill' means the order was executed at a worse price than intended.",
  },
  {
    term: "Fly",
    definition:
      "When a cryptocurrency's price increases rapidly. Similar to 'moon' but often used for shorter-term price movements.",
  },
  {
    term: "Floor",
    definition:
      "The lowest price level at which a cryptocurrency or token typically finds buying support. While commonly used in NFT trading, it applies to any crypto asset where there's a price level that historically resists further downward movement.",
  },
  {
    term: "FOMO",
    definition:
      "Fear Of Missing Out. The anxiety that an investor might miss out on a potentially profitable investment opportunity, often leading to hasty decisions.",
  },
  {
    term: "Front Running",
    definition:
      "An unethical practice where a trader uses advance knowledge of pending orders to place their own orders first, taking advantage of predictable price movements.",
  },
  {
    term: "FUD",
    definition:
      "Fear, Uncertainty, and Doubt. Often used to describe negative or misleading information spread in the crypto market to influence investors' decisions negatively.",
  },
  {
    term: "Full Clip",
    definition:
      "When a trader uses their entire available funds for a single trade or investment. Similar to 'fullport' but specifically refers to using all available funds in a single transaction.",
  },
  {
    term: "Fullport",
    definition:
      "Short for 'full portfolio'. Refers to investing all available funds into a single asset or project, a high-risk strategy.",
  },
  {
    term: "Gas",
    definition:
      "The fee required to successfully conduct a transaction or execute a smart contract on blockchain networks like Ethereum. Paid in the network's native cryptocurrency.",
  },
  {
    term: "Gen-wealth",
    definition:
      "Short for 'Generational Wealth'. Same meaning as 'Generational Wealth' - the idea that crypto investments could create enough wealth to pass down through generations.",
  },
  {
    term: "Getting Liquidated",
    definition:
      "When a trader's leveraged position is forcibly closed due to insufficient funds to maintain the position, often resulting in significant losses.",
  },
  {
    term: "GM",
    definition:
      "Originally meaning 'good morning', evolved to also mean 'Gonna Make it'. Used as both a greeting and an expression of confidence in future success. Derived from 'GMI' (Gonna Make It).",
  },
  {
    term: "Hedge",
    definition:
      "A trading strategy where investors take opposing positions to minimize risk. For example, holding both volatile cryptocurrencies and stablecoins, or investing in projects that typically move in opposite directions.",
  },
  {
    term: "HODL",
    definition:
      "Originally a typo for 'HOLD', now means 'Hold On for Dear Life'. It's a strategy of keeping cryptocurrency long-term, regardless of market fluctuations.",
  },
  {
    term: "Holding the Bag",
    definition:
      "Similar to 'Bagholder'. Refers to investors left with worthless or significantly devalued tokens after a price crash or rug pull.",
  },
  {
    term: "Hopium",
    definition:
      "A blend of 'hope' and 'opium'. Refers to the irrational optimism or unfounded hope that a coin's value will increase, despite contrary indicators or lack of fundamental value.",
  },
  {
    term: "Jeet",
    definition:
      "Refers to traders who quickly sell their positions, often at the first sign of profit. Similar to 'paper hands' but with a more negative connotation.",
  },
  {
    term: "Killing the Chart",
    definition:
      "Similar to 'nuking the chart', refers to a severe drop in a token's price, often due to large sell-offs or negative events.",
  },
  {
    term: "KOL",
    definition:
      "Key Opinion Leader. In the crypto world, KOLs are influential individuals whose opinions can significantly impact market trends, token valuations, and community sentiment.",
  },
  {
    term: "LARP",
    definition:
      "Live Action Role Playing. In crypto, it refers to individuals or projects pretending to be something they're not, often to gain attention or credibility.",
  },
  {
    term: "Ledger",
    definition:
      "A hardware wallet for storing cryptocurrencies offline, providing enhanced security against hacks and theft.",
  },
  {
    term: "Lock Supply",
    definition:
      "The act of making a portion of a token's supply unavailable for a certain period, often done to create scarcity or build trust with investors.",
  },
  {
    term: "Lore",
    definition:
      "The backstory, history, or accumulated knowledge about a particular cryptocurrency project or event in the crypto space.",
  },
  {
    term: "LP",
    definition:
      "Liquidity Pool. A collection of funds locked in a smart contract that enables trading by providing liquidity for token pairs on decentralized exchanges. When tokens migrate from their initial distribution phase, a portion of the raised capital is typically used to establish these pools, with the LP tokens often burned to ensure permanent liquidity.",
  },
  {
    term: "MCAP",
    definition:
      "Short for Market Capitalization. The total value of a cryptocurrency, calculated by multiplying the current price by the circulating supply.",
  },
  {
    term: "Meta",
    definition:
      "Refers to the current trends or strategies that are considered most effective in the crypto market. The 'meta' can change rapidly based on market conditions.",
  },
  {
    term: "Mid",
    definition:
      "Short for 'mediocre'. Used to describe a cryptocurrency or project that is considered average or unremarkable.",
  },
  {
    term: "Migrate",
    definition:
      "The process of moving a token to a decentralized exchange after reaching a target market capitalization. During migration, a portion of the token's value is used to create a trading pair, establishing permanent liquidity and enabling wider trading access. This transition marks the end of the initial bonding curve phase and the beginning of free market trading.",
  },
  {
    term: "Moon",
    definition:
      "When a cryptocurrency's price rises dramatically in a short period. 'To the moon!' expresses hope for extremely high returns.",
  },
  {
    term: "Moon or Dust",
    definition:
      "A high-risk, high-reward investment strategy where the expectation is either significant gains ('moon') or complete loss ('dust').",
  },
  {
    term: "Normies",
    definition:
      "A term used by crypto enthusiasts to refer to people not involved or interested in cryptocurrencies or blockchain technology.",
  },
  {
    term: "Nuking the Chart",
    definition: "A rapid and significant drop in a token's price, often due to large sell orders or negative news.",
  },
  {
    term: "OG",
    definition:
      "Original Gangster. In crypto, refers to early adopters or long-time participants in the cryptocurrency space or a specific project.",
  },
  {
    term: "Paper Hands",
    definition:
      "The opposite of 'Diamond Hands'. Describes investors who sell their holdings quickly at the first sign of trouble or a small amount of profit, lacking conviction in their investments.",
  },
  {
    term: "Pay Dex",
    definition:
      "Paying fees to a decentralized exchange (DEX) for trading. Can also refer to the practice of projects paying for DEX listings.",
  },
  {
    term: "Paying",
    definition:
      "In crypto slang, refers to a token or investment that is providing good returns or 'paying out' well. For example, 'This yield farm is really paying right now.'",
  },
  {
    term: "PNL",
    definition:
      "Profit and Loss. A term used to describe the financial performance of a trade or investment over a specific period.",
  },
  {
    term: "Printing",
    definition:
      "In crypto context, refers to the creation or minting of new cryptocurrency tokens. Often used critically when discussing inflation or token emission policies.",
  },
  {
    term: "Pump and Dump",
    definition:
      "A scheme where a group artificially inflates the price of a cryptocurrency (pump) through misleading statements, then sells off their holdings (dump), causing the price to crash.",
  },
  {
    term: "PVE",
    definition:
      "Player Versus Environment. In crypto, refers to insider traders cooperating to promote tokens to retail investors ('normies'). Different from its gaming origin of player versus environment.",
  },
  {
    term: "PVP",
    definition:
      "Player Versus Player. In crypto, refers to insider traders competing against each other for profits, often in zero-sum trading situations.",
  },
  {
    term: "Redepot",
    definition:
      "To deposit additional funds after experiencing significant losses, usually in an attempt to recover previous losses. Often seen as a risky behavior associated with gambling mentality.",
  },
  {
    term: "Rekt",
    definition:
      "Slang for 'wrecked'. Used when someone has suffered significant financial losses in trading or investing, often due to liquidation in leveraged trades.",
  },
  {
    term: "Reset",
    definition:
      "In crypto trading, refers to a significant price correction that brings a token's value back to a previous, often lower, level.",
  },
  {
    term: "Ripping",
    definition:
      "Describes aggressive price movement, either upward or downward. Often used with directional indicators like 'ripping up' or 'ripping down' to specify the movement.",
  },
  {
    term: "Round Tripping",
    definition:
      "When a token's price returns to your entry point after significant movement up or down, causing emotional stress from the temporary gains or losses experienced during the price action.",
  },
  {
    term: "Rug Pull",
    definition:
      "A type of exit scam where crypto developers abandon a project and run away with investors' funds, often after pumping the price.",
  },
  {
    term: "Running With It",
    definition:
      "When investors or traders capitalize on positive momentum, often referring to a community's response to good news or a price increase.",
  },
  {
    term: "Scanning",
    definition:
      "The act of continuously monitoring blockchain transactions, token prices, or social media for potential trading opportunities, market movements, or security threats.",
  },
  {
    term: "Sell Your Initials",
    definition:
      "A strategy where an investor sells a portion of their investment equal to their initial investment, allowing them to play with 'house money'.",
  },
  {
    term: "Selling on Us",
    definition:
      "When a trader or investor sells their holdings, potentially causing the price to drop for other investors. Often used in community chats to express disappointment in those who sell.",
  },
  {
    term: "Sending",
    definition:
      "The act of initiating a cryptocurrency transaction. Can also be used to express agreement or enthusiasm, similar to 'Aping in'.",
  },
  {
    term: "Shill",
    definition:
      "To promote a cryptocurrency project, often aggressively or with bias, typically for personal gain. This can be done by project team members or paid promoters.",
  },
  {
    term: "Shitcoin",
    definition:
      "A derogatory term for cryptocurrencies perceived to have little to no value or no immediate, discernible purpose. Often used for coins with no clear use case or innovative features.",
  },
  {
    term: "Side Wallet",
    definition:
      "A separate cryptocurrency wallet used for specific purposes, often to keep certain investments or activities separate from one's main holdings.",
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
    term: "Sleep On It",
    definition:
      "To miss or ignore a potentially profitable opportunity, often realized in hindsight. Used to express regret for not participating in a successful trade or investment.",
  },
  {
    term: "Slow Pick",
    definition:
      "A cryptocurrency that gains value gradually over time, as opposed to a pump and dump or quick moon shot.",
  },
  {
    term: "Snipe",
    definition:
      "The act of quickly buying a token right at launch or when it reaches a specific price, often aided by trading bots or scripts.",
  },
  {
    term: "Spread",
    definition:
      "The difference between the highest bid and lowest ask price for a cryptocurrency on an exchange.",
  },
  {
    term: "Stable",
    definition:
      "The act of converting volatile crypto assets into stablecoins to secure profits or reduce risk. Also refers to stablecoins themselves, which are cryptocurrencies designed to maintain a stable value.",
  },
  {
    term: "Supporting the Chart",
    definition:
      "When investors buy a token to prevent its price from falling further. Can happen intentionally through coordinated buying or unintentionally when multiple traders independently decide to buy at similar price levels.",
  },
  {
    term: "Sus",
    definition:
      "Short for 'suspicious'. Used to describe potentially fraudulent or questionable behavior in crypto projects, trades, or team activities.",
  },
  {
    term: "Taking P",
    definition:
      "Short for 'taking profit'. The act of selling some or all of one's cryptocurrency holdings to realize gains.",
  },
  {
    term: "TG",
    definition:
      "Short for Telegram. A popular messaging app widely used in the crypto community for project updates, discussions, and trading groups.",
  },
  {
    term: "Top",
    definition:
      "The highest price point in a cryptocurrency's upward trend, often used when speculating on whether a price increase has peaked.",
  },
  {
    term: "Top Blast",
    definition:
      "To buy at the top of a price movement, often resulting in immediate losses as the price corrects. It's the opposite of buying the dip.",
  },
  {
    term: "Top Holder",
    definition:
      "An individual or entity that owns a large portion of a particular token's supply, often viewed with a mix of respect and suspicion by the community.",
  },
  {
    term: "Top Signal",
    definition:
      "An indicator or event that suggests a cryptocurrency's price has reached its peak and may begin to decline.",
  },
  {
    term: "VC",
    definition:
      "Voice communications, typically through Discord or Telegram, where traders share real-time information and coordinate trading strategies. Often abbreviated as 'VC'.",
  },
  {
    term: "Volume",
    definition:
      "The total amount of a cryptocurrency traded within a specific time frame, often used as an indicator of market activity and liquidity.",
  },
  {
    term: "WAGMI",
    definition:
      "Acronym for 'we're all gonna make it'. An expression of optimism and community solidarity in crypto markets.",
  },
  {
    term: "Weak Hands",
    definition:
      "Similar to 'Paper Hands'. Refers to investors who are quick to sell their holdings during market downturns or at the first sign of trouble, often due to lack of confidence or research.",
  },
  {
    term: "Whale",
    definition:
      "An individual or entity holding a large amount of a particular cryptocurrency, capable of influencing market prices through large buy or sell orders.",
  },
  {
    term: "Work for Your Bags",
    definition:
      "The idea that investors should actively contribute to or promote the projects they've invested in to increase the value of their holdings.",
  },
]

// Set "new" terms (adjust this list as needed)
const newTerms = [
  "Clipping",
  "Top Blast",
  "Stable",
  "PVP",
  "PVE",
]

interface TermListProps {
  searchTerm?: string;
}

export function TermList({ searchTerm = "" }: Readonly<TermListProps>) {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null)
  const [highlightedTerm, setHighlightedTerm] = useState<string | null>(null)
  const termRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Sort terms alphabetically
  const sortedTerms = [...terms].sort((a, b) => a.term.localeCompare(b.term))

  // Improved search filtering
  const filteredTerms = searchTerm
    ? sortedTerms.filter((item) => {
        const termMatch = item.term.toLowerCase().includes(searchTerm.toLowerCase())
        const isExactMatch = item.term.toLowerCase() === searchTerm.toLowerCase()
        
        // Return exact matches and partial matches in term only
        return isExactMatch || termMatch
      })
      // Sort exact matches first
      .sort((a, b) => {
        const aExact = a.term.toLowerCase() === searchTerm.toLowerCase()
        const bExact = b.term.toLowerCase() === searchTerm.toLowerCase()
        if (aExact && !bExact) return -1
        if (!aExact && bExact) return 1
        return 0
      })
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