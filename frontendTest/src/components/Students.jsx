import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Student.css'

const sampleStudents = [
  {
    id: 1,
    name: 'Kamal Perera',
    grade: '10',
    parentContact: '+94-71-123-4567'
  },
  {
    id: 2,
    name: 'Saman Silva',
    grade: '10',
    parentContact: '+94-77-234-5678'
  },
  {
    id: 3,
    name: 'Nimasha Jayawardena',
    grade: '11',
    parentContact: '+94-72-345-6789'
  },
  {
    id: 4,
    name: 'Tharindu Wickramasinghe',
    grade: '11',
    parentContact: '+94-70-456-7890'
  },
  {
    id: 5,
    name: 'Sethmi Ranasinghe',
    grade: '11',
    parentContact: '+94-75-567-8901'
  }
]

export default function Students() {
  const [visibleParents, setVisibleParents] = useState({})

  const toggleParent = (id) => setVisibleParents((p) => ({ ...p, [id]: !p[id] }))

  const sendMessage = (student) => {
    const msg = window.prompt(`Enter message to send to ${student.name}'s parent (${student.parentContact}):`)
    if (msg && msg.trim()) {
      // Simulate sending message — in real app call API
      alert(`Message sent to ${student.parentContact}:\n\n"${msg}"`)
    }
  }

  return (
    <div style={{ maxWidth: 1000, margin: '20px auto' }}>
      <h2 style={{ marginBottom: 12 }}>Students</h2>
      <div className="students-grid">
        {sampleStudents.map((s) => (
          <div key={s.id} className="student-card" style={{ width: 420 }}>
            <header className="student-header">
              <h3 className="student-name" style={{ margin: 0 }}>{s.name}</h3>
              <div className="student-meta">Grade: {s.grade}</div>
              <div className="student-meta">
                <button className="msg-btn" onClick={() => toggleParent(s.id)}>
                  {visibleParents[s.id] ? 'Hide Parent' : 'Show Parent'}
                </button>
              </div>
            </header>
            <div style={{ paddingTop: 8 }}>
              <Link to={`/student/${s.id}`} className="nav-link" style={{ color: '#4f46e5' }}>
                View profile
              </Link>
              {visibleParents[s.id] && (
                <div className="parent-panel" style={{ marginLeft: 12, display: 'inline-block' }}>
                  <div style={{ marginBottom: 6 }}>Parent: <a href={`tel:${s.parentContact}`}>{s.parentContact}</a></div>
                  <button className="msg-btn" onClick={() => sendMessage(s)}>Message Parent</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
