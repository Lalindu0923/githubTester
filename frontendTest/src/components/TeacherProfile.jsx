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
    </div>
  )
}