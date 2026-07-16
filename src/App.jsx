import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Projects />
        <ProjectDetails />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
