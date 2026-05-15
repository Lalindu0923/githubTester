import React, { useMemo, useState } from 'react'
import parentData from './data/parents.json'

const navigationItems = ['Overview', 'Attendance', 'Fees', 'Messages', 'Profile', 'Parent Profile']

export default function App() {
  const parent = parentData[0]
  const [selectedStudentId, setSelectedStudentId] = useState(parent.children[0]?.id ?? null)
  const [activeTab, setActiveTab] = useState('Overview')
  const [editMode, setEditMode] = useState(false)

  const selectedStudent = useMemo(
    () => parent.children.find((student) => student.id === selectedStudentId) ?? parent.children[0],
    [parent.children, selectedStudentId],
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="tab-content">
            <div className="overview-grid">
              <div className="overview-card">
                <h3>{selectedStudent.name} - Overview</h3>
                <div className="detail-item-text">
                  <span>Grade</span>
                  <strong>{selectedStudent.grade}</strong>
                </div>
                <div className="detail-item-text">
                  <span>Section</span>
                  <strong>{selectedStudent.section}</strong>
                </div>
                <div className="detail-item-text">
                  <span>Roll No.</span>
                  <strong>{selectedStudent.rollNo}</strong>
                </div>
                <div className="detail-item-text">
                  <span>Attendance</span>
                  <strong>{selectedStudent.attendance}</strong>
                </div>
              </div>
              <div className="overview-card">
                <h3>Quick Stats</h3>
                <div className="stat-item">
                  <span>Class Teacher</span>
                  <strong>{selectedStudent.classTeacher}</strong>
                </div>
                <div className="stat-item">
                  <span>Fees Status</span>
                  <strong>{selectedStudent.feesStatus}</strong>
                </div>
                <div className="stat-item">
                  <span>Monthly Fees</span>
                  <strong>Rs. {selectedStudent.feesPerMonth}</strong>
                </div>
              </div>
            </div>
            <div style={{marginTop: '24px'}}>
              <h3>Enrolling Subjects</h3>
              <div className="subjects-grid">
                {selectedStudent.subjects.map((subject, idx) => (
                  <div key={idx} className="subject-card">
                    <div className="subject-header">
                      <strong>{subject.name}</strong>
                      <span className="marks-badge">{subject.marks}</span>
                    </div>
                    <div className="subject-detail">
                      <span>Teacher:</span>
                      <p>{subject.teacher}</p>
                    </div>
                    {subject.yearlyMarks && (
                      <div className="subject-marks-breakdown">
                        <span>Marks Progress:</span>
                        <div className="marks-timeline">
                          {subject.yearlyMarks.map((record, mIdx) => (
                            <div key={mIdx} className="marks-item">
                              <span className="month-label">{record.term}</span>
                              <span className="marks-value">{record.marks}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case 'Attendance':
        return (
          <div className="tab-content">
            <h3>Attendance Report - {selectedStudent.name}</h3>
            <div className="attendance-chart">
              <div className="chart-row header">
                <div>Month</div>
                <div>Present</div>
                <div>Total</div>
                <div>Percentage</div>
              </div>
              {selectedStudent.monthlyAttendance.map((record, idx) => (
                <div key={idx} className="chart-row">
                  <div>{record.month}</div>
                  <div>{record.days}</div>
                  <div>{record.total}</div>
                  <div className="percentage">{Math.round((record.days / record.total) * 100)}%</div>
                </div>
              ))}
            </div>
            <div className="attendance-summary">
              <p>Overall Attendance: <strong>{selectedStudent.attendance}</strong></p>
            </div>
          </div>
        )
      case 'Fees':
        return (
          <div className="tab-content">
            <h3>Fees Report - {selectedStudent.name}</h3>
            <div className="fees-chart">
              <div className="chart-row header">
                <div>Month</div>
                <div>Amount</div>
                <div>Status</div>
                <div>Date</div>
              </div>
              {selectedStudent.fees.map((fee, idx) => (
                <div key={idx} className="chart-row">
                  <div>{fee.month}</div>
                  <div>Rs. {fee.amount}</div>
                  <div className={`status ${fee.status.toLowerCase()}`}>{fee.status}</div>
                  <div>{fee.date || '-'}</div>
                </div>
              ))}
            </div>
            <div className="fees-summary">
              <p>Monthly Fees: <strong>Rs. {selectedStudent.feesPerMonth}</strong></p>
              <p>Total Annual Fees: <strong>Rs. {selectedStudent.totalFees}</strong></p>
            </div>
          </div>
        )
      case 'Messages':
        return (
          <div className="tab-content">
            <h3>Messages from Teachers - {selectedStudent.name}</h3>
            <div className="messages-list">
              {selectedStudent.messages.map((msg, idx) => (
                <div key={idx} className="message-card">
                  <div className="message-header">
                    <strong>{msg.from}</strong>
                    <span className="message-date">{msg.date}</span>
                  </div>
                  <div className="message-subject">{msg.subject}</div>
                  <div className="message-text">{msg.text}</div>
                </div>
              ))}
            </div>
          </div>
        )
      case 'Parent Profile':
        return (
          <div className="tab-content">
            <div className="overview-grid">
              <div className="overview-card">
                <h3>Parent Information</h3>
                <div className="detail-item-text">
                  <span>Name</span>
                  <strong>{parent.name}</strong>
                </div>
                <div className="detail-item-text">
                  <span>Email</span>
                  <strong>{parent.email}</strong>
                </div>
                <div className="detail-item-text">
                  <span>Phone</span>
                  <strong>{parent.phone}</strong>
                </div>
              </div>
              <div className="overview-card">
                <h3>Contact & Address</h3>
                <div className="detail-item-text">
                  <span>Address</span>
                  <strong>{parent.address}</strong>
                </div>
                <div className="detail-item-text">
                  <span>City</span>
                  <strong>{parent.city}</strong>
                </div>
                <div className="detail-item-text">
                  <span>State & Zip</span>
                  <strong>{parent.state} {parent.zipCode}</strong>
                </div>
              </div>
            </div>
            <div style={{marginTop: '24px'}}>
              <h3>Children Overview</h3>
              <div className="children-summary">
                {parent.children.map((child, idx) => (
                  <div key={idx} className="child-summary-card">
                    <strong>{child.name}</strong> - Grade {child.grade} {child.section}, Attendance: {child.attendance}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case 'Profile':
        return (
          <div className="tab-content">
            {!editMode ? (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3>{selectedStudent.name} - Student Profile</h3>
                  <button className="edit-btn" onClick={() => setEditMode(true)}>Edit Profile</button>
                </div>
                <div className="profile-grid">
                  <div className="detail-item-text">
                    <span>Name</span>
                    <strong>{selectedStudent.name}</strong>
                  </div>
                  <div className="detail-item-text">
                    <span>Grade</span>
                    <strong>{selectedStudent.grade}</strong>
                  </div>
                  <div className="detail-item-text">
                    <span>Section</span>
                    <strong>{selectedStudent.section}</strong>
                  </div>
                  <div className="detail-item-text">
                    <span>Roll No.</span>
                    <strong>{selectedStudent.rollNo}</strong>
                  </div>
                  <div className="detail-item-text">
                    <span>Class Teacher</span>
                    <strong>{selectedStudent.classTeacher}</strong>
                  </div>
                  <div className="detail-item-text">
                    <span>Date of Birth</span>
                    <strong>{selectedStudent.dob}</strong>
                  </div>
                  <div className="detail-item-text">
                    <span>Attendance</span>
                    <strong>{selectedStudent.attendance}</strong>
                  </div>
                  <div className="detail-item-text">
                    <span>Fees Status</span>
                    <strong>{selectedStudent.feesStatus}</strong>
                  </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <h4>Subjects & Marks</h4>
                  <ul>
                    {selectedStudent.subjects.map((sub, idx) => (
                      <li key={idx}>{sub.name} - {sub.marks}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <h4>Teacher Remarks</h4>
                  <p>{selectedStudent.remarks}</p>
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3>Edit {selectedStudent.name}</h3>
                  <button className="cancel-btn" onClick={() => setEditMode(false)}>Cancel</button>
                </div>
                <div className="edit-form">
                  <p style={{ color: '#999', fontStyle: 'italic' }}>Edit form would be here with input fields. For demo, just showing placeholder.</p>
                  <button className="save-btn" onClick={() => setEditMode(false)}>Save Changes</button>
                </div>
              </div>
            )}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div>
          <p className="eyebrow">Parent-only dashboard</p>
          <h1>{parent.name}</h1>
        </div>
        <div className="header-note">You can view only your children and their school details.</div>
      </header>

      <nav className="top-nav" aria-label="Primary">
        {navigationItems.map((item) => (
          <button
            key={item}
            type="button"
            className={`nav-item ${activeTab === item ? 'active' : ''}`}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <main className="container">
        <section className="summary card">
          <h3>My Children: {parent.children.length}</h3>
          <p>Current Selection: <strong>{selectedStudent.name}</strong> (Grade {selectedStudent.grade})</p>
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
              <div className="btn">Select</div>
            </button>
          ))}
        </section>

        <aside className="details">
          {renderTabContent()}
        </aside>
      </main>
    </div>
  )
}
