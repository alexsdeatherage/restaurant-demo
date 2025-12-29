import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

export function Gallery() {
  return (
    <section id="gallery" className="bg-muted/20 py-16 md:py-24">
      <div className="container space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Our Gallery</h2>
          <p className="text-pretty text-muted-foreground">A taste of what we serve</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {siteConfig.images.gallery.map((image, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
