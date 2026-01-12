import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="container py-12 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {siteConfig.restaurant.name}
            </h1>
            <p className="text-pretty text-xl text-muted-foreground md:text-2xl">{siteConfig.restaurant.tagline}</p>
            <p className="text-pretty text-base text-muted-foreground md:text-lg">
              {siteConfig.restaurant.shortDescription}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href={siteConfig.ctas.primary.href}>{siteConfig.ctas.primary.label}</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={siteConfig.ctas.secondary.href}>{siteConfig.ctas.secondary.label}</a>
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-auto lg:h-[500px]">
          <Image
            src={siteConfig.images.hero || "/placeholder.svg"}
            alt={`${siteConfig.restaurant.name} interior`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
