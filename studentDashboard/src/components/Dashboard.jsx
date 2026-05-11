import '../styles/Dashboard.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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

        <Link to="/settings" className="dashboard-settings-btn" title="Settings" aria-label="Settings">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" fill="currentColor"/>
            <path d="M19.4 13.2c.04-.4.06-.8.06-1.2s-.02-.8-.06-1.2l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.6-.22l-2.49 1a7.03 7.03 0 0 0-2.05-1.2l-.38-2.65A.5.5 0 0 0 13.8 2h-3.6a.5.5 0 0 0-.49.42l-.38 2.65c-.72.28-1.38.67-2.05 1.2l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46a.5.5 0 0 0 .12.64L4.54 10.8c-.04.4-.06.8-.06 1.2s.02.8.06 1.2L2.43 14.85a.5.5 0 0 0-.12.64l2 3.46c.14.24.44.34.7.22l2.49-1c.67.53 1.33.92 2.05 1.2l.38 2.65c.05.3.31.52.61.52h3.6c.3 0 .56-.22.61-.52l.38-2.65c.72-.28 1.38-.67 2.05-1.2l2.49 1c.26.12.56.02.7-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65z" fill="currentColor"/>
          </svg>
        </Link>
      </section>

      <section className="student-stat-grid">
        {progressCards.map((card) => (
          <article key={card.label} className="student-stat-card">
            <h3>{card.value}</h3>
            <p>{card.label}</p>
          </article>
        ))}
      </section>
      <div>
        <h1>This is the test heading one </h1>
      </div>
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
