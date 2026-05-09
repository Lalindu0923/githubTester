import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Admin Dashboard
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/users" className="nav-link">
              Manage Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/analytics" className="nav-link">
              Analytics
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
