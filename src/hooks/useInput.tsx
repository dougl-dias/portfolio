import { useContext } from 'react'

import { InputContext } from '../components/ui/Input/InputRoot'

export const useInput = () => {
  const context = useContext(InputContext)

  if (!context) throw new Error('useInput must be used within Input.Root')

  return context
}
