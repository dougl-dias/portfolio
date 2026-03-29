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
      <div className='min-h-screen bg-body'>
        <Header />

        <main className='p-4 flex-1'>
          <div className='container mx-auto'>
            <Home />
            <Project />
            <Skills />
            <About />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </AppProvider>
  )
}

export default App
