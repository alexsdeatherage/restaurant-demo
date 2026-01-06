import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

export function About() {
  return (
    <section id="about" className="container py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-auto lg:h-[400px]">
          <Image src="/images/originals/chef.jpg" alt="Our story" fill className="object-cover" />
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
          <div className="space-y-4 text-pretty text-muted-foreground">
            <p>
              In 1985, Nonna Maria brought her family recipes from a small village in Tuscany to downtown. What started
              as a dream to share authentic Italian cuisine has grown into a beloved neighborhood staple.
            </p>
            <p>
              Today, three generations later, we continue to honor Nonna's tradition of using only the freshest
              ingredients, preparing everything from scratch, and treating every guest like family. Our pasta is made
              daily, our sauces simmer for hours, and our love for Italian food shines through in every dish.
            </p>
            <p>
              Whether you're joining us for a quick lunch, a romantic dinner, or a family celebration, we promise to
              serve you food made with the same care and passion that Nonna Maria brought to her kitchen 40 years ago.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.features.map((feature, idx) => (
              <div key={idx} className="space-y-1">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
