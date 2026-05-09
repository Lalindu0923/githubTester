import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import StudentPage from '../components/StudentPage'
import NotFound from '../components/NotFound'
import Assignments from '../components/Assignments'
import Settings from '../components/Settings'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<StudentPage />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
