import '../styles/Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>System management and oversight</p>
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
