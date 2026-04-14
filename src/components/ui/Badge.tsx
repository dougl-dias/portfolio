import type { ComponentProps } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

import type { IconType } from 'react-icons'

const badge = tv({
  base: 'inline-flex items-center gap-1.5 text-sm font-medium cursor-default p-1 px-2 ring-1',
  variants: {
    color: {
      primary: 'bg-purple-600/25 ring-purple-700 text-primary',
      info: 'bg-sky-600/25 ring-sky-700 text-primary',
      success: 'bg-green-600/25 ring-green-700 text-primary',
      warning: 'bg-amber-400/25 ring-amber-700 text-primary',
      danger: 'bg-red-600/25 ring-red-700 text-primary',
      neutral: 'bg-neutral-600/25 ring-neutral-700 text-primary',
      white: 'bg-zinc-100/25 ring-zinc-700 text-zinc-800'
    },
    pill: {
      true: 'rounded-full',
      false: 'rounded-md'
    }
  },
  defaultVariants: {
    color: 'primary',
    pill: false
  }
})

type BadgeVariants = VariantProps<typeof badge>

interface BadgeProps extends Omit<ComponentProps<'span'>, 'color'>, BadgeVariants {
  icon?: IconType
}

const Badge = ({ color, pill, icon: Icon, className, children, ...props }: BadgeProps) => {
  return (
    <span {...props} className={badge({ color, pill, className })}>
      {Icon && <Icon />}
      {children}
    </span>
  )
}

export default Badge
