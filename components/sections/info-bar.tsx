import { Clock, MapPin, Phone, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-config"

export function InfoBar() {
  return (
    <section id="location" className="bg-muted/30 py-16 md:py-24">
      <div className="container space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Visit Us</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-accent" />
                Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {siteConfig.hours.map((hour, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-sm font-medium">{hour.label}</div>
                  <div className="text-sm text-muted-foreground">{hour.value}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-accent" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{siteConfig.contact.address}</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                <a href={siteConfig.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Phone className="h-5 w-5 text-accent" />
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{siteConfig.contact.phone}</p>
                <p className="text-sm text-muted-foreground">{siteConfig.contact.email}</p>
              </div>
              <Button size="sm" className="w-full" asChild>
                <a href={`tel:${siteConfig.contact.phone}`}>Call Now</a>
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
