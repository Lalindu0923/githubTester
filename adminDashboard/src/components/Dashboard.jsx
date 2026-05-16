import '../styles/Dashboard.css'

function Dashboard() {
  // Sample data for schools with login status
  const schools = [
    { id: 1, name: 'Central High School', teachers: 12, students: 145 },
    { id: 2, name: 'Riverside Academy', teachers: 8, students: 92 },
    { id: 3, name: 'Northside Elementary', teachers: 15, students: 210 },
    { id: 4, name: 'Westbrook Middle School', teachers: 10, students: 128 },
  ]

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>System management and oversight</p>
      </div>

      <div className="schools-section">
        <h2 className="section-title">School Login Status</h2>
        <div className="schools-grid">
          {schools.map((school) => (
            <div key={school.id} className="school-card">
              <h3>{school.name}</h3>
              <div className="login-stats">
                <div className="stat">
                  <span className="stat-label">Teachers</span>
                  <span className="stat-count">{school.teachers}</span>
                </div>
                <div className="divider"></div>
                <div className="stat">
                  <span className="stat-label">Students</span>
                  <span className="stat-count">{school.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-content">
        <div className="card">
          <h2>System Overview</h2>
          <p>Monitor system health and performance</p>
        </div>
        <div className="card">
          <h2>User Management</h2>
          <p>Manage student, teacher, and parent accounts</p>
        </div>
        <div className="card">
          <h2>Analytics & Reports</h2>
          <p>View detailed analytics and system reports</p>
        </div>
        <div className="card">
          <h2>Security</h2>
          <p>Manage permissions and access control</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
