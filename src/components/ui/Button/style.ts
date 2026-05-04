import { tv, type VariantProps } from 'tailwind-variants'

export const buttonStyle = tv({
  base: 'inline-flex items-center justify-center gap-2 font-medium text-center cursor-pointer shadow-sm transition-all duration-200 will-change-transform focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600/25 disabled:pointer-events-none disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:scale-100',
  variants: {
    variant: {
      solid: '',
      outline: 'bg-transparent border'
    },
    color: {
      primary: '',
      info: '',
      success: '',
      warning: '',
      danger: '',
      neutral: '',
      white: '',
      dark: ''
    },
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-2.5 text-lg'
    },
    shape: {
      rounded: 'rounded-md',
      circle: 'rounded-full'
    },
    effect: {
      none: '',
      lift: 'hover:-translate-y-0.5 active:translate-y-0',
      scale: 'hover:scale-[1.01] active:scale-[1]',
      liftScale: 'hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-[0.98]'
    },
    hover: {
      none: '',
      soft: 'hover:shadow-md',
      glow: 'hover:shadow-lg',
      strong: 'hover:shadow-xl'
    }
  },
  compoundVariants: [
    // SOLID
    {
      variant: 'solid',
      color: 'primary',
      class: 'bg-violet-600 text-white shadow-violet-600/20 hover:bg-violet-700 hover:shadow-violet-600/25'
    },
    {
      variant: 'solid',
      color: 'info',
      class: 'bg-sky-600 text-white shadow-sky-600/20 hover:bg-sky-700 hover:shadow-sky-600/25'
    },
    {
      variant: 'solid',
      color: 'success',
      class: 'bg-emerald-600 text-white shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-emerald-600/25'
    },
    {
      variant: 'solid',
      color: 'warning',
      class: 'bg-amber-400 text-zinc-950 shadow-amber-500/20 hover:bg-amber-500 hover:shadow-amber-500/25'
    },
    {
      variant: 'solid',
      color: 'danger',
      class: 'bg-red-600 text-white shadow-red-600/20 hover:bg-red-700 hover:shadow-red-600/25'
    },
    {
      variant: 'solid',
      color: 'neutral',
      class: 'bg-card border text-primary hover:bg-elevated hover:border-hover hover:shadow-md'
    },
    {
      variant: 'solid',
      color: 'white',
      class: 'bg-elevated text-primary hover:bg-elevated-strong hover:shadow-md'
    },
    {
      variant: 'solid',
      color: 'dark',
      class: 'bg-zinc-950 text-white shadow-zinc-950/20 hover:bg-zinc-800 hover:shadow-zinc-950/25'
    },
    // OUTLINE
    {
      variant: 'outline',
      color: 'primary',
      class:
        'border-violet-500 text-violet-700 hover:bg-violet-600 hover:text-white hover:shadow-violet-600/20 dark:border-violet-500 dark:text-violet-300 dark:hover:bg-violet-500/20 dark:hover:text-violet-200'
    },
    {
      variant: 'outline',
      color: 'info',
      class:
        'border-sky-500 text-sky-700 hover:bg-sky-600 hover:text-white hover:shadow-sky-600/20 dark:border-sky-500 dark:text-sky-300 dark:hover:bg-sky-500/20 dark:hover:text-sky-200'
    },
    {
      variant: 'outline',
      color: 'success',
      class:
        'border-emerald-500 text-emerald-700 hover:bg-emerald-600 hover:text-white hover:shadow-emerald-600/20 dark:border-emerald-500 dark:text-emerald-300 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-200'
    },
    {
      variant: 'outline',
      color: 'warning',
      class:
        'border-amber-500 text-amber-700 hover:bg-amber-400 hover:text-zinc-950 hover:shadow-amber-500/20 dark:border-amber-400 dark:text-amber-300 dark:hover:bg-amber-400/20 dark:hover:text-amber-200'
    },
    {
      variant: 'outline',
      color: 'danger',
      class:
        'border-red-500 text-red-700 hover:bg-red-600 hover:text-white hover:shadow-red-600/20 dark:border-red-500 dark:text-red-300 dark:hover:bg-red-500/20 dark:hover:text-red-200'
    },
    {
      variant: 'outline',
      color: 'neutral',
      class: 'text-primary hover:bg-elevated hover:border-hover hover:shadow-md'
    },
    {
      variant: 'outline',
      color: 'white',
      class: 'text-primary hover:bg-elevated hover:border-hover hover:shadow-md'
    },
    {
      variant: 'outline',
      color: 'dark',
      class:
        'border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white hover:shadow-zinc-950/20 dark:border-zinc-300 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-950'
    }
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'neutral',
    size: 'sm',
    shape: 'rounded',
    effect: 'lift',
    hover: 'glow'
  }
})

export type ButtonVariants = VariantProps<typeof buttonStyle>
