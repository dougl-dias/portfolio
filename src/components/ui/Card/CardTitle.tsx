import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

const CardTitle = ({ className, children, ...props }: ComponentProps<'h3'>) => {
  return (
    <h3 className={twMerge('text-xl font-semibold text-zinc-100 mb-3', className)} {...props}>
      {children}
    </h3>
  )
}

export default CardTitle
