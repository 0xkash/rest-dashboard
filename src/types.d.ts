export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export type Property = {
  id: number
  url: string
  address: string
  city: string
  price: number
  area: number
  rooms: number | null
  availableOn: string | null
  description: string | null
  metaData: object[] | null
  images: string[]
  createdOn: string
  updatedOn: string | null
  scraperId: number
}

export type ScraperFitler = {
  city: string[]
  minPrice: number | null
  maxPrice: number | null
  minArea: number | null
  maxArea: number | null
  minBedrooms: number | null
  maxBedrooms: number | null
}

export type Scraper = {
  id: number
  url: string
  scraper: string | null
  filter: ScraperFitler
  state: string
  taskId: string | null
  createdOn: string
  updatedOn: string | null
  properties: Property[]
}
