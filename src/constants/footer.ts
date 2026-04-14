import type { IconType } from 'react-icons'
import { GrGithub, GrInstagram, GrLinkedinOption } from 'react-icons/gr'

type SocialType = 'instagram' | 'linkedIn' | 'github'

interface SocialIcon {
  type: SocialType
  href: string
  icon: IconType
}

const socialIcons = [
  {
    type: 'instagram',
    href: 'https://www.instagram.com/dougl_dias/',
    icon: GrInstagram
  },
  {
    type: 'linkedIn',
    href: 'https://www.linkedin.com/in/dougl-dias/',
    icon: GrLinkedinOption
  },
  {
    type: 'github',
    href: 'https://github.com/dougl-dias/',
    icon: GrGithub
  }
] satisfies SocialIcon[]

export { socialIcons }
