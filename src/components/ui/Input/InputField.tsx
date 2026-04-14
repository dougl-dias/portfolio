import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

const InputField = ({ className, children }: ComponentProps<'div'>) => {
  return (
    <div
      className={twMerge(
        'flex items-center gap-2 rounded-md bg-white/5 pl-3 ring-1 ring-zinc-50/15 focus-within:ring-violet-600 transition',
        className
      )}
    >
      {children}
    </div>
  )
}

export default InputField
