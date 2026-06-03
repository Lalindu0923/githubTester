import React from 'react'
import { Link } from 'react-router-dom'
import { gradeOrder, sampleStudents } from '../data/studentsData'
import '../styles/Student.css'

export default function Students() {
  const studentsByGrade = gradeOrder.map((grade) => ({
    grade,
    students: sampleStudents.filter((student) => student.grade === grade)
  }))

  return (
    <div className="students-page">
      <header className="students-page-header">
        <h2>Students</h2>
        <p>Grouped by grade in a structured row and column layout.</p>
      </header>

      <div className="grade-sections">
        {studentsByGrade.map(({ grade, students }) => (
          <section key={grade} className={`grade-section grade-section-${grade}`}>
            <div className="grade-section-header">
              <h3>Grade {grade}</h3>
              <span>{students.length} students</span>
            </div>
            {students.length > 0 ? (
              <div className="grade-grid">
                {students.map((s) => (
                  <div key={s.id} className={`student-card student-card-compact grade-card grade-card-${grade}`}>
                    <header className="student-header">
                      <div>
                        <h4 className="student-name student-name-compact">{s.name}</h4>
                        <div className="student-meta">Grade {s.grade}</div>
                      </div>
                    </header>
                    <div className="student-card-actions">
                      <Link to={`/student/${s.id}`} className="nav-link view-profile-link">
                        View profile
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="student-card grade-empty-state">
                No students in this grade yet.
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
