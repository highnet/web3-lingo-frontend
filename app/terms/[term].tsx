import { Term, terms } from "@/lib/terms"

const TermPage = ({ termData }: { termData: Term | null }) => {
  if (!termData) {
    return <h2>Term not found</h2>
  }

  return (
    <div>
      <h1>{termData.term}</h1>
      <p>{termData.definition}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = Object.keys(terms).map((term) => ({
    params: { term },
  }))

  return { paths, fallback: false } // Set fallback to false for 404 on unmatched routes
}

export async function getStaticProps({ params }) {
  const termData = terms[params.term] || null // Fetch term data based on the URL

  return {
    props: {
      termData,
    },
  }
}

export default TermPage
