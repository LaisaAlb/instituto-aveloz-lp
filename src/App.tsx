import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'
import GovernanceSection from './sections/GovernanceSection'
import ParticipateSection from './sections/ParticipateSection'
import AreasSection from './sections/AreasSection'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 transition-all duration-300">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AreasSection />
        <GovernanceSection />
        <ParticipateSection />
        <ContactSection />
        <FooterSection />
      </main>

    </div>
  )
}

export default App