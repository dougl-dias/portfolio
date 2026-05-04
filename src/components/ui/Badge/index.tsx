import type { ComponentProps } from 'react'

import { badgeStyle, type BadgeVariants } from './style'

import type { IconType } from 'react-icons'

interface BadgeProps extends Omit<ComponentProps<'span'>, 'color'>, BadgeVariants {
  icon?: IconType
}

const Badge = ({ color, pill, icon: Icon, className, children, ...props }: BadgeProps) => {
  return (
    <span {...props} className={badgeStyle({ color, pill, className })}>
      {Icon && <Icon />}
      {children}
    </span>
  )
}

export default Badge
