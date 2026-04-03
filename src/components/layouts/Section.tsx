import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const Section = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <section className={twMerge('relative bg-body', className)} {...props}>
      {children}
    </section>
  )
}

export default Section
