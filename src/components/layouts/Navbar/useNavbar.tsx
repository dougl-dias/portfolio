import { useEffect, useRef, useState } from 'react'

const useNavbar = (offset: number) => {
  const [active, setActive] = useState('')

  const lastSection = useRef<string | null>(null)

  useEffect(() => {
    const hash = location.hash

    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section')

      const current = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top < offset && rect.bottom > offset
      })

      if (current && lastSection.current !== current.id) {
        setActive(current.id)
        lastSection.current = current.id
      }
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset])

  return {
    active,
  }
}

export default useNavbar
