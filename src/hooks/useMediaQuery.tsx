import { useEffect, useState } from 'react'

export const useMediaQuery = (breakpoint: number) => {
  const [match, setMatch] = useState(() => window.innerWidth >= breakpoint)

  useEffect(() => {
    const handleResize = () => {
      setMatch(window.innerWidth >= breakpoint)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [breakpoint])

  return match
}
