"use client"

import { useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { terms, newTerms } from "@/lib/terms"

interface TermListProps {
  searchTerm?: string
}

export function TermList({ searchTerm = "" }: Readonly<TermListProps>) {
  const termRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Sort terms alphabetically
  const sortedTerms = [...terms].sort((a, b) => a.term.localeCompare(b.term))

  // Improved search filtering
  const filteredTerms = searchTerm
    ? sortedTerms
        .filter((item) => {
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
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredTerms.map((item) => (
        <Link
          key={item.term}
          href={`/terms/${item.term}`}
          className="hover:shadow-md transition-shadow"
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CardTitle className="hover:underline">{item.term}</CardTitle>
                  <span className="text-sm text-muted-foreground italic">{item.partOfSpeech}</span>
                </div>
                {newTerms.includes(item.term) && (
                  <Badge variant="secondary" className="ml-2">
                    New
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-3">
                {renderDefinition(item.definition)}
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
