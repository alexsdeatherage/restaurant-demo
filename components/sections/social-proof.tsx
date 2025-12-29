import { Star, Users, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SocialProof() {
  const stats = [
    {
      icon: Star,
      value: "4.8★",
      label: "Google Rating",
    },
    {
      icon: Users,
      value: "1,200+",
      label: "Happy Customers",
    },
    {
      icon: Calendar,
      value: "Since 1985",
      label: "Family Tradition",
    },
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat, idx) => (
            <Card key={idx} className="border-none bg-transparent shadow-none">
              <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
                <stat.icon className="h-8 w-8 text-accent" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
