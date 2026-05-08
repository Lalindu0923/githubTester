import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Student.css'

const sampleStudents = [
  {
    id: 1,
    name: 'Kamal Perera',
    grade: '10',
    parentContact: '+94-71-123-4567',
    parentWhatsApp: '+94711234567',
    parentEmail: 'kamal.parent@example.com'
  },
  {
    id: 2,
    name: 'Saman Silva',
    grade: '10',
    parentContact: '+94-77-234-5678',
    parentWhatsApp: '+94772345678',
    parentEmail: 'saman.parent@example.com'
  },
  {
    id: 3,
    name: 'Nimasha Jayawardena',
    grade: '11',
    parentContact: '+94-72-345-6789',
    parentWhatsApp: '+94723456789',
    parentEmail: 'nimasha.parent@example.com'
  },
  {
    id: 4,
    name: 'Tharindu Wickramasinghe',
    grade: '11',
    parentContact: '+94-70-456-7890',
    parentWhatsApp: '+94704567890',
    parentEmail: 'tharindu.parent@example.com'
  },
  {
    id: 5,
    name: 'Sethmi Ranasinghe',
    grade: '11',
    parentContact: '+94-75-567-8901',
    parentWhatsApp: '+94755678901',
    parentEmail: 'sethmi.parent@example.com'
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
