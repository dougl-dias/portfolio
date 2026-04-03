import type { ComponentProps } from 'react'
import { FaDiamond } from 'react-icons/fa6'

type Delay = 500 | 1000 | 1500 | 2000 | 2500

interface DividerProps extends ComponentProps<'div'> {
  animated?: boolean
  delay?: Delay
}

const Divider = ({ animated = false, delay = 500 }: DividerProps) => {
  return (
    <div className='flex items-center mb-12'>
      <div className='relative w-full h-px bg-zinc-200/25 overflow-hidden'>
        {animated && (
          <div
            className={`absolute w-full h-full bg-purple-600 animate-pulseLeft translate-x-full animation-delay-${delay}`}
          ></div>
        )}
      </div>

      <div className='relative flex justify-center'>
        <span className='text-sm px-2 text-secondary text-nowrap'>
          <div className='p-2 rounded-full bg-zinc-900 border border-zinc-800/75'>
            <span className='text-violet-600 text-xs'>
              <FaDiamond />
            </span>
          </div>
        </span>
      </div>

      <div className='relative w-full h-px bg-zinc-200/25 overflow-hidden'>
        {animated && (
          <div
            className={`absolute w-full h-full bg-purple-600 animate-pulseRight -translate-x-full animation-delay-${delay}`}
          ></div>
        )}
      </div>
    </div>
  )
}

export default Divider
