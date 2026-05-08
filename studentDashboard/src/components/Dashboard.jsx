import '../styles/Dashboard.css'

const upcomingTasks = [
  { title: 'Finish Mathematics Worksheet 4', due: 'Tomorrow', status: 'Pending' },
  { title: 'Submit Science Lab Notes', due: 'In 2 days', status: 'Started' },
  { title: 'Read English chapter 5', due: 'Friday', status: 'Not started' }
]

const todaySchedule = [
  '07:30 AM - Morning self-study',
  '09:00 AM - Mathematics class',
  '11:00 AM - Science practical',
  '02:00 PM - Computer lab'
]

const progressCards = [
  { label: 'Attendance', value: '96%' },
  { label: 'Homework due', value: '3' },
  { label: 'Messages', value: '2' },
  { label: 'Average score', value: '84%' }
]

function Dashboard() {
  return (
    <div className="student-dashboard-shell">
      <section className="student-hero">
        <div>
          <p className="hero-tag">Student Space</p>
          <h1>Student Dashboard</h1>
          <p className="hero-subtitle">Track your homework, check today’s classes, and keep an eye on your progress.</p>
        </div>
        <div className="hero-badge">Welcome back</div>
      </section>

      <section className="student-stat-grid">
        {progressCards.map((card) => (
          <article key={card.label} className="student-stat-card">
            <h3>{card.value}</h3>
            <p>{card.label}</p>
          </article>
        ))}
      </section>

      <section className="student-dashboard-grid">
        <div className="student-main-panel">
          <div className="section-header">
            <h2>Upcoming Tasks</h2>
            <span>{upcomingTasks.length} items</span>
          </div>
          <div className="task-list">
            {upcomingTasks.map((task) => (
              <article key={task.title} className="task-card">
                <div>
                  <h3>{task.title}</h3>
                  <p>Due {task.due}</p>
                </div>
                <span>{task.status}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="student-side-panel">
          <h2>Today’s Schedule</h2>
          <ul className="schedule-list">
            {todaySchedule.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="panel-divider" />

          <h3>Quick Notes</h3>
          <p className="student-note">Check your profile page for full marks, parent contact details, and review stars.</p>
        </aside>
      </section>
    </div>
  )
}

export default Dashboard
