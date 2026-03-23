import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='flex items-center h-16 py-5 px-12 bg-zinc-800 text-slate-100 border-b border-zinc-100/10'>
      <div>
        <button className='text-2xl p-1.5'>
          <FaBars />
        </button>
      </div>
    </header>
  )
}

export default Header
