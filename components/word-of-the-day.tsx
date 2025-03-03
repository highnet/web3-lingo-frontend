"use client"

import { TermList } from "./term-list"
export function WordOfTheDay() {
  // Generate a seed based on the current date (e.g., "2023-10-05")
  const today = new Date().toISOString().split("T")[0]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Word of the Day</h2>
      <TermList limit={1} seed={today} wordOfTheDay={true} />
    </div>
  )
}
