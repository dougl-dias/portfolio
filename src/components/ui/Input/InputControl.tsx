import { useInput } from '../../../hooks/useInput'

import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

const InputControl = ({ className, ...props }: ComponentProps<'input'>) => {
  const { id } = useInput()

  return (
    <input
      id={id}
      className={twMerge(
        'block w-full bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6',
        className
      )}
      {...props}
    />
  )
}

export default InputControl
