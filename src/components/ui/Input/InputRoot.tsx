import { createContext, useId } from 'react'

interface InputContextProps {
  id: string
}

const InputContext = createContext<InputContextProps | null>(null)

const InputRoot = ({ children }: { children: React.ReactNode }) => {
  const id = useId()

  return (
    <InputContext.Provider value={{ id }}>
      <div className='col-span-full'>{children}</div>
    </InputContext.Provider>
  )
}

export { InputContext, InputRoot }
