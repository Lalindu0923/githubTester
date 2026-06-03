import { useMemo, useState } from 'react'
import '../styles/Dashboard.css'

function Dashboard() {
  const [students] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', grade: 'A' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', grade: 'B' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', grade: 'A' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', grade: 'B+' },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', grade: 'A-' },
    { id: 6, name: 'Fiona Green', email: 'fiona@example.com', grade: 'C' }
  ])

  const topPerformers = useMemo(
    () => students.filter((student) => student.grade === 'A' || student.grade === 'A-').length,
    [students]
  )

  const supportNeeded = useMemo(
    () => students.filter((student) => student.grade === 'C' || student.grade === 'C+').length,
    [students]
  )

  const quickNotes = [
    'Finalize Grade 11 exam paper by Friday',
    'Share progress summary with parents for underperforming students',
    'Complete lesson plan for next week and upload resources'
  ]

  return (
    <div className="dashboard">
      <section className="dashboard-hero">
        <div>
          <p className="hero-tag">Teacher Workspace</p>
          <h1>Teacher Dashboard</h1>
          <p className="hero-subtitle">Track class performance, review student progress, and stay ready for today.</p>
        </div>
        <div className="hero-badge">Updated: Today</div>
      </section>

      <section className="dashboard-stats">
        <article className="stat-card">
          <h3>{students.length}</h3>
          <p>Total Students</p>
        </article>
        <article className="stat-card">
          <h3>{topPerformers}</h3>
          <p>Top Performers</p>
        </article>
        <article className="stat-card">
          <h3>3</h3>
          <p>Classes Today</p>
        </article>
        <article className="stat-card stat-card-warning">
          <h3>{supportNeeded}</h3>
          <p>Needs Support</p>
        </article>
      </section>

      <section className="dashboard-grid">
        <div className="students-section">
          <div className="section-header">
            <h2>Students List</h2>
            <span>{students.length} records</span>
          </div>
          <table className="students-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <span className="grade-badge">{student.grade}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="teacher-panel">
          <h2>Quick Notes</h2>
          <ul className="notes-list">
            {quickNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>

          <div className="panel-divider" />

          <h3>Today Schedule</h3>
          <p className="schedule-item">08:00 AM - Grade 10 Algebra</p>
          <p className="schedule-item">10:00 AM - Grade 11 Revision</p>
          <p className="schedule-item">01:00 PM - Parent Meeting Window</p>
        </aside>
      </section>
    </div>
  )
}

export default Dashboard
