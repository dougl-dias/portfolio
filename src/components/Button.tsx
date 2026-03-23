import type { ButtonHTMLAttributes, ElementType } from 'react'

type Color = 'primary' | 'success' | 'info' | 'warning' | 'danger'
type Size = 'sm' | 'md' | 'lg'
type Shape = 'rounded' | 'circle'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Color
  size?: Size
  shape?: Shape
  icon?: ElementType
}

const variants: Record<Color, string> = {
  primary: 'bg-violet-600 text-white hover:bg-violet-700',
  info: '',
  success: '',
  warning: '',
  danger: '',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-5 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

const shapes: Record<Shape, string> = {
  rounded: 'rounded-md',
  circle: 'rounded-full',
}

const Button = ({
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  icon: Icon,
  className,
  children,
  ...props
}: ButtonProps) => {
  const base =
    'flex-none font-medium shadow-sm transition focus-visible:outline focus-visible:outline-4 focus-visible:outline-indigo-600/25'

  const classes = [base, variants[variant], sizes[size], shapes[shape], className].filter(Boolean).join(' ')

  return (
    <button {...props} className={classes}>
      {Icon && <Icon />}
      {children}
    </button>
  )
}

export default Button
