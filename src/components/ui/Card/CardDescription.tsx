import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

const CardDescription = ({ className, children, ...props }: ComponentProps<'p'>) => {
  return (
    <p className={twMerge('text-sm text-zinc-400 leading-relaxed mb-6', className)} {...props}>
      {children}
    </p>
  )
}

export default CardDescription
