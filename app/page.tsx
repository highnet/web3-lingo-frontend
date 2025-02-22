import type { Metadata } from "next"
import Home from "./home"

export const metadata: Metadata = {
  title: "Chainopedia - Your Ultimate Resource for Web3 & Crypto Terminology",
  description:
    "Dive into Chainopedia, the comprehensive dictionary for Web3 and cryptocurrency slang, helping you navigate the complex world of crypto trading.",
  keywords:
    "Chainopedia, Web3, Crypto, Cryptocurrency, Trading Terminology, Crypto Slang, Blockchain, Digital Assets",
}

export default function Page() {
  return <Home />
}
