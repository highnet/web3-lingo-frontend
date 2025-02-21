import type { Metadata } from "next"
import Home from "./home"

export const metadata: Metadata = {
  title: "Crypto Lingo",
  description: "Explore common terminology for web3 and crypto trading",
}

export default function Page() {
  return <Home />
}

