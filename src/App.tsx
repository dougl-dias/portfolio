import { Analytics } from '@vercel/analytics/react'

import AppProvider from './contexts/AppProvider'

import Home from './sections/Home'
import Project from './sections/Project'
import Services from './sections/Services'
import Skills from './sections/Skills'
import About from './sections/About'
import CTA from './sections/CTA'
import Contact from './sections/Contact'

import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

import './styles/index.css'

const App = () => {
  return (
    <AppProvider>
      <div className='min-h-screen'>
        <Header />

        <main className='relative z-10 flex-1'>
          <Home />
          <Project />
          <Services />
          <Skills />
          <About />
          <CTA />
          <Contact />
        </main>

        <Footer />

        <Analytics />
      </div>
    </AppProvider>
  )
}

export default App
