import '../styles/Analytics.css'
import { schoolsData } from '../data/schools'
import { usersData } from '../data/users'

function Analytics() {
  const totalSchools = schoolsData.length
  const totalTeachers = schoolsData.reduce((sum, school) => sum + school.totalTeachers, 0)
  const totalStudents = schoolsData.reduce((sum, school) => sum + school.totalStudents, 0)
  const activeAccounts = usersData.activeAccounts.length
  const pendingApprovals = usersData.pendingApprovals.length
  const principalAccessTeachers = usersData.principalAccessTeachers.length

  const trendData = [
    { label: 'Visits', value: 92, detail: 'Up 14% this week' },
    { label: 'Logins', value: 84, detail: 'Most activity before 9 AM' },
    { label: 'Approvals', value: 67, detail: 'Pending review volume is stable' },
    { label: 'Reports', value: 58, detail: 'Exports are climbing steadily' },
  ]

  const focusCards = [
    {
      title: 'Engagement',
      metric: '84%',
      description: 'Strong daily usage across school and role-specific pages.',
      accent: 'mint',
    },
    {
      title: 'Operational Health',
      metric: '98.7%',
      description: 'The dashboard is stable, fast, and responsive for staff workflows.',
      accent: 'amber',
    },
    {
      title: 'Pending Review',
      metric: pendingApprovals.toString(),
      description: 'Requests are concentrated in teacher onboarding and student access.',
      accent: 'coral',
    },
  ]

  const schoolActivity = schoolsData.map((school) => ({
    name: school.name,
    teachers: school.totalTeachers,
    students: school.totalStudents,
    ratio: Math.round((school.totalStudents / school.totalTeachers) * 10) / 10,
  }))

  return (
    <div className="analytics-page">
      <header className="analytics-hero">
        <div>
          <span className="eyebrow">Analytics</span>
          <h1>Usage, access, and school operations in one place</h1>
          <p>
            Track adoption across schools, identify account review bottlenecks, and monitor
            platform health without leaving the admin console.
          </p>
        </div>

        <div className="hero-summary">
          <div className="summary-label">Current snapshot</div>
          <div className="summary-value">{totalSchools} schools</div>
          <div className="summary-subtitle">{activeAccounts} active accounts across the platform</div>
        </div>
      </header>

      <section className="metric-grid">
        <article className="metric-card metric-card-slate">
          <span className="metric-label">Schools</span>
          <strong>{totalSchools}</strong>
          <p>Connected campuses tracked in the admin dashboard.</p>
        </article>
        <article className="metric-card metric-card-blue">
          <span className="metric-label">Teachers</span>
          <strong>{totalTeachers}</strong>
          <p>Certified staff with classroom access and oversight tools.</p>
        </article>
        <article className="metric-card metric-card-teal">
          <span className="metric-label">Students</span>
          <strong>{totalStudents}</strong>
          <p>Active learners across elementary, middle, and high school.</p>
        </article>
        <article className="metric-card metric-card-coral">
          <span className="metric-label">Principal Access</span>
          <strong>{principalAccessTeachers}</strong>
          <p>Teachers with elevated oversight permissions.</p>
        </article>
      </section>

      <section className="analytics-layout">
        <div className="analytics-panel analytics-panel-wide">
          <div className="panel-heading">
            <div>
              <span className="panel-kicker">Activity trends</span>
              <h2>Weekly traffic and workflow activity</h2>
            </div>
            <span className="panel-chip">Live snapshot</span>
          </div>

          <div className="trend-list">
            {trendData.map((item) => (
              <div key={item.label} className="trend-item">
                <div className="trend-meta">
                  <span>{item.label}</span>
                  <strong>{item.value}%</strong>
                </div>
                <div className="trend-bar-shell" aria-hidden="true">
                  <div className="trend-bar-fill" style={{ width: `${item.value}%` }} />
                </div>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-panel">
          <div className="panel-heading">
            <div>
              <span className="panel-kicker">Focus area</span>
              <h2>Review queue</h2>
            </div>
          </div>

          <div className="queue-card">
            <div className="queue-value">{pendingApprovals}</div>
            <p>accounts waiting for approval</p>
          </div>

          <div className="queue-list">
            <div className="queue-item">
              <span>Teacher onboarding</span>
              <strong>3 requests</strong>
            </div>
            <div className="queue-item">
              <span>Student portal access</span>
              <strong>2 requests</strong>
            </div>
            <div className="queue-item">
              <span>Principal review required</span>
              <strong>1 request</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="insight-grid">
        {focusCards.map((card) => (
          <article key={card.title} className={`insight-card accent-${card.accent}`}>
            <span className="insight-title">{card.title}</span>
            <strong className="insight-metric">{card.metric}</strong>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="analytics-panel">
        <div className="panel-heading">
          <div>
            <span className="panel-kicker">School breakdown</span>
            <h2>Student-to-teacher ratio by campus</h2>
          </div>
        </div>

        <div className="school-activity-list">
          {schoolActivity.map((school) => (
            <div key={school.name} className="school-activity-row">
              <div>
                <strong>{school.name}</strong>
                <p>{school.teachers} teachers · {school.students} students</p>
              </div>
              <span className="ratio-pill">{school.ratio}:1</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Analytics