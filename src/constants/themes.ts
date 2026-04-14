import type { IconType } from 'react-icons'
import { MdOutlineDarkMode, MdOutlineLightMode, MdOutlineMonitor } from 'react-icons/md'

type ThemeText = 'Claro' | 'Escuro' | 'Sistema'
type ThemeValue = 'dark' | 'light' | 'system'

interface ThemeProps {
  icon: IconType
  text: ThemeText
  value: ThemeValue
}

interface ThemeContextProps {
  dropdown: boolean
  themes: ThemeProps[]
  currentTheme: ThemeProps
  toggleDropdown: () => void
  handleToggleTheme: (value: ThemeValue) => void
}

const themes = [
  {
    icon: MdOutlineLightMode,
    text: 'Claro',
    value: 'light'
  },
  {
    icon: MdOutlineDarkMode,
    text: 'Escuro',
    value: 'dark'
  },
  {
    icon: MdOutlineMonitor,
    text: 'Sistema',
    value: 'system'
  }
] satisfies ThemeProps[]

export { themes, type ThemeValue, type ThemeContextProps }
