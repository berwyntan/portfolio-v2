import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Intro />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </BrowserRouter>
    </>
    
  )
}

export default App
