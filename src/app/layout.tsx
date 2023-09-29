import "./globals.css"
import React, { ReactNode } from "react"
import type { Metadata } from "next"

import { cn } from "@/lib/utils"
import { site } from "@/config/site"
import { FontSans } from "@/config/theme"

import ThemeProvider from "@/components/theme-provider"

import Header from "@/components/layout/header"

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [
    {
      name: "Nick van Duijn (kash)",
      url: "https://github.com/kash-j",
    },
  ],
  creator: "Nick van Duijn (kash)",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          FontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
