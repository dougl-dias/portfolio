import { useMediaQuery } from '../../hooks/useMediaQuery'

import ThemeButton from './ThemeButton'
import Navbar from './Navbar'

const Header = () => {
  const showThemeButton = useMediaQuery(640)

  return (
    <>
      <header className='fixed top-0 z-50 w-full py-2 px-3 bg-body border-b border-default sm:border-none sm:bg-transparent'>
        <div className='flex items-center justify-between container py-2 px-3 mx-auto lg:px-16'>
          <h1 className='text-primary font-bold'>Dougl-Dias</h1>

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
