import React, { useState } from 'react'
import '../styles/SubjectDetail.css'

export default function SubjectDetail({ subject, onClose }) {
  if (!subject) return null

  const renderTermTrendChart = (termAnalysis) => {
    const chartWidth = 520
    const chartHeight = 220
    const padding = 32
    const pointGap = (chartWidth - padding * 2) / Math.max(termAnalysis.length - 1, 1)

    const points = termAnalysis.map((term, index) => {
      const x = padding + index * pointGap
      const y = chartHeight - padding - (term.score / 100) * (chartHeight - padding * 2)
      return { ...term, x, y }
    })

    const linePath = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ')

    return (
      <svg className="term-trend-svg" viewBox={`0 0 ${chartWidth} ${chartHeight}`} role="img" aria-label="Three-term marks trend">
        {[0, 25, 50, 75, 100].map((value) => {
          const y = chartHeight - padding - (value / 100) * (chartHeight - padding * 2)
          return (
            <g key={value}>
              <line x1={padding} y1={y} x2={chartWidth - padding} y2={y} className="term-grid-line" />
              <text x={padding - 8} y={y + 4} className="term-axis-label">{value}</text>
            </g>
          )
        })}

        <path d={linePath} className="term-trend-line" />

        {points.map((point) => (
          <g key={point.term}>
            <circle cx={point.x} cy={point.y} r="5" className="term-trend-point" />
            <text x={point.x} y={chartHeight - 10} textAnchor="middle" className="term-axis-label">{point.term}</text>
            <text x={point.x} y={point.y - 10} textAnchor="middle" className="term-value-label">{point.score}%</text>
          </g>
        ))}
      </svg>
    )
  }

  // Demo data for the subject
  const subjectDetails = {
    Mathematics: {
      code: 'MTH-101',
      grade: '10',
      credits: 4,
      currentMarks: 87,
      attendance: 96,
      description: 'Advanced algebra, geometry, and trigonometry',
      assignments: [
        { id: 1, title: 'Worksheet 4 - Algebra', dueDate: '2026-05-12', status: 'Pending', marks: null },
        { id: 2, title: 'Geometry Problem Set', dueDate: '2026-05-10', status: 'Submitted', marks: 18 },
        { id: 3, title: 'Trigonometry Assignment', dueDate: '2026-05-15', status: 'Not Started', marks: null }
      ],
      recentGrades: [
        { exam: 'Mid-term Test 1', date: '2026-04-20', marks: 88, totalMarks: 100 },
        { exam: 'Quiz 1', date: '2026-04-15', marks: 19, totalMarks: 20 },
        { exam: 'Class Work', date: '2026-04-10', marks: 9, totalMarks: 10 }
      ],
      termAnalysis: [
        { term: 'Term 1', score: 82 },
        { term: 'Term 2', score: 85 },
        { term: 'Term 3', score: 87 }
      ]
    },
    Science: {
      code: 'SCI-102',
      grade: '10',
      credits: 4,
      currentMarks: 79,
      attendance: 94,
      description: 'Physics, Chemistry, and Biology fundamentals',
      assignments: [
        { id: 1, title: 'Lab Report - Photosynthesis', dueDate: '2026-05-14', status: 'Pending', marks: null },
        { id: 2, title: 'Chemistry Equations', dueDate: '2026-05-11', status: 'Submitted', marks: 16 },
        { id: 3, title: 'Physics Experiment', dueDate: '2026-05-16', status: 'In Progress', marks: null }
      ],
      recentGrades: [
        { exam: 'Unit Test 1', date: '2026-04-18', marks: 76, totalMarks: 100 },
        { exam: 'Practical Exam', date: '2026-04-12', marks: 18, totalMarks: 20 },
        { exam: 'Class Work', date: '2026-04-08', marks: 8, totalMarks: 10 }
      ],
      termAnalysis: [
        { term: 'Term 1', score: 72 },
        { term: 'Term 2', score: 76 },
        { term: 'Term 3', score: 79 }
      ]
    },
    English: {
      code: 'ENG-103',
      grade: '10',
      credits: 3,
      currentMarks: 92,
      attendance: 98,
      description: 'Literature, composition, and communication skills',
      assignments: [
        { id: 1, title: 'Essay - Modern Literature', dueDate: '2026-05-13', status: 'Pending', marks: null },
        { id: 2, title: 'Reading Comprehension', dueDate: '2026-05-09', status: 'Submitted', marks: 19 },
        { id: 3, title: 'Creative Writing', dueDate: '2026-05-17', status: 'Not Started', marks: null }
      ],
      recentGrades: [
        { exam: 'Literature Test', date: '2026-04-22', marks: 92, totalMarks: 100 },
        { exam: 'Speaking Test', date: '2026-04-17', marks: 19, totalMarks: 20 },
        { exam: 'Class Work', date: '2026-04-09', marks: 9, totalMarks: 10 }
      ],
      termAnalysis: [
        { term: 'Term 1', score: 89 },
        { term: 'Term 2', score: 91 },
        { term: 'Term 3', score: 92 }
      ]
    },
    History: {
      code: 'HIS-104',
      grade: '10',
      credits: 3,
      currentMarks: 70,
      attendance: 92,
      description: 'World history and cultural studies',
      assignments: [
        { id: 1, title: 'Research Project - Ancient Civilizations', dueDate: '2026-05-20', status: 'In Progress', marks: null },
        { id: 2, title: 'Timeline Assignment', dueDate: '2026-05-08', status: 'Submitted', marks: 15 },
        { id: 3, title: 'Essay - Historical Events', dueDate: '2026-05-15', status: 'Pending', marks: null }
      ],
      recentGrades: [
        { exam: 'History Test', date: '2026-04-19', marks: 70, totalMarks: 100 },
        { exam: 'Presentation', date: '2026-04-14', marks: 17, totalMarks: 20 },
        { exam: 'Class Work', date: '2026-04-11', marks: 7, totalMarks: 10 }
      ],
      termAnalysis: [
        { term: 'Term 1', score: 66 },
        { term: 'Term 2', score: 68 },
        { term: 'Term 3', score: 70 }
      ]
    },
    Computer: {
      code: 'CSC-105',
      grade: '10',
      credits: 4,
      currentMarks: 88,
      attendance: 97,
      description: 'Programming, algorithms, and computer applications',
      assignments: [
        { id: 1, title: 'Python Project - Calculator', dueDate: '2026-05-18', status: 'In Progress', marks: null },
        { id: 2, title: 'HTML & CSS Assignment', dueDate: '2026-05-07', status: 'Submitted', marks: 20 },
        { id: 3, title: 'Database Design', dueDate: '2026-05-14', status: 'Pending', marks: null }
      ],
      recentGrades: [
        { exam: 'Programming Test', date: '2026-04-21', marks: 88, totalMarks: 100 },
        { exam: 'Practical Lab', date: '2026-04-16', marks: 20, totalMarks: 20 },
        { exam: 'Class Work', date: '2026-04-13', marks: 9, totalMarks: 10 }
      ],
      termAnalysis: [
        { term: 'Term 1', score: 81 },
        { term: 'Term 2', score: 85 },
        { term: 'Term 3', score: 88 }
      ]
    }
  }

  const details = subjectDetails[subject.name] || subjectDetails.Mathematics
  const enrolledSubjects = [
    { name: 'Mathematics', color: '#4f46e5', teacher: { name: 'Ms. Nadeesha Fernando', contact: '+94-71-123-4567', whatsapp: '+94711234567', email: 'nadeesha.fernando@school.edu' } },
    { name: 'Science', color: '#10b981', teacher: { name: 'Mr. Roshan Gunawardena', contact: '+94-77-234-5678', whatsapp: '+94772345678', email: 'roshan.gunawardena@school.edu' } },
    { name: 'English', color: '#f59e0b', teacher: { name: 'Ms. Amelia Jayasinghe', contact: '+94-76-345-6789', whatsapp: '+94763456789', email: 'amelia.jayasinghe@school.edu' } },
    { name: 'History', color: '#ef4444', teacher: { name: 'Mr. Pradeep Wijeratne', contact: '+94-70-456-7890', whatsapp: '+94704567890', email: 'pradeep.wijeratne@school.edu' } },
    { name: 'Computer', color: '#8b5cf6', teacher: { name: 'Ms. Dilani Silva', contact: '+94-72-567-8901', whatsapp: '+94725678901', email: 'dilani.silva@school.edu' } }
  ]
  const currentSubject = enrolledSubjects.find(s => s.name === subject.name)

  const getStatusColor = (status) => {
    switch (status) {
      case 'Submitted':
        return '#10b981'
      case 'In Progress':
        return '#f59e0b'
      case 'Pending':
        return '#ef4444'
      case 'Not Started':
        return '#6b7280'
      default:
        return '#6b7280'
    }
  }

  return (
    <div className="subject-detail-overlay" onClick={onClose}>
      <div className="subject-detail-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="detail-header" style={{ backgroundColor: currentSubject.color }}>
          <h1>{subject.name}</h1>
          <p className="detail-subtitle">{details.description}</p>
        </div>

        <div className="detail-content">
          <div className="detail-grid">
            {/* Left Panel - Overview */}
            <div className="detail-panel">
              <h2>Subject Overview</h2>
              <div className="overview-cards">
                <div className="overview-card">
                  <span className="label">Course Code</span>
                  <p>{details.code}</p>
                </div>
                <div className="overview-card">
                  <span className="label">Current Marks</span>
                  <p className="marks-badge">{details.currentMarks}%</p>
                </div>
                <div className="overview-card">
                  <span className="label">Attendance</span>
                  <p className="attendance-badge">{details.attendance}%</p>
                </div>
                <div className="overview-card">
                  <span className="label">Credits</span>
                  <p>{details.credits}</p>
                </div>
              </div>

              <h3>Teacher Information</h3>
              <div className="teacher-info">
                <p><strong>Name:</strong> {currentSubject.teacher.name}</p>
                <p><strong>Email:</strong> <a href={`mailto:${currentSubject.teacher.email}`}>{currentSubject.teacher.email}</a></p>
                <p><strong>Phone:</strong> <a href={`tel:${currentSubject.teacher.contact}`}>{currentSubject.teacher.contact}</a></p>
              </div>
            </div>

            {/* Right Panel - Grades */}
            <div className="detail-panel">
              <h2>Recent Grades</h2>
              <div className="grades-list">
                {details.recentGrades.map((grade, idx) => (
                  <div key={idx} className="grade-item">
                    <div className="grade-info">
                      <p className="grade-exam">{grade.exam}</p>
                      <p className="grade-date">{new Date(grade.date).toLocaleDateString()}</p>
                    </div>
                    <div className="grade-score">
                      <span className="score">{grade.marks}/{grade.totalMarks}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Assignments Section */}
          <div className="detail-panel full-width">
            <h2>Term Analysis (1 Year)</h2>
            <div className="term-analysis-layout">
              <div className="term-chart-wrap">
                {renderTermTrendChart(details.termAnalysis)}
              </div>

              <div className="term-summary-grid">
                {details.termAnalysis.map((term) => (
                  <div key={term.term} className="term-summary-card">
                    <p className="term-name">{term.term}</p>
                    <p className="term-score">{term.score}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="detail-panel full-width">
            <h2>Assignments</h2>
            <div className="assignments-list">
              {details.assignments.map((assignment) => (
                <div key={assignment.id} className="assignment-item">
                  <div className="assignment-left">
                    <h4>{assignment.title}</h4>
                    <p className="assignment-date">Due: {new Date(assignment.dueDate).toLocaleDateString()}</p>
                  </div>
                  <div className="assignment-right">
                    <span 
                      className="status-badge" 
                      style={{ backgroundColor: getStatusColor(assignment.status) }}
                    >
                      {assignment.status}
                    </span>
                    {assignment.marks !== null && (
                      <span className="marks-display">{assignment.marks}/20</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
