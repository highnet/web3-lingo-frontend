"use client"

import { useState } from "react"
import { SearchInput } from "@/components/search-input"
import { TermList } from "@/components/term-list"
import { ThemeToggle } from "@/components/theme-toggle"
import { WordOfTheDay } from "@/components/word-of-the-day"

// Import the terms from the TermList component
import { terms } from "@/components/term-list"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Crypto Lingo</h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Web3 & Crypto Slang Dictionary</h2>
          <p className="text-muted-foreground">
            Explore the colorful and often confusing world of cryptocurrency jargon. From HODLing to Top Blasts, we've
            got you covered.
          </p>
        </div>
        <WordOfTheDay terms={terms} />
        <SearchInput onSearch={setSearchTerm} />
        <TermList searchTerm={searchTerm} />
      </main>
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Crypto Lingo. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

