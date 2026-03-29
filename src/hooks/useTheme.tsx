import { useContext } from 'react'

import { ThemeContext } from '../contexts/ThemeContext'

const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) throw new Error('Erro')

  return context
}

export default useTheme
