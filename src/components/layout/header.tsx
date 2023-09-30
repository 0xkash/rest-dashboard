import Link from "next/link"

import { Logo } from "@/components/icons"
import Navigation from "@/components/navigation"
import { navigation } from "@/config/menu-items"
import ModeToggle from "@/components/mode-toggle"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-5 w-5" />
            <span className="inline-block">
              rest<span className="font-bold">/dashboard</span>
            </span>
          </Link>
          <Navigation items={navigation} />
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <MobileNavigation items={navigation} />
        </div>
      </div>
    </header>
  )
}
