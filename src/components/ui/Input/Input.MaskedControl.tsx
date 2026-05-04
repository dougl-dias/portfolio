import { useInput } from '../../../hooks/useInput'

import { IMaskInput } from 'react-imask'

const InputMaskedControl = ({ ...props }) => {
  const { id } = useInput()

  return (
    <IMaskInput
      id={id}
      className='block w-full bg-transparent py-1.5 pr-3 pl-1 text-base text-primary placeholder:text-muted focus:outline-none sm:text-sm/6'
      {...props}
    />
  )
}

export default InputMaskedControl
