
import './App.css'

import Navbar from './component/Navbar.jsx'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import Skill from './component/Skill.jsx'
import Projects from './component/Projects.jsx'
import Experience from './component/Experience.jsx'
import Education from './component/Education.jsx'
import Contact from './component/Contact.jsx'
function App() {
  return (
    <div>

      {/* Navbar Component */}
      <Navbar />

      {/* Hero Component */}
      <Hero />
    ​​​    {/* About Component */}
      <About />
      {/* Skill Component */}
      <Skill />
     
      {/* Projects Component */}
      <Projects />
      {/* Experience Component */}
      <Experience />

      {/*Education Component */}
      <Education />
      
      <Contact />

      {/* Footer */}
      <footer className="footer text-center">
        <p className="mb-0">
          © 2026 My Portfolio. Built with React & Bootstrap.
        </p>
      </footer>

    </div>
  )
}

export default App
