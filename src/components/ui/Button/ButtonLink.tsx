import type { ComponentProps } from 'react'

import { buttonStyle, type ButtonVariants } from './style'

import type { IconType } from 'react-icons'

interface ButtonLinkProps extends Omit<ComponentProps<'a'>, 'color'>, ButtonVariants {
  icon?: IconType
}

const ButtonLink = ({
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
}: ButtonLinkProps) => {
  return (
    <a {...props} className={buttonStyle({ variant, color, size, shape, effect, hover, className })}>
      {Icon && <Icon className='shrink-0' />}
      {children}
    </a>
  )
}

export default ButtonLink
