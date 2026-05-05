import { useState } from 'react'
import '../styles/Dashboard.css'

function Dashboard() {
  const [students] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', grade: 'A' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', grade: 'B' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', grade: 'A' },
    { id: 4, name: 'Diana Prince', email: 'diana@example.com', grade: 'B+' },
    { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', grade: 'A-' },
    { id: 6, name: 'Fiona Green', email: 'fiona@example.com', grade: 'C' },
  ])

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Teacher Dashboard</h1>
        <p>Welcome! Here are your students</p>
      </div>

      <div className="students-section">
        <h2>Students List</h2>
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
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

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>{students.length}</h3>
          <p>Total Students</p>
        </div>
        <div className="stat-card">
          <h3>{students.filter(s => s.grade === 'A' || s.grade === 'A-').length}</h3>
          <p>Top Performers</p>
        </div>
        <div className="stat-card">
          <h3>3</h3>
          <p>Classes Today</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
