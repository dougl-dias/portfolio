import { createContext, useEffect, useState } from 'react'

import { themes, type ThemeContextProps, type ThemeValue } from '../constants/themes'

const ThemeContext = createContext<ThemeContextProps | null>(null)

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

  const values = {
    dropdown,
    themes,
    currentTheme,
    toggleDropdown,
    handleToggleTheme
  }

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
