import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

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
          <header className="border-b">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <Link href="/" className="flex items-center text-2xl font-bold">
                <Image
                  src="/logo.svg"
                  alt="Chainopedia Logo"
                  width={20}
                  height={20}
                  className="mr-3"
                />
                Chainopedia
              </Link>
              <ThemeToggle />
            </div>
          </header>

          <main className="container mx-auto px-4 py-8">{children}</main>

          <footer className="border-t mt-12">
            <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Chainopedia. All rights reserved. Contact Us:
              joaquintelleria@gmail.com
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
