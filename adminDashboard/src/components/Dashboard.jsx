import '../styles/Dashboard.css'
import { schoolsData } from '../data/schools'
import { useState } from 'react'

const BILLING_RATES = {
  teacher: 18,
  student: 6,
}

function formatBillingMonth(date = new Date()) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(date)
}

function createBillingReport(school) {
  const teacherCount = school.teachers.length
  const studentCount = school.students.length
  const teacherUsage = teacherCount * BILLING_RATES.teacher
  const studentUsage = studentCount * BILLING_RATES.student
  const totalUsage = teacherUsage + studentUsage
  const monthLabel = formatBillingMonth()

  return [
    'School Monthly Billing Report',
    `School Name: ${school.name}`,
    `Billing Month: ${monthLabel}`,
    `Teachers: ${teacherCount}`,
    `Students: ${studentCount}`,
    `Teacher Usage Charges: $${teacherUsage.toFixed(2)}`,
    `Student Usage Charges: $${studentUsage.toFixed(2)}`,
    `Estimated Total Due: $${totalUsage.toFixed(2)}`,
    '',
    'Usage Summary',
    'Item,Count,Rate,Charge',
    `Teachers,${teacherCount},$${BILLING_RATES.teacher.toFixed(2)},$${teacherUsage.toFixed(2)}`,
    `Students,${studentCount},$${BILLING_RATES.student.toFixed(2)},$${studentUsage.toFixed(2)}`,
  ].join('\n')
}

function Dashboard() {
  const [selectedSchool, setSelectedSchool] = useState(null)

  const handleDownloadBilling = (school) => {
    const report = createBillingReport(school)
    const fileName = `${school.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-monthly-billing.txt`
    const blob = new Blob([report], { type: 'text/plain;charset=utf-8' })
    const downloadUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = downloadUrl
    link.download = fileName
    link.click()

    URL.revokeObjectURL(downloadUrl)
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>System management and oversight</p>
      </div>

      <div className="schools-section">
        <h2 className="section-title">School Information & Management</h2>
        <div className="schools-grid">
          {schoolsData.map((school) => (
            <div key={school.id} className="school-card" onClick={() => setSelectedSchool(selectedSchool?.id === school.id ? null : school)}>
              <h3>{school.name}</h3>
              <div className="school-info">
                <div className="info-item">
                  <span className="label">Principal:</span>
                  <span className="value">{school.principal.name}</span>
                </div>
                <div className="info-item">
                  <span className="label">Principal Phone:</span>
                  <span className="value">{school.principal.phone}</span>
                </div>
                <div className="info-item">
                  <span className="label">Principal Email:</span>
                  <span className="value">{school.principal.email}</span>
                </div>
              </div>
              <div className="login-stats">
                <div className="stat">
                  <span className="stat-label">Teachers</span>
                  <span className="stat-count">{school.totalTeachers}</span>
                </div>
                <div className="divider"></div>
                <div className="stat">
                  <span className="stat-label">Students</span>
                  <span className="stat-count">{school.totalStudents}</span>
                </div>
              </div>
              <p className="click-hint">Click to view details</p>
            </div>
          ))}
        </div>
      </div>

      {selectedSchool && (
        <div className="detailed-school-view">
          <div className="detail-container">
            <button className="close-btn" onClick={() => setSelectedSchool(null)}>×</button>
            <h2>{selectedSchool.name}</h2>
            <div className="billing-actions">
              <button className="billing-download-btn" onClick={() => handleDownloadBilling(selectedSchool)}>
                Download Monthly Billing
              </button>
              <p className="billing-note">Creates an estimated usage billing file for the selected school.</p>
            </div>
            <p className="address"><strong>Address:</strong> {selectedSchool.address}</p>
            <p className="established"><strong>Established:</strong> {selectedSchool.established}</p>

            <div className="principal-section">
              <h3>Principal Information</h3>
              <div className="principal-details">
                <p><strong>Name:</strong> {selectedSchool.principal.name}</p>
                <p><strong>Email:</strong> <a href={`mailto:${selectedSchool.principal.email}`}>{selectedSchool.principal.email}</a></p>
                <p><strong>Phone:</strong> <a href={`tel:${selectedSchool.principal.phone}`}>{selectedSchool.principal.phone}</a></p>
                <p><strong>Office:</strong> {selectedSchool.principal.office}</p>
              </div>
            </div>

            <div className="teachers-section">
              <h3>Teachers ({selectedSchool.teachers.length})</h3>
              <div className="people-list">
                {selectedSchool.teachers.map((teacher) => (
                  <div key={teacher.id} className="person-card">
                    <div className="person-name">{teacher.name}</div>
                    <div className="person-subject">{teacher.subject}</div>
                    <div className="person-contact">
                      <a href={`mailto:${teacher.email}`}>{teacher.email}</a>
                      <br />
                      <a href={`tel:${teacher.phone}`}>{teacher.phone}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="students-section">
              <h3>Students ({selectedSchool.students.length})</h3>
              <div className="people-list">
                {selectedSchool.students.map((student) => (
                  <div key={student.id} className="person-card">
                    <div className="person-name">{student.name}</div>
                    <div className="person-grade">Grade {student.grade}</div>
                    <div className="person-contact">
                      <a href={`mailto:${student.email}`}>{student.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="dashboard-content">
        <div className="card">
          <h2>System Overview</h2>
          <p>Monitor system health and performance</p>
        </div>
        <div className="card">
          <h2>User Management</h2>
          <p>Manage student, teacher, and parent accounts</p>
        </div>
        <div className="card">
          <h2>Analytics & Reports</h2>
          <p>View detailed analytics and system reports</p>
        </div>
        <div className="card">
          <h2>Security</h2>
          <p>Manage permissions and access control</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
