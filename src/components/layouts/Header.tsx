import { useEffect, useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'

import ThemeButton from '../ui/ThemeButton'
import Navbar from './Navbar'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [progressbar, setProgressbar] = useState<number>(0)

  const showThemeButton = useMediaQuery(640)

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement
      const value = doc.scrollTop / (doc.scrollHeight - doc.clientHeight)

      setProgressbar(value)
      setIsScrolled(doc.scrollTop > 80)
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'py-2 bg-base/75 backdrop-blur-xl border-b shadow-md sm:bg-base/50'
            : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className='absolute top-0 left-0 w-full h-[3px] z-50'>
          <div
            className='w-full h-full bg-gradient-to-r from-violet-300 to-violet-800 rounded-full origin-left'
            style={{ transform: `scaleX(${progressbar})` }}
          ></div>
        </div>

        <div className='flex items-center justify-between max-w-7xl mx-auto px-4'>
          <a href='/' className='text-primary font-bold  italic'>
            Dougl-Dias
          </a>

          {showThemeButton && <Navbar />}

          <ThemeButton />
        </div>
      </header>

      {!showThemeButton && (
        <div className='fixed z-50 w-full bottom-0 p-3'>
          <Navbar />
        </div>
      )}
    </>
  )
}

export default Header
