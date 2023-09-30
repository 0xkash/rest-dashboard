"use client"

import React from "react"

import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Logo } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { NavigationItem } from "@/config/menu-items"

export function MobileNavigation({ items }: { items: NavigationItem[] }) {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Logo className="mr-2 h-5 w-5" />
          <span className="inline-block">
            rest<span className="font-bold">/dashboard</span>
          </span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-3">
            {items.map((item) =>
              item.items ? (
                <div className="flex flex-col space-y-2 pt-6" key={item.title}>
                  <span key={item.title} className="block font-bold">
                    {item.title}
                  </span>
                  {item.items.map(
                    (subitem) =>
                      subitem.href && (
                        <MobileLink
                          key={subitem.href}
                          href={subitem.href}
                          onOpenChange={setOpen}
                          className="block"
                        >
                          {subitem.title}
                        </MobileLink>
                      )
                  )}
                </div>
              ) : (
                <span key={item.title} className="font-bold">
                  {item.title}
                </span>
              )
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
