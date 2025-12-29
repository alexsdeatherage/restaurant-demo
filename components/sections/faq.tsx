import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siteConfig } from "@/lib/site-config"

export function FAQ() {
  return (
    <section className="bg-muted/20 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
            <p className="text-pretty text-muted-foreground">Everything you need to know</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {siteConfig.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-pretty text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
