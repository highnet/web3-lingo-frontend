// app/terms/[term]/page.tsx
import { notFound } from "next/navigation"
import { terms } from "@/lib/terms"
import Link from "next/link"

export async function generateMetadata({ params }: { params: { term: string } }) {
  const term = terms.find((t) => t.term.toLowerCase() === params.term.toLowerCase())
  return term
    ? {
        title: `${term.term} - Chainopedia`,
        description: term.definition,
      }
    : {
        title: "Term Not Found - Chainopedia",
        description: "The requested term could not be found",
      }
}

export default function TermPage({ params }: Readonly<{ params: { term: string } }>) {
  const term = terms.find((t) => t.term.toLowerCase() === params.term.toLowerCase())
  if (!term) notFound()

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{term.term}</h1>
      <p className="text-muted-foreground italic mb-6">{term.partOfSpeech}</p>
      <p className="text-lg leading-relaxed mb-8">{term.definition}</p>
      <Link href="/" className="text-primary hover:underline inline-flex items-center">
        ← Back to all terms
      </Link>
    </div>
  )
}
