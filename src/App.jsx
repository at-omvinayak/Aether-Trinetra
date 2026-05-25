import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Services from "./sections/Services"
import Work from "./sections/Work"
import Process from "./sections/Process"
import Careers from "./sections/Careers"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <About />

      <Services />

      <Work />

      <Process />

      <Careers />

      <Contact />

    </div>
  )
}

export default App