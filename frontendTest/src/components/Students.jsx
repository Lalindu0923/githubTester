import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Student.css'

const sampleStudents = [
  {
    id: 1,
    name: 'Kamal Perera',
    grade: '10'
  },
  {
    id: 2,
    name: 'Saman Silva',
    grade: '10'
  }
]

export default function Students() {
  return (
    <div style={{ maxWidth: 1000, margin: '20px auto' }}>
      <h2 style={{ marginBottom: 12 }}>Students</h2>
      <div className="students-grid">
        {sampleStudents.map((s) => (
          <div key={s.id} className="student-card" style={{ width: 420 }}>
            <header className="student-header">
              <h3 className="student-name" style={{ margin: 0 }}>{s.name}</h3>
              <div className="student-meta">Grade: {s.grade}</div>
            </header>
            <div style={{ paddingTop: 8 }}>
              <Link to={`/student/${s.id}`} className="nav-link" style={{ color: '#4f46e5' }}>
                View profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
