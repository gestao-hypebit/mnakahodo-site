import Hero from "@/components/hero"
import Services from "@/components/services"
import Differentials from "@/components/differentials"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Scrolling from "@/components/scrolling"
import About from "@/components/about"
import Stats from "@/components/stats"
import Partners from "@/components/partners"
import CtaProspect from "@/components/cta-prospect"

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Scrolling/> */}
      <About/>
      <Services />
      <CtaProspect/>
      <Stats/>
      <Differentials />
      <Partners/>
      {/* <Portfolio /> */}
      <Testimonials />
      <CTA />
    </main>
  )
}
