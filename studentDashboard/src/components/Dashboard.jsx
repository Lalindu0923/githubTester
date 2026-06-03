import '../styles/Dashboard.css'
import { useState } from 'react'
import TeacherModal from './TeacherModal'
import SubjectDetail from './SubjectDetail'

const upcomingTasks = [
  { title: 'Finish Mathematics Worksheet 4', due: 'Tomorrow', status: 'Pending' },
  { title: 'Submit Science Lab Notes', due: 'In 2 days', status: 'Started' },
  { title: 'Read English chapter 5', due: 'Friday', status: 'Not started' }
]

const todaySchedule = [
  '07:30 AM - Morning self-study',
  '09:00 AM - Mathematics class',
  '11:00 AM - Science practical',
  '02:00 PM - Computer lab'
]

const progressCards = [
  { label: 'Attendance', value: '96%' },
  { label: 'Homework due', value: '3' },
  { label: 'Messages', value: '2' },
  { label: 'Average score', value: '84%' }
]

const enrolledSubjects = [
  {
    name: 'Mathematics',
    teacher: {
      name: 'Ms. Nadeesha Fernando',
      contact: '+94-71-123-4567',
      whatsapp: '+94711234567',
      email: 'nadeesha.fernando@school.edu'
    },
    color: '#4f46e5'
  },
  {
    name: 'Science',
    teacher: {
      name: 'Mr. Roshan Gunawardena',
      contact: '+94-77-234-5678',
      whatsapp: '+94772345678',
      email: 'roshan.gunawardena@school.edu'
    },
    color: '#10b981'
  },
  {
    name: 'English',
    teacher: {
      name: 'Ms. Amelia Jayasinghe',
      contact: '+94-76-345-6789',
      whatsapp: '+94763456789',
      email: 'amelia.jayasinghe@school.edu'
    },
    color: '#f59e0b'
  },
  {
    name: 'History',
    teacher: {
      name: 'Mr. Pradeep Wijeratne',
      contact: '+94-70-456-7890',
      whatsapp: '+94704567890',
      email: 'pradeep.wijeratne@school.edu'
    },
    color: '#ef4444'
  },
  {
    name: 'Computer',
    teacher: {
      name: 'Ms. Dilani Silva',
      contact: '+94-72-567-8901',
      whatsapp: '+94725678901',
      email: 'dilani.silva@school.edu'
    },
    color: '#8b5cf6'
  }
]

function Dashboard() {
  const [selectedTeacher, setSelectedTeacher] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedSubjectDetail, setSelectedSubjectDetail] = useState(null)

  return (
    <div className="student-dashboard-shell">
      <section className="student-hero">
        <div>
          <p className="hero-tag">Student Space</p>
          <h1>Student Dashboard</h1>
          <p className="hero-subtitle">Track your homework, check today’s classes, and keep an eye on your progress.</p>
        </div>
        <div className="hero-badge">Welcome back</div>
      </section>

      <section className="student-stat-grid">
        {progressCards.map((card) => (
          <article key={card.label} className="student-stat-card">
            <h3>{card.value}</h3>
            <p>{card.label}</p>
          </article>
        ))}
      </section>

      <section className="student-dashboard-grid">
        <div className="student-main-panel">
          <div className="section-header">
            <h2>Upcoming Tasks</h2>
            <span>{upcomingTasks.length} items</span>
          </div>
          <div className="task-list">
            {upcomingTasks.map((task) => (
              <article key={task.title} className="task-card">
                <div>
                  <h3>{task.title}</h3>
                  <p>Due {task.due}</p>
                </div>
                <span>{task.status}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="student-side-panel">
          <h2>Today’s Schedule</h2>
          <ul className="schedule-list">
            {todaySchedule.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="panel-divider" />

          <h3>Quick Notes</h3>
          <p className="student-note">Check your profile page for full marks and review your progress regularly.</p>
        </aside>
      </section>

      <section className="student-subjects-section">
        <div className="section-header">
          <h2>Your Enrolled Subjects</h2>
          <span>{enrolledSubjects.length} subjects</span>
        </div>
        <div className="subjects-grid">
          {enrolledSubjects.map((subject) => (
            <div 
              key={subject.name} 
              className="subject-card" 
              style={{ borderTopColor: subject.color }}
              onClick={() => setSelectedSubjectDetail(subject)}
            >
              <div className="subject-header" style={{ backgroundColor: subject.color }}>
                <h3>{subject.name}</h3>
              </div>
              <div className="subject-content">
                <p className="teacher-name">👨‍🏫 {subject.teacher.name}</p>
                <button 
                  className="contact-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedTeacher(subject.teacher)
                    setSelectedSubject(subject.name)
                  }}
                >
                  Contact Teacher
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedTeacher && (
        <TeacherModal 
          teacher={selectedTeacher} 
          subject={selectedSubject}
          onClose={() => {
            setSelectedTeacher(null)
            setSelectedSubject(null)
          }} 
        />
      )}

      {selectedSubjectDetail && (
        <SubjectDetail 
          subject={selectedSubjectDetail}
          onClose={() => setSelectedSubjectDetail(null)}
        />
      )}
    </div>
  )
}

export default Dashboard
