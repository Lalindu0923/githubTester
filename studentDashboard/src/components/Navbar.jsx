import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  const handleLogout = () => {
    alert('Logged out successfully')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          StudentDash
        </Link>
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
