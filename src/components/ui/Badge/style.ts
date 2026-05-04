import { tv, type VariantProps } from 'tailwind-variants'

export const badgeStyle = tv({
  base: 'inline-flex items-center gap-1.5 text-sm font-medium cursor-default p-1 px-2 ring-1',
  variants: {
    color: {
      primary: 'bg-purple-600/25 ring-purple-700 text-primary',
      info: 'bg-sky-600/25 ring-sky-700 text-primary',
      success: 'bg-green-600/25 ring-green-700 text-primary',
      warning: 'bg-amber-400/25 ring-amber-700 text-primary',
      danger: 'bg-red-600/25 ring-red-700 text-primary',
      neutral: 'bg-elevated ring-ring/15 text-primary',
      white: 'bg-card ring-ring/15 text-primary'
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

export type BadgeVariants = VariantProps<typeof badgeStyle>
