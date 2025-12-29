import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { SocialProof } from "@/components/sections/social-proof"
import { MenuPreview } from "@/components/sections/menu-preview"
import { Gallery } from "@/components/sections/gallery"
import { About } from "@/components/sections/about"
import { InfoBar } from "@/components/sections/info-bar"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <MenuPreview />
        <Gallery />
        <About />
        <InfoBar />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
