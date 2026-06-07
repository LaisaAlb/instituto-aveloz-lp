import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ObjectivesSection from './sections/ObjectivesSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'
import GovernanceSection from './sections/GovernanceSection'
import BlogSection from './sections/BlogSection'
import AreasSection from './sections/AreasSection'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 transition-all duration-300">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ObjectivesSection />
        <AreasSection />
        <GovernanceSection />
        <BlogSection />
        <ContactSection />
        <FooterSection />
      </main>

    </div>
  )
}

export default App