import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function Testimonials() {
  return (
    <section className="container py-16 md:py-24">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">What Our Guests Say</h2>
          <p className="text-pretty text-muted-foreground">Loved by the community</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {siteConfig.testimonials.map((testimonial, idx) => (
            <Card key={idx}>
              <CardContent className="space-y-4 p-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-pretty text-sm text-muted-foreground">"{testimonial.quote}"</p>
                <p className="text-sm font-semibold">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
