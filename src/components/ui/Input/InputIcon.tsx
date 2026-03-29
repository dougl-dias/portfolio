import type { IconType } from 'react-icons'

const InputIcon = ({ icon: Icon }: { icon: IconType }) => {
  return <div className='shrink-0 text-base text-gray-400 select-none sm:text-sm/6'>{Icon && <Icon size={20} />}</div>
}

export default InputIcon
