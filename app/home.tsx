"use client"

import { useState, useEffect } from "react"
import { SearchInput } from "@/components/search-input"
import { TermList } from "@/components/term-list"
import { terms } from "@/lib/terms"
import { WordOfTheDay } from "@/components/word-of-the-day"
import { DeployedBranch } from "@/components/deployed-branch"

// Define constants for timing
const WORD_CHANGE_INTERVAL = 3000 // Time in milliseconds for word change
const FADE_DURATION = 500 // Time in milliseconds for fade effect

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentWord1, setCurrentWord1] = useState("HODL")
  const [currentWord2, setCurrentWord2] = useState("KOL")
  const [isTransitioning1, setIsTransitioning1] = useState(false)
  const [isTransitioning2, setIsTransitioning2] = useState(false)

  useEffect(() => {
    // Set initial words only on the client side
    setCurrentWord1("HODL")
    setCurrentWord2("KOL")
  }, [])

  useEffect(() => {
    // Get random word from terms array
    const getRandomWord = () => {
      const randomTerm = terms[Math.floor(Math.random() * terms.length)]
      return randomTerm.term
    }

    // Function to handle word transition
    const handleWordTransition = (
      setCurrentWord: React.Dispatch<React.SetStateAction<string>>,
      setIsTransitioning: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentWord(getRandomWord())
        setIsTransitioning(false)
      }, FADE_DURATION)
    }

    // First word animation
    const intervalId1 = setInterval(() => {
      handleWordTransition(setCurrentWord1, setIsTransitioning1)
    }, WORD_CHANGE_INTERVAL)

    // Second word animation
    const intervalId2 = setInterval(() => {
      handleWordTransition(setCurrentWord2, setIsTransitioning2)
    }, WORD_CHANGE_INTERVAL)

    return () => {
      clearInterval(intervalId1)
      clearInterval(intervalId2)
    }
  }, [])

  return (
    <>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Your Go-To dictionary for Web3 & Crypto Slang</h2>
        <p className="text-muted-foreground">
          Explore the colorful and often confusing world of cryptocurrency jargon. From{" "}
          <b
            className={`transition-opacity duration-500 ${
              isTransitioning1 ? "opacity-0" : "opacity-100"
            } underline`}
          >
            {currentWord1}
          </b>{" "}
          to{" "}
          <b
            className={`transition-opacity duration-500 ${
              isTransitioning2 ? "opacity-0" : "opacity-100"
            } underline`}
          >
            {currentWord2}
          </b>
          {""}, we've got you covered.
        </p>
      </div>
      <WordOfTheDay terms={terms} />
      <SearchInput onSearch={setSearchTerm} />
      <TermList searchTerm={searchTerm} />
      <DeployedBranch />
    </>
  )
}
