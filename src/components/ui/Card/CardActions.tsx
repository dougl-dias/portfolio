import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

const CardAction = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={twMerge('flex gap-3 mt-auto', className)} {...props}>
      {children}
    </div>
  )
}

export default CardAction
