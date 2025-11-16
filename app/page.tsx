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
import Academic from "@/components/academic"
import Experience from "@/components/experience"
import LecturesHighlight from "@/components/lectures"
import CoursesHighlight from "@/components/courses"

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Scrolling/> */}
      <About/>
      <CtaProspect/>
      <CoursesHighlight/>

      <Services />
      {/* <LecturesHighlight/> */}
         {/* <CtaProspect/> */}
      <Academic/>
      <Stats/>
      {/* <Experience/> */}
      <Differentials />
      <Partners/>
      {/* <Portfolio /> */}
      <Testimonials />
      <CTA />
    </main>
  )
}
