import '../styles/Dashboard.css'
import { schoolsData } from '../data/schools'
import { useState } from 'react'

function Dashboard() {
  const [selectedSchool, setSelectedSchool] = useState(null)

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
