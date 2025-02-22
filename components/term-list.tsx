"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { terms, newTerms } from "@/lib/terms"

interface TermListProps {
  searchTerm?: string
}

export function TermList({ searchTerm = "" }: Readonly<TermListProps>) {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null)
  const [highlightedTerm, setHighlightedTerm] = useState<string | null>(null)
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

  useEffect(() => {
    if (highlightedTerm) {
      const element = termRefs.current[highlightedTerm]
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
        setHighlightedTerm(null)
      }
    }
  }, [highlightedTerm])

  const highlightReferencedTerms = (definition: string) => {
    let highlightedDefinition = definition

    sortedTerms.forEach((term) => {
      const regex = new RegExp(`\\b${term.term}\\b`, "gi")
      highlightedDefinition = highlightedDefinition.replace(regex, (match) => {
        return `<a href="#" class="text-primary font-semibold cursor-pointer" data-term="${match}">${match}</a>`
      })
    })

    return highlightedDefinition
  }

  const handleTermClick = (term: string) => {
    setHighlightedTerm(term)
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredTerms.map((item) => (
        <Card
          key={item.term}
          className="cursor-pointer transition-all hover:shadow-md"
          onClick={() => setExpandedTerm(expandedTerm === item.term ? null : item.term)}
          ref={(el) => {
            termRefs.current[item.term] = el
          }}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CardTitle>{item.term}</CardTitle>
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
            <CardDescription
              className={expandedTerm === item.term ? "" : "line-clamp-2"}
              dangerouslySetInnerHTML={{
                __html: highlightReferencedTerms(item.definition),
              }}
              onClick={(e) => {
                const target = e.target as HTMLElement
                if (target.dataset.term) {
                  e.preventDefault()
                  e.stopPropagation()
                  handleTermClick(target.dataset.term)
                }
              }}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
