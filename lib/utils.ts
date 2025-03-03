import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function fetchLatestCommit() {
  const response = await fetch(
    "https://api.github.com/repos/highnet/web3-lingo-frontend/commits/main"
  )
  if (!response.ok) {
    throw new Error("Failed to fetch latest commit")
  }
  const data = await response.json()
  return {
    id: data.sha, // Commit ID
    date: data.commit.author.date, // Commit date
  }
}
