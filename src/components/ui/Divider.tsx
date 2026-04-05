import type { ComponentProps } from 'react'
import { FaDiamond } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

type Delay = 500 | 1000 | 1500 | 2000 | 2500

interface DividerProps extends ComponentProps<'div'> {
  animated?: boolean
  delay?: Delay
}

const Divider = ({ animated = false, delay = 500 }: DividerProps) => {
  return (
    <div className='flex items-center mb-12'>
      <div className='relative w-full h-px bg-zinc-200/25 overflow-hidden'>
        <div
          className={twMerge(
            'absolute w-full h-full bg-purple-600 translate-x-full',
            animated && `animate-pulseLeft animation-delay-${delay}`,
          )}
        ></div>
      </div>

      <div className='relative flex justify-center'>
        <span className='text-sm px-2 text-secondary text-nowrap'>
          <div className='p-2 rounded-full bg-card border border-default'>
            <span className='text-violet-600 text-xs'>
              <FaDiamond />
            </span>
          </div>
        </span>
      </div>

      <div className='relative w-full h-px bg-zinc-200/25 overflow-hidden'>
        <div
          className={twMerge(
            'absolute w-full h-full bg-purple-600 translate-x-full',
            animated && `animate-pulseRight animation-delay-${delay}`,
          )}
        ></div>
      </div>
    </div>
  )
}

export default Divider
