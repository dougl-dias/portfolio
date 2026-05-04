import { tv } from 'tailwind-variants'

export const linkStyle = tv({
  base: 'inline-flex items-center text-sm font-medium py-1.5 px-2 rounded-md text-secondary transition border border-transparent lg:px-4',
  variants: {
    active: {
      true: 'bg-card border-DEFAULT text-primary font-bold'
    }
  },
  defaultVariants: {
    active: false
  }
})
