import type { IconType } from 'react-icons'

import { tv, type VariantProps } from 'tailwind-variants'

const iconStyles = tv({
  base: 'flex items-center justify-center rounded-lg bg-zinc-800 mb-4 group-hover:bg-violet-500/10 transition',
  variants: {
    size: {
      sm: 'p-2 text-lg',
      lg: 'h-12 w-12 text-2xl'
    }
  },
  defaultVariants: {
    size: 'lg'
  }
})

type IconVariants = VariantProps<typeof iconStyles>

interface CardIconProps extends IconVariants {
  icon: IconType
  className?: string
}

const CardIcon = ({ size, icon: Icon, className }: CardIconProps) => {
  return (
    <div className={iconStyles({ size, class: className })}>
      <Icon className='text-violet-400 group-hover:scale-110 transition' />
    </div>
  )
}

export default CardIcon
