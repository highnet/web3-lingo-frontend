import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Term, newTerms } from "@/lib/terms"

function getWordOfTheDay(terms: readonly Term[]): Term {
  // Use the current date as a seed for the random selection
  const today = new Date()
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
  const index = seed % terms.length
  return terms[index]
}

export function WordOfTheDay({ terms }: Readonly<{ terms: readonly Term[] }>) {
  const wordOfTheDay = getWordOfTheDay(terms)

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Word of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <h3 className="text-xl font-bold mb-2">{wordOfTheDay.term}</h3>
            <span className="text-sm text-muted-foreground italic">
              {wordOfTheDay.partOfSpeech}
            </span>
          </div>
          {newTerms.includes(wordOfTheDay.term) && (
            <Badge variant="secondary" className="ml-2">
              New
            </Badge>
          )}
        </div>

        <CardDescription>{wordOfTheDay.definition}</CardDescription>
      </CardContent>
    </Card>
  )
}
