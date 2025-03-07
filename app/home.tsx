"use client"

import { useState, useEffect, useRef } from "react"
import { SearchInput } from "@/components/search-input"
import { TermList } from "@/components/term-list"
import { WordOfTheDay } from "@/components/word-of-the-day"
import { DeployedBranch } from "@/components/deployed-branch"
import Typed from "typed.js"
import { terms } from "@/lib/terms"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const typedRef = useRef(null)

  // Function to shuffle an array (Fisher-Yates algorithm)
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array] // Create a copy to avoid mutating the original
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]] // Swap elements
    }
    return shuffled
  }

  // Map terms and shuffle them
  const typedStrings = shuffleArray(terms.map((term) => `${term.term}?`))

  useEffect(() => {
    // Create the typed instance
    const typed = new Typed(typedRef.current, {
      strings: typedStrings,
      typeSpeed: 75,
      backSpeed: 30,
      loop: true,
      backDelay: 3000,
    })

    // Return a cleanup function
    return () => {
      typed.destroy()
    }
  }, [typedStrings]) // Add typedStrings as a dependency

  return (
    <>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          What is{" "}
          <span
            ref={typedRef}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text"
          ></span>
        </h2>
        <p className="text-muted-foreground">
          Explore the colorful and often confusing world of cryptocurrency jargon. From{" "}
          <b className="underline">adoption</b> to <b className="underline">work</b>, we've got you
          covered.
        </p>
      </div>
      <WordOfTheDay />
      <SearchInput onSearch={setSearchTerm} />
      <TermList searchTerm={searchTerm} />
      <DeployedBranch />
    </>
  )
}
