import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Student from '../components/Student'
import NotFound from '../components/NotFound'

function Settings() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Settings</h1>
      <p>Settings page coming soon...</p>
    </div>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<Dashboard />} />
      <Route path="/student" element={<Student />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
