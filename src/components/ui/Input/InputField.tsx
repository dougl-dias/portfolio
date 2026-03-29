const InputField = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex items-center gap-2 rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500'>
      {children}
    </div>
  )
}

export default InputField
