import { Outlet } from 'react-router'

import Header from './Header'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />

      <div className='flex flex-col flex-1'>
        <Header />

        <main className='p-4 flex-1'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
