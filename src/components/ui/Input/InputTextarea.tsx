import { useInput } from '../../../hooks/useInput'

import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

const InputTextarea = ({ className, ...props }: ComponentProps<'textarea'>) => {
  const { id } = useInput()

  return (
    <textarea
      id={id}
      className={twMerge(
        'block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-primary placeholder:text-muted focus:outline-none sm:text-sm/6',
        className
      )}
      {...props}
    />
  )
}

export default InputTextarea
