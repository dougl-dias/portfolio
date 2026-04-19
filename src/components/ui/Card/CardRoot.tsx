import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

const CardRoot = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={twMerge(
        'group relative p-6 rounded-2xl bg-gradient-to-b from-card/80 to-card/40 border border-default overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_15px_40px_-10px_rgba(139,92,246,0.5)]',
        className
      )}
      {...props}
    >
      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition'>
        <div className='absolute -inset-1 bg-gradient-to-r from-violet-500/10 via-transparent to-violet-500/10 blur-xl' />
      </div>

      <div className='relative z-10 flex flex-col h-full'>
        <div>{children}</div>
      </div>
    </div>
  )
}

export { CardRoot }
