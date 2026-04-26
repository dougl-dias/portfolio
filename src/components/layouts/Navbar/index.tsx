import useNavbar from './useNavbar'

import { tv } from 'tailwind-variants'

import { links } from '../../../constants/links'

const link = tv({
  base: 'inline-flex items-center text-sm font-medium py-1.5 px-2 rounded-md text-secondary transition border border-transparent lg:px-4',
  variants: {
    active: {
      true: 'bg-card border-default text-primary font-bold'
    }
  },
  defaultVariants: {
    active: false
  }
})

const Navbar = () => {
  const { active } = useNavbar(110)

  return (
    <nav className='py-2 px-3 bg-base/50 backdrop-blur-xl border border-default rounded-xl sm:bg-base/30'>
      <ul className='flex items-center justify-center gap-2 sm:gap-1.5'>
        {links.map(({ to, text, icon: Icon }) => (
          <li key={to}>
            <a href={`#${to}`} className={link({ active: active === to })}>
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
