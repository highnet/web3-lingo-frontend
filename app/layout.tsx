import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chainopedia - Your Go-To Dictionary for Web3 & Crypto Slang",
  description:
    "Explore the colorful and often confusing world of cryptocurrency jargon with Chainopedia. Your ultimate resource for Web3 and crypto slang.",
  keywords: "Chainopedia, Web3, Crypto, Slang, Dictionary, Cryptocurrency, Jargon",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
