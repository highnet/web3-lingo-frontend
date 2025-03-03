import { useEffect, useState } from "react"
import { fetchLatestCommit } from "../lib/utils" // Import the updated utility function
import { Card, CardHeader, CardContent } from "./ui/card"

export function DeployedBranch() {
  const [commit, setCommit] = useState<{ id: string | null; date: string | null }>({
    id: null,
    date: null,
  })
  const branch = process.env.VERCEL_GIT_BRANCH || "main" // Access the environment variable directly

  useEffect(() => {
    const getCommit = async () => {
      try {
        const latestCommit = await fetchLatestCommit()
        setCommit(latestCommit)
      } catch (error) {
        console.error(error)
      }
    }

    getCommit()
  }, [])

  return (
    <Card>
      <CardHeader>
        <h4>Latest Update:</h4>
      </CardHeader>
      <CardContent>
        {commit.id && (
          <div>
            <p>
              Commit:{" "}
              <a
                href={`https://github.com/highnet/web3-lingo-frontend/tree/${branch}`}
                target="_blank"
              >
                <span className="monospace hover:underline">main</span>
              </a>
              @
              <a
                href={`https://github.com/highnet/web3-lingo-frontend/commit/${commit.id}`}
                target="_blank"
              >
                <span className="monospace hover:underline">{commit.id.substring(0, 7)}</span>
              </a>
            </p>
            <p className="mt-2">
              Updated at:{" "}
              {commit.date ? new Date(commit.date).toLocaleString() : "Date not available"}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
