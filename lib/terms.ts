export interface Term {
  readonly term: string
  readonly definition: string
  readonly partOfSpeech: string
  readonly syllables: string[]
  readonly phonetics: string // General American (GA) generated using http:www.photransedit.com/online/text2phonetics.aspx
}

export const terms: Term[] = [
  {
    term: "adoption",
    partOfSpeech: "n.",
    definition:
      "The process of cryptocurrencies or blockchain technology becoming more widely accepted and used in mainstream applications and society.",
    syllables: ["a", "dopt", "ion"],
    phonetics: "əˈdɑːpʃn̩",
  },
  {
    term: "airdrop",
    partOfSpeech: "n.",
    definition:
      "A distribution of free tokens or coins to a community, often used as a marketing strategy to increase awareness and adoption of a new cryptocurrency project.",
    syllables: ["air", "drop"],
    phonetics: "ˈerdrap",
  },
  {
    term: "alpha",
    partOfSpeech: "n.",
    definition:
      "Insider or early information about a cryptocurrency project that could lead to profitable trading opportunities.",
    syllables: ["al", "pha"],
    phonetics: "ˈælfə",
  },
  {
    term: "altcoin",
    partOfSpeech: "n.",
    definition: "Any cryptocurrency that is not Bitcoin. Short for 'alternative coin'.",
    syllables: ["alt", "coin"],
    phonetics: "ˈɑːlt ˌkɔɪn",
  },
  {
    term: "ape",
    partOfSpeech: "v.",
    definition:
      "The act of investing in a cryptocurrency or project with little to no prior research, often due to FOMO or hype.",
    syllables: ["ape"],
    phonetics: "ˈeɪp",
  },
  {
    term: "ATH",
    partOfSpeech: "n.",
    definition:
      "All-Time High. The highest price a cryptocurrency has ever reached since its launch.",
    syllables: ["A", "T", "H"],
    phonetics: "ə ˈti: ˈeɪtʃ",
  },
  {
    term: "attention",
    partOfSpeech: "n.",
    definition:
      "Increased interest or focus on a particular token or project, often leading to price movements.",
    syllables: ["at", "ten", "tion"],
    phonetics: "əˈtenʃn̩",
  },
  {
    term: "bag",
    partOfSpeech: "n.",
    definition:
      "A significant holding of a particular cryptocurrency. Can be used positively ('nice bag') or negatively ('heavy bag') depending on the investment's performance.",
    syllables: ["bag"],
    phonetics: "ˈbæɡ",
  },
  {
    term: "beta",
    partOfSpeech: "n.",
    definition:
      "A secondary token or imitative project that follows the narrative of an original meme or concept. Example: Shiba Inu as a 'beta play' of Dogecoin.",
    syllables: ["be", "ta"],
    phonetics: "beɪtə",
  },
  {
    term: "bid",
    partOfSpeech: "v.",
    definition:
      "The act of placing buy orders for a cryptocurrency, often used in the context of supporting a token's price or participating in a token sale.",
    syllables: ["bid"],
    phonetics: "ˈbɪd ",
  },
  {
    term: "blast",
    partOfSpeech: "v.",
    definition:
      "A rapid increase in a token's price, similar to 'mooning' but often implying a more aggressive or manipulated price movement.",
    syllables: ["blast"],
    phonetics: "ˈblæst",
  },
  {
    term: "bleed",
    partOfSpeech: "v.",
    definition:
      "A continuous, gradual decrease in a cryptocurrency's price over time, often used to describe a bear market or a failing project.",
    syllables: ["bleed"],
    phonetics: "ˈbliːd",
  },
  {
    term: "bond",
    partOfSpeech: "v.",
    definition:
      "The active process of a token transitioning from its initial distribution phase to being available on a decentralized exchange.",
    syllables: ["bond"],
    phonetics: "ˈbɑːnd",
  },
  {
    term: "bot",
    partOfSpeech: "n.",
    definition:
      "An automated program that executes trades or performs other actions in cryptocurrency markets.",
    syllables: ["bot"],
    phonetics: "bɑːt",
  },
  {
    term: "bottom",
    partOfSpeech: "n.",
    definition:
      "The lowest price point in a cryptocurrency's downward trend, often used when speculating on whether a price decline has ended.",
    syllables: ["bot", "tom"],
    phonetics: "ˈbɑːtəm",
  },
  {
    term: "bridge",
    partOfSpeech: "v.",
    definition: "To transfer cryptocurrency assets between different blockchain networks.",
    syllables: ["bridge"],
    phonetics: "ˈbrɪdʒ",
  },
  {
    term: "burn",
    partOfSpeech: "v.",
    definition:
      "To permanently remove tokens from circulation by sending them to an inaccessible wallet address.",
    syllables: ["burn"],
    phonetics: "ˈbɝːn",
  },
  {
    term: "buy",
    partOfSpeech: "v.",
    definition: "To acquire cryptocurrency using fiat currency or other cryptocurrencies.",
    syllables: ["buy"],
    phonetics: "ˈbaɪ",
  },
  {
    term: "CA",
    partOfSpeech: "n.",
    definition:
      "Contract Address. The unique identifier for a smart contract on the blockchain, often used to verify or interact with a specific token or project.",
    syllables: ["C", "A"],
    phonetics: "ˈsiː eɪ",
  },
  {
    term: "chart",
    partOfSpeech: "n.",
    definition: "A visual representation of price movements and trading activity over time.",
    syllables: ["chart"],
    phonetics: "ˈtʃɑːrt",
  },
  {
    term: "clip",
    partOfSpeech: "v.",
    definition:
      "Taking small, quick profits from price movements, often in newly launched tokens or during initial DEX offerings (IDOs).",
    syllables: ["clip"],
    phonetics: "ˈklɪp",
  },
  {
    term: "comms",
    partOfSpeech: "n.",
    definition:
      "Short for 'communications'. Often used in crypto communities to request project updates or news from the development team.",
    syllables: ["comms"],
    phonetics: "ˈkɑːmz",
  },
  {
    term: "smart-contract",
    partOfSpeech: "n.",
    definition:
      "Self-executing code deployed on a blockchain that automatically enforces agreement terms when predetermined conditions are met.",
    syllables: ["smart", "con", "tract"],
    phonetics: "ˈsmɑːrtˈkɑːnˌtrækt",
  },
  {
    term: "cope",
    partOfSpeech: "v.",
    definition:
      "The act of convincing oneself that a failing investment will eventually turn around. Often used to describe irrational justifications for holding onto losing positions.",
    syllables: ["cope"],
    phonetics: "koʊp",
  },
  {
    term: "crash",
    partOfSpeech: "n.",
    definition:
      "A sudden and severe drop in price, more dramatic than a dip or correction. Often accompanied by panic selling.",
    syllables: ["crash"],
    phonetics: "ˈkræʃ",
  },
  {
    term: "CT",
    partOfSpeech: "n.",
    definition:
      "Crypto Twitter. The community of cryptocurrency enthusiasts, traders, and influencers on Twitter who discuss crypto-related topics.",
    syllables: ["C", "T"],
    phonetics: "ˈsiː ˈti",
  },
  {
    term: "dev",
    partOfSpeech: "n.",
    definition:
      "Short for developer. Refers to the programmers and technical team members working on a cryptocurrency project.",
    syllables: ["dev"],
    phonetics: "ˈdev",
  },
  {
    term: "domain",
    partOfSpeech: "n.",
    definition: "A web address associated with a cryptocurrency project or platform.",
    syllables: ["do", "main"],
    phonetics: "doʊˈmeɪn",
  },
  {
    term: "drain",
    partOfSpeech: "v.",
    definition:
      "The unauthorized removal of funds from a wallet or smart contract, often through exploits or hacks.",
    syllables: ["drain"],
    phonetics: "ˈdreɪn",
  },
  {
    term: "dump",
    partOfSpeech: "v.",
    definition:
      "To sell large amounts of a cryptocurrency quickly, often causing the price to drop significantly.",
    syllables: ["dump"],
    phonetics: "ˈdəmp",
  },
  {
    term: "dust",
    partOfSpeech: "n.",
    definition:
      "Tiny amounts of cryptocurrency left in a wallet, often too small to be worth transferring due to transaction fees.",
    syllables: ["dust"],
    phonetics: "ˈdəst",
  },
  {
    term: "DYOR",
    partOfSpeech: "v.",
    definition:
      "Do Your Own Research. A common phrase encouraging investors to investigate and understand a project before investing.",
    syllables: ["D", "Y", "O", "R"],
    phonetics: "ˈdi: ˈwaɪ ˈoʊ ˈɑːr",
  },
  {
    term: "entry",
    partOfSpeech: "n.",
    definition: "The price point at which an investor buys into a cryptocurrency or token.",
    syllables: ["en", "try"],
    phonetics: "'entri",
  },
  {
    term: "fade",
    partOfSpeech: "v.",
    definition:
      "To take a trading position opposite to the prevailing market sentiment or a popular trade.",
    syllables: ["fade"],
    phonetics: "ˈfeɪd",
  },
  {
    term: "fee",
    partOfSpeech: "n.",
    definition:
      "The cost associated with making transactions or interacting with smart contracts on a blockchain network.",
    syllables: ["fee"],
    phonetics: "ˈfiː",
  },
  {
    term: "fill",
    partOfSpeech: "n.",
    definition: "When a buy or sell order is completed at a specific price.",
    syllables: ["fill"],
    phonetics: "ˈfɪl",
  },
  {
    term: "flip",
    partOfSpeech: "v.",
    definition:
      "To buy and sell quickly for a profit, or when one cryptocurrency's market cap surpasses another's.",
    syllables: ["flip"],
    phonetics: "ˈflɪp",
  },
  {
    term: "flood",
    partOfSpeech: "v.",
    definition:
      "To overwhelm a chat or social media platform with messages about a particular cryptocurrency.",
    syllables: ["flood"],
    phonetics: "ˈfləd",
  },
  {
    term: "floor",
    partOfSpeech: "n.",
    definition: "The lowest price level at which a cryptocurrency typically finds buying support.",
    syllables: ["floor"],
    phonetics: "ˈflɔːr",
  },
  {
    term: "fly",
    partOfSpeech: "v.",
    definition:
      "When a cryptocurrency's price increases rapidly. Similar to 'moon' but often used for shorter-term price movements.",
    syllables: ["fly"],
    phonetics: "ˈflaɪ",
  },
  {
    term: "FOMO",
    partOfSpeech: "n.",
    definition:
      "Fear Of Missing Out. The anxiety that an investor might miss out on a potentially profitable investment opportunity.",
    syllables: ["FO", "MO"],
    phonetics: "ˌefˈoʊ ˈmoʊ",
  },
  {
    term: "foundation",
    partOfSpeech: "n.",
    definition:
      "An organization that oversees the development and promotion of a cryptocurrency project.",
    syllables: ["foun", "da", "tion"],
    phonetics: "faʊnˈdeɪʃn̩",
  },
  {
    term: "FUD",
    partOfSpeech: "n.",
    definition:
      "Fear, Uncertainty, and Doubt. Often used to describe negative or misleading information spread in the crypto market.",
    syllables: ["FUD"],
    phonetics: "'fud",
  },
  {
    term: "gas",
    partOfSpeech: "n.",
    definition:
      "The fee required to successfully conduct a transaction or execute a smart contract on blockchain networks.",
    syllables: ["gas"],
    phonetics: "ˈɡæs",
  },
  {
    term: "generational",
    partOfSpeech: "adj.",
    definition:
      "Relating to or affecting several generations. When used in the context of generational wealth, it refers to wealth substantial enough to benefit not only the current generation but also future generations, creating long-lasting financial stability or legacy.",
    syllables: ["gen", "er", "a", "tion", "al"],
    phonetics: "ˌdʒenəˈreɪʃn̩əl",
  },
  {
    term: "GM",
    partOfSpeech: "interj.",
    definition:
      "Originally meaning 'good morning', evolved to also mean 'Gonna Make it'. Used as both a greeting and an expression of confidence.",
    syllables: ["G", "M"],
    phonetics: "ˈdʒi: ˈem",
  },
  {
    term: "HODL",
    partOfSpeech: "v.",
    definition:
      "Hold On for Dear Life. A strategy of keeping cryptocurrency long-term, regardless of market fluctuations.",
    syllables: ["HO", "DL"],
    phonetics: "ˈhoʊ ˈdel",
  },
  {
    term: "hopium",
    partOfSpeech: "n.",
    definition:
      "A blend of 'hope' and 'opium'. Refers to irrational optimism about a coin's potential value increase.",
    syllables: ["hop", "i", "um"],
    phonetics: "hoʊpɪəm",
  },
  {
    term: "jeet",
    partOfSpeech: "n.",
    definition:
      "Refers to traders who quickly sell their positions, often at the first sign of profit.",
    syllables: ["jeet"],
    phonetics: "ˈdʒiːt",
  },
  {
    term: "kill",
    partOfSpeech: "v.",
    definition: "To cause a severe drop in a token's price, often through large sell-offs.",
    syllables: ["kill"],
    phonetics: "ˈkɪl",
  },
  {
    term: "KOL",
    partOfSpeech: "n.",
    definition:
      "Key Opinion Leader. Influential individuals whose opinions can significantly impact market trends.",
    syllables: ["K", "O", "L"],
    phonetics: "ˈkol",
  },
  {
    term: "LARP",
    partOfSpeech: "v.",
    definition:
      "Live Action Role Playing. Refers to individuals or projects pretending to be something they're not.",
    syllables: ["LARP"],
    phonetics: "ˈlɑːrp",
  },
  {
    term: "launch",
    partOfSpeech: "v.",
    definition: "The initial release of a new cryptocurrency or token to the public.",
    syllables: ["launch"],
    phonetics: "ˈlɒntʃ",
  },
  {
    term: "layer",
    partOfSpeech: "n.",
    definition:
      "Refers to different levels of blockchain architecture, such as Layer 1 (base chains) and Layer 2 (scaling solutions).",
    syllables: ["lay", "er"],
    phonetics: "ˈleɪər",
  },
  {
    term: "ledger",
    partOfSpeech: "n.",
    definition:
      "A hardware wallet for storing cryptocurrencies offline, or the record of all transactions on a blockchain.",
    syllables: ["led", "ger"],
    phonetics: "ˈledʒər",
  },
  {
    term: "liquidate",
    partOfSpeech: "v.",
    definition: "To forcibly close a leveraged trading position due to insufficient funds.",
    syllables: ["liq", "ui", "date"],
    phonetics: "ˈlɪkwəˌdet",
  },
  {
    term: "lock",
    partOfSpeech: "v.",
    definition:
      "To restrict access to tokens for a specific period, often used in vesting schedules.",
    syllables: ["lock"],
    phonetics: "ˈlɑːk",
  },
  {
    term: "lore",
    partOfSpeech: "n.",
    definition:
      "The backstory, history, or accumulated knowledge about a particular cryptocurrency project.",
    syllables: ["lore"],
    phonetics: "ˈlɔːr",
  },
  {
    term: "LP",
    partOfSpeech: "n.",
    definition:
      "Liquidity Pool. A collection of funds locked in a smart contract that enables trading on decentralized exchanges.",
    syllables: ["L", "P"],
    phonetics: "ˈel ˈpiː",
  },
  {
    term: "market",
    partOfSpeech: "n.",
    definition: "The overall cryptocurrency trading environment or a specific trading pair.",
    syllables: ["mar", "ket"],
    phonetics: "ˈmɑːrkət",
  },
  {
    term: "MCAP",
    partOfSpeech: "n.",
    definition:
      "Market Capitalization. The total value of a cryptocurrency, calculated by multiplying price by circulating supply.",
    syllables: ["M", "CAP"],
    phonetics: "ˈem ˈkæp",
  },
  {
    term: "meta",
    partOfSpeech: "n.",
    definition: "The current trends or strategies considered most effective in the crypto market.",
    syllables: ["me", "ta"],
    phonetics: "ˈmiːtə",
  },
  {
    term: "mid",
    partOfSpeech: "adj.",
    definition:
      "Short for 'mediocre'. Used to describe a cryptocurrency or project that is considered average or unremarkable.",
    syllables: ["mid"],
    phonetics: "mɪd",
  },
  {
    term: "migrate",
    partOfSpeech: "v.",
    definition:
      "The process of moving tokens or contracts from one blockchain or platform to another.",
    syllables: ["mi", "grate"],
    phonetics: "ˈmaɪˌɡret ",
  },
  {
    term: "moon",
    partOfSpeech: "v.",
    definition: "When a cryptocurrency's price rises dramatically in a short period.",
    syllables: ["moon"],
    phonetics: "ˈmuːn",
  },
  {
    term: "nuke",
    partOfSpeech: "v.",
    definition: "A rapid and significant drop in a token's price, often due to large sell orders.",
    syllables: ["nuke"],
    phonetics: "ˈnuːk",
  },
  {
    term: "OG",
    partOfSpeech: "n.",
    definition:
      "Original Gangster. Refers to early adopters or long-time participants in the cryptocurrency space.",
    syllables: ["O", "G"],
    phonetics: "ˈoʊ ˈdʒiː",
  },
  {
    term: "paper",
    partOfSpeech: "adj.",
    definition: "Describing traders who sell quickly at the first sign of trouble or small profit.",
    syllables: ["pa", "per"],
    phonetics: "ˈpeɪpər",
  },
  {
    term: "pay",
    partOfSpeech: "v.",
    definition: "When an investment provides good returns or 'pays out' well.",
    syllables: ["pay"],
    phonetics: "ˈpeɪ",
  },
  {
    term: "pick",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency chosen for investment, often based on analysis or recommendation.",
    syllables: ["pick"],
    phonetics: "ˈpɪk",
  },
  {
    term: "play",
    partOfSpeech: "n.",
    definition: "A specific investment strategy or opportunity in the cryptocurrency market.",
    syllables: ["play"],
    phonetics: "pleɪ",
  },
  {
    term: "PNL",
    partOfSpeech: "n.",
    definition:
      "Profit and Loss. The financial performance of a trade or investment over a specific period.",
    syllables: ["P", "N", "L"],
    phonetics: "ˈpiː ˈen ˈel",
  },
  {
    term: "port",
    partOfSpeech: "n.",
    definition:
      "Short for portfolio. The collection of cryptocurrency investments held by an individual.",
    syllables: ["port"],
    phonetics: "ˈpɔːrt",
  },
  {
    term: "presale",
    partOfSpeech: "n.",
    definition: "A token sale that occurs before the official public launch.",
    syllables: ["pre", "sale"],
    phonetics: "pri: ˈseɪl",
  },
  {
    term: "print",
    partOfSpeech: "v.",
    definition: "When a cryptocurrency investment is generating significant profits consistently.",
    syllables: ["print"],
    phonetics: "ˈprɪnt",
  },
  {
    term: "priority",
    partOfSpeech: "n.",
    definition: "Higher gas fees paid to ensure faster transaction processing.",
    syllables: ["pri", "or", "i", "ty"],
    phonetics: "praˈjɔːrəti",
  },
  {
    term: "pump",
    partOfSpeech: "v.",
    definition: "A rapid increase in price, often due to coordinated buying or positive news.",
    syllables: ["pump"],
    phonetics: "ˈpəmp",
  },
  {
    term: "reset",
    partOfSpeech: "v.",
    definition:
      "A significant price correction that brings a token's value back to a previous level.",
    syllables: ["re", "set"],
    phonetics: "riˈset",
  },
  {
    term: "revive",
    partOfSpeech: "v.",
    definition: "When a seemingly dead project shows signs of life and renewed activity.",
    syllables: ["re", "vive"],
    phonetics: "rɪˈvaɪv",
  },
  {
    term: "rigged",
    partOfSpeech: "adj.",
    definition: "Describing a market or trading situation believed to be manipulated.",
    syllables: ["rigged"],
    phonetics: "ˈrɪɡd",
  },
  {
    term: "rip",
    partOfSpeech: "v.",
    definition: "Describes aggressive price movement, either upward or downward.",
    syllables: ["rip"],
    phonetics: "ˈrɪp",
  },
  {
    term: "rug",
    partOfSpeech: "n.",
    definition:
      "Short for 'rug pull', when developers abandon a project and take investors' funds.",
    syllables: ["rug"],
    phonetics: "ˈrəɡ",
  },
  {
    term: "run",
    partOfSpeech: "v.",
    definition: "A sustained period of price increase or positive momentum.",
    syllables: ["run"],
    phonetics: "ˈrən",
  },
  {
    term: "scan",
    partOfSpeech: "v.",
    definition: "To examine blockchain transactions or monitor market activity for opportunities.",
    syllables: ["scan"],
    phonetics: "ˈskæn",
  },
  {
    term: "scanner",
    partOfSpeech: "n.",
    definition: "A tool used to monitor blockchain transactions and token movements.",
    syllables: ["scan", "ner"],
    phonetics: "ˈskænər",
  },
  {
    term: "sell",
    partOfSpeech: "v.",
    definition: "To exchange cryptocurrency for fiat currency or other cryptocurrencies.",
    syllables: ["sell"],
    phonetics: "ˈsel",
  },
  {
    term: "send",
    partOfSpeech: "v.",
    definition:
      "To transfer cryptocurrency from one wallet to another, or express enthusiasm about a project.",
    syllables: ["send"],
    phonetics: "ˈsend",
  },
  {
    term: "shill",
    partOfSpeech: "v.",
    definition: "To promote a cryptocurrency project, often aggressively or with bias.",
    syllables: ["shill"],
    phonetics: "ˈʃɪl",
  },
  {
    term: "shitcoin",
    partOfSpeech: "n.",
    definition:
      "A derogatory term for cryptocurrencies perceived to have little to no value or purpose.",
    syllables: ["shit", "coin"],
    phonetics: "ˈʃiːt ˌkɔɪn",
  },
  {
    term: "signal",
    partOfSpeech: "n.",
    definition: "An indicator suggesting a potential trading opportunity.",
    syllables: ["sig", "nal"],
    phonetics: "ˈsɪɡnəl",
  },
  {
    term: "sink",
    partOfSpeech: "v.",
    definition: "When a cryptocurrency's price drops significantly.",
    syllables: ["sink"],
    phonetics: "ˈsɪŋk",
  },
  {
    term: "sit",
    partOfSpeech: "v.",
    definition:
      "To hold a position without taking action, often during uncertain market conditions.",
    syllables: ["sit"],
    phonetics: "ˈsɪt",
  },
  {
    term: "sleep",
    partOfSpeech: "v.",
    definition: "To miss or ignore a potentially profitable opportunity.",
    syllables: ["sleep"],
    phonetics: "sˈliːp",
  },
  {
    term: "slippage",
    partOfSpeech: "n.",
    definition: "The difference between expected and actual price execution in a trade.",
    syllables: ["slip", "page"],
    phonetics: "sˈlɪpɪdʒ",
  },
  {
    term: "slow",
    partOfSpeech: "adj.",
    definition: "Describing gradual price movement or network transaction speeds.",
    syllables: ["slow"],
    phonetics: "sˈloʊ",
  },
  {
    term: "snipe",
    partOfSpeech: "v.",
    definition: "To quickly buy a token right at launch or at a specific price.",
    syllables: ["snipe"],
    phonetics: "ˈsnaɪp",
  },
  {
    term: "spread",
    partOfSpeech: "n.",
    definition: "The difference between the highest bid and lowest ask price for a cryptocurrency.",
    syllables: ["spread"],
    phonetics: "ˈspred",
  },
  {
    term: "stable",
    partOfSpeech: "v.",
    definition:
      "To convert volatile crypto assets into stablecoins to secure profits or reduce risk.",
    syllables: ["sta", "ble"],
    phonetics: "ˈsteɪbl̩",
  },
  {
    term: "stake",
    partOfSpeech: "v.",
    definition:
      "To lock up cryptocurrency holdings to earn rewards or participate in network validation.",
    syllables: ["stake"],
    phonetics: "ˈsteɪk",
  },
  {
    term: "strategy",
    partOfSpeech: "n.",
    definition: "A planned approach to cryptocurrency trading or investing.",
    syllables: ["strat", "e", "gy"],
    phonetics: "ˈstrætədʒi",
  },
  {
    term: "supply",
    partOfSpeech: "n.",
    definition: "The total number of tokens or coins available or in circulation.",
    syllables: ["sup", "ply"],
    phonetics: "səˈplaɪ",
  },
  {
    term: "support",
    partOfSpeech: "v.",
    definition: "A price level where buying pressure typically prevents further price decline.",
    syllables: ["sup", "port"],
    phonetics: "səˈpɔːrt",
  },
  {
    term: "sus",
    partOfSpeech: "adj.",
    definition:
      "Short for 'suspicious'. Used to describe potentially fraudulent or questionable behavior.",
    syllables: ["sus"],
    phonetics: "ˈsəs",
  },
  {
    term: "take",
    partOfSpeech: "v.",
    definition: "To realize profits by selling a cryptocurrency position.",
    syllables: ["take"],
    phonetics: "ˈteɪk",
  },
  {
    term: "telegram",
    partOfSpeech: "n.",
    definition: "A messaging platform widely used in the crypto community.",
    syllables: ["tel", "e", "gram"],
    phonetics: "ˈteləˌɡræm",
  },
  {
    term: "terminal",
    partOfSpeech: "n.",
    definition: "A platform or interface for executing trades and monitoring market data.",
    syllables: ["ter", "mi", "nal"],
    phonetics: "ˈtɝːmənl̩",
  },
  {
    term: "TG",
    partOfSpeech: "n.",
    definition: "Short for Telegram, a messaging app used in the crypto community.",
    syllables: ["T", "G"],
    phonetics: "ˈti: ˈdʒiː",
  },
  {
    term: "tip",
    partOfSpeech: "n.",
    definition:
      "Additional cryptocurrency added to a transaction to prioritize its inclusion in a block, often used to speed up processing.",
    syllables: ["tip"],
    phonetics: "ˈtɪp",
  },
  {
    term: "token",
    partOfSpeech: "n.",
    definition: "A unit of cryptocurrency, typically built on an existing blockchain.",
    syllables: ["to", "ken"],
    phonetics: "ˈtoʊkən",
  },
  {
    term: "top",
    partOfSpeech: "n.",
    definition: "The highest price point in a cryptocurrency's upward trend.",
    syllables: ["top"],
    phonetics: "ˈtɑːp",
  },
  {
    term: "TPS",
    partOfSpeech: "n.",
    definition: "Transactions Per Second, a measure of blockchain network speed.",
    syllables: ["T", "P", "S"],
    phonetics: "ˈti: ˈpiː ˈes",
  },
  {
    term: "tracker",
    partOfSpeech: "n.",
    definition: "A tool for monitoring cryptocurrency prices, portfolios, or transactions.",
    syllables: ["track", "er"],
    phonetics: "ˈtrækər",
  },
  {
    term: "twitter",
    partOfSpeech: "n.",
    definition: "A social media platform crucial for cryptocurrency news and discussion.",
    syllables: ["twit", "ter"],
    phonetics: "ˈtwɪtər",
  },
  {
    term: "VC",
    partOfSpeech: "n.",
    definition: "Voice communications or Venture Capital, depending on context.",
    syllables: ["V", "C"],
    phonetics: "ˈviː ˈsiː",
  },
  {
    term: "volume",
    partOfSpeech: "n.",
    definition: "The total amount of a cryptocurrency traded within a specific time frame.",
    syllables: ["vol", "ume"],
    phonetics: "vɑːljuːm",
  },
  {
    term: "WAGMI",
    partOfSpeech: "interj.",
    definition: "We're All Gonna Make It. An expression of optimism in crypto markets.",
    syllables: ["WAG", "MI"],
    phonetics: "ˈwæɡ ˈmiː",
  },
  {
    term: "wallet",
    partOfSpeech: "n.",
    definition: "A software or hardware tool for storing and managing cryptocurrencies.",
    syllables: ["wal", "let"],
    phonetics: "ˈwɒlət",
  },
  {
    term: "weak",
    partOfSpeech: "adj.",
    definition: "Describing price action showing lack of buying support or momentum.",
    syllables: ["weak"],
    phonetics: "ˈwiːk",
  },
  {
    term: "whale",
    partOfSpeech: "n.",
    definition: "An individual or entity holding a large amount of a particular cryptocurrency.",
    syllables: ["whale"],
    phonetics: "ˈweɪl",
  },
  {
    term: "work",
    partOfSpeech: "v.",
    definition: "To actively contribute to or promote projects one has invested in.",
    syllables: ["work"],
    phonetics: "ˈwɝːk",
  },
  {
    term: "centralized",
    partOfSpeech: "adj.",
    definition:
      "Describes a system, exchange, or process controlled by a single authority, where decision-making and operations are managed centrally.",
    syllables: ["cen", "tral", "ized"],
    phonetics: "ˈsentrəˌlaɪzd",
  },
  {
    term: "decentralized",
    partOfSpeech: "adj.",
    definition:
      "Refers to systems or networks where control and decision-making are distributed across multiple participants, reducing reliance on a single authority.",
    syllables: ["de", "cen", "tral", "ized"],
    phonetics: "dəˈsentrəˌlaɪzd",
  },
  {
    term: "diamond",
    partOfSpeech: "adj.",
    definition:
      "In crypto slang, used to describe investors with 'diamond hands' who hold assets firmly through market volatility without selling.",
    syllables: ["dia", "mond"],
    phonetics: "ˈdaɪmənd",
  },
  {
    term: "double",
    partOfSpeech: "adj.",
    definition:
      "Describes chart patterns like 'double top' or 'double bottom,' indicating that price levels were tested twice, often signaling potential reversals.",
    syllables: ["dou", "ble"],
    phonetics: "ˈdʌbl̩",
  },
  {
    term: "doxxed",
    partOfSpeech: "adj.",
    definition:
      "Indicates that an individual's personal or private information has been publicly exposed, often through investigative or malicious actions.",
    syllables: ["doxxed"],
    phonetics: "ˈdɑːksed",
  },
  {
    term: "hacked",
    partOfSpeech: "adj.",
    definition:
      "Refers to a system or account that has been compromised by unauthorized access, leading to security breaches or loss of funds.",
    syllables: ["hacked"],
    phonetics: "ˈhækt",
  },
  {
    term: "rekt",
    partOfSpeech: "adj.",
    definition:
      "Slang used to describe someone who has suffered significant financial losses or been 'destroyed' in a trade or market event.",
    syllables: ["rekt"],
    phonetics: "ˌri:kt",
  },
  {
    term: "CEX",
    partOfSpeech: "n.",
    definition:
      "Short for Centralized Exchange, a cryptocurrency trading platform operated by a single organization that manages user funds and transactions.",
    syllables: ["CEX"],
    phonetics: "ˈseks",
  },
  {
    term: "DEX",
    partOfSpeech: "n.",
    definition:
      "Abbreviation for Decentralized Exchange, a platform that facilitates peer-to-peer cryptocurrency trading without a central authority.",
    syllables: ["DEX"],
    phonetics: "ˈdeks",
  },
  {
    term: "exit",
    partOfSpeech: "n.",
    definition:
      "In the context of exit liquidity, it refers to the available funds or buyers that allow an investor to sell their position and exit the market.",
    syllables: ["ex", "it"],
    phonetics: "ˈeɡzət",
  },
  {
    term: "hold",
    partOfSpeech: "v.",
    definition:
      "To retain ownership of an asset over time, rather than selling it, often as part of a long-term investment strategy.",
    syllables: ["hold"],
    phonetics: "hoʊld",
  },
  {
    term: "bonding-curve",
    partOfSpeech: "n.",
    definition:
      "A mathematical curve defining the relationship between a token's price and its supply, used in token economics to manage issuance and pricing.",
    syllables: ["bond", "ing", "curve"],
    phonetics: "ˈbɑːndɪŋ ˈkɝːv",
  },
  {
    term: "bubble-map",
    partOfSpeech: "n.",
    definition:
      "A visualization showing token holders' distribution, often used to analyze wallet concentrations or bundled token holdings.",
    syllables: ["bub", "ble", "map"],
    phonetics: "ˈbʌbl̩ ˈmæp",
  },
  {
    term: "bundle",
    partOfSpeech: "n.",
    definition:
      "A collection or package of assets or tokens grouped together, typically offered for investment or sale as a single unit.",
    syllables: ["bun", "dle"],
    phonetics: "ˈbʌndl̩",
  },
  {
    term: "cabal",
    partOfSpeech: "n.",
    definition:
      "Refers to a small, secretive group of influential individuals within the crypto community, often suspected of coordinating market moves.",
    syllables: ["ca", "bal"],
    phonetics: "kəˈbɑːl",
  },
  {
    term: "candle",
    partOfSpeech: "n.",
    definition:
      "A single candlestick on a price chart that represents the open, close, high, and low prices of an asset over a specific time period.",
    syllables: ["can", "dle"],
    phonetics: "ˈkændl̩",
  },
  {
    term: "chain",
    partOfSpeech: "n.",
    definition:
      "Short for blockchain, a decentralized ledger that records transactions across a distributed network of computers.",
    syllables: ["chain"],
    phonetics: "ˈtʃeɪn",
  },
  {
    term: "coin",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency that typically operates on its own blockchain, serving as a medium of exchange, store of value, or unit of account.",
    syllables: ["coin"],
    phonetics: "ˌkɔɪn",
  },
  {
    term: "copium",
    partOfSpeech: "n.",
    definition:
      "A portmanteau of 'cope' and 'opium,' used humorously to describe the mental solace investors seek to deal with losses or market downturns.",
    syllables: ["cop", "i", "um"],
    phonetics: "koʊpɪəm",
  },
  {
    term: "copy-trading",
    partOfSpeech: "n.",
    definition:
      "The practice of automatically replicating the trades of experienced or successful traders through dedicated platforms or services.",
    syllables: ["cop", "y", "trad", "ing"],
    phonetics: "ˈkɑːpi ˈtreɪdɪŋ",
  },
  {
    term: "cross-chain",
    partOfSpeech: "n.",
    definition:
      "Describes protocols or operations that enable the transfer of assets or data between different blockchain networks to enhance interoperability.",
    syllables: ["cross", "chain"],
    phonetics: "ˈkrɒs ˈtʃeɪn",
  },
  {
    term: "CTO",
    partOfSpeech: "n.",
    definition:
      "Stands for Community Takeover, referring to scenarios where a decentralized community assumes control or direction of a project in the absence of strong centralized leadership.",
    syllables: ["C", "T", "O"],
    phonetics: "ˌsi: ˈti: ˈoʊ ",
  },
  {
    term: "dashboard",
    partOfSpeech: "n.",
    definition:
      "A graphical interface that displays real-time data and analytics related to trading activities, portfolio performance, or market trends.",
    syllables: ["dash", "board"],
    phonetics: "ˈdæʃˌbɔːrd",
  },
  {
    term: "fullport",
    partOfSpeech: "n.",
    definition:
      "A slang term for an investor's entire portfolio of assets, often used to discuss overall exposure in the crypto market.",
    syllables: ["full", "port"],
    phonetics: "ˈfʊl ˈpɔːrt",
  },
  {
    term: "gen-wealth",
    partOfSpeech: "n.",
    definition:
      "Short for generational wealth, referring to the long-term accumulation of wealth that can be passed down through generations, often through smart investments.",
    syllables: ["gen", "wealth"],
    phonetics: "ˈdʒen ˈwelθ",
  },
  {
    term: "github",
    partOfSpeech: "n.",
    definition:
      "A web-based platform for version control and collaborative software development, widely used by crypto projects to host and share open-source code.",
    syllables: ["git", "hub"],
    phonetics: "'git ˈhəb",
  },
  {
    term: "hands",
    partOfSpeech: "n.",
    definition:
      "Refers to an investor's resolve in holding assets; 'diamond hands' indicate strong conviction, while 'paper hands' imply a tendency to sell under pressure.",
    syllables: ["hands"],
    phonetics: "ˈhændz",
  },
  {
    term: "house-money",
    partOfSpeech: "n.",
    definition:
      "Funds viewed as less risky because they originate from trading profits rather than the investor's original capital.",
    syllables: ["house", "mon", "ey"],
    phonetics: "haʊz ˈmʌni",
  },
  {
    term: "memecoin",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency that gains popularity primarily through internet memes and community hype rather than through technological innovation or utility.",
    syllables: ["meme", "coin"],
    phonetics: "ˈmɪm ˌkɔɪn",
  },
  {
    term: "MEV",
    partOfSpeech: "n.",
    definition:
      "Stands for Maximum Extractable Value, referring to the potential profit miners or validators can extract by optimally ordering transactions in a block.",
    syllables: ["MEV"],
    phonetics: "ˈmev",
  },
  {
    term: "normie",
    partOfSpeech: "n.",
    definition:
      "A slang term for someone who is not deeply involved in crypto culture, often considered mainstream and lacking insider knowledge.",
    syllables: ["nor", "mie"],
    phonetics: "ˈnɔːrmi",
  },
  {
    term: "P",
    partOfSpeech: "n.",
    definition:
      "Slang for profit, representing the earnings or gains achieved through trading or investments.",
    syllables: ["P"],
    phonetics: "ˈpiː",
  },
  {
    term: "player",
    partOfSpeech: "n.",
    definition:
      "An active investor or trader in the crypto space, typically one who is engaged and experienced in market operations.",
    syllables: ["play", "er"],
    phonetics: "ˈpleɪr̩",
  },
  {
    term: "PVE",
    partOfSpeech: "n.",
    definition:
      "A term highlighting the dynamic between insiders and everyday investors (normies) in the crypto market, emphasizing disparities in access and strategy.",
    syllables: ["P", "V", "E"],
    phonetics: "ˈpiː ˈviː ˈiː",
  },
  {
    term: "PVP",
    partOfSpeech: "n.",
    definition:
      "Refers to competitive interactions among insiders in the crypto community, where experienced traders or stakeholders vie against one another.",
    syllables: ["P", "V", "P"],
    phonetics: "ˈpiː ˈviː ˈpiː",
  },
  {
    term: "TRADFI",
    partOfSpeech: "n.",
    definition:
      "An abbreviation for Traditional Finance, denoting conventional financial systems and institutions as contrasted with decentralized or crypto-based alternatives.",
    syllables: ["TRAD", "FI"],
    phonetics: "træd ˈfaɪ ",
  },
  {
    term: "trench",
    partOfSpeech: "n.",
    definition:
      "A slang term describing the tough, competitive environment of the crypto market, where traders face intense challenges and pressure.",
    syllables: ["trench"],
    phonetics: "ˈtrentʃ",
  },
  {
    term: "build",
    partOfSpeech: "v.",
    definition:
      "To develop or create a project, product, or platform within the crypto space, often involving technical development and community engagement.",
    syllables: ["build"],
    phonetics: "ˈbɪld",
  },
  {
    term: "call",
    partOfSpeech: "v.",
    definition:
      "To decide or signal the purchase of an asset, often based on analysis or intuition, essentially making an investment move.",
    syllables: ["call"],
    phonetics: "ˈkɒl",
  },
  {
    term: "redepot",
    partOfSpeech: "v.",
    definition:
      "To re-enter the market or rebuild one's trading portfolio after incurring significant losses, effectively starting fresh with new capital.",
    syllables: ["re", "de", "pot"],
    phonetics: "ˌri: ˈdepoʊ",
  },
  {
    term: "round-trip",
    partOfSpeech: "v.",
    definition:
      "Describes the complete cycle of an investment from entry to exit, often marked by dramatic price fluctuations and emotional highs and lows.",
    syllables: ["round", "trip"],
    phonetics: "raʊnd ˈtrɪp",
  },
  {
    term: "rug-pull",
    partOfSpeech: "v.",
    definition:
      "To abruptly withdraw liquidity or abandon a project, effectively scamming investors by leaving them with valueless tokens.",
    syllables: ["rug", "pull"],
    phonetics: "ˈrəɡ ˈpʊl",
  },
  {
    term: "sideline",
    partOfSpeech: "v.",
    definition:
      "To temporarily withdraw or refrain from active participation in the market, often due to uncertainty or risk aversion.",
    syllables: ["side", "line"],
    phonetics: "ˈsaɪdˌlaɪn",
  },
  {
    term: "motion",
    partOfSpeech: "adj.",
    definition:
      "Describes a trader whose actions create momentum in the market, influencing others to copy their trades due to perceived expertise.",
    syllables: ["mo", "tion"],
    phonetics: "ˈmoʊʃn̩",
  },
  {
    term: "sandwich",
    partOfSpeech: "n.",
    definition:
      "A MEV (Maximal Extractable Value) strategy where a target transaction is placed between two attacker transactions to exploit price changes.",
    syllables: ["sand", "wich"],
    phonetics: "ˈsænwɪdʒ",
  },
  {
    term: "depeg",
    partOfSpeech: "n.",
    definition:
      "When a stablecoin loses its 1:1 parity with the underlying asset (typically USD), trading significantly above or below its intended peg.",
    syllables: ["de", "peg"],
    phonetics: "ˈdipeɡ",
  },
  {
    term: "bull",
    partOfSpeech: "n.",
    definition:
      "A market participant who believes prices will rise, often driving upward momentum through optimistic buying behavior.",
    syllables: ["bull"],
    phonetics: "ˈbʊl",
  },
  {
    term: "bear",
    partOfSpeech: "n.",
    definition:
      "A market participant expecting price declines, typically selling assets or shorting to profit from downward movements.",
    syllables: ["bear"],
    phonetics: "ˈber",
  },
  {
    term: "short",
    partOfSpeech: "v.",
    definition:
      "To bet against an asset by borrowing and selling it, hoping to repurchase later at a lower price and profit from the difference.",
    syllables: ["short"],
    phonetics: "ˈʃɔːrt",
  },
  {
    term: "long",
    partOfSpeech: "v.",
    definition:
      "To hold an asset with the expectation of price appreciation over time, or to take a leveraged position betting on upward movement.",
    syllables: ["long"],
    phonetics: "ˈlɔːŋ",
  },
  {
    term: "10x",
    partOfSpeech: "v.",
    definition:
      "To achieve tenfold returns on an investment. Also used as a target for exponential growth potential in crypto projects.",
    syllables: ["10", "x"],
    phonetics: "ˈten ˈeks",
  },
  {
    term: "multi-sig",
    partOfSpeech: "n.",
    definition:
      "Short for multi-signature; a security protocol requiring multiple cryptographic signatures to authorize a blockchain transaction.",
    syllables: ["mul", "ti", "sig"],
    phonetics: "ˈmʌlti ˈsɪɡ",
  },
  {
    term: "validator",
    partOfSpeech: "n.",
    definition:
      "A network node responsible for verifying transactions and participating in consensus mechanisms in proof-of-stake blockchain systems.",
    syllables: ["val", "i", "da", "tor"],
    phonetics: "ˈvælədetɔːr",
  },
  {
    term: "miner",
    partOfSpeech: "n.",
    definition:
      "A participant in a proof-of-work blockchain network who validates transactions and creates new blocks through computational work.",
    syllables: ["min", "er"],
    phonetics: "ˈmaɪnər",
  },
  {
    term: "block",
    partOfSpeech: "n.",
    definition:
      "A data structure containing a batch of validated transactions that is permanently recorded on a blockchain.",
    syllables: ["block"],
    phonetics: "ˈblɑːk",
  },
  {
    term: "cold-wallet",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency storage method where private keys are kept offline for enhanced security against hacking attempts.",
    syllables: ["cold", "wal", "let"],
    phonetics: "ˈkoʊld ˈwɒlət",
  },
  {
    term: "hot-wallet",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency wallet connected to the internet, enabling convenient but less secure access to digital assets.",
    syllables: ["hot", "wal", "let"],
    phonetics: "ˈhɒtˈwɒlət",
  },
  {
    term: "private-key",
    partOfSpeech: "n.",
    definition:
      "A secret cryptographic code that allows access to specific blockchain assets and must be kept secure by the owner.",
    syllables: ["pri", "vate", "key"],
    phonetics: "ˈpraɪvətˈkiː ",
  },
  {
    term: "public-key",
    partOfSpeech: "n.",
    definition:
      "A cryptographic code paired with a private-key, publicly shared to receive cryptocurrency transactions.",
    syllables: ["pub", "lic", "key"],
    phonetics: "ˈpraɪvətˈkiː ",
  },
  {
    term: "sign",
    partOfSpeech: "v.",
    definition:
      "The cryptographic process of authorizing a blockchain transaction using a private key to create a digital signature.",
    syllables: ["sign"],
    phonetics: "ˈsaɪn",
  },
  {
    term: "mixer",
    partOfSpeech: "n.",
    definition:
      "A service that obscures the origin of cryptocurrency transactions by combining multiple transactions together.",
    syllables: ["mix", "er"],
    phonetics: "ˈmɪksər",
  },
  {
    term: "KYC",
    partOfSpeech: "n.",
    definition:
      "Acronym for 'Know Your Customer'; identity verification procedures used by financial institutions to prevent fraud.",
    syllables: ["K", "Y", "C"],
    phonetics: "ˈkeɪ ˈwaɪ ˈsiː",
  },
  {
    term: "extract",
    partOfSpeech: "v.",
    definition:
      "The process of converting or redeeming value from a digital token, typically through exchanges, smart contracts, or decentralized applications.",
    syllables: ["ex", "tract"],
    phonetics: "ɪkˈstrækt",
  },
]

// Set "new" terms (adjust this list as needed)
export const newTerms = ["clip", "stable", "PVP", "PVE"]
