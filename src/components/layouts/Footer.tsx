import { tv } from 'tailwind-variants'

import type { IconType } from 'react-icons'
import { GrGithub, GrInstagram, GrLinkedinOption } from 'react-icons/gr'

import { links } from './Navbar/links'

type SocialType = 'instagram' | 'linkedIn' | 'github'

interface SocialIcon {
  type: SocialType
  href: string
  icon: IconType
}

const socialIcons: SocialIcon[] = [
  {
    type: 'instagram',
    href: 'https://www.instagram.com/dougl_dias/',
    icon: GrInstagram,
  },
  {
    type: 'linkedIn',
    href: 'https://www.linkedin.com/in/dougl-dias/',
    icon: GrLinkedinOption,
  },
  {
    type: 'github',
    href: 'https://github.com/dougl-dias/',
    icon: GrGithub,
  },
]

const socialIcon = tv({
  base: 'w-10 h-10 inline-flex items-center justify-center rounded-xl border border-zinc-700 text-zinc-400 backdrop-blur-sm bg-zinc-900/40 transition-all duration-300 ease-out hover:scale-110 hover:shadow-lg focus-visible:outline-none focus-visible:scale-110 focus-visible:shadow-lg',
  variants: {
    type: {
      instagram:
        'hover:bg-violet-500/20 hover:border-violet-500 hover:text-violet-400 focus-visible:bg-violet-500/20 focus-visible:border-violet-500 focus-visible:text-violet-400',
      linkedIn:
        'hover:bg-sky-500/20 hover:border-sky-500 hover:text-sky-400 focus-visible:bg-sky-500/20 focus-visible:border-sky-500 focus-visible:text-sky-400',
      github:
        ' hover:bg-zinc-500/20 hover:border-zinc-400 hover:text-white focus-visible:bg-zinc-500/20 focus-visible:border-zinc-400 focus-visible:text-white',
    },
  },
})

const Footer = () => {
  return (
    <footer className='pt-12 pb-24 bg-body border-t border-default sm:pb-16'>
      <div className='flex flex-col items-center p-4 gap-8'>
        <h2 className='text-3xl font-bold text-primary'>Dougl-dias</h2>

        <ul className='flex flex-col items-center gap-2 sm:flex-row'>
          {links.map(({ to, text }) => (
            <li key={to}>
              <a
                href={`#${to}`}
                className='text-secondary outline-none p-2 hover:text-primary focus-visible:text-primary'
              >
                {text}
              </a>
            </li>
          ))}
        </ul>

        <ul className='flex items-center gap-4'>
          {socialIcons.map(({ type, href, icon: Icon }) => (
            <li key={type}>
              <a href={href} target='_blank' rel='noopener noreferrer' className={socialIcon({ type })}>
                {<Icon />}
              </a>
            </li>
          ))}
        </ul>

        <p className='text-center text-secondary'>
          © {new Date().getFullYear()} <span className='text-primary'>Douglas Dias</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
