import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

type Delay = 500 | 1000 | 1500 | 2000 | 2500

interface DividerProps extends ComponentProps<'div'> {
  animated?: boolean
  delay?: Delay
}

const Divider = ({ animated = false, delay = 500, children }: DividerProps) => {
  return (
    <div className='flex items-center mb-12'>
      <div className='relative w-full h-px bg-elevated overflow-hidden'>
        <div
          className={twMerge(
            'absolute w-full h-full bg-purple-600 translate-x-full',
            animated && `line-draw-left animation-delay-${delay}`
          )}
        ></div>
      </div>

      <div className='relative flex justify-center px-2'>{children}</div>

      <div className='relative w-full h-px bg-elevated overflow-hidden'>
        <div
          className={twMerge(
            'absolute w-full h-full bg-purple-600 translate-x-full',
            animated && `line-draw-right animation-delay-${delay}`
          )}
        ></div>
      </div>
    </div>
  )
}

export default Divider
