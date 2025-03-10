export interface Term {
  readonly term: string
  readonly definition: string
  readonly partOfSpeech: string
  readonly syllables: string[]
  readonly phonetics: string // General American (GA) generated using http:www.photransedit.com/online/text2phonetics.aspx
  readonly usageInASentence: string
}

export const terms: Term[] = [
  {
    term: "adoption",
    partOfSpeech: "n.",
    definition:
      "The process of cryptocurrencies or blockchain technology becoming more widely accepted and used in mainstream applications and society.",
    syllables: ["a", "dopt", "ion"],
    phonetics: "əˈdɑːpʃn̩",
    usageInASentence:
      "The adoption of Bitcoin by major corporations has significantly increased its mainstream acceptance.",
  },
  {
    term: "airdrop",
    partOfSpeech: "n.",
    definition:
      "A distribution of free tokens or coins to a community, often used as a marketing strategy to increase awareness and adoption of a new cryptocurrency project.",
    syllables: ["air", "drop"],
    phonetics: "ˈerdrap",
    usageInASentence:
      "The new blockchain project announced an airdrop to reward early supporters with free tokens.",
  },
  {
    term: "alpha",
    partOfSpeech: "n.",
    definition:
      "Insider or early information about a cryptocurrency project that could lead to profitable trading opportunities.",
    syllables: ["al", "pha"],
    phonetics: "ˈælfə",
    usageInASentence:
      "Traders with alpha on the upcoming token launch were able to buy in at a lower price.",
  },
  {
    term: "altcoin",
    partOfSpeech: "n.",
    definition: "Any cryptocurrency that is not Bitcoin. Short for 'alternative coin'.",
    syllables: ["alt", "coin"],
    phonetics: "ˈɑːlt ˌkɔɪn",
    usageInASentence:
      "Ethereum is considered the most popular altcoin in the cryptocurrency market.",
  },
  {
    term: "ape",
    partOfSpeech: "v.",
    definition:
      "The act of investing in a cryptocurrency or project with little to no prior research, often due to FOMO or hype.",
    syllables: ["ape"],
    phonetics: "ˈeɪp",
    usageInASentence:
      "Many new investors ape into trending memecoins without understanding the risks.",
  },
  {
    term: "ATH",
    partOfSpeech: "n.",
    definition:
      "All-Time High. The highest price a cryptocurrency has ever reached since its launch.",
    syllables: ["A", "T", "H"],
    phonetics: "ə ˈti: ˈeɪtʃ",
    usageInASentence:
      "Bitcoin reached its ATH of $100,000, sparking excitement among crypto enthusiasts.",
  },
  {
    term: "attention",
    partOfSpeech: "n.",
    definition:
      "Increased interest or focus on a particular token or project, often leading to price movements.",
    syllables: ["at", "ten", "tion"],
    phonetics: "əˈtenʃn̩",
    usageInASentence:
      "The memecoin gained significant attention on social media, driving its price up rapidly.",
  },
  {
    term: "bag",
    partOfSpeech: "n.",
    definition:
      "A significant holding of a particular cryptocurrency. Can be used positively ('nice bag') or negatively ('heavy bag') depending on the investment's performance.",
    syllables: ["bag"],
    phonetics: "ˈbæɡ",
    usageInASentence:
      "After the price drop, he was left holding a heavy bag of underperforming tokens.",
  },
  {
    term: "beta",
    partOfSpeech: "n.",
    definition:
      "A secondary token or imitative project that follows the narrative of an original meme or concept. Example: Shiba Inu as a 'beta play' of Dogecoin.",
    syllables: ["be", "ta"],
    phonetics: "beɪtə",
    usageInASentence:
      "Investors looking for the next big memecoin often target beta projects like Shiba Inu.",
  },
  {
    term: "bid",
    partOfSpeech: "v.",
    definition:
      "The act of placing buy orders for a cryptocurrency, often used in the context of supporting a token's price or participating in a token sale.",
    syllables: ["bid"],
    phonetics: "ˈbɪd ",
    usageInASentence:
      "Traders bid aggressively to secure tokens during the project's initial sale.",
  },
  {
    term: "blast",
    partOfSpeech: "v.",
    definition:
      "A rapid increase in a token's price, similar to 'mooning' but often implying a more aggressive or manipulated price movement.",
    syllables: ["blast"],
    phonetics: "ˈblæst",
    usageInASentence: "The token blasted to new highs after a coordinated pump by influencers.",
  },
  {
    term: "bleed",
    partOfSpeech: "v.",
    definition:
      "A continuous, gradual decrease in a cryptocurrency's price over time, often used to describe a bear market or a failing project.",
    syllables: ["bleed"],
    phonetics: "ˈbliːd",
    usageInASentence: "The altcoin continued to bleed value as investor interest waned.",
  },
  {
    term: "bond",
    partOfSpeech: "v.",
    definition:
      "The active process of a token transitioning from its initial distribution phase to being available on a decentralized exchange.",
    syllables: ["bond"],
    phonetics: "ˈbɑːnd",
    usageInASentence:
      "Investors eagerly waited to bond their tokens on the new decentralized exchange.",
  },
  {
    term: "bot",
    partOfSpeech: "n.",
    definition:
      "An automated program that executes trades or performs other actions in cryptocurrency markets.",
    syllables: ["bot"],
    phonetics: "bɑːt",
    usageInASentence:
      "The trader used a bot to automatically buy tokens at the lowest price points.",
  },
  {
    term: "bottom",
    partOfSpeech: "n.",
    definition:
      "The lowest price point in a cryptocurrency's downward trend, often used when speculating on whether a price decline has ended.",
    syllables: ["bot", "tom"],
    phonetics: "ˈbɑːtəm",
    usageInASentence: "Many investors believed the token had hit its bottom and started buying in.",
  },
  {
    term: "bridge",
    partOfSpeech: "v.",
    definition: "To transfer cryptocurrency assets between different blockchain networks.",
    syllables: ["bridge"],
    phonetics: "ˈbrɪdʒ",
    usageInASentence:
      "She used a cross-chain protocol to bridge her tokens from Ethereum to Binance Smart Chain.",
  },
  {
    term: "burn",
    partOfSpeech: "v.",
    definition:
      "To permanently remove tokens from circulation by sending them to an inaccessible wallet address.",
    syllables: ["burn"],
    phonetics: "ˈbɝːn",
    usageInASentence: "The project decided to burn 10% of its token supply to increase scarcity.",
  },
  {
    term: "buy",
    partOfSpeech: "v.",
    definition: "To acquire cryptocurrency using fiat currency or other cryptocurrencies.",
    syllables: ["buy"],
    phonetics: "ˈbaɪ",
    usageInASentence: "He decided to buy Ethereum when its price dipped below $2,000.",
  },
  {
    term: "CA",
    partOfSpeech: "n.",
    definition:
      "Contract Address. The unique identifier for a smart contract on the blockchain, often used to verify or interact with a specific token or project.",
    syllables: ["C", "A"],
    phonetics: "ˈsiː eɪ",
    usageInASentence: "Always verify the CA before interacting with a new token to avoid scams.",
  },
  {
    term: "chart",
    partOfSpeech: "n.",
    definition: "A visual representation of price movements and trading activity over time.",
    syllables: ["chart"],
    phonetics: "ˈtʃɑːrt",
    usageInASentence:
      "The trader analyzed the chart to identify potential support and resistance levels.",
  },
  {
    term: "clip",
    partOfSpeech: "v.",
    definition:
      "Taking small, quick profits from price movements, often in newly launched tokens or during initial DEX offerings (IDOs).",
    syllables: ["clip"],
    phonetics: "ˈklɪp",
    usageInASentence:
      "He managed to clip a 20% profit by selling his tokens shortly after the IDO.",
  },
  {
    term: "comms",
    partOfSpeech: "n.",
    definition:
      "Short for 'communications'. Often used in crypto communities to request project updates or news from the development team.",
    syllables: ["comms"],
    phonetics: "ˈkɑːmz",
    usageInASentence: "The community demanded better comms from the team after weeks of silence.",
  },
  {
    term: "smart-contract",
    partOfSpeech: "n.",
    definition:
      "Self-executing code deployed on a blockchain that automatically enforces agreement terms when predetermined conditions are met.",
    syllables: ["smart", "con", "tract"],
    phonetics: "ˈsmɑːrtˈkɑːnˌtrækt",
    usageInASentence:
      "The decentralized app uses a smart-contract to automatically distribute rewards to users.",
  },
  {
    term: "cope",
    partOfSpeech: "v.",
    definition:
      "The act of convincing oneself that a failing investment will eventually turn around. Often used to describe irrational justifications for holding onto losing positions.",
    syllables: ["cope"],
    phonetics: "koʊp",
    usageInASentence:
      "Despite the token’s 90% drop, he continued to cope by insisting it would recover soon.",
  },
  {
    term: "crash",
    partOfSpeech: "n.",
    definition:
      "A sudden and severe drop in price, more dramatic than a dip or correction. Often accompanied by panic selling.",
    syllables: ["crash"],
    phonetics: "ˈkræʃ",
    usageInASentence: "The market experienced a crash, wiping out billions in value within hours.",
  },
  {
    term: "CT",
    partOfSpeech: "n.",
    definition:
      "Crypto Twitter. The community of cryptocurrency enthusiasts, traders, and influencers on Twitter who discuss crypto-related topics.",
    syllables: ["C", "T"],
    phonetics: "ˈsiː ˈti",
    usageInASentence: "CT was buzzing with speculation about the upcoming Bitcoin halving event.",
  },
  {
    term: "dev",
    partOfSpeech: "n.",
    definition:
      "Short for developer. Refers to the programmers and technical team members working on a cryptocurrency project.",
    syllables: ["dev"],
    phonetics: "ˈdev",
    usageInASentence:
      "The dev team promised to release a major update to improve the blockchain’s scalability.",
  },
  {
    term: "domain",
    partOfSpeech: "n.",
    definition: "A web address associated with a cryptocurrency project or platform.",
    syllables: ["do", "main"],
    phonetics: "doʊˈmeɪn",
    usageInASentence:
      "Always check the domain of a crypto project to ensure it’s not a phishing scam.",
  },
  {
    term: "drain",
    partOfSpeech: "v.",
    definition:
      "The unauthorized removal of funds from a wallet or smart contract, often through exploits or hacks.",
    syllables: ["drain"],
    phonetics: "ˈdreɪn",
    usageInASentence:
      "Hackers used a vulnerability to drain millions of dollars from the protocol’s liquidity pool.",
  },
  {
    term: "dump",
    partOfSpeech: "v.",
    definition:
      "To sell large amounts of a cryptocurrency quickly, often causing the price to drop significantly.",
    syllables: ["dump"],
    phonetics: "ˈdəmp",
    usageInASentence:
      "Whales decided to dump their holdings, causing a sharp decline in the token’s price.",
  },
  {
    term: "dust",
    partOfSpeech: "n.",
    definition:
      "Tiny amounts of cryptocurrency left in a wallet, often too small to be worth transferring due to transaction fees.",
    syllables: ["dust"],
    phonetics: "ˈdəst",
    usageInASentence:
      "After trading, she was left with dust in her wallet that wasn’t worth moving.",
  },
  {
    term: "DYOR",
    partOfSpeech: "v.",
    definition:
      "Do Your Own Research. A common phrase encouraging investors to investigate and understand a project before investing.",
    syllables: ["D", "Y", "O", "R"],
    phonetics: "ˈdi: ˈwaɪ ˈoʊ ˈɑːr",
    usageInASentence:
      "Before investing in the new token, he reminded himself to DYOR to avoid potential scams.",
  },
  {
    term: "entry",
    partOfSpeech: "n.",
    definition: "The price point at which an investor buys into a cryptocurrency or token.",
    syllables: ["en", "try"],
    phonetics: "'entri",
    usageInASentence:
      "Her entry into Bitcoin at $30,000 proved to be a profitable decision as the price soared.",
  },
  {
    term: "fade",
    partOfSpeech: "v.",
    definition:
      "To take a trading position opposite to the prevailing market sentiment or a popular trade.",
    syllables: ["fade"],
    phonetics: "ˈfeɪd",
    usageInASentence:
      "Experienced traders often fade the hype by selling when everyone else is buying.",
  },
  {
    term: "fee",
    partOfSpeech: "n.",
    definition:
      "The cost associated with making transactions or interacting with smart contracts on a blockchain network.",
    syllables: ["fee"],
    phonetics: "ˈfiː",
    usageInASentence:
      "High Ethereum gas fees made it expensive to execute transactions during the network congestion.",
  },
  {
    term: "fill",
    partOfSpeech: "n.",
    definition: "When a buy or sell order is completed at a specific price.",
    syllables: ["fill"],
    phonetics: "ˈfɪl",
    usageInASentence:
      "His buy order got a fill at the exact price he wanted, securing a good deal.",
  },
  {
    term: "flip",
    partOfSpeech: "v.",
    definition:
      "To buy and sell quickly for a profit, or when one cryptocurrency's market cap surpasses another's.",
    syllables: ["flip"],
    phonetics: "ˈflɪp",
    usageInASentence: "She managed to flip her tokens for a 50% profit within hours of the launch.",
  },
  {
    term: "flood",
    partOfSpeech: "v.",
    definition:
      "To overwhelm a chat or social media platform with messages about a particular cryptocurrency.",
    syllables: ["flood"],
    phonetics: "ˈfləd",
    usageInASentence: "Shillers flooded the Telegram group with messages hyping up the new token.",
  },
  {
    term: "floor",
    partOfSpeech: "n.",
    definition: "The lowest price level at which a cryptocurrency typically finds buying support.",
    syllables: ["floor"],
    phonetics: "ˈflɔːr",
    usageInASentence:
      "The token’s price stabilized at the floor, indicating strong buying interest.",
  },
  {
    term: "fly",
    partOfSpeech: "v.",
    definition:
      "When a cryptocurrency's price increases rapidly. Similar to 'moon' but often used for shorter-term price movements.",
    syllables: ["fly"],
    phonetics: "ˈflaɪ",
    usageInASentence: "The memecoin started to fly after a celebrity tweeted about it.",
  },
  {
    term: "FOMO",
    partOfSpeech: "n.",
    definition:
      "Fear Of Missing Out. The anxiety that an investor might miss out on a potentially profitable investment opportunity.",
    syllables: ["FO", "MO"],
    phonetics: "ˌefˈoʊ ˈmoʊ",
    usageInASentence:
      "FOMO drove many investors to buy the token at its peak, only to see it crash later.",
  },
  {
    term: "foundation",
    partOfSpeech: "n.",
    definition:
      "An organization that oversees the development and promotion of a cryptocurrency project.",
    syllables: ["foun", "da", "tion"],
    phonetics: "faʊnˈdeɪʃn̩",
    usageInASentence:
      "The Ethereum Foundation plays a crucial role in funding and guiding the blockchain’s development.",
  },
  {
    term: "FUD",
    partOfSpeech: "n.",
    definition:
      "Fear, Uncertainty, and Doubt. Often used to describe negative or misleading information spread in the crypto market.",
    syllables: ["FUD"],
    phonetics: "'fud",
    usageInASentence:
      "The negative article about the project was dismissed as FUD by its supporters.",
  },
  {
    term: "gas",
    partOfSpeech: "n.",
    definition:
      "The fee required to successfully conduct a transaction or execute a smart contract on blockchain networks.",
    syllables: ["gas"],
    phonetics: "ˈɡæs",
    usageInASentence: "She paid a high gas fee to ensure her transaction was processed quickly.",
  },
  {
    term: "generational",
    partOfSpeech: "adj.",
    definition:
      "Relating to or affecting several generations. When used in the context of generational wealth, it refers to wealth substantial enough to benefit not only the current generation but also future generations, creating long-lasting financial stability or legacy.",
    syllables: ["gen", "er", "a", "tion", "al"],
    phonetics: "ˌdʒenəˈreɪʃn̩əl",
    usageInASentence:
      "Investing wisely in cryptocurrencies could lead to generational wealth for his family.",
  },
  {
    term: "GM",
    partOfSpeech: "interj.",
    definition:
      "Originally meaning 'good morning', evolved to also mean 'Gonna Make it'. Used as both a greeting and an expression of confidence.",
    syllables: ["G", "M"],
    phonetics: "ˈdʒi: ˈem",
    usageInASentence:
      "He started his day with a cheerful 'GM' on Crypto Twitter, expressing optimism about the market.",
  },
  {
    term: "HODL",
    partOfSpeech: "v.",
    definition:
      "Hold On for Dear Life. A strategy of keeping cryptocurrency long-term, regardless of market fluctuations.",
    syllables: ["HO", "DL"],
    phonetics: "ˈhoʊ ˈdel",
    usageInASentence:
      "Despite the market crash, she decided to HODL her Bitcoin for the long term.",
  },
  {
    term: "hopium",
    partOfSpeech: "n.",
    definition:
      "A blend of 'hope' and 'opium'. Refers to irrational optimism about a coin's potential value increase.",
    syllables: ["hop", "i", "um"],
    phonetics: "hoʊpɪəm",
    usageInASentence:
      "Investors were high on hopium, believing the failing token would soon skyrocket.",
  },
  {
    term: "jeet",
    partOfSpeech: "n.",
    definition:
      "Refers to traders who quickly sell their positions, often at the first sign of profit.",
    syllables: ["jeet"],
    phonetics: "ˈdʒiːt",
    usageInASentence:
      "The jeet sold his tokens as soon as the price rose by 10%, missing out on further gains.",
  },
  {
    term: "kill",
    partOfSpeech: "v.",
    definition: "To cause a severe drop in a token's price, often through large sell-offs.",
    syllables: ["kill"],
    phonetics: "ˈkɪl",
    usageInASentence: "The whale’s massive sell order killed the token’s price momentum.",
  },
  {
    term: "KOL",
    partOfSpeech: "n.",
    definition:
      "Key Opinion Leader. Influential individuals whose opinions can significantly impact market trends.",
    syllables: ["K", "O", "L"],
    phonetics: "ˈkol",
    usageInASentence:
      "The KOL’s endorsement of the new project caused a surge in investor interest.",
  },
  {
    term: "LARP",
    partOfSpeech: "v.",
    definition:
      "Live Action Role Playing. Refers to individuals or projects pretending to be something they're not.",
    syllables: ["LARP"],
    phonetics: "ˈlɑːrp",
    usageInASentence:
      "The team was accused of LARPing as experienced developers to attract investors.",
  },
  {
    term: "launch",
    partOfSpeech: "v.",
    definition: "The initial release of a new cryptocurrency or token to the public.",
    syllables: ["launch"],
    phonetics: "ˈlɒntʃ",
    usageInASentence:
      "The project’s launch was delayed due to technical issues with the smart contract.",
  },
  {
    term: "layer",
    partOfSpeech: "n.",
    definition:
      "Refers to different levels of blockchain architecture, such as Layer 1 (base chains) and Layer 2 (scaling solutions).",
    syllables: ["lay", "er"],
    phonetics: "ˈleɪər",
    usageInASentence:
      "Ethereum’s Layer 2 solutions help reduce transaction costs and improve scalability.",
  },
  {
    term: "ledger",
    partOfSpeech: "n.",
    definition:
      "A hardware wallet for storing cryptocurrencies offline, or the record of all transactions on a blockchain.",
    syllables: ["led", "ger"],
    phonetics: "ˈledʒər",
    usageInASentence: "He stored his Bitcoin on a Ledger to keep it safe from online hacks.",
  },
  {
    term: "liquidate",
    partOfSpeech: "v.",
    definition: "To forcibly close a leveraged trading position due to insufficient funds.",
    syllables: ["liq", "ui", "date"],
    phonetics: "ˈlɪkwəˌdet",
    usageInASentence: "His leveraged position was liquidated when the market turned against him.",
  },
  {
    term: "lock",
    partOfSpeech: "v.",
    definition:
      "To restrict access to tokens for a specific period, often used in vesting schedules.",
    syllables: ["lock"],
    phonetics: "ˈlɑːk",
    usageInASentence:
      "The team decided to lock their tokens for a year to build investor confidence.",
  },
  {
    term: "lore",
    partOfSpeech: "n.",
    definition:
      "The backstory, history, or accumulated knowledge about a particular cryptocurrency project.",
    syllables: ["lore"],
    phonetics: "ˈlɔːr",
    usageInASentence:
      "The project’s lore, filled with memes and community stories, attracted a loyal following.",
  },
  {
    term: "LP",
    partOfSpeech: "n.",
    definition:
      "Liquidity Pool. A collection of funds locked in a smart contract that enables trading on decentralized exchanges.",
    syllables: ["L", "P"],
    phonetics: "ˈel ˈpiː",
    usageInASentence: "She added her tokens to the LP to earn rewards from trading fees.",
  },
  {
    term: "market",
    partOfSpeech: "n.",
    definition: "The overall cryptocurrency trading environment or a specific trading pair.",
    syllables: ["mar", "ket"],
    phonetics: "ˈmɑːrkət",
    usageInASentence: "The crypto market experienced a surge in volatility due to regulatory news.",
  },
  {
    term: "MCAP",
    partOfSpeech: "n.",
    definition:
      "Market Capitalization. The total value of a cryptocurrency, calculated by multiplying price by circulating supply.",
    syllables: ["M", "CAP"],
    phonetics: "ˈem ˈkæp",
    usageInASentence:
      "Bitcoin’s MCAP surpassed $1 trillion, making it the largest cryptocurrency by value.",
  },
  {
    term: "meta",
    partOfSpeech: "n.",
    definition: "The current trends or strategies considered most effective in the crypto market.",
    syllables: ["me", "ta"],
    phonetics: "ˈmiːtə",
    usageInASentence: "Investing in memecoins was considered the meta during the 2024 bull run.",
  },
  {
    term: "mid",
    partOfSpeech: "adj.",
    definition:
      "Short for 'mediocre'. Used to describe a cryptocurrency or project that is considered average or unremarkable.",
    syllables: ["mid"],
    phonetics: "mɪd",
    usageInASentence:
      "The project’s features were deemed mid, failing to stand out in a crowded market.",
  },
  {
    term: "migrate",
    partOfSpeech: "v.",
    definition:
      "The process of moving tokens or contracts from one blockchain or platform to another.",
    syllables: ["mi", "grate"],
    phonetics: "ˈmaɪˌɡret ",
    usageInASentence:
      "The project announced plans to migrate its tokens to a faster blockchain network.",
  },
  {
    term: "moon",
    partOfSpeech: "v.",
    definition: "When a cryptocurrency's price rises dramatically in a short period.",
    syllables: ["moon"],
    phonetics: "ˈmuːn",
    usageInASentence:
      "Investors hoped the new token would moon after its listing on a major exchange.",
  },
  {
    term: "nuke",
    partOfSpeech: "v.",
    definition: "A rapid and significant drop in a token's price, often due to large sell orders.",
    syllables: ["nuke"],
    phonetics: "ˈnuːk",
    usageInASentence: "The token’s price was nuked when a whale sold off their entire position.",
  },
  {
    term: "OG",
    partOfSpeech: "n.",
    definition:
      "Original Gangster. Refers to early adopters or long-time participants in the cryptocurrency space.",
    syllables: ["O", "G"],
    phonetics: "ˈoʊ ˈdʒiː",
    usageInASentence: "The OG Bitcoin holders from 2010 are now sitting on massive profits.",
  },
  {
    term: "paper",
    partOfSpeech: "adj.",
    definition: "Describing traders who sell quickly at the first sign of trouble or small profit.",
    syllables: ["pa", "per"],
    phonetics: "ˈpeɪpər",
    usageInASentence: "Paper hands sold their tokens as soon as the price dropped by 5%.",
  },
  {
    term: "pay",
    partOfSpeech: "v.",
    definition: "When an investment provides good returns or 'pays out' well.",
    syllables: ["pay"],
    phonetics: "ˈpeɪ",
    usageInASentence: "Her investment in the new token finally paid off with a 300% return.",
  },
  {
    term: "pick",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency chosen for investment, often based on analysis or recommendation.",
    syllables: ["pick"],
    phonetics: "ˈpɪk",
    usageInASentence:
      "Ethereum was his top pick for long-term investment due to its strong fundamentals.",
  },
  {
    term: "play",
    partOfSpeech: "n.",
    definition: "A specific investment strategy or opportunity in the cryptocurrency market.",
    syllables: ["play"],
    phonetics: "pleɪ",
    usageInASentence:
      "Investing in Layer 2 solutions was considered a smart play during the Ethereum upgrade.",
  },
  {
    term: "PNL",
    partOfSpeech: "n.",
    definition:
      "Profit and Loss. The financial performance of a trade or investment over a specific period.",
    syllables: ["P", "N", "L"],
    phonetics: "ˈpiː ˈen ˈel",
    usageInASentence: "His PNL improved significantly after selling his tokens at the market peak.",
  },
  {
    term: "port",
    partOfSpeech: "n.",
    definition:
      "Short for portfolio. The collection of cryptocurrency investments held by an individual.",
    syllables: ["port"],
    phonetics: "ˈpɔːrt",
    usageInASentence: "She diversified her port by adding several promising altcoins.",
  },
  {
    term: "presale",
    partOfSpeech: "n.",
    definition: "A token sale that occurs before the official public launch.",
    syllables: ["pre", "sale"],
    phonetics: "pri: ˈseɪl",
    usageInASentence: "Early investors got a discount by participating in the token’s presale.",
  },
  {
    term: "print",
    partOfSpeech: "v.",
    definition: "When a cryptocurrency investment is generating significant profits consistently.",
    syllables: ["print"],
    phonetics: "ˈprɪnt",
    usageInASentence: "His investment in the memecoin was printing money as the price soared.",
  },
  {
    term: "priority",
    partOfSpeech: "n.",
    definition: "Higher gas fees paid to ensure faster transaction processing.",
    syllables: ["pri", "or", "i", "ty"],
    phonetics: "praˈjɔːrəti",
    usageInASentence:
      "She paid a priority fee to ensure her transaction was included in the next block.",
  },
  {
    term: "pump",
    partOfSpeech: "v.",
    definition: "A rapid increase in price, often due to coordinated buying or positive news.",
    syllables: ["pump"],
    phonetics: "ˈpəmp",
    usageInASentence: "The token pumped 200% after being listed on a major exchange.",
  },
  {
    term: "reset",
    partOfSpeech: "v.",
    definition:
      "A significant price correction that brings a token's value back to a previous level.",
    syllables: ["re", "set"],
    phonetics: "riˈset",
    usageInASentence: "The token’s price reset to its pre-pump value after the hype died down.",
  },
  {
    term: "revive",
    partOfSpeech: "v.",
    definition: "When a seemingly dead project shows signs of life and renewed activity.",
    syllables: ["re", "vive"],
    phonetics: "rɪˈvaɪv",
    usageInASentence:
      "The project was revived by a new team of developers who brought fresh ideas.",
  },
  {
    term: "rigged",
    partOfSpeech: "adj.",
    definition: "Describing a market or trading situation believed to be manipulated.",
    syllables: ["rigged"],
    phonetics: "ˈrɪɡd",
    usageInASentence: "Some traders believed the token launch was rigged to favor insiders.",
  },
  {
    term: "rip",
    partOfSpeech: "v.",
    definition: "Describes aggressive price movement, either upward or downward.",
    syllables: ["rip"],
    phonetics: "ˈrɪp",
    usageInASentence: "The token ripped upward after a major partnership announcement.",
  },
  {
    term: "rug",
    partOfSpeech: "n.",
    definition:
      "Short for 'rug pull', when developers abandon a project and take investors' funds.",
    syllables: ["rug"],
    phonetics: "ˈrəɡ",
    usageInASentence:
      "Investors were devastated after the project turned out to be a rug, with the team disappearing overnight.",
  },
  {
    term: "run",
    partOfSpeech: "v.",
    definition: "A sustained period of price increase or positive momentum.",
    syllables: ["run"],
    phonetics: "ˈrən",
    usageInASentence: "The token enjoyed a strong run, gaining 500% over two months.",
  },
  {
    term: "scan",
    partOfSpeech: "v.",
    definition: "To examine blockchain transactions or monitor market activity for opportunities.",
    syllables: ["scan"],
    phonetics: "ˈskæn",
    usageInASentence: "He used a tool to scan the blockchain for unusual whale activity.",
  },
  {
    term: "scanner",
    partOfSpeech: "n.",
    definition: "A tool used to monitor blockchain transactions and token movements.",
    syllables: ["scan", "ner"],
    phonetics: "ˈskænər",
    usageInASentence:
      "The trader relied on a scanner to track new token launches on decentralized exchanges.",
  },
  {
    term: "sell",
    partOfSpeech: "v.",
    definition: "To exchange cryptocurrency for fiat currency or other cryptocurrencies.",
    syllables: ["sell"],
    phonetics: "ˈsel",
    usageInASentence:
      "She decided to sell her Bitcoin holdings to lock in profits before a potential dip.",
  },
  {
    term: "send",
    partOfSpeech: "v.",
    definition:
      "To transfer cryptocurrency from one wallet to another, or express enthusiasm about a project.",
    syllables: ["send"],
    phonetics: "ˈsend",
    usageInASentence: "He sent 1 ETH to his friend’s wallet as a birthday gift.",
  },
  {
    term: "shill",
    partOfSpeech: "v.",
    definition: "To promote a cryptocurrency project, often aggressively or with bias.",
    syllables: ["shill"],
    phonetics: "ˈʃɪl",
    usageInASentence:
      "The influencer was accused of shilling a low-quality token for personal gain.",
  },
  {
    term: "shitcoin",
    partOfSpeech: "n.",
    definition:
      "A derogatory term for cryptocurrencies perceived to have little to no value or purpose.",
    syllables: ["shit", "coin"],
    phonetics: "ˈʃiːt ˌkɔɪn",
    usageInASentence: "Many dismissed the new token as just another shitcoin with no real utility.",
  },
  {
    term: "signal",
    partOfSpeech: "n.",
    definition: "An indicator suggesting a potential trading opportunity.",
    syllables: ["sig", "nal"],
    phonetics: "ˈsɪɡnəl",
    usageInASentence: "The moving average crossover was a strong signal to buy the token.",
  },
  {
    term: "sink",
    partOfSpeech: "v.",
    definition: "When a cryptocurrency's price drops significantly.",
    syllables: ["sink"],
    phonetics: "ˈsɪŋk",
    usageInASentence: "The token began to sink after negative news about the project surfaced.",
  },
  {
    term: "sit",
    partOfSpeech: "v.",
    definition:
      "To hold a position without taking action, often during uncertain market conditions.",
    syllables: ["sit"],
    phonetics: "ˈsɪt",
    usageInASentence: "He decided to sit on his tokens until the market stabilized.",
  },
  {
    term: "sleep",
    partOfSpeech: "v.",
    definition: "To miss or ignore a potentially profitable opportunity.",
    syllables: ["sleep"],
    phonetics: "sˈliːp",
    usageInASentence: "He slept on the token’s presale and missed out on massive gains.",
  },
  {
    term: "slippage",
    partOfSpeech: "n.",
    definition: "The difference between expected and actual price execution in a trade.",
    syllables: ["slip", "page"],
    phonetics: "sˈlɪpɪdʒ",
    usageInASentence:
      "High slippage during the token launch caused traders to pay more than expected.",
  },
  {
    term: "slow",
    partOfSpeech: "adj.",
    definition: "Describing gradual price movement or network transaction speeds.",
    syllables: ["slow"],
    phonetics: "sˈloʊ",
    usageInASentence:
      "The slow transaction speeds on the network frustrated users during peak times.",
  },
  {
    term: "snipe",
    partOfSpeech: "v.",
    definition: "To quickly buy a token right at launch or at a specific price.",
    syllables: ["snipe"],
    phonetics: "ˈsnaɪp",
    usageInASentence:
      "Experienced traders used bots to snipe tokens at the exact moment of launch.",
  },
  {
    term: "spread",
    partOfSpeech: "n.",
    definition: "The difference between the highest bid and lowest ask price for a cryptocurrency.",
    syllables: ["spread"],
    phonetics: "ˈspred",
    usageInASentence: "The wide spread on the token made it difficult to trade profitably.",
  },
  {
    term: "stable",
    partOfSpeech: "v.",
    definition:
      "To convert volatile crypto assets into stablecoins to secure profits or reduce risk.",
    syllables: ["sta", "ble"],
    phonetics: "ˈsteɪbl̩",
    usageInASentence: "She decided to stable her portfolio by converting her gains into USDT.",
  },
  {
    term: "stake",
    partOfSpeech: "v.",
    definition:
      "To lock up cryptocurrency holdings to earn rewards or participate in network validation.",
    syllables: ["stake"],
    phonetics: "ˈsteɪk",
    usageInASentence: "He staked his Ethereum to earn rewards on the proof-of-stake network.",
  },
  {
    term: "strategy",
    partOfSpeech: "n.",
    definition: "A planned approach to cryptocurrency trading or investing.",
    syllables: ["strat", "e", "gy"],
    phonetics: "ˈstrætədʒi",
    usageInASentence:
      "Her strategy of buying during dips and holding long-term paid off handsomely.",
  },
  {
    term: "supply",
    partOfSpeech: "n.",
    definition: "The total number of tokens or coins available or in circulation.",
    syllables: ["sup", "ply"],
    phonetics: "səˈplaɪ",
    usageInASentence: "The token’s limited supply contributed to its rapid price increase.",
  },
  {
    term: "support",
    partOfSpeech: "v.",
    definition: "A price level where buying pressure typically prevents further price decline.",
    syllables: ["sup", "port"],
    phonetics: "səˈpɔːrt",
    usageInASentence: "The token found support at $1, preventing it from falling further.",
  },
  {
    term: "sus",
    partOfSpeech: "adj.",
    definition:
      "Short for 'suspicious'. Used to describe potentially fraudulent or questionable behavior.",
    syllables: ["sus"],
    phonetics: "ˈsəs",
    usageInASentence:
      "The project’s anonymous team and lack of transparency were considered sus by investors.",
  },
  {
    term: "take",
    partOfSpeech: "v.",
    definition: "To realize profits by selling a cryptocurrency position.",
    syllables: ["take"],
    phonetics: "ˈteɪk",
    usageInASentence: "He decided to take profits after the token doubled in value.",
  },
  {
    term: "telegram",
    partOfSpeech: "n.",
    definition: "A messaging platform widely used in the crypto community.",
    syllables: ["tel", "e", "gram"],
    phonetics: "ˈteləˌɡræm",
    usageInASentence:
      "The project’s Telegram group was buzzing with excitement about the upcoming launch.",
  },
  {
    term: "terminal",
    partOfSpeech: "n.",
    definition: "A platform or interface for executing trades and monitoring market data.",
    syllables: ["ter", "mi", "nal"],
    phonetics: "ˈtɝːmənl̩",
    usageInASentence:
      "The trader used a terminal to monitor real-time price movements and execute trades.",
  },
  {
    term: "TG",
    partOfSpeech: "n.",
    definition: "Short for Telegram, a messaging app used in the crypto community.",
    syllables: ["T", "G"],
    phonetics: "ˈti: ˈdʒiː",
    usageInASentence: "Join the project’s TG to stay updated on the latest announcements.",
  },
  {
    term: "tip",
    partOfSpeech: "n.",
    definition:
      "Additional cryptocurrency added to a transaction to prioritize its inclusion in a block, often used to speed up processing.",
    syllables: ["tip"],
    phonetics: "ˈtɪp",
    usageInASentence:
      "He added a tip to his transaction to ensure it was processed quickly during network congestion.",
  },
  {
    term: "token",
    partOfSpeech: "n.",
    definition: "A unit of cryptocurrency, typically built on an existing blockchain.",
    syllables: ["to", "ken"],
    phonetics: "ˈtoʊkən",
    usageInASentence: "The new token was launched on the Ethereum blockchain to fund the project.",
  },
  {
    term: "top",
    partOfSpeech: "n.",
    definition: "The highest price point in a cryptocurrency's upward trend.",
    syllables: ["top"],
    phonetics: "ˈtɑːp",
    usageInASentence: "Traders tried to predict the top of the bull run to sell at the peak.",
  },
  {
    term: "TPS",
    partOfSpeech: "n.",
    definition: "Transactions Per Second, a measure of blockchain network speed.",
    syllables: ["T", "P", "S"],
    phonetics: "ˈti: ˈpiː ˈes",
    usageInASentence:
      "The new blockchain boasted a TPS rate of 10,000, far surpassing its competitors.",
  },
  {
    term: "tracker",
    partOfSpeech: "n.",
    definition: "A tool for monitoring cryptocurrency prices, portfolios, or transactions.",
    syllables: ["track", "er"],
    phonetics: "ˈtrækər",
    usageInASentence:
      "She used a portfolio tracker to monitor the performance of her crypto investments.",
  },
  {
    term: "twitter",
    partOfSpeech: "n.",
    definition: "A social media platform crucial for cryptocurrency news and discussion.",
    syllables: ["twit", "ter"],
    phonetics: "ˈtwɪtər",
    usageInASentence: "Crypto Twitter was abuzz with news of the latest token launch.",
  },
  {
    term: "VC",
    partOfSpeech: "n.",
    definition: "Voice communications or Venture Capital, depending on context.",
    syllables: ["V", "C"],
    phonetics: "ˈviː ˈsiː",
    usageInASentence:
      "The project secured funding from a prominent VC firm to fuel its development.",
  },
  {
    term: "volume",
    partOfSpeech: "n.",
    definition: "The total amount of a cryptocurrency traded within a specific time frame.",
    syllables: ["vol", "ume"],
    phonetics: "vɑːljuːm",
    usageInASentence: "The token’s trading volume spiked after a major exchange listing.",
  },
  {
    term: "WAGMI",
    partOfSpeech: "interj.",
    definition: "We're All Gonna Make It. An expression of optimism in crypto markets.",
    syllables: ["WAG", "MI"],
    phonetics: "ˈwæɡ ˈmiː",
    usageInASentence: "Despite the market dip, the community cheered 'WAGMI' to boost morale.",
  },
  {
    term: "wallet",
    partOfSpeech: "n.",
    definition: "A software or hardware tool for storing and managing cryptocurrencies.",
    syllables: ["wal", "let"],
    phonetics: "ˈwɒlət",
    usageInASentence: "He transferred his tokens to a cold wallet for added security.",
  },
  {
    term: "weak",
    partOfSpeech: "adj.",
    definition: "Describing price action showing lack of buying support or momentum.",
    syllables: ["weak"],
    phonetics: "ˈwiːk",
    usageInASentence: "The token’s weak price action suggested a lack of investor confidence.",
  },
  {
    term: "whale",
    partOfSpeech: "n.",
    definition: "An individual or entity holding a large amount of a particular cryptocurrency.",
    syllables: ["whale"],
    phonetics: "ˈweɪl",
    usageInASentence:
      "A whale moved 10,000 Bitcoin, causing speculation about market manipulation.",
  },
  {
    term: "work",
    partOfSpeech: "v.",
    definition: "To actively contribute to or promote projects one has invested in.",
    syllables: ["work"],
    phonetics: "ˈwɝːk",
    usageInASentence:
      "He worked tirelessly to promote the project on social media to boost its visibility.",
  },
  {
    term: "centralized",
    partOfSpeech: "adj.",
    definition:
      "Describes a system, exchange, or process controlled by a single authority, where decision-making and operations are managed centrally.",
    syllables: ["cen", "tral", "ized"],
    phonetics: "ˈsentrəˌlaɪzd",
    usageInASentence:
      "Many prefer decentralized exchanges over centralized platforms due to security concerns.",
  },
  {
    term: "decentralized",
    partOfSpeech: "adj.",
    definition:
      "Refers to systems or networks where control and decision-making are distributed across multiple participants, reducing reliance on a single authority.",
    syllables: ["de", "cen", "tral", "ized"],
    phonetics: "dəˈsentrəˌlaɪzd",
    usageInASentence: "Bitcoin is a decentralized currency, free from government or bank control.",
  },
  {
    term: "diamond",
    partOfSpeech: "adj.",
    definition:
      "In crypto slang, used to describe investors with 'diamond hands' who hold assets firmly through market volatility without selling.",
    syllables: ["dia", "mond"],
    phonetics: "ˈdaɪmənd",
    usageInASentence: "His diamond resolve kept him from selling during the market crash.",
  },
  {
    term: "double",
    partOfSpeech: "adj.",
    definition:
      "Describes chart patterns like 'double top' or 'double bottom,' indicating that price levels were tested twice, often signaling potential reversals.",
    syllables: ["dou", "ble"],
    phonetics: "ˈdʌbl̩",
    usageInASentence:
      "The chart showed a double top, suggesting the token’s price might decline soon.",
  },
  {
    term: "doxxed",
    partOfSpeech: "adj.",
    definition:
      "Indicates that an individual's personal or private information has been publicly exposed, often through investigative or malicious actions.",
    syllables: ["doxxed"],
    phonetics: "ˈdɑːksed",
    usageInASentence:
      "The anonymous developer was doxxed, revealing their true identity to the community.",
  },
  {
    term: "hacked",
    partOfSpeech: "adj.",
    definition:
      "Refers to a system or account that has been compromised by unauthorized access, leading to security breaches or loss of funds.",
    syllables: ["hacked"],
    phonetics: "ˈhækt",
    usageInASentence:
      "The exchange was hacked, resulting in the loss of millions of dollars in user funds.",
  },
  {
    term: "rekt",
    partOfSpeech: "adj.",
    definition:
      "Slang used to describe someone who has suffered significant financial losses or been 'destroyed' in a trade or market event.",
    syllables: ["rekt"],
    phonetics: "ˌri:kt",
    usageInASentence:
      "He got rekt after buying the token at its peak and selling during the crash.",
  },
  {
    term: "CEX",
    partOfSpeech: "n.",
    definition:
      "Short for Centralized Exchange, a cryptocurrency trading platform operated by a single organization that manages user funds and transactions.",
    syllables: ["CEX"],
    phonetics: "ˈseks",
    usageInASentence:
      "Binance is a popular CEX where users can trade a wide variety of cryptocurrencies.",
  },
  {
    term: "DEX",
    partOfSpeech: "n.",
    definition:
      "Abbreviation for Decentralized Exchange, a platform that facilitates peer-to-peer cryptocurrency trading without a central authority.",
    syllables: ["DEX"],
    phonetics: "ˈdeks",
    usageInASentence:
      "Uniswap is a leading DEX that allows users to trade tokens directly from their wallets.",
  },
  {
    term: "exit",
    partOfSpeech: "n.",
    definition:
      "In the context of exit liquidity, it refers to the available funds or buyers that allow an investor to sell their position and exit the market.",
    syllables: ["ex", "it"],
    phonetics: "ˈeɡzət",
    usageInASentence:
      "Early investors planned their exit carefully to ensure sufficient liquidity in the market.",
  },
  {
    term: "hold",
    partOfSpeech: "v.",
    definition:
      "To retain ownership of an asset over time, rather than selling it, often as part of a long-term investment strategy.",
    syllables: ["hold"],
    phonetics: "hoʊld",
    usageInASentence:
      "She decided to hold her Ethereum through the bear market, expecting a future rally.",
  },
  {
    term: "bonding-curve",
    partOfSpeech: "n.",
    definition:
      "A mathematical curve defining the relationship between a token's price and its supply, used in token economics to manage issuance and pricing.",
    syllables: ["bond", "ing", "curve"],
    phonetics: "ˈbɑːndɪŋ ˈkɝːv",
    usageInASentence:
      "The project used a bonding-curve to ensure fair token distribution during its launch.",
  },
  {
    term: "bubble-map",
    partOfSpeech: "n.",
    definition:
      "A visualization showing token holders' distribution, often used to analyze wallet concentrations or bundled token holdings.",
    syllables: ["bub", "ble", "map"],
    phonetics: "ˈbʌbl̩ ˈmæp",
    usageInASentence:
      "The bubble-map revealed that a few whales held the majority of the token supply.",
  },
  {
    term: "bundle",
    partOfSpeech: "n.",
    definition:
      "A collection or package of assets or tokens grouped together, typically offered for investment or sale as a single unit.",
    syllables: ["bun", "dle"],
    phonetics: "ˈbʌndl̩",
    usageInASentence:
      "The platform offered a bundle of tokens from promising new projects at a discounted price.",
  },
  {
    term: "cabal",
    partOfSpeech: "n.",
    definition:
      "Refers to a small, secretive group of influential individuals within the crypto community, often suspected of coordinating market moves.",
    syllables: ["ca", "bal"],
    phonetics: "kəˈbɑːl",
    usageInASentence:
      "Some believed a cabal of whales was manipulating the token’s price behind the scenes.",
  },
  {
    term: "candle",
    partOfSpeech: "n.",
    definition:
      "A single candlestick on a price chart that represents the open, close, high, and low prices of an asset over a specific time period.",
    syllables: ["can", "dle"],
    phonetics: "ˈkændl̩",
    usageInASentence:
      "The long red candle on the chart indicated heavy selling pressure on the token.",
  },
  {
    term: "chain",
    partOfSpeech: "n.",
    definition:
      "Short for blockchain, a decentralized ledger that records transactions across a distributed network of computers.",
    syllables: ["chain"],
    phonetics: "ˈtʃeɪn",
    usageInASentence:
      "The chain’s immutability ensures that transactions cannot be altered once recorded.",
  },
  {
    term: "coin",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency that typically operates on its own blockchain, serving as a medium of exchange, store of value, or unit of account.",
    syllables: ["coin"],
    phonetics: "ˌkɔɪn",
    usageInASentence: "Bitcoin is the first and most well-known coin in the cryptocurrency space.",
  },
  {
    term: "copium",
    partOfSpeech: "n.",
    definition:
      "A portmanteau of 'cope' and 'opium,' used humorously to describe the mental solace investors seek to deal with losses or market downturns.",
    syllables: ["cop", "i", "um"],
    phonetics: "koʊpɪəm",
    usageInASentence:
      "After the token crashed, investors turned to copium, hoping for a miraculous recovery.",
  },
  {
    term: "copy-trading",
    partOfSpeech: "n.",
    definition:
      "The practice of automatically replicating the trades of experienced or successful traders through dedicated platforms or services.",
    syllables: ["cop", "y", "trad", "ing"],
    phonetics: "ˈkɑːpi ˈtreɪdɪŋ",
    usageInASentence: "New traders used copy-trading to follow the moves of top crypto investors.",
  },
  {
    term: "cross-chain",
    partOfSpeech: "n.",
    definition:
      "Describes protocols or operations that enable the transfer of assets or data between different blockchain networks to enhance interoperability.",
    syllables: ["cross", "chain"],
    phonetics: "ˈkrɒs ˈtʃeɪn",
    usageInASentence:
      "The cross-chain bridge allowed users to transfer tokens between Ethereum and Solana.",
  },
  {
    term: "CTO",
    partOfSpeech: "n.",
    definition:
      "Stands for Community Takeover, referring to scenarios where a decentralized community assumes control or direction of a project in the absence of strong centralized leadership.",
    syllables: ["C", "T", "O"],
    phonetics: "ˌsi: ˈti: ˈoʊ ",
    usageInASentence:
      "After the developers abandoned the project, a CTO revitalized it under community leadership.",
  },
  {
    term: "dashboard",
    partOfSpeech: "n.",
    definition:
      "A graphical interface that displays real-time data and analytics related to trading activities, portfolio performance, or market trends.",
    syllables: ["dash", "board"],
    phonetics: "ˈdæʃˌbɔːrd",
    usageInASentence:
      "The trader used a dashboard to monitor price movements and portfolio performance in real time.",
  },
  {
    term: "fullport",
    partOfSpeech: "n.",
    definition:
      "A slang term for an investor's entire portfolio of assets, often used to discuss overall exposure in the crypto market.",
    syllables: ["full", "port"],
    phonetics: "ˈfʊl ˈpɔːrt",
    usageInASentence:
      "He diversified his fullport by allocating funds across multiple blockchains.",
  },
  {
    term: "gen-wealth",
    partOfSpeech: "n.",
    definition:
      "Short for generational wealth, referring to the long-term accumulation of wealth that can be passed down through generations, often through smart investments.",
    syllables: ["gen", "wealth"],
    phonetics: "ˈdʒen ˈwelθ",
    usageInASentence:
      "Investing early in Bitcoin helped him build gen-wealth for his family’s future.",
  },
  {
    term: "github",
    partOfSpeech: "n.",
    definition:
      "A web-based platform for version control and collaborative software development, widely used by crypto projects to host and share open-source code.",
    syllables: ["git", "hub"],
    phonetics: "'git ˈhəb",
    usageInASentence:
      "The project’s code was publicly available on GitHub, allowing developers to audit it.",
  },
  {
    term: "hands",
    partOfSpeech: "n.",
    definition:
      "Refers to an investor's resolve in holding assets; 'diamond hands' indicate strong conviction, while 'paper hands' imply a tendency to sell under pressure.",
    syllables: ["hands"],
    phonetics: "ˈhændz",
    usageInASentence: "Investors with diamond hands held their tokens through the market crash.",
  },
  {
    term: "house-money",
    partOfSpeech: "n.",
    definition:
      "Funds viewed as less risky because they originate from trading profits rather than the investor's original capital.",
    syllables: ["house", "mon", "ey"],
    phonetics: "haʊz ˈmʌni",
    usageInASentence:
      "After doubling his investment, he traded with house-money, reducing his risk.",
  },
  {
    term: "memecoin",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency that gains popularity primarily through internet memes and community hype rather than through technological innovation or utility.",
    syllables: ["meme", "coin"],
    phonetics: "ˈmɪm ˌkɔɪn",
    usageInASentence:
      "Dogecoin, the original memecoin, surged in value after viral social media campaigns.",
  },
  {
    term: "MEV",
    partOfSpeech: "n.",
    definition:
      "Stands for Maximum Extractable Value, referring to the potential profit miners or validators can extract by optimally ordering transactions in a block.",
    syllables: ["MEV"],
    phonetics: "ˈmev",
    usageInASentence:
      "Miners used MEV strategies to maximize their profits by reordering transactions.",
  },
  {
    term: "normie",
    partOfSpeech: "n.",
    definition:
      "A slang term for someone who is not deeply involved in crypto culture, often considered mainstream and lacking insider knowledge.",
    syllables: ["nor", "mie"],
    phonetics: "ˈnɔːrmi",
    usageInASentence: "The normie investor bought Bitcoin at its peak, unaware of market cycles.",
  },
  {
    term: "P",
    partOfSpeech: "n.",
    definition:
      "Slang for profit, representing the earnings or gains achieved through trading or investments.",
    syllables: ["P"],
    phonetics: "ˈpiː",
    usageInASentence: "After selling his tokens, he celebrated the P he made on the trade.",
  },
  {
    term: "player",
    partOfSpeech: "n.",
    definition:
      "An active investor or trader in the crypto space, typically one who is engaged and experienced in market operations.",
    syllables: ["play", "er"],
    phonetics: "ˈpleɪr̩",
    usageInASentence: "The player quickly identified and capitalized on a new token’s potential.",
  },
  {
    term: "PVE",
    partOfSpeech: "n.",
    definition:
      "A term highlighting the dynamic between insiders and everyday investors (normies) in the crypto market, emphasizing disparities in access and strategy.",
    syllables: ["P", "V", "E"],
    phonetics: "ˈpiː ˈviː ˈiː",
    usageInASentence:
      "The PVE dynamic often leaves normie investors at a disadvantage compared to insiders.",
  },
  {
    term: "PVP",
    partOfSpeech: "n.",
    definition:
      "Refers to competitive interactions among insiders in the crypto community, where experienced traders or stakeholders vie against one another.",
    syllables: ["P", "V", "P"],
    phonetics: "ˈpiː ˈviː ˈpiː",
    usageInASentence:
      "The PVP environment among crypto whales can lead to intense market manipulation.",
  },
  {
    term: "TRADFI",
    partOfSpeech: "n.",
    definition:
      "An abbreviation for Traditional Finance, denoting conventional financial systems and institutions as contrasted with decentralized or crypto-based alternatives.",
    syllables: ["TRAD", "FI"],
    phonetics: "træd ˈfaɪ ",
    usageInASentence:
      "Many crypto enthusiasts aim to disrupt TRADFI with decentralized finance solutions.",
  },
  {
    term: "trench",
    partOfSpeech: "n.",
    definition:
      "A slang term describing the tough, competitive environment of the crypto market, where traders face intense challenges and pressure.",
    syllables: ["trench"],
    phonetics: "ˈtrentʃ",
    usageInASentence:
      "Surviving the trench of crypto trading requires resilience and strategic thinking.",
  },
  {
    term: "build",
    partOfSpeech: "v.",
    definition:
      "To develop or create a project, product, or platform within the crypto space, often involving technical development and community engagement.",
    syllables: ["build"],
    phonetics: "ˈbɪld",
    usageInASentence: "The team worked hard to build a decentralized platform that empowers users.",
  },
  {
    term: "call",
    partOfSpeech: "v.",
    definition:
      "To decide or signal the purchase of an asset, often based on analysis or intuition, essentially making an investment move.",
    syllables: ["call"],
    phonetics: "ˈkɒl",
    usageInASentence:
      "The influencer called a new token, prompting many followers to invest early.",
  },
  {
    term: "redepot",
    partOfSpeech: "v.",
    definition:
      "To re-enter the market or rebuild one's trading portfolio after incurring significant losses, effectively starting fresh with new capital.",
    syllables: ["re", "de", "pot"],
    phonetics: "ˌri: ˈdepoʊ",
    usageInASentence: "After getting rekt, he decided to redepot with a more cautious strategy.",
  },
  {
    term: "round-trip",
    partOfSpeech: "v.",
    definition:
      "Describes the complete cycle of an investment from entry to exit, often marked by dramatic price fluctuations and emotional highs and lows.",
    syllables: ["round", "trip"],
    phonetics: "raʊnd ˈtrɪp",
    usageInASentence:
      "Her investment in the token was a wild round-trip, ending with modest profits.",
  },
  {
    term: "rug-pull",
    partOfSpeech: "v.",
    definition:
      "To abruptly withdraw liquidity or abandon a project, effectively scamming investors by leaving them with valueless tokens.",
    syllables: ["rug", "pull"],
    phonetics: "ˈrəɡ ˈpʊl",
    usageInASentence:
      "The developers rug-pulled the project, disappearing with millions in investor funds.",
  },
  {
    term: "sideline",
    partOfSpeech: "v.",
    definition:
      "To temporarily withdraw or refrain from active participation in the market, often due to uncertainty or risk aversion.",
    syllables: ["side", "line"],
    phonetics: "ˈsaɪdˌlaɪn",
    usageInASentence:
      "He decided to sideline his investments during the volatile market conditions.",
  },
  {
    term: "motion",
    partOfSpeech: "adj.",
    definition:
      "Describes a trader whose actions create momentum in the market, influencing others to copy their trades due to perceived expertise.",
    syllables: ["mo", "tion"],
    phonetics: "ˈmoʊʃn̩",
    usageInASentence: "The motion trader’s buy orders sparked a rally, attracting copy-traders.",
  },
  {
    term: "sandwich",
    partOfSpeech: "n.",
    definition:
      "A MEV (Maximal Extractable Value) strategy where a target transaction is placed between two attacker transactions to exploit price changes.",
    syllables: ["sand", "wich"],
    phonetics: "ˈsænwɪdʒ",
    usageInASentence: "Miners used a sandwich attack to profit from a large token swap on a DEX.",
  },
  {
    term: "depeg",
    partOfSpeech: "n.",
    definition:
      "When a stablecoin loses its 1:1 parity with the underlying asset (typically USD), trading significantly above or below its intended peg.",
    syllables: ["de", "peg"],
    phonetics: "ˈdipeɡ",
    usageInASentence:
      "The stablecoin experienced a depeg, causing panic among holders as its value dropped.",
  },
  {
    term: "bull",
    partOfSpeech: "n.",
    definition:
      "A market participant who believes prices will rise, often driving upward momentum through optimistic buying behavior.",
    syllables: ["bull"],
    phonetics: "ˈbʊl",
    usageInASentence:
      "The bull bought large amounts of Bitcoin, expecting a significant price increase.",
  },
  {
    term: "bear",
    partOfSpeech: "n.",
    definition:
      "A market participant expecting price declines, typically selling assets or shorting to profit from downward movements.",
    syllables: ["bear"],
    phonetics: "ˈber",
    usageInASentence: "The bear sold his tokens, anticipating a prolonged market downturn.",
  },
  {
    term: "short",
    partOfSpeech: "v.",
    definition:
      "To bet against an asset by borrowing and selling it, hoping to repurchase later at a lower price and profit from the difference.",
    syllables: ["short"],
    phonetics: "ˈʃɔːrt",
    usageInASentence: "He decided to short Bitcoin during its peak, expecting a correction.",
  },
  {
    term: "long",
    partOfSpeech: "v.",
    definition:
      "To hold an asset with the expectation of price appreciation over time, or to take a leveraged position betting on upward movement.",
    syllables: ["long"],
    phonetics: "ˈlɔːŋ",
    usageInASentence: "She went long on Ethereum, confident in its long-term growth potential.",
  },
  {
    term: "10x",
    partOfSpeech: "v.",
    definition:
      "To achieve tenfold returns on an investment. Also used as a target for exponential growth potential in crypto projects.",
    syllables: ["10", "x"],
    phonetics: "ˈten ˈeks",
    usageInASentence: "Investors hoped the new token would 10x within a year of its launch.",
  },
  {
    term: "multi-sig",
    partOfSpeech: "n.",
    definition:
      "Short for multi-signature; a security protocol requiring multiple cryptographic signatures to authorize a blockchain transaction.",
    syllables: ["mul", "ti", "sig"],
    phonetics: "ˈmʌlti ˈsɪɡ",
    usageInASentence:
      "The project implemented a multi-sig wallet to enhance security for its treasury funds.",
  },
  {
    term: "validator",
    partOfSpeech: "n.",
    definition:
      "A network node responsible for verifying transactions and participating in consensus mechanisms in proof-of-stake blockchain systems.",
    syllables: ["val", "i", "da", "tor"],
    phonetics: "ˈvælədetɔːr",
    usageInASentence:
      "Validators on the Ethereum network earn rewards for securing the blockchain.",
  },
  {
    term: "miner",
    partOfSpeech: "n.",
    definition:
      "A participant in a proof-of-work blockchain network who validates transactions and creates new blocks through computational work.",
    syllables: ["min", "er"],
    phonetics: "ˈmaɪnər",
    usageInASentence:
      "Bitcoin miners use powerful computers to solve complex puzzles and earn rewards.",
  },
  {
    term: "block",
    partOfSpeech: "n.",
    definition:
      "A data structure containing a batch of validated transactions that is permanently recorded on a blockchain.",
    syllables: ["block"],
    phonetics: "ˈblɑːk",
    usageInASentence: "The miner successfully added a new block to the Bitcoin blockchain.",
  },
  {
    term: "cold-wallet",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency storage method where private keys are kept offline for enhanced security against hacking attempts.",
    syllables: ["cold", "wal", "let"],
    phonetics: "ˈkoʊld ˈwɒlət",
    usageInASentence:
      "For maximum security, he stored his Bitcoin in a cold-wallet disconnected from the internet.",
  },
  {
    term: "hot-wallet",
    partOfSpeech: "n.",
    definition:
      "A cryptocurrency wallet connected to the internet, enabling convenient but less secure access to digital assets.",
    syllables: ["hot", "wal", "let"],
    phonetics: "ˈhɒt ˈwɒlət",
    usageInASentence:
      "She used a hot-wallet for daily transactions but kept most of her funds offline.",
  },
  {
    term: "private-key",
    partOfSpeech: "n.",
    definition:
      "A secret cryptographic code that allows access to specific blockchain assets and must be kept secure by the owner.",
    syllables: ["pri", "vate", "key"],
    phonetics: "ˈpraɪvət ˈkiː ",
    usageInASentence: "Losing your private-key means losing access to your cryptocurrency forever.",
  },
  {
    term: "public-key",
    partOfSpeech: "n.",
    definition:
      "A cryptographic code paired with a private-key, publicly shared to receive cryptocurrency transactions.",
    syllables: ["pub", "lic", "key"],
    phonetics: "ˈpraɪvət ˈkiː ",
    usageInASentence: "He shared his public-key to receive Ethereum donations for his project.",
  },
  {
    term: "sign",
    partOfSpeech: "v.",
    definition:
      "The cryptographic process of authorizing a blockchain transaction using a private key to create a digital signature.",
    syllables: ["sign"],
    phonetics: "ˈsaɪn",
    usageInASentence:
      "She had to sign the transaction with her private key to transfer the tokens.",
  },
  {
    term: "mixer",
    partOfSpeech: "n.",
    definition:
      "A service that obscures the origin of cryptocurrency transactions by combining multiple transactions together.",
    syllables: ["mix", "er"],
    phonetics: "ˈmɪksər",
    usageInASentence: "He used a mixer to enhance the privacy of his Bitcoin transactions.",
  },
  {
    term: "KYC",
    partOfSpeech: "n.",
    definition:
      "Acronym for 'Know Your Customer'; identity verification procedures used by financial institutions to prevent fraud.",
    syllables: ["K", "Y", "C"],
    phonetics: "ˈkeɪ ˈwaɪ ˈsiː",
    usageInASentence:
      "The exchange required KYC verification before allowing users to withdraw funds.",
  },
  {
    term: "extract",
    partOfSpeech: "v.",
    definition:
      "The process of converting or redeeming value from a digital token, typically through exchanges, smart contracts, or decentralized applications.",
    syllables: ["ex", "tract"],
    phonetics: "ɪkˈstrækt",
    usageInASentence: "She used a decentralized app to extract profits from her staked tokens.",
  },
  {
    term: "NFT",
    partOfSpeech: "n.",
    definition:
      "Non-Fungible Token. A unique digital asset on a blockchain, representing ownership of a specific item, often used for art, collectibles, or virtual goods.",
    syllables: ["N", "F", "T"],
    phonetics: "ˈen ˈef ˈtiː",
    usageInASentence:
      "She bought an NFT of a rare digital artwork, hoping its value would increase over time.",
  },
]

// Set "new" terms (adjust this list as needed)
export const newTerms = ["clip", "stable", "PVP", "PVE"]
