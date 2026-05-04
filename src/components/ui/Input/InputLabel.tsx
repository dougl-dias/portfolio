import { useInput } from '../../../hooks/useInput'

import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

const InputLabel = ({ className, children, ...props }: ComponentProps<'label'>) => {
  const { id } = useInput()

  return (
    <label htmlFor={id} className={twMerge('block text-sm/6 font-medium text-primary mb-1.5', className)} {...props}>
      {children}
    </label>
  )
}

export default InputLabel
