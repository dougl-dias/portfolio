import type { ComponentProps } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

import type { IconType } from 'react-icons'

const button = tv({
  base: 'inline-flex items-center justify-center gap-2 font-medium text-center shadow-sm transition focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600/25',
  variants: {
    variant: {
      solid: '',
      outline: 'bg-transparent border',
    },
    color: {
      primary: '',
      info: '',
      success: '',
      warning: '',
      danger: '',
      neutral: '',
      white: '',
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-2.5 text-lg',
    },
    shape: {
      rounded: 'rounded-md',
      circle: 'rounded-full',
    },
  },
  compoundVariants: [
    // SOLID
    {
      variant: 'solid',
      color: 'primary',
      class: 'bg-violet-600 text-zinc-50 hover:bg-violet-700',
    },
    {
      variant: 'solid',
      color: 'info',
      class: 'bg-sky-600 text-zinc-50 hover:bg-sky-700',
    },
    {
      variant: 'solid',
      color: 'success',
      class: 'bg-green-600 text-zinc-50 hover:bg-green-700',
    },
    {
      variant: 'solid',
      color: 'warning',
      class: 'bg-amber-400 text-zinc-50 hover:bg-amber-500',
    },
    {
      variant: 'solid',
      color: 'danger',
      class: 'bg-red-600 text-zinc-50 hover:bg-red-700',
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: 'bg-card border border-default text-primary',
    },
    {
      variant: 'solid',
      color: 'white',
      class: 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200',
    },
    // OUTLINE
    {
      variant: 'outline',
      color: 'primary',
      class: 'border-violet-600 text-violet-400 hover:bg-violet-600/25',
    },
    {
      variant: 'outline',
      color: 'info',
      class: 'border-sky-600 text-sky-400 hover:bg-sky-600/25',
    },
    {
      variant: 'outline',
      color: 'success',
      class: 'border-green-600 text-green-400 hover:bg-green-600/25',
    },
    {
      variant: 'outline',
      color: 'warning',
      class: 'border-amber-400 text-amber-400 hover:bg-amber-400/25',
    },
    {
      variant: 'outline',
      color: 'danger',
      class: 'border-red-600 text-red-400 hover:bg-red-600/25',
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: 'border-default text-primary hover:bg-neutral-600/25',
    },
    {
      variant: 'outline',
      color: 'white',
      class: 'border-zinc-300 text-zinc-100 hover:bg-zinc-100/25',
    },
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'neutral',
    size: 'sm',
    shape: 'rounded',
  },
})

type ButtonVariants = VariantProps<typeof button>

interface ButtonProps extends Omit<ComponentProps<'button'>, 'color'>, ButtonVariants {
  icon?: IconType
}

const Button = ({ variant, color, size, shape, icon: Icon, className, children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={button({ variant, color, size, shape, className })}>
      {Icon && <Icon className='shrink-0' />}
      {children}
    </button>
  )
}

export default Button
