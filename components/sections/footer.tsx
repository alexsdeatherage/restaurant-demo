import { MapPin, Phone, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">{siteConfig.restaurant.name}</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.restaurant.tagline}</p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-foreground">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Hours</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              {siteConfig.hours.map((hour, idx) => (
                <div key={idx}>
                  <div className="font-medium text-foreground">{hour.label}</div>
                  <div>{hour.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Follow Us</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {siteConfig.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.restaurant.name}. All rights reserved.
          </p>
          <p>Made with ❤️ for our community</p>
        </div>
      </div>
    </footer>
  )
}
