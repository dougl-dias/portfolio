import { useTheme } from '../../hooks/useTheme'

import Button from '../ui/Button'

const ThemeButton = () => {
  const { dropdown, themes, currentTheme, toggleDropdown, handleToggleTheme } = useTheme()

  return (
    <Button onClick={toggleDropdown} className='relative p-2' size='md'>
      {currentTheme && <currentTheme.icon />}

      {dropdown && (
        <div className='absolute top-8 right-0 z-10 mt-2 origin-top-right rounded-md bg-card border border-default'>
          <ul className='py-1'>
            {themes.map(({ icon: Icon, text, value }) => (
              <li
                key={value}
                className='flex items-center gap-3 py-1.5 px-3 cursor-pointer'
                onClick={(e) => {
                  e.stopPropagation()
                  handleToggleTheme(value)
                }}
              >
                <Icon size={18} />
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Button>
  )
}

export default ThemeButton
