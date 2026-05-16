import '../styles/Users.css'

function Users() {
  return (
    <div className="admin-page">
      <div className="page-header">
        <h1>Manage Users</h1>
        <p>Review accounts, roles, and access across the admin platform.</p>
      </div>

      <div className="page-grid">
        <section className="page-card">
          <h2>Active Accounts</h2>
          <p>Track students, teachers, parents, and staff currently signed in.</p>
        </section>
        <section className="page-card">
          <h2>Role Controls</h2>
          <p>Assign permissions and update access levels from one place.</p>
        </section>
        <section className="page-card">
          <h2>Account Review</h2>
          <p>Approve new registrations and resolve suspended account requests.</p>
        </section>
      </div>
    </div>
  )
}

export default Users