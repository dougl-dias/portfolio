import { links } from '../../constants/links'
import { socialIcons } from '../../constants/footer'
import { ButtonLink } from '../ui/Button'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='pt-12 pb-24 px-4 bg-base border-t border sm:pb-16'>
      <div className='flex flex-col items-center gap-8'>
        <h2 className='text-3xl font-bold text-primary'>Dougl-dias</h2>

        <ul className='flex flex-col items-center gap-2 sm:flex-row'>
          {links.map(({ to, text }) => {
            const href = `#${to}`

            return (
              <li key={to}>
                <a
                  href={href}
                  className='text-secondary outline-none p-2 transition hover:text-primary focus-visible:text-primary'
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className='flex items-center gap-4'>
          {socialIcons.map(({ type, href, icon: Icon }) => (
            <li key={type}>
              <ButtonLink
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 border-2 rounded-xl'
                size='md'
                hover='glow'
                variant='outline'
                icon={Icon}
              />
            </li>
          ))}
        </ul>

        <p className='text-center text-secondary'>
          © {year} <span className='text-primary'>Douglas Dias</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
