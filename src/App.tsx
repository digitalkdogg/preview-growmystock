import { NavBar } from './components/NavBar'
import { HeroSection } from './components/HeroSection'
import { FeaturesGrid } from './components/FeaturesGrid'
import { StatsRow } from './components/StatsRow'
import { HowItWorksSection } from './components/HowItWorksSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f7faf7' }}>
      <NavBar />
      <main>
        <HeroSection />
        <div className="max-w-6xl mx-auto" style={{ backgroundColor: '#f7faf7' }}>
          <FeaturesGrid />
          <StatsRow />
        </div>
        <HowItWorksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
