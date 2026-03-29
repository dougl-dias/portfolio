import { useEffect, useRef, useState } from 'react'

import type { IconType } from 'react-icons'
import { HiEnvelope, HiFolder, HiHome, HiLightBulb, HiUser } from 'react-icons/hi2'

interface LinkProps {
  to: string
  text: string
  icon: IconType
}

const links = [
  { to: 'home', icon: HiHome, text: 'Home' },
  { to: 'projects', icon: HiFolder, text: 'Projetos' },
  { to: 'skills', icon: HiLightBulb, text: 'Habilidades' },
  { to: 'about', icon: HiUser, text: 'Sobre' },
  { to: 'contact', icon: HiEnvelope, text: 'Contato' },
] as LinkProps[]

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
    links,
  }
}

export default useNavbar
