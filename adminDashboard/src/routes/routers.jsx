import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Settings from '../components/Settings'
import NotFound from '../components/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
