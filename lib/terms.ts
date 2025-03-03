export interface Term {
  readonly term: string
  readonly definition: string
  readonly partOfSpeech: string
  readonly syllables: string[]
}

export const terms: Term[] = [
  {
    term: "adoption",
    partOfSpeech: "n.",
    definition:
      "The process of cryptocurrencies or blockchain technology becoming more widely accepted and used in mainstream applications and society.",
    syllables: ["a", "dopt", "ion"],
  },
  {
    term: "airdrop",
    partOfSpeech: "n.",
    definition:
      "A distribution of free tokens or coins to a community, often used as a marketing strategy to increase awareness and adoption of a new cryptocurrency project.",
    syllables: ["air", "drop"],
  },
  {
    term: "alpha",
    partOfSpeech: "n.",
    definition:
      "Insider or early information about a cryptocurrency project that could lead to profitable trading opportunities.",
    syllables: ["al", "pha"],
  },
  {
    term: "altcoin",
    partOfSpeech: "n.",
    definition: "Any cryptocurrency that is not Bitcoin. Short for 'alternative coin'.",
    syllables: ["alt", "coin"],
  },
  {
    term: "ape",
    partOfSpeech: "v.",
    definition:
      "The act of investing in a cryptocurrency or project with little to no prior research, often due to FOMO or hype.",
    syllables: ["ape"],
  },
  {
    term: "ATH",
    partOfSpeech: "n.",
    definition:
      "All-Time High. The highest price a cryptocurrency has ever reached since its launch.",
    syllables: ["A", "T", "H"],
  },
  {
    term: "attention",
    partOfSpeech: "n.",
    definition:
      "Increased interest or focus on a particular token or project, often leading to price movements.",
    syllables: ["at", "ten", "tion"],
  },
  {
    term: "bag",
    partOfSpeech: "n.",
    definition:
      "A significant holding of a particular cryptocurrency. Can be used positively ('nice bag') or negatively ('heavy bag') depending on the investment's performance.",
    syllables: ["bag"],
  },
  {
    term: "beta",
    partOfSpeech: "n.",
    definition:
      "A secondary token or imitative project that follows the narrative of an original meme or concept. Example: Shiba Inu as a 'beta play' of Dogecoin.",
    syllables: ["be", "ta"],
  },
  {
    term: "bid",
    partOfSpeech: "v.",
    definition:
      "The act of placing buy orders for a cryptocurrency, often used in the context of supporting a token's price or participating in a token sale.",
    syllables: ["bid"],
  },
  {
    term: "blast",
    partOfSpeech: "v.",
    definition:
      "A rapid increase in a token's price, similar to 'mooning' but often implying a more aggressive or manipulated price movement.",
    syllables: ["blast"],
  },
  {
    term: "bleed",
    partOfSpeech: "v.",
    definition:
      "A continuous, gradual decrease in a cryptocurrency's price over time, often used to describe a bear market or a failing project.",
    syllables: ["bleed"],
  },
  {
    term: "bond",
    partOfSpeech: "v.",
    definition:
      "The active process of a token transitioning from its initial distribution phase to being available on a decentralized exchange.",
    syllables: ["bond"],
  },
  {
    term: "bot",
    partOfSpeech: "n.",
    definition:
      "An automated program that executes trades or performs other actions in cryptocurrency markets.",
    syllables: ["bot"],
  },
  {
    term: "bottom",
    partOfSpeech: "n.",
    definition:
      "The lowest price point in a cryptocurrency's downward trend, often used when speculating on whether a price decline has ended.",
    syllables: ["bot", "tom"],
  },
  {
    term: "bridge",
    partOfSpeech: "v.",
    definition: "To transfer cryptocurrency assets between different blockchain networks.",
    syllables: ["bridge"],
  },
  {
    term: "burn",
    partOfSpeech: "v.",
    definition:
      "To permanently remove tokens from circulation by sending them to an inaccessible wallet address.",
    syllables: ["burn"],
  },
  {
    term: "buy",
    partOfSpeech: "v.",
    definition: "To acquire cryptocurrency using fiat currency or other cryptocurrencies.",
    syllables: ["buy"],
  },
  {
    term: "CA",
    partOfSpeech: "n.",
    definition:
      "Contract Address. The unique identifier for a smart contract on the blockchain, often used to verify or interact with a specific token or project.",
    syllables: ["C", "A"],
  },
  {
    term: "chart",
    partOfSpeech: "n.",
    definition: "A visual representation of price movements and trading activity over time.",
    syllables: ["chart"],
  },
  {
    term: "clip",
    partOfSpeech: "v.",
    definition:
      "Taking small, quick profits from price movements, often in newly launched tokens or during initial DEX offerings (IDOs).",
    syllables: ["clip"],
  },
  {
    term: "comms",
    partOfSpeech: "n.",
    definition:
      "Short for 'communications'. Often used in crypto communities to request project updates or news from the development team.",
    syllables: ["comms"],
  },
  {
    term: "contract",
    partOfSpeech: "n.",
    definition:
      "A smart contract deployed on a blockchain that defines the rules and functionality of a token or project.",
    syllables: ["con", "tract"],
  },
  {
    term: "cope",
    partOfSpeech: "v.",
    definition:
      "The act of convincing oneself that a failing investment will eventually turn around. Often used to describe irrational justifications for holding onto losing positions.",
    syllables: ["cope"],
  },
  {
    term: "crash",
    partOfSpeech: "n.",
    definition:
      "A sudden and severe drop in price, more dramatic than a dip or correction. Often accompanied by panic selling.",
    syllables: ["crash"],
  },
  {
    term: "CT",
    partOfSpeech: "n.",
    definition:
      "Crypto Twitter. The community of cryptocurrency enthusiasts, traders, and influencers on Twitter who discuss crypto-related topics.",
    syllables: ["C", "T"],
  },
  {
    term: "dev",
    partOfSpeech: "n.",
    definition:
      "Short for developer. Refers to the programmers and technical team members working on a cryptocurrency project.",
    syllables: ["dev"],
  },
  {
    term: "domain",
    partOfSpeech: "n.",
    definition: "A web address associated with a cryptocurrency project or platform.",
    syllables: ["do", "main"],
  },
  {
    term: "drain",
    partOfSpeech: "v.",
    definition:
      "The unauthorized removal of funds from a wallet or smart contract, often through exploits or hacks.",
    syllables: ["drain"],
  },
  {
    term: "dump",
    partOfSpeech: "v.",
    definition:
      "To sell large amounts of a cryptocurrency quickly, often causing the price to drop significantly.",
    syllables: ["dump"],
  },
  {
    term: "dust",
    partOfSpeech: "n.",
    definition:
      "Tiny amounts of cryptocurrency left in a wallet, often too small to be worth transferring due to transaction fees.",
    syllables: ["dust"],
  },
  {
    term: "DYOR",
    partOfSpeech: "v.",
    definition:
      "Do Your Own Research. A common phrase encouraging investors to investigate and understand a project before investing.",
    syllables: ["D", "Y", "O", "R"],
  },
  {
    term: "entry",
    partOfSpeech: "n.",
    definition: "The price point at which an investor buys into a cryptocurrency or token.",
    syllables: ["en", "try"],
  },
  {
    term: "fade",
    partOfSpeech: "v.",
    definition:
      "To take a trading position opposite to the prevailing market sentiment or a popular trade.",
    syllables: ["fade"],
  },
  {
    term: "fee",
    partOfSpeech: "n.",
    definition:
      "The cost associated with making transactions or interacting with smart contracts on a blockchain network.",
    syllables: ["fee"],
  },
  {
    term: "fill",
    partOfSpeech: "n.",
    definition: "When a buy or sell order is completed at a specific price.",
    syllables: ["fill"],
  },
  {
    term: "flip",
    partOfSpeech: "v.",
    definition:
      "To buy and sell quickly for a profit, or when one cryptocurrency's market cap surpasses another's.",
    syllables: ["flip"],
  },
  {
    term: "flood",
    partOfSpeech: "v.",
    definition:
      "To overwhelm a chat or social media platform with messages about a particular cryptocurrency.",
    syllables: ["flood"],
  },
  {
    term: "floor",
    partOfSpeech: "n.",
    definition: "The lowest price level at which a cryptocurrency typically finds buying support.",
    syllables: ["floor"],
  },
  {
    term: "fly",
    partOfSpeech: "v.",
    definition:
      "When a cryptocurrency's price increases rapidly. Similar to 'moon' but often used for shorter-term price movements.",
    syllables: ["fly"],
  },
  {
    term: "FOMO",
    partOfSpeech: "n.",
    definition:
      "Fear Of Missing Out. The anxiety that an investor might miss out on a potentially profitable investment opportunity.",
    syllables: ["F", "O", "M", "O"],
  },
  {
    term: "foundation",
    partOfSpeech: "n.",
    definition:
      "An organization that oversees the development and promotion of a cryptocurrency project.",
    syllables: ["foun", "da", "tion"],
  },
  {
    term: "FUD",
    partOfSpeech: "n.",
    definition:
      "Fear, Uncertainty, and Doubt. Often used to describe negative or misleading information spread in the crypto market.",
    syllables: ["F", "U", "D"],
  },
  {
    term: "gas",
    partOfSpeech: "n.",
    definition:
      "The fee required to successfully conduct a transaction or execute a smart contract on blockchain networks.",
    syllables: ["gas"],
  },
  {
    term: "generational",
    partOfSpeech: "adj.",
    definition:
      "Relating to or affecting several generations. When used in the context of generational wealth, it refers to wealth substantial enough to benefit not only the current generation but also future generations, creating long-lasting financial stability or legacy.",
    syllables: ["gen", "er", "a", "tion", "al"],
  },
  {
    term: "GM",
    partOfSpeech: "interj.",
    definition:
      "Originally meaning 'good morning', evolved to also mean 'Gonna Make it'. Used as both a greeting and an expression of confidence.",
    syllables: ["G", "M"],
  },
  {
    term: "hedge",
    partOfSpeech: "n.",
    definition: "A trading strategy where investors take opposing positions to minimize risk.",
    syllables: ["hedge"],
  },
  {
    term: "HODL",
    partOfSpeech: "v.",
    definition:
      "Hold On for Dear Life. A strategy of keeping cryptocurrency long-term, regardless of market fluctuations.",
    syllables: ["H", "O", "D", "L"],
  },
  {
    term: "hopium",
    partOfSpeech: "n.",
    definition:
      "A blend of 'hope' and 'opium'. Refers to irrational optimism about a coin's potential value increase.",
    syllables: ["hop", "i", "um"],
  },
  {
    term: "jeet",
    partOfSpeech: "n.",
    definition:
      "Refers to traders who quickly sell their positions, often at the first sign of profit.",
    syllables: ["jeet"],
  },
  {
    term: "kill",
    partOfSpeech: "v.",
    definition: "To cause a severe drop in a token's price, often through large sell-offs.",
    syllables: ["kill"],
  },
  {
    term: "KOL",
    partOfSpeech: "n.",
    definition:
      "Key Opinion Leader. Influential individuals whose opinions can significantly impact market trends.",
    syllables: ["K", "O", "L"],
  },
  {
    term: "LARP",
    partOfSpeech: "v.",
    definition:
      "Live Action Role Playing. Refers to individuals or projects pretending to be something they're not.",
    syllables: ["L", "A", "R", "P"],
  },
  {
    term: "launch",
    partOfSpeech: "v.",
    definition: "The initial release of a new cryptocurrency or token to the public.",
    syllables: ["launch"],
  },
  {
    term: "layer",
    partOfSpeech: "n.",
    definition:
      "Refers to different levels of blockchain architecture, such as Layer 1 (base chains) and Layer 2 (scaling solutions).",
    syllables: ["lay", "er"],
  },
  {
    term: "ledger",
    partOfSpeech: "n.",
    definition:
      "A hardware wallet for storing cryptocurrencies offline, or the record of all transactions on a blockchain.",
    syllables: ["led", "ger"],
  },
  {
    term: "liquidate",
    partOfSpeech: "v.",
    definition: "To forcibly close a leveraged trading position due to insufficient funds.",
    syllables: ["liq", "ui", "date"],
  },
  {
    term: "lock",
    partOfSpeech: "v.",
    definition:
      "To restrict access to tokens for a specific period, often used in vesting schedules.",
    syllables: ["lock"],
  },
  {
    term: "lore",
    partOfSpeech: "n.",
    definition:
      "The backstory, history, or accumulated knowledge about a particular cryptocurrency project.",
    syllables: ["lore"],
  },
  {
    term: "LP",
    partOfSpeech: "n.",
    definition:
      "Liquidity Pool. A collection of funds locked in a smart contract that enables trading on decentralized exchanges.",
    syllables: ["L", "P"],
  },
  {
    term: "market",
    partOfSpeech: "n.",
    definition: "The overall cryptocurrency trading environment or a specific trading pair.",
    syllables: ["mar", "ket"],
  },
  {
    term: "MCAP",
    partOfSpeech: "n.",
    definition:
      "Market Capitalization. The total value of a cryptocurrency, calculated by multiplying price by circulating supply.",
    syllables: ["M", "CAP"],
  },
  {
    term: "meta",
    partOfSpeech: "n.",
    definition: "The current trends or strategies considered most effective in the crypto market.",
    syllables: ["me", "ta"],
  },
  {
    term: "mid",
    partOfSpeech: "adj.",
    definition:
      "Short for 'mediocre'. Used to describe a cryptocurrency or project that is considered average or unremarkable.",
    syllables: ["mid"],
  },
  {
    term: "migrate",
    partOfSpeech: "v.",
    definition:
      "The process of moving tokens or contracts from one blockchain or platform to another.",
    syllables: ["mi", "grate"],
  },
  {
    term: "moon",
    partOfSpeech: "v.",
    definition: "When a cryptocurrency's price rises dramatically in a short period.",
    syllables: ["moon"],
  },
  {
    term: "nuke",
    partOfSpeech: "v.",
    definition: "A rapid and significant drop in a token's price, often due to large sell orders.",
    syllables: ["nuke"],
  },
  {
    term: "OG",
    partOfSpeech: "n.",
    definition:
      "Original Gangster. Refers to early adopters or long-time participants in the cryptocurrency space.",
    syllables: ["O", "G"],
  },
  {
    term: "paper",
    partOfSpeech: "adj.",
    definition: "Describing traders who sell quickly at the first sign of trouble or small profit.",
    syllables: ["pa", "per"],
  },
  {
    term: "pay",
    partOfSpeech: "v.",
    definition: "When an investment provides good returns or 'pays out' well.",
    syllables: ["pay"],
  },
  {
    term: "pick",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency chosen for investment, often based on analysis or recommendation.",
    syllables: ["pick"],
  },
  {
    term: "play",
    partOfSpeech: "n.",
    definition: "A specific investment strategy or opportunity in the cryptocurrency market.",
    syllables: ["play"],
  },
  {
    term: "PNL",
    partOfSpeech: "n.",
    definition:
      "Profit and Loss. The financial performance of a trade or investment over a specific period.",
    syllables: ["P", "N", "L"],
  },
  {
    term: "port",
    partOfSpeech: "n.",
    definition:
      "Short for portfolio. The collection of cryptocurrency investments held by an individual.",
    syllables: ["port"],
  },
  {
    term: "presale",
    partOfSpeech: "n.",
    definition: "A token sale that occurs before the official public launch.",
    syllables: ["pre", "sale"],
  },
  {
    term: "print",
    partOfSpeech: "v.",
    definition: "When a cryptocurrency investment is generating significant profits consistently.",
    syllables: ["print"],
  },
  {
    term: "priority",
    partOfSpeech: "n.",
    definition: "Higher gas fees paid to ensure faster transaction processing.",
    syllables: ["pri", "or", "i", "ty"],
  },
  {
    term: "pump",
    partOfSpeech: "v.",
    definition: "A rapid increase in price, often due to coordinated buying or positive news.",
    syllables: ["pump"],
  },
  {
    term: "reset",
    partOfSpeech: "v.",
    definition:
      "A significant price correction that brings a token's value back to a previous level.",
    syllables: ["re", "set"],
  },
  {
    term: "revive",
    partOfSpeech: "v.",
    definition: "When a seemingly dead project shows signs of life and renewed activity.",
    syllables: ["re", "vive"],
  },
  {
    term: "rigged",
    partOfSpeech: "adj.",
    definition: "Describing a market or trading situation believed to be manipulated.",
    syllables: ["rigged"],
  },
  {
    term: "rip",
    partOfSpeech: "v.",
    definition: "Describes aggressive price movement, either upward or downward.",
    syllables: ["rip"],
  },
  {
    term: "rug",
    partOfSpeech: "n.",
    definition:
      "Short for 'rug pull', when developers abandon a project and take investors' funds.",
    syllables: ["rug"],
  },
  {
    term: "run",
    partOfSpeech: "v.",
    definition: "A sustained period of price increase or positive momentum.",
    syllables: ["run"],
  },
  {
    term: "scan",
    partOfSpeech: "v.",
    definition: "To examine blockchain transactions or monitor market activity for opportunities.",
    syllables: ["scan"],
  },
  {
    term: "scanner",
    partOfSpeech: "n.",
    definition: "A tool used to monitor blockchain transactions and token movements.",
    syllables: ["scan", "ner"],
  },
  {
    term: "sell",
    partOfSpeech: "v.",
    definition: "To exchange cryptocurrency for fiat currency or other cryptocurrencies.",
    syllables: ["sell"],
  },
  {
    term: "send",
    partOfSpeech: "v.",
    definition:
      "To transfer cryptocurrency from one wallet to another, or express enthusiasm about a project.",
    syllables: ["send"],
  },
  {
    term: "shill",
    partOfSpeech: "v.",
    definition: "To promote a cryptocurrency project, often aggressively or with bias.",
    syllables: ["shill"],
  },
  {
    term: "shitcoin",
    partOfSpeech: "n.",
    definition:
      "A derogatory term for cryptocurrencies perceived to have little to no value or purpose.",
    syllables: ["shit", "coin"],
  },
  {
    term: "signal",
    partOfSpeech: "n.",
    definition: "An indicator suggesting a potential trading opportunity.",
    syllables: ["sig", "nal"],
  },
  {
    term: "sink",
    partOfSpeech: "v.",
    definition: "When a cryptocurrency's price drops significantly.",
    syllables: ["sink"],
  },
  {
    term: "sit",
    partOfSpeech: "v.",
    definition:
      "To hold a position without taking action, often during uncertain market conditions.",
    syllables: ["sit"],
  },
  {
    term: "sleep",
    partOfSpeech: "v.",
    definition: "To miss or ignore a potentially profitable opportunity.",
    syllables: ["sleep"],
  },
  {
    term: "slippage",
    partOfSpeech: "n.",
    definition: "The difference between expected and actual price execution in a trade.",
    syllables: ["slip", "page"],
  },
  {
    term: "slow",
    partOfSpeech: "adj.",
    definition: "Describing gradual price movement or network transaction speeds.",
    syllables: ["slow"],
  },
  {
    term: "snipe",
    partOfSpeech: "v.",
    definition: "To quickly buy a token right at launch or at a specific price.",
    syllables: ["snipe"],
  },
  {
    term: "spread",
    partOfSpeech: "n.",
    definition: "The difference between the highest bid and lowest ask price for a cryptocurrency.",
    syllables: ["spread"],
  },
  {
    term: "stable",
    partOfSpeech: "v.",
    definition:
      "To convert volatile crypto assets into stablecoins to secure profits or reduce risk.",
    syllables: ["sta", "ble"],
  },
  {
    term: "stake",
    partOfSpeech: "v.",
    definition:
      "To lock up cryptocurrency holdings to earn rewards or participate in network validation.",
    syllables: ["stake"],
  },
  {
    term: "strategy",
    partOfSpeech: "n.",
    definition: "A planned approach to cryptocurrency trading or investing.",
    syllables: ["strat", "e", "gy"],
  },
  {
    term: "supply",
    partOfSpeech: "n.",
    definition: "The total number of tokens or coins available or in circulation.",
    syllables: ["sup", "ply"],
  },
  {
    term: "support",
    partOfSpeech: "v.",
    definition: "A price level where buying pressure typically prevents further price decline.",
    syllables: ["sup", "port"],
  },
  {
    term: "sus",
    partOfSpeech: "adj.",
    definition:
      "Short for 'suspicious'. Used to describe potentially fraudulent or questionable behavior.",
    syllables: ["sus"],
  },
  {
    term: "take",
    partOfSpeech: "v.",
    definition: "To realize profits by selling a cryptocurrency position.",
    syllables: ["take"],
  },
  {
    term: "telegram",
    partOfSpeech: "n.",
    definition: "A messaging platform widely used in the crypto community.",
    syllables: ["tel", "e", "gram"],
  },
  {
    term: "terminal",
    partOfSpeech: "n.",
    definition: "A platform or interface for executing trades and monitoring market data.",
    syllables: ["ter", "mi", "nal"],
  },
  {
    term: "TG",
    partOfSpeech: "n.",
    definition: "Short for Telegram, a messaging app used in the crypto community.",
    syllables: ["T", "G"],
  },
  {
    term: "tip",
    partOfSpeech: "n.",
    definition:
      "Additional cryptocurrency added to a transaction to prioritize its inclusion in a block, often used to speed up processing.",
    syllables: ["tip"],
  },
  {
    term: "token",
    partOfSpeech: "n.",
    definition: "A unit of cryptocurrency, typically built on an existing blockchain.",
    syllables: ["to", "ken"],
  },
  {
    term: "top",
    partOfSpeech: "n.",
    definition: "The highest price point in a cryptocurrency's upward trend.",
    syllables: ["top"],
  },
  {
    term: "TPS",
    partOfSpeech: "n.",
    definition: "Transactions Per Second, a measure of blockchain network speed.",
    syllables: ["T", "P", "S"],
  },
  {
    term: "tracker",
    partOfSpeech: "n.",
    definition: "A tool for monitoring cryptocurrency prices, portfolios, or transactions.",
    syllables: ["track", "er"],
  },
  {
    term: "twitter",
    partOfSpeech: "n.",
    definition: "A social media platform crucial for cryptocurrency news and discussion.",
    syllables: ["twit", "ter"],
  },
  {
    term: "VC",
    partOfSpeech: "n.",
    definition: "Voice communications or Venture Capital, depending on context.",
    syllables: ["V", "C"],
  },
  {
    term: "volume",
    partOfSpeech: "n.",
    definition: "The total amount of a cryptocurrency traded within a specific time frame.",
    syllables: ["vol", "ume"],
  },
  {
    term: "WAGMI",
    partOfSpeech: "interj.",
    definition: "We're All Gonna Make It. An expression of optimism in crypto markets.",
    syllables: ["WAG", "MI"],
  },
  {
    term: "wallet",
    partOfSpeech: "n.",
    definition: "A software or hardware tool for storing and managing cryptocurrencies.",
    syllables: ["wal", "let"],
  },
  {
    term: "weak",
    partOfSpeech: "adj.",
    definition: "Describing price action showing lack of buying support or momentum.",
    syllables: ["weak"],
  },
  {
    term: "whale",
    partOfSpeech: "n.",
    definition: "An individual or entity holding a large amount of a particular cryptocurrency.",
    syllables: ["whale"],
  },
  {
    term: "work",
    partOfSpeech: "v.",
    definition: "To actively contribute to or promote projects one has invested in.",
    syllables: ["work"],
  },
  {
    term: "centralized",
    partOfSpeech: "adj.",
    definition:
      "Describes a system, exchange, or process controlled by a single authority, where decision-making and operations are managed centrally.",
    syllables: ["cen", "tral", "ized"],
  },
  {
    term: "decentralized",
    partOfSpeech: "adj.",
    definition:
      "Refers to systems or networks where control and decision-making are distributed across multiple participants, reducing reliance on a single authority.",
    syllables: ["de", "cen", "tral", "ized"],
  },
  {
    term: "diamond",
    partOfSpeech: "adj.",
    definition:
      "In crypto slang, used to describe investors with 'diamond hands' who hold assets firmly through market volatility without selling.",
    syllables: ["dia", "mond"],
  },
  {
    term: "double",
    partOfSpeech: "adj.",
    definition:
      "Describes chart patterns like 'double top' or 'double bottom,' indicating that price levels were tested twice, often signaling potential reversals.",
    syllables: ["dou", "ble"],
  },
  {
    term: "doxxed",
    partOfSpeech: "adj.",
    definition:
      "Indicates that an individual's personal or private information has been publicly exposed, often through investigative or malicious actions.",
    syllables: ["doxxed"],
  },
  {
    term: "hacked",
    partOfSpeech: "adj.",
    definition:
      "Refers to a system or account that has been compromised by unauthorized access, leading to security breaches or loss of funds.",
    syllables: ["hacked"],
  },
  {
    term: "rekt",
    partOfSpeech: "adj.",
    definition:
      "Slang used to describe someone who has suffered significant financial losses or been 'destroyed' in a trade or market event.",
    syllables: ["rekt"],
  },
  {
    term: "CEX",
    partOfSpeech: "n.",
    definition:
      "Short for Centralized Exchange, a cryptocurrency trading platform operated by a single organization that manages user funds and transactions.",
    syllables: ["C", "E", "X"],
  },
  {
    term: "DEX",
    partOfSpeech: "n.",
    definition:
      "Abbreviation for Decentralized Exchange, a platform that facilitates peer-to-peer cryptocurrency trading without a central authority.",
    syllables: ["D", "E", "X"],
  },
  {
    term: "exit",
    partOfSpeech: "n.",
    definition:
      "In the context of exit liquidity, it refers to the available funds or buyers that allow an investor to sell their position and exit the market.",
    syllables: ["ex", "it"],
  },
  {
    term: "hold",
    partOfSpeech: "v.",
    definition:
      "To retain ownership of an asset over time, rather than selling it, often as part of a long-term investment strategy.",
    syllables: ["hold"],
  },
  {
    term: "bonding-curve",
    partOfSpeech: "n.",
    definition:
      "A mathematical curve defining the relationship between a token's price and its supply, used in token economics to manage issuance and pricing.",
    syllables: ["bond", "ing", "curve"],
  },
  {
    term: "bubble-map",
    partOfSpeech: "n.",
    definition:
      "A visualization showing token holders' distribution, often used to analyze wallet concentrations or bundled token holdings.",
    syllables: ["bub", "ble", "map"],
  },
  {
    term: "bundle",
    partOfSpeech: "n.",
    definition:
      "A collection or package of assets or tokens grouped together, typically offered for investment or sale as a single unit.",
    syllables: ["bun", "dle"],
  },
  {
    term: "cabal",
    partOfSpeech: "n.",
    definition:
      "Refers to a small, secretive group of influential individuals within the crypto community, often suspected of coordinating market moves.",
    syllables: ["ca", "bal"],
  },
  {
    term: "candle",
    partOfSpeech: "n.",
    definition:
      "A single candlestick on a price chart that represents the open, close, high, and low prices of an asset over a specific time period.",
    syllables: ["can", "dle"],
  },
  {
    term: "chain",
    partOfSpeech: "n.",
    definition:
      "Short for blockchain, a decentralized ledger that records transactions across a distributed network of computers.",
    syllables: ["chain"],
  },
  {
    term: "coin",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency that typically operates on its own blockchain, serving as a medium of exchange, store of value, or unit of account.",
    syllables: ["coin"],
  },
  {
    term: "copium",
    partOfSpeech: "n.",
    definition:
      "A portmanteau of 'cope' and 'opium,' used humorously to describe the mental solace investors seek to deal with losses or market downturns.",
    syllables: ["cop", "i", "um"],
  },
  {
    term: "copy-trading",
    partOfSpeech: "n.",
    definition:
      "The practice of automatically replicating the trades of experienced or successful traders through dedicated platforms or services.",
    syllables: ["cop", "y", "trad", "ing"],
  },
  {
    term: "cross-chain",
    partOfSpeech: "n.",
    definition:
      "Describes protocols or operations that enable the transfer of assets or data between different blockchain networks to enhance interoperability.",
    syllables: ["cross", "chain"],
  },
  {
    term: "CTO",
    partOfSpeech: "n.",
    definition:
      "Stands for Community Takeover, referring to scenarios where a decentralized community assumes control or direction of a project in the absence of strong centralized leadership.",
    syllables: ["C", "T", "O"],
  },
  {
    term: "dashboard",
    partOfSpeech: "n.",
    definition:
      "A graphical interface that displays real-time data and analytics related to trading activities, portfolio performance, or market trends.",
    syllables: ["dash", "board"],
  },
  {
    term: "fullport",
    partOfSpeech: "n.",
    definition:
      "A slang term for an investor's entire portfolio of assets, often used to discuss overall exposure in the crypto market.",
    syllables: ["full", "port"],
  },
  {
    term: "gen-wealth",
    partOfSpeech: "n.",
    definition:
      "Short for generational wealth, referring to the long-term accumulation of wealth that can be passed down through generations, often through smart investments.",
    syllables: ["gen", "wealth"],
  },
  {
    term: "github",
    partOfSpeech: "n.",
    definition:
      "A web-based platform for version control and collaborative software development, widely used by crypto projects to host and share open-source code.",
    syllables: ["git", "hub"],
  },
  {
    term: "hands",
    partOfSpeech: "n.",
    definition:
      "Refers to an investor's resolve in holding assets; 'diamond hands' indicate strong conviction, while 'paper hands' imply a tendency to sell under pressure.",
    syllables: ["hands"],
  },
  {
    term: "house-money",
    partOfSpeech: "n.",
    definition:
      "Funds viewed as less risky because they originate from trading profits rather than the investor's original capital.",
    syllables: ["house", "mon", "ey"],
  },
  {
    term: "memecoin",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency that gains popularity primarily through internet memes and community hype rather than through technological innovation or utility.",
    syllables: ["meme", "coin"],
  },
  {
    term: "MEV",
    partOfSpeech: "n.",
    definition:
      "Stands for Maximum Extractable Value, referring to the potential profit miners or validators can extract by optimally ordering transactions in a block.",
    syllables: ["M", "E", "V"],
  },
  {
    term: "normie",
    partOfSpeech: "n.",
    definition:
      "A slang term for someone who is not deeply involved in crypto culture, often considered mainstream and lacking insider knowledge.",
    syllables: ["nor", "mie"],
  },
  {
    term: "P",
    partOfSpeech: "n.",
    definition:
      "Slang for profit, representing the earnings or gains achieved through trading or investments.",
    syllables: ["P"],
  },
  {
    term: "player",
    partOfSpeech: "n.",
    definition:
      "An active investor or trader in the crypto space, typically one who is engaged and experienced in market operations.",
    syllables: ["play", "er"],
  },
  {
    term: "PVE",
    partOfSpeech: "n.",
    definition:
      "A term highlighting the dynamic between insiders and everyday investors (normies) in the crypto market, emphasizing disparities in access and strategy.",
    syllables: ["P", "V", "E"],
  },
  {
    term: "PVP",
    partOfSpeech: "n.",
    definition:
      "Refers to competitive interactions among insiders in the crypto community, where experienced traders or stakeholders vie against one another.",
    syllables: ["P", "V", "P"],
  },
  {
    term: "TRADFI",
    partOfSpeech: "n.",
    definition:
      "An abbreviation for Traditional Finance, denoting conventional financial systems and institutions as contrasted with decentralized or crypto-based alternatives.",
    syllables: ["TRAD", "FI"],
  },
  {
    term: "trench",
    partOfSpeech: "n.",
    definition:
      "A slang term describing the tough, competitive environment of the crypto market, where traders face intense challenges and pressure.",
    syllables: ["trench"],
  },
  {
    term: "in",
    partOfSpeech: "prep.",
    definition:
      "Used to express participation or investment in a specific token or project, as in 'I'm in this token.'",
    syllables: ["in"],
  },
  {
    term: "build",
    partOfSpeech: "v.",
    definition:
      "To develop or create a project, product, or platform within the crypto space, often involving technical development and community engagement.",
    syllables: ["build"],
  },
  {
    term: "call",
    partOfSpeech: "v.",
    definition:
      "To decide or signal the purchase of an asset, often based on analysis or intuition, essentially making an investment move.",
    syllables: ["call"],
  },
  {
    term: "redepot",
    partOfSpeech: "v.",
    definition:
      "To re-enter the market or rebuild one's trading portfolio after incurring significant losses, effectively starting fresh with new capital.",
    syllables: ["re", "de", "pot"],
  },
  {
    term: "round-trip",
    partOfSpeech: "v.",
    definition:
      "Describes the complete cycle of an investment from entry to exit, often marked by dramatic price fluctuations and emotional highs and lows.",
    syllables: ["round", "trip"],
  },
  {
    term: "rug-pull",
    partOfSpeech: "v.",
    definition:
      "To abruptly withdraw liquidity or abandon a project, effectively scamming investors by leaving them with valueless tokens.",
    syllables: ["rug", "pull"],
  },
  {
    term: "sideline",
    partOfSpeech: "v.",
    definition:
      "To temporarily withdraw or refrain from active participation in the market, often due to uncertainty or risk aversion.",
    syllables: ["side", "line"],
  },
  {
    term: "out",
    partOfSpeech: "prep.",
    definition:
      "Used to indicate non-participation or having exited a position, as in 'I'm out of this trade,' implying a deliberate non-active stance.",
    syllables: ["out"],
  },
  {
    term: "motion",
    partOfSpeech: "adj.",
    definition:
      "Describes a trader whose actions create momentum in the market, influencing others to copy their trades due to perceived expertise.",
    syllables: ["mo", "tion"],
  },
  {
    term: "sandwich",
    partOfSpeech: "n.",
    definition:
      "A MEV (Maximal Extractable Value) strategy where a target transaction is placed between two attacker transactions to exploit price changes.",
    syllables: ["sand", "wich"],
  },
  {
    term: "depeg",
    partOfSpeech: "n.",
    definition:
      "When a stablecoin loses its 1:1 parity with the underlying asset (typically USD), trading significantly above or below its intended peg.",
    syllables: ["de", "peg"],
  },
  {
    term: "bull",
    partOfSpeech: "n.",
    definition:
      "A market participant who believes prices will rise, often driving upward momentum through optimistic buying behavior.",
    syllables: ["bull"],
  },
  {
    term: "bear",
    partOfSpeech: "n.",
    definition:
      "A market participant expecting price declines, typically selling assets or shorting to profit from downward movements.",
    syllables: ["bear"],
  },
  {
    term: "short",
    partOfSpeech: "v.",
    definition:
      "To bet against an asset by borrowing and selling it, hoping to repurchase later at a lower price and profit from the difference.",
    syllables: ["short"],
  },
  {
    term: "long",
    partOfSpeech: "v.",
    definition:
      "To hold an asset with the expectation of price appreciation over time, or to take a leveraged position betting on upward movement.",
    syllables: ["long"],
  },
  {
    term: "10x",
    partOfSpeech: "v.",
    definition:
      "To achieve tenfold returns on an investment. Also used as a target for exponential growth potential in crypto projects.",
    syllables: ["10", "x"],
  },
]

// Set "new" terms (adjust this list as needed)
export const newTerms = ["clip", "stable", "PVP", "PVE"]
