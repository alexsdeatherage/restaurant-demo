"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { menuData } from "@/lib/menu"

export function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id)

  const activeItems = menuData.find((cat) => cat.id === activeCategory)?.items || []

  const tagLabels: Record<string, string> = {
    V: "Vegetarian",
    GF: "Gluten-Free",
    Spicy: "Spicy",
  }

  return (
    <section id="menu" className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Our Menu</h2>
          <p className="text-pretty text-muted-foreground">Made fresh daily with authentic Italian recipes</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {menuData.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activeItems.map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <span className="text-lg font-bold text-accent">{item.price}</span>
                </div>
                <CardDescription className="text-sm">{item.desc}</CardDescription>
              </CardHeader>
              {item.tags && item.tags.length > 0 && (
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, tagIdx) => (
                      <Badge key={tagIdx} variant="secondary" className="text-xs">
                        {tagLabels[tag] || tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="#menu">View Full Menu</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
