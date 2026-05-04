import type { ComponentProps } from 'react'

import { buttonStyle, type ButtonVariants } from './style'

import type { IconType } from 'react-icons'

interface ButtonProps extends Omit<ComponentProps<'button'>, 'color'>, ButtonVariants {
  icon?: IconType
}

const Button = ({
  type = 'button',
  variant,
  color,
  size,
  shape,
  icon: Icon,
  effect,
  hover,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button type={type} {...props} className={buttonStyle({ variant, color, size, shape, effect, hover, className })}>
      {Icon && <Icon className='shrink-0' />}
      {children}
    </button>
  )
}

export default Button
