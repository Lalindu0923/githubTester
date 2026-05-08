import { useState } from 'react'
import '../styles/TeacherProfile.css'

const teacherProfile = {
  name: 'Ms. Nadeesha Fernando',
  subject: 'Mathematics',
  employeeId: 'TCH-1042',
  classTeacherOf: 'Grade 10-B',
  contact: 'nadeesha.fernando@school.edu',
  officeHours: 'Mon - Thu, 1:30 PM - 3:00 PM'
}

const timetable = [
  { day: 'Monday', period: '8:00 - 9:00', className: 'Grade 10-A', topic: 'Algebra' },
  { day: 'Monday', period: '10:00 - 11:00', className: 'Grade 10-B', topic: 'Geometry' },
  { day: 'Tuesday', period: '9:00 - 10:00', className: 'Grade 9-C', topic: 'Fractions' },
  { day: 'Wednesday', period: '11:00 - 12:00', className: 'Grade 10-B', topic: 'Trigonometry' },
  { day: 'Thursday', period: '8:00 - 9:00', className: 'Grade 11-A', topic: 'Functions' },
  { day: 'Friday', period: '10:00 - 11:00', className: 'Grade 10-A', topic: 'Revision' }
]

const works = [
  'Prepare weekly lesson plans and teaching materials',
  'Conduct term tests and evaluate student performance',
  'Mentor students needing extra support after school',
  'Coordinate Grade 10-B parent communication updates',
  'Review syllabus progress and submit monthly reports'
]

export default function TeacherProfile() {
  const [leaveForm, setLeaveForm] = useState({
    startDate: '',
    endDate: '',
    leaveType: 'annual',
    reason: ''
  })

  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      startDate: '2026-05-15',
      endDate: '2026-05-17',
      leaveType: 'annual',
      reason: 'Personal vacation',
      status: 'approved',
      submittedDate: '2026-04-28'
    }
  ])

  const handleLeaveInputChange = (event) => {
    const { name, value } = event.target
    setLeaveForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitLeave = (event) => {
    event.preventDefault()

    if (!leaveForm.startDate || !leaveForm.endDate || !leaveForm.reason) {
      alert('Please fill in all required fields')
      return
    }

    const newRequest = {
      id: Date.now(),
      ...leaveForm,
      status: 'pending',
      submittedDate: new Date().toISOString().split('T')[0]
    }

    setLeaveRequests((prev) => [newRequest, ...prev])
    setLeaveForm({
      startDate: '',
      endDate: '',
      leaveType: 'annual',
      reason: ''
    })

    alert('Leave request submitted successfully!')
  }

  return (
    <div className="teacher-profile">
      <section className="profile-header-card">
        <h1>Teacher Profile</h1>
        <p className="profile-subtitle">Professional details visible to teaching staff</p>
        <div className="profile-grid">
          <div>
            <span className="profile-label">Name</span>
            <p>{teacherProfile.name}</p>
          </div>
          <div>
            <span className="profile-label">Subject</span>
            <p>{teacherProfile.subject}</p>
          </div>
          <div>
            <span className="profile-label">Employee ID</span>
            <p>{teacherProfile.employeeId}</p>
          </div>
          <div>
            <span className="profile-label">Class Teacher</span>
            <p>{teacherProfile.classTeacherOf}</p>
          </div>
          <div>
            <span className="profile-label">Contact</span>
            <p>{teacherProfile.contact}</p>
          </div>
          <div>
            <span className="profile-label">Office Hours</span>
            <p>{teacherProfile.officeHours}</p>
          </div>
        </div>
      </section>

      <section className="profile-section-card">
        <h2>Weekly Time Table</h2>
        <table className="timetable-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Class</th>
              <th>Topic</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((slot, index) => (
              <tr key={`${slot.day}-${slot.period}-${index}`}>
                <td>{slot.day}</td>
                <td>{slot.period}</td>
                <td>{slot.className}</td>
                <td>{slot.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="profile-section-card">
        <h2>Teacher Work & Responsibilities</h2>
        <ul className="work-list">
          {works.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="profile-section-card">
        <h2>Request Leave / Holiday</h2>
        <form onSubmit={handleSubmitLeave} className="leave-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="startDate">Start Date *</label>
              <input
                id="startDate"
                type="date"
                name="startDate"
                value={leaveForm.startDate}
                onChange={handleLeaveInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date *</label>
              <input
                id="endDate"
                type="date"
                name="endDate"
                value={leaveForm.endDate}
                onChange={handleLeaveInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="leaveType">Leave Type *</label>
            <select
              id="leaveType"
              name="leaveType"
              value={leaveForm.leaveType}
              onChange={handleLeaveInputChange}
            >
              <option value="annual">Annual Leave</option>
              <option value="sick">Sick Leave</option>
              <option value="holiday">Public Holiday</option>
              <option value="personal">Personal Leave</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason for Leave *</label>
            <textarea
              id="reason"
              name="reason"
              placeholder="Provide reason for your leave request..."
              rows="3"
              value={leaveForm.reason}
              onChange={handleLeaveInputChange}
            />
          </div>

          <button type="submit" className="submit-leave-btn">
            Submit Leave Request
          </button>
        </form>
      </section>

      {leaveRequests.length > 0 && (
        <section className="profile-section-card">
          <h2>Leave Request History</h2>
          <div className="leave-requests-list">
            {leaveRequests.map((request) => (
              <div key={request.id} className={`leave-request-card status-${request.status}`}>
                <div className="request-header">
                  <div>
                    <h4>{request.leaveType.charAt(0).toUpperCase() + request.leaveType.slice(1)}</h4>
                    <p className="request-dates">
                      {request.startDate} to {request.endDate}
                    </p>
                  </div>
                  <span className={`status-badge status-${request.status}`}>
                    {request.status.toUpperCase()}
                  </span>
                </div>
                <p className="request-reason">{request.reason}</p>
                <div className="request-meta">
                  <span>Submitted: {request.submittedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}