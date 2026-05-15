import '../styles/Dashboard.css'

const assignments = [
  { title: 'Mathematics Worksheet 4', subject: 'Mathematics', due: 'Tomorrow', status: 'Pending' },
  { title: 'Science Lab Notes', subject: 'Science', due: 'In 2 days', status: 'Started' },
  { title: 'English Reading Log', subject: 'English', due: 'Friday', status: 'Not started' },
  { title: 'History Quiz Prep', subject: 'History', due: 'Next Monday', status: 'Pending' }
]

function Assignments() {
  return (
    <div className="student-dashboard-shell">
      <section className="student-assignments-card">
        <div className="section-header">
          <h2>Assignments</h2>
          <span>{assignments.length} items</span>
        </div>

        <div className="assignment-list">
          {assignments.map((assignment) => (
            <article key={assignment.title} className="assignment-row">
              <div>
                <h3>{assignment.title}</h3>
                <p>{assignment.subject}</p>
              </div>
              <div className="assignment-meta">
                <span>{assignment.due}</span>
                <strong>{assignment.status}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Assignments