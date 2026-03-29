interface DividerProps {
  label: string
}

const Divider = ({ label }: DividerProps) => {
  return (
    <div className='flex items-center'>
      <div className='w-full border-t border-default'></div>

      {label && (
        <>
          <div className='relative flex justify-center'>
            <span className='text-sm px-2 text-secondary text-nowrap'>{label}</span>
          </div>

          <div className='w-full border-t border-default'></div>
        </>
      )}
    </div>
  )
}

export default Divider
