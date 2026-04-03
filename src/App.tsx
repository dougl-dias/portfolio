import AppProvider from './contexts/AppProvider'

import Home from './sections/Home'
import Project from './sections/Project'
import Skills from './sections/Skills'
import About from './sections/About'
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
          <Skills />
          <About />
          <Contact />
        </main>

        <Footer />
      </div>
    </AppProvider>
  )
}

export default App
