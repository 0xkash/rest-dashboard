import { ReactNode } from "react"
import { PlusSquare, Star, Table } from "lucide-react"

export type NavigationItem = {
  title: string
  href?: string
  description?: string
  icon?: ReactNode
  items?: NavigationItem[]
}
export const navigation: NavigationItem[] = [
  {
    title: "Scrapers",
    items: [
      {
        title: "Overview",
        href: "#",
        icon: <Table className="h-4 w-4" />,
        description: "An overview of all scrappers that have been created.",
      },
      {
        title: "Add Scraper",
        href: "#",
        icon: <PlusSquare className="h-4 w-4" />,
        description:
          "Add a new scraper to that can be used to collect property data.",
      },
    ],
  },
  {
    title: "Properties",
    items: [
      {
        title: "Overview",
        href: "#",
        icon: <Table className="h-4 w-4" />,
        description:
          "An overview of all properties that have been scraped by the scraper API.",
      },
      {
        title: "Add Property",
        href: "#",
        icon: <PlusSquare className="h-4 w-4" />,
        description:
          "Add a new property manually to the scraper API. This will be scraped and added to the overview.",
      },
      {
        title: "Saved Properties",
        href: "#",
        icon: <Star className="h-4 w-4" />,
        description: "A list of all properties that have been saved by you.",
      },
    ],
  },
]
