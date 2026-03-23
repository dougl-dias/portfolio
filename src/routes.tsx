import { BrowserRouter, Route, Routes } from 'react-router'

import Dashboard from './layouts/Dashboard'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route index path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
