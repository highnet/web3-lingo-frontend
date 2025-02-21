import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Term {
  readonly term: string
  readonly definition: string
}

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
        <h3 className="text-xl font-bold mb-2">{wordOfTheDay.term}</h3>
        <CardDescription>{wordOfTheDay.definition}</CardDescription>
      </CardContent>
    </Card>
  )
}

