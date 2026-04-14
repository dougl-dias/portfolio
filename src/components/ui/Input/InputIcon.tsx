import type { IconType } from 'react-icons'

import { twMerge } from 'tailwind-merge'

interface InputIconProps {
  icon: IconType
  className?: string
}

const InputIcon = ({ className, icon: Icon }: InputIconProps) => {
  return (
    Icon && (
      <div className={twMerge('shrink-0 text-base text-gray-400 select-none sm:text-sm/6', className)}>
        <Icon size={20} />
      </div>
    )
  )
}

export default InputIcon
