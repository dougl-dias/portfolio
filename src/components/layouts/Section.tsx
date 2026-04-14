import type { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

const Section = ({ className, children, ...props }: ComponentProps<'section'>) => {
  return (
    <section className={twMerge('relative bg-body', className)} {...props}>
      <div className='max-w-7xl mx-auto py-20 px-4'>{children}</div>
    </section>
  )
}

export default Section
