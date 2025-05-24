import { AboutSection } from "@/components/sections/about-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectSection } from "@/components/sections/project-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Page() {
  return (
    <main className="">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <FooterSection />
    </main>
  )
}
