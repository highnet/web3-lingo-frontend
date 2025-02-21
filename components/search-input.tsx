"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchInputProps {
  onSearch: (value: string) => void
}

export function SearchInput({ onSearch }: SearchInputProps) {
  return (
    <div className="relative mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      <Input type="search" placeholder="Search terms..." className="pl-10" onChange={(e) => onSearch(e.target.value)} />
    </div>
  )
}

