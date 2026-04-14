import type { IconType } from 'react-icons'
import { HiEnvelope, HiFolder, HiHome, HiLightBulb, HiUser } from 'react-icons/hi2'

interface LinkProps {
  to: string
  text: string
  icon: IconType
}

export const links = [
  { to: 'home', icon: HiHome, text: 'Home' },
  { to: 'projects', icon: HiFolder, text: 'Projetos' },
  { to: 'skills', icon: HiLightBulb, text: 'Habilidades' },
  { to: 'about', icon: HiUser, text: 'Sobre' },
  { to: 'contact', icon: HiEnvelope, text: 'Contato' }
] as LinkProps[]
