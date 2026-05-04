import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

const CardDivider = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div className={twMerge('h-[1px] w-full bg-elevated mb-3', className)} {...props} />
}

export default CardDivider
