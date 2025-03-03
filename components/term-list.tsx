"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { terms, newTerms } from "@/lib/terms"
import { Button } from "./ui/button"

interface TermListProps {
  searchTerm?: string
  limit?: number
  seed?: string
  term?: string
  wordOfTheDay?: boolean
}

// Function to handle text-to-speech
export const speak = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text)
  window.speechSynthesis.speak(utterance)
}

// Helper function to generate a consistent random index based on a seed
const getRandomIndex = (arrayLength: number, seed: string): number => {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i)
    hash |= 0 // Convert to 32-bit integer
  }
  return Math.abs(hash) % arrayLength
}

export function TermList({
  searchTerm = "",
  limit,
  seed,
  term,
  wordOfTheDay = false,
}: Readonly<TermListProps>) {
  // Sort terms alphabetically
  const sortedTerms = [...terms].sort((a, b) => a.term.localeCompare(b.term))

  // If a specific term is provided, filter the terms to only include that term
  const filteredTerms = term
    ? sortedTerms.filter((t) => t.term.toLowerCase() === term.toLowerCase())
    : searchTerm
    ? sortedTerms
        .filter((item) => {
          const termMatch = item.term.toLowerCase().includes(searchTerm.toLowerCase())
          const isExactMatch = item.term.toLowerCase() === searchTerm.toLowerCase()
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

  // Apply the limit if provided
  const finalTerms = limit
    ? seed
      ? [filteredTerms[getRandomIndex(filteredTerms.length, seed)]]
      : filteredTerms.slice(0, limit)
    : filteredTerms

  // If this is the "Word of the Day", ensure only one term is rendered
  const displayTerms = wordOfTheDay ? finalTerms.slice(0, 1) : finalTerms

  const renderDefinition = (definition: string) => {
    const sortedTerms = [...terms].sort((a, b) => b.term.length - a.term.length)
    const termRegex = new RegExp(`\\b(${sortedTerms.map((t) => t.term).join("|")})\\b`, "gi")

    return definition.split(termRegex).map((part, index) => {
      const term = sortedTerms.find((t) => t.term === part)
      return term ? (
        <Link
          key={index}
          href={`/terms/${term.term}`}
          className="text-primary font-semibold hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          {part}
        </Link>
      ) : (
        <span key={index}>{part}</span>
      )
    })
  }

  return (
    <div
      className={
        displayTerms.length === 1
          ? "grid gap-4 mb-6" // Single item: full width
          : "grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6" // Multiple items: original grid
      }
    >
      {displayTerms.map((item) => (
        <div key={item.term} className="h-full">
          <Card className="h-auto">
            <CardHeader>
              <div className="flex justify-between">
                <div className="flex items-baseline gap-2">
                  <Link href={`/terms/${item.term}`}>
                    <CardTitle className="hover:underline">{item.term}</CardTitle>
                  </Link>
                  <span className="text-sm text-muted-foreground italic">{item.partOfSpeech}</span>
                </div>
                {newTerms.includes(item.term) && (
                  <Badge variant="secondary" className="ml-2">
                    New
                  </Badge>
                )}
              </div>
              <Button
                className="w-fit"
                variant={"outline"}
                size={"sm"}
                onClick={(e) => {
                  e.stopPropagation()
                  speak(item.term)
                }}
              >
                Speak
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                {item.syllables.length > 1 && item.syllables.join("·")}{" "}
              </p>
              <CardDescription className="">
                <p>{renderDefinition(item.definition)}</p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
