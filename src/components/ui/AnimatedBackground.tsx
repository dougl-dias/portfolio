const AnimatedBackground = () => {
  return (
    <div className='absolute inset-0 -z-10 overflow-hidden bg-base'>
      <div className='absolute w-[500px] h-[500px] bg-purple-600/40 rounded-full blur-[120px] top-[10%] left-[20%] blob' />

      <div className='absolute w-[500px] h-[500px] bg-pink-500/40 rounded-full blur-[120px] top-[50%] left-[60%] blob animation-delay-2000' />

      <div className='absolute w-[500px] h-[500px] bg-blue-500/40 rounded-full blur-[120px] top-[30%] left-[40%] blob animation-delay-2500' />

      <div className='absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/30' />
    </div>
  )
}

export default AnimatedBackground
