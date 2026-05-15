import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const readStoredStudentName = () => {
  const directName = localStorage.getItem('studentName') || localStorage.getItem('loggedInStudentName')
  if (directName) return directName

  const jsonKeys = ['currentStudent', 'currentUser', 'student', 'user']
  for (const key of jsonKeys) {
    const rawValue = localStorage.getItem(key) || sessionStorage.getItem(key)
    if (!rawValue) continue

    try {
      const parsedValue = JSON.parse(rawValue)
      if (parsedValue?.name) return parsedValue.name
      if (parsedValue?.studentName) return parsedValue.studentName
      if (parsedValue?.fullName) return parsedValue.fullName
    } catch {
      // Ignore invalid JSON and keep looking.
    }
  }

  return 'Student'
}

function Navbar() {
  const studentName = readStoredStudentName()

  const handleLogout = () => {
    alert('Logged out successfully')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            StudentDash
          </Link>
          <span className="navbar-student-name">{studentName}</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}>
              My Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/assignments" className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}>
              Assignments
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/settings" className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}>
              Settings
            </NavLink>
          </li>
        </ul>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
