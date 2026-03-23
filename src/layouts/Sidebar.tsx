import { NavLink } from 'react-router'

const Sidebar = () => {
  return (
    <aside className='w-64 py-4 px-2.5 bg-zinc-800 text-slate-100 shadow-md'>
      <nav>
        <h1 className='text-2xl font-semibold text-orange-400'>Logo</h1>

        <ul>
          <li>
            <NavLink className='flex items-center py-2.5 px-4 rounded-md hover:bg-zinc-50/10' to={'/'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='flex items-center py-2.5 px-4 rounded-md hover:bg-zinc-50/10' to={'/about'}>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink className='flex items-center py-2.5 px-4 rounded-md hover:bg-zinc-50/10' to={'/project'}>
              Projetos
            </NavLink>
          </li>
          <li>
            <NavLink className='flex items-center py-2.5 px-4 rounded-md hover:bg-zinc-50/10' to={'/skills'}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink className='flex items-center py-2.5 px-4 rounded-md hover:bg-zinc-50/10' to={'/testimonials'}>
              Depoimentos
            </NavLink>
          </li>
          <li>
            <NavLink className='flex items-center py-2.5 px-4 rounded-md hover:bg-zinc-50/10' to={'/contact'}>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
