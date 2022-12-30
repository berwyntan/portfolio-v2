import { lazy } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Intro from './components/Intro'

const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  
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
