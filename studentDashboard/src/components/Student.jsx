import React, { useEffect, useMemo, useState } from 'react'
import '../styles/Student.css'

// Student profile view with editable name and read-only personal / parent details.

const sampleStudent = {
  id: 1,
  name: 'Kamal Perera',
  grade: '10',
  gender: 'Male',
  dob: '2009-03-14',
  admissionNumber: 'ADM-10-042',
  className: 'Grade 10-B',
  address: 'No. 18, Green Road, Colombo',
  email: 'kamal.perera@student.school.edu',
  parentName: 'Nimal Perera',
  parentContact: '+94-71-123-4567',
  parentWhatsApp: '+94711234567',
  parentEmail: 'kamal.parent@example.com',
  rating: 5,
  profilePicture: '',
  subjects: [
    { name: 'Mathematics', marks: { term1: 88, term2: 82, term3: 90 } },
    { name: 'Science', marks: { term1: 76, term2: 80, term3: 79 } },
    { name: 'English', marks: { term1: 92, term2: 89, term3: 95 } },
    { name: 'History', marks: { term1: 67, term2: 72, term3: 70 } },
    { name: 'Computer', marks: { term1: 81, term2: 85, term3: 88 } }
  ]
}

function SimpleBarChart({ data, width = 600, height = 300, labelKey = 'value' }) {
  const padding = 40
  const chartWidth = width - padding * 2
  const chartHeight = height - padding * 2
  const maxValue = Math.max(100, ...data.map((d) => d[labelKey]))
  const barWidth = chartWidth / data.length - 16

  return (
    <svg className="student-chart" width={width} height={height}>
      <rect x="0" y="0" width={width} height={height} fill="transparent" />
      {data.map((d, i) => {
        const x = padding + i * (barWidth + 16)
        const barHeight = (d[labelKey] / maxValue) * chartHeight
        const y = padding + (chartHeight - barHeight)
        return (
          <g key={d.name}>
            <rect x={x} y={y} width={barWidth} height={barHeight} fill="#4f46e5" rx="4">
              <title>{`${d.name}: ${d[labelKey]}`}</title>
            </rect>
            <text x={x + barWidth / 2} y={padding + chartHeight + 16} textAnchor="middle" className="chart-label">
              {d.name}
            </text>
            <text x={x + barWidth / 2} y={y - 8} textAnchor="middle" className="chart-value">
              {d[labelKey]}
            </text>
          </g>
        );
      })}
      <text x={8} y={padding + chartHeight} className="axis-label">0</text>
      <text x={8} y={padding + chartHeight / 2 + 4} className="axis-label">{Math.round(maxValue / 2)}</text>
      <text x={8} y={padding} className="axis-label">{maxValue}</text>
    </svg>
  )
}

