import { lazy } from 'react'
import lozad from 'lozad'
import './App.css'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Intro from './components/Intro'

const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

function App() {

  useEffect(() => {
    const observer = lozad() // lazy loads elements with default selector as '.lozad'
    observer.observe()
  }, [])  
  
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Intro />
        <About />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
    
  )
}

export default App
