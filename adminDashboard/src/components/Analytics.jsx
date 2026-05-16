import '../styles/Analytics.css'

function Analytics() {
  return (
    <div className="admin-page">
      <div className="page-header">
        <h1>Analytics</h1>
        <p>View usage trends, engagement metrics, and operational health.</p>
      </div>

      <div className="page-grid">
        <section className="page-card">
          <h2>Engagement</h2>
          <p>Measure daily visits, feature usage, and content activity.</p>
        </section>
        <section className="page-card">
          <h2>Performance</h2>
          <p>Monitor page load times, error rates, and backend response metrics.</p>
        </section>
        <section className="page-card">
          <h2>Reports</h2>
          <p>Generate snapshots that help the admin team make quick decisions.</p>
        </section>
      </div>
    </div>
  )
}

export default Analytics