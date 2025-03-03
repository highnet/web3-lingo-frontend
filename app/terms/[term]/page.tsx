// app/terms/[term]/page.tsx
import { notFound } from "next/navigation"
import { terms } from "@/lib/terms"
import Link from "next/link"
import { TermList } from "@/components/term-list"
export async function generateMetadata({ params }: { params: { term: string } }) {
  const term = terms.find((t) => t.term.toLowerCase() === params.term.toLowerCase())
  return term
    ? {
        title: `${term.term} Definition And Meaning`,
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
      <div className="mt-8">
        <TermList term={term.term} />
      </div>
      <Link href="/" className="text-primary hover:underline inline-flex items-center">
        ← Back to all terms
      </Link>
    </div>
  )
}
