import { useVisitLogger } from './hooks/useVisitLogger'
import { NavBar } from './components/NavBar'
import { HeroSection } from './components/HeroSection'
import { FeaturesGrid } from './components/FeaturesGrid'
import { StatsRow } from './components/StatsRow'
import { HowItWorksSection } from './components/HowItWorksSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export function App() {
  useVisitLogger()

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <NavBar />
      <HeroSection />
      <div className="bg-slate-950">
        <FeaturesGrid />
        <StatsRow />
        <HowItWorksSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}
