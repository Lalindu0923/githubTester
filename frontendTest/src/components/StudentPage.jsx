import React from 'react'
import { useParams } from 'react-router-dom'
import Student from './Student'

// reuse the same sample data shape as Student; this is a small wrapper
const studentsData = {
  1: {
    id: 1,
    name: 'Kamal Perera',
    grade: '10',
    subjects: [
      { name: 'Mathematics', marks: { term1: 88, term2: 82, term3: 90 } },
      { name: 'Science', marks: { term1: 76, term2: 80, term3: 79 } },
      { name: 'English', marks: { term1: 92, term2: 89, term3: 95 } },
      { name: 'History', marks: { term1: 67, term2: 72, term3: 70 } },
      { name: 'Computer', marks: { term1: 81, term2: 85, term3: 88 } }
    ]
  },
  2: {
    id: 2,
    name: 'Saman Silva',
    grade: '10',
    subjects: [
      { name: 'Mathematics', marks: { term1: 78, term2: 72, term3: 80 } },
      { name: 'Science', marks: { term1: 86, term2: 79, term3: 88 } },
      { name: 'English', marks: { term1: 82, term2: 85, term3: 84 } },
      { name: 'History', marks: { term1: 71, term2: 68, term3: 73 } },
      { name: 'Computer', marks: { term1: 91, term2: 90, term3: 93 } }
    ]
  }
}

export default function StudentPage() {
  const { id } = useParams()
  const student = studentsData[id]

  if (!student) return <div style={{ padding: 24 }}>Student not found</div>

  return <Student student={student} />
}
