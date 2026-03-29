import type { ComponentProps } from 'react'

const InputControl = ({ ...props }: ComponentProps<'input'>) => {
  return (
    <input
      className='block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6'
      {...props}
    />
  )
}

export default InputControl
