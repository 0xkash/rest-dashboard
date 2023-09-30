import { site } from "@/config/site"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-4 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with <Heart className="inline h-4 w-4" color="#a51d2d" /> by{" "}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            kash
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
