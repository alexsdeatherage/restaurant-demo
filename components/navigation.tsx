"use client"

import { useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Location", href: "#location" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">{siteConfig.restaurant.name}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" asChild>
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" asChild className="w-full">
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
