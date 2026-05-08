import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Students from '../components/Students'
import StudentPage from '../components/StudentPage'
import NotFound from '../components/NotFound'
import TeacherProfile from '../components/TeacherProfile'

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
      <Route path="/students" element={<Students />} />
      <Route path="/student/:id" element={<StudentPage />} />
      <Route path="/profile" element={<TeacherProfile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
