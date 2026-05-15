import React, { useMemo, useState } from 'react'
import parentData from './data/parents.json'

export default function App() {
  const parent = parentData[0]
  const [selectedStudentId, setSelectedStudentId] = useState(parent.children[0]?.id ?? null)

  const selectedStudent = useMemo(
    () => parent.children.find((student) => student.id === selectedStudentId) ?? parent.children[0],
    [parent.children, selectedStudentId],
  )

  return (
    <div className="app">
      <header className="header">
        <div>
          <p className="eyebrow">Parent-only dashboard</p>
          <h1>{parent.name}</h1>
        </div>
        <div className="header-note">You can view only your children and their school details.</div>
      </header>

      <main className="container">
        <section className="summary card">
          <h3>My Children: {parent.children.length}</h3>
          <p>Class: {parent.parentClass}</p>
          <p>Contact: {parent.contact}</p>
        </section>

        <section className="list">
          {parent.children.map((student) => (
            <button
              key={student.id}
              type="button"
              className={`parent-card student-card ${selectedStudent?.id === student.id ? 'selected' : ''}`}
              onClick={() => setSelectedStudentId(student.id)}
            >
              <div className="parent-info">
                <div className="parent-name">{student.name}</div>
                <div className="muted">
                  Grade {student.grade} · {student.section} · Roll No. {student.rollNo}
                </div>
              </div>
              <div className="btn">View details</div>
            </button>
          ))}
        </section>

        <aside className="details">
          {selectedStudent && (
            <div>
              <div className="details-head">
                <div>
                  <p className="eyebrow">Selected student</p>
                  <h2>{selectedStudent.name}</h2>
                </div>
              </div>

              <div className="detail-grid">
                <div className="detail-item">
                  <span>Grade</span>
                  <strong>{selectedStudent.grade}</strong>
                </div>
                <div className="detail-item">
                  <span>Section</span>
                  <strong>{selectedStudent.section}</strong>
                </div>
                <div className="detail-item">
                  <span>Roll No.</span>
                  <strong>{selectedStudent.rollNo}</strong>
                </div>
                <div className="detail-item">
                  <span>Class Teacher</span>
                  <strong>{selectedStudent.classTeacher}</strong>
                </div>
                <div className="detail-item">
                  <span>Attendance</span>
                  <strong>{selectedStudent.attendance}</strong>
                </div>
                <div className="detail-item">
                  <span>Fees</span>
                  <strong>{selectedStudent.feesStatus}</strong>
                </div>
              </div>

              <h4>Subjects and Marks</h4>
              <ul>
                {selectedStudent.subjects.map((subject) => (
                  <li key={subject.name}>
                    {subject.name} - {subject.marks}
                  </li>
                ))}
              </ul>

              <h4>Homework</h4>
              <ul>
                {selectedStudent.homework.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h4>Teacher Remarks</h4>
              <p className="muted">{selectedStudent.remarks}</p>

              <h4>Upcoming Events</h4>
              <ul>
                {selectedStudent.upcomingEvents.map((event) => (
                  <li key={event.title}>
                    {event.title} - {event.date}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </main>
    </div>
  )
}
