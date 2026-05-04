import useNavbar from './useNavbar'

import { linkStyle } from './style'

import { links } from '../../../constants/links'

const Navbar = () => {
  const { active } = useNavbar(110)

  return (
    <nav className='py-2 px-3 bg-base/50 backdrop-blur-xl border rounded-xl sm:bg-base/30'>
      <ul className='flex items-center justify-center gap-2 sm:gap-1.5'>
        {links.map(({ to, text, icon: Icon }) => (
          <li key={to}>
            <a href={`#${to}`} className={linkStyle({ active: active === to })}>
              <Icon className='text-xl shrink-0 sm:hidden' />
              <span className='hidden sm:inline-block'>{text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
