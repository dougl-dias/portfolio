import { createContext, useEffect, useState } from 'react'

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

const ThemeContext = createContext({} as ThemeContextProps)

const themes = [
  {
    icon: MdOutlineLightMode,
    text: 'Claro',
    value: 'light',
  },
  {
    icon: MdOutlineDarkMode,
    text: 'Escuro',
    value: 'dark',
  },
  {
    icon: MdOutlineMonitor,
    text: 'Sistema',
    value: 'system',
  },
] satisfies ThemeProps[]

const resolvedTheme = (value: ThemeValue): 'dark' | 'light' => {
  if (value === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }
  return value
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dropdown, setDropdown] = useState(false)

  const [theme, setTheme] = useState<ThemeValue>(() => {
    if (typeof window === 'undefined') return 'system'
    return (localStorage.getItem('theme') as ThemeValue) || 'system'
  })

  const toggleDropdown = () => {
    setDropdown((prev) => !prev)
  }

  const handleToggleTheme = (value: ThemeValue) => {
    localStorage.setItem('theme', value)
    setTheme(value)
    setDropdown(false)
  }

  useEffect(() => {
    const resolved = resolvedTheme(theme)

    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(resolved)
  }, [theme])

  const currentTheme = themes.find(({ value }) => value === theme)

  if (!currentTheme) {
    throw new Error('Invalid theme')
  }

  return (
    <ThemeContext.Provider
      value={{
        dropdown,
        themes,
        currentTheme,
        toggleDropdown,
        handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
