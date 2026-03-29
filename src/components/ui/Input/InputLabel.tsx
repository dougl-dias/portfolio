import type { ComponentProps } from 'react'

interface InputLabelProps extends ComponentProps<'label'> {
  label: string
}

const InputLabel = ({ label, htmlFor, ...props }: InputLabelProps) => {
  return (
    <label htmlFor={htmlFor} className='block text-sm/6 font-medium text-white mb-1.5' {...props}>
      {label}
    </label>
  )
}

export default InputLabel
