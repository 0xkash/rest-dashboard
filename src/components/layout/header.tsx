import React from "react"
import Link from "next/link"

import { Logo } from "@/components/icons"
import Navigation from "@/components/navigation"
import { navigation } from "@/config/menu-items"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-6 w-6" />
          <span className="inline-block">
            rest<span className="font-bold">/dashboard</span>
          </span>
        </Link>
        <Navigation items={navigation} />
      </div>
    </header>
  )
}
