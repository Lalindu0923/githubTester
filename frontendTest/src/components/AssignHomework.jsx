import { useState } from 'react'
import '../styles/AssignHomework.css'

const studentGroups = [
  {
    id: 'grade10A',
    name: 'Grade 10-A',
    students: [
      { id: 1, name: 'Kamal Perera' },
      { id: 2, name: 'Saman Silva' }
    ]
  },
  {
    id: 'grade11',
    name: 'Grade 11',
    students: [
      { id: 3, name: 'Nimasha Jayawardena' },
      { id: 4, name: 'Tharindu Wickramasinghe' },
      { id: 5, name: 'Sethmi Ranasinghe' }
    ]
  }
]

const subjects = ['Mathematics', 'Science', 'English', 'History', 'Computer']

export default function AssignHomework() {
  const [formData, setFormData] = useState({
    selectedGroup: 'grade10A',
    subject: 'Mathematics',
    title: '',
    description: '',
    dueDate: '',
    priority: 'normal'
  })

  const [assignedHomework, setAssignedHomework] = useState([])

  const selectedGroupData = studentGroups.find((g) => g.id === formData.selectedGroup)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if (!formData.title || !formData.description || !formData.dueDate) {
      alert('Please fill in all required fields')
      return
    }

    const newHomework = {
      id: Date.now(),
      ...formData,
      groupName: selectedGroupData.name,
      assignedDate: new Date().toLocaleDateString(),
      studentCount: selectedGroupData.students.length
    }

    setAssignedHomework((prev) => [newHomework, ...prev])
    
    setFormData({
      selectedGroup: 'grade10A',
      subject: 'Mathematics',
      title: '',
      description: '',
      dueDate: '',
      priority: 'normal'
    })

    alert('Homework assigned successfully!')
  }

  return (
    <div className="assign-homework-page">
      <header className="page-header">
        <h1>Assign Homework</h1>
        <p>Create and distribute homework assignments to student groups</p>
      </header>

      <section className="homework-form-section">
        <form onSubmit={handleSubmit} className="homework-form">
          <div className="form-group">
            <label htmlFor="group">Student Group *</label>
            <select
              id="group"
              name="selectedGroup"
              value={formData.selectedGroup}
              onChange={handleInputChange}
            >
              {studentGroups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name} ({group.students.length} students)
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            >
              {subjects.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="title">Homework Title *</label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="e.g., Chapter 5 Algebra Exercises"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description & Instructions *</label>
            <textarea
              id="description"
              name="description"
              placeholder="Provide detailed instructions for students..."
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dueDate">Due Date *</label>
              <input
                id="dueDate"
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Assign Homework
          </button>
        </form>
      </section>

      {selectedGroupData && (
        <section className="group-preview">
          <h3>Assigning to: {selectedGroupData.name}</h3>
          <div className="students-preview">
            {selectedGroupData.students.map((student) => (
              <span key={student.id} className="student-tag">
                {student.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {assignedHomework.length > 0 && (
        <section className="assigned-list">
          <h2>Assigned Homework History</h2>
          <div className="homework-cards">
            {assignedHomework.map((hw) => (
              <div key={hw.id} className={`homework-card priority-${hw.priority}`}>
                <div className="card-header">
                  <h3>{hw.title}</h3>
                  <span className={`priority-badge priority-${hw.priority}`}>{hw.priority}</span>
                </div>
                <p className="homework-subject">{hw.subject}</p>
                <p className="homework-description">{hw.description}</p>
                <div className="homework-meta">
                  <div>
                    <span className="meta-label">Group:</span>
                    <span>{hw.groupName}</span>
                  </div>
                  <div>
                    <span className="meta-label">Students:</span>
                    <span>{hw.studentCount}</span>
                  </div>
                  <div>
                    <span className="meta-label">Due:</span>
                    <span>{hw.dueDate}</span>
                  </div>
                  <div>
                    <span className="meta-label">Assigned:</span>
                    <span>{hw.assignedDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
