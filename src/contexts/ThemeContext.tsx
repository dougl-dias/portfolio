import { createContext, useEffect, useState } from 'react'

import { themes, type ThemeContextProps, type ThemeValue } from '../constants/themes'

const ThemeContext = createContext<ThemeContextProps | null>(null)

const resolvedTheme = (value: ThemeValue): 'dark' | 'light' => {
  if (value === 'system') {
    if (typeof window === 'undefined') return 'dark'

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }
  return value
}

const applyTheme = (value: ThemeValue) => {
  if (typeof document === 'undefined') return

  const resolved = resolvedTheme(value)

  document.documentElement.classList.remove('dark', 'light')
  document.documentElement.classList.add(resolved)
}

const isThemeValue = (value: string | null): value is ThemeValue => {
  return value === 'light' || value === 'dark' || value === 'system'
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dropdown, setDropdown] = useState(false)

  const [theme, setTheme] = useState<ThemeValue>(() => {
    if (typeof window === 'undefined') return 'system'

    const storedTheme = localStorage.getItem('theme')

    return isThemeValue(storedTheme) ? storedTheme : 'system'
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
    applyTheme(theme)

    if (theme !== 'system') return

    const media = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      applyTheme('system')
    }

    media.addEventListener('change', handleChange)

    return () => {
      media.removeEventListener('change', handleChange)
    }
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