export default function Student({ student = sampleStudent }) {
  const [editableName, setEditableName] = useState(student.name)

  useEffect(() => {
    setEditableName(student.name)
  }, [student])

  const initials = useMemo(() => {
    return editableName
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('')
  }, [editableName])

  const renderStars = (rating = 0) => {
    const max = 5
    const stars = []
    for (let i = 1; i <= max; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          {i <= rating ? '★' : '☆'}
        </span>
      )
    }
    return <div className="student-review">{stars}</div>
  }
  const subjectsWithTotals = student.subjects.map((s) => {
    const t1 = Number(s.marks.term1 || 0)
    const t2 = Number(s.marks.term2 || 0)
    const t3 = Number(s.marks.term3 || 0)
    const total = t1 + t2 + t3
    const average = Math.round((total / 3) * 10) / 10
    return { name: s.name, term1: t1, term2: t2, term3: t3, total, average }
  })

  const overallTotal = subjectsWithTotals.reduce((s, x) => s + x.total, 0)
  const overallAverage = Math.round((overallTotal / (subjectsWithTotals.length * 3)) * 10) / 10

  const termTotals = subjectsWithTotals.reduce(
    (acc, s) => {
      acc.term1 += s.term1
      acc.term2 += s.term2
      acc.term3 += s.term3
      return acc
    },
    { term1: 0, term2: 0, term3: 0 }
  )

  const termAverages = [
    { name: 'Term 1', value: Math.round((termTotals.term1 / subjectsWithTotals.length) * 10) / 10 },
    { name: 'Term 2', value: Math.round((termTotals.term2 / subjectsWithTotals.length) * 10) / 10 },
    { name: 'Term 3', value: Math.round((termTotals.term3 / subjectsWithTotals.length) * 10) / 10 }
  ]

  const subjectTotalsForChart = subjectsWithTotals.map((s) => ({ name: s.name, value: s.total }))

  return (
    <div className="student-card">
      <header className="student-header">
        <div className="student-profile-hero">
          <div className="student-avatar-wrap">
            {student.profilePicture ? (
              <img className="student-avatar" src={student.profilePicture} alt={`${student.name} profile`} />
            ) : (
              <div className="student-avatar student-avatar-fallback">{initials}</div>
            )}
          </div>

          <div className="student-profile-copy">
            <p className="profile-kicker">Student Profile</p>
            <h2 className="student-name">{editableName}</h2>
            <div className="profile-edit-row">
              <label className="profile-field">
                <span>Name</span>
                <input
                  type="text"
                  value={editableName}
                  onChange={(event) => setEditableName(event.target.value)}
                  className="profile-input"
                />
              </label>
              <p className="profile-hint">Only the name can be edited.</p>
            </div>
          </div>
        </div>
        {renderStars(student.rating)}
      </header>

      <section className="student-profile-grid">
        <article className="student-profile-panel">
          <h3>Personal Details</h3>
          <div className="profile-details-grid">
            <div className="profile-detail">
              <span>Student ID</span>
              <strong>{student.id}</strong>
            </div>
            <div className="profile-detail">
              <span>Admission No.</span>
              <strong>{student.admissionNumber || 'ADM-10-042'}</strong>
            </div>
            <div className="profile-detail">
              <span>Grade</span>
              <strong>{student.grade}</strong>
            </div>
            <div className="profile-detail">
              <span>Class</span>
              <strong>{student.className || 'Grade 10-B'}</strong>
            </div>
            <div className="profile-detail">
              <span>Gender</span>
              <strong>{student.gender || 'Male'}</strong>
            </div>
            <div className="profile-detail">
              <span>Date of Birth</span>
              <strong>{student.dob || '2009-03-14'}</strong>
            </div>
            <div className="profile-detail profile-detail-wide">
              <span>Email</span>
              <strong>{student.email || 'kamal.perera@student.school.edu'}</strong>
            </div>
            <div className="profile-detail profile-detail-wide">
              <span>Address</span>
              <strong>{student.address || 'No. 18, Green Road, Colombo'}</strong>
            </div>
          </div>
        </article>

        <article className="student-profile-panel">
          <h3>Parent Details</h3>
          <div className="profile-details-grid">
            <div className="profile-detail profile-detail-wide">
              <span>Parent Name</span>
              <strong>{student.parentName || 'Nimal Perera'}</strong>
            </div>
            <div className="profile-detail profile-detail-wide">
              <span>Parent Contact</span>
              <strong>{student.parentContact}</strong>
            </div>
            <div className="profile-detail profile-detail-wide">
              <span>Parent WhatsApp</span>
              <strong>{student.parentWhatsApp}</strong>
            </div>
            <div className="profile-detail profile-detail-wide">
              <span>Parent Email</span>
              <strong>{student.parentEmail}</strong>
            </div>
          </div>
        </article>
      </section>

      <section className="student-subjects-section">
        <div className="student-section-header">
          <div>
            <p className="profile-kicker">Academic Summary</p>
            <h3>Subject Details</h3>
          </div>
          <p className="section-note">Marks, totals, and term analysis are grouped here for easier review.</p>
        </div>

        <div className="student-subjects-grid">
          <article className="student-subject-panel student-table-panel">
            <h4>Subject Marks</h4>
            <table className="marks-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>1st Term</th>
                  <th>2nd Term</th>
                  <th>3rd Term</th>
                  <th>Total</th>
                  <th>Average</th>
                </tr>
              </thead>
              <tbody>
                {subjectsWithTotals.map((s) => (
                  <tr key={s.name}>
                    <td>{s.name}</td>
                    <td>{s.term1}</td>
                    <td>{s.term2}</td>
                    <td>{s.term3}</td>
                    <td>{s.total}</td>
                    <td>{s.average}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4}>Overall</td>
                  <td>{overallTotal}</td>
                  <td>{overallAverage}</td>
                </tr>
              </tfoot>
            </table>
          </article>

          <article className="student-subject-panel">
            <h4>Subject Totals</h4>
            <div className="chart-wrap">
              <SimpleBarChart data={subjectTotalsForChart} width={720} height={320} labelKey="value" />
            </div>
          </article>

          <article className="student-subject-panel student-analysis-panel">
            <h4>Term Averages Analysis</h4>
            <p className="analysis-note">This chart shows average marks per term across all subjects.</p>
            <SimpleBarChart data={termAverages} width={560} height={220} labelKey="value" />
          </article>
        </div>
      </section>
    </div>
  )
}
