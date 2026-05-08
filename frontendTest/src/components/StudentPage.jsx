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
    ,
    parentContact: '+94-71-123-4567',
    parentWhatsApp: '+94711234567',
    parentEmail: 'kamal.parent@example.com'
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
    ,
    parentContact: '+94-77-234-5678',
    parentWhatsApp: '+94772345678',
    parentEmail: 'saman.parent@example.com'
  },
  3: {
    id: 3,
    name: 'Nimasha Jayawardena',
    grade: '11',
    subjects: [
      { name: 'Mathematics', marks: { term1: 84, term2: 88, term3: 86 } },
      { name: 'Science', marks: { term1: 81, term2: 79, term3: 85 } },
      { name: 'English', marks: { term1: 90, term2: 92, term3: 91 } },
      { name: 'History', marks: { term1: 74, term2: 77, term3: 79 } },
      { name: 'Computer', marks: { term1: 93, term2: 95, term3: 94 } }
    ]
    ,
    parentContact: '+94-72-345-6789',
    parentWhatsApp: '+94723456789',
    parentEmail: 'nimasha.parent@example.com'
  },
  4: {
    id: 4,
    name: 'Tharindu Wickramasinghe',
    grade: '11',
    subjects: [
      { name: 'Mathematics', marks: { term1: 76, term2: 80, term3: 82 } },
      { name: 'Science', marks: { term1: 88, term2: 86, term3: 89 } },
      { name: 'English', marks: { term1: 79, term2: 83, term3: 81 } },
      { name: 'History', marks: { term1: 70, term2: 73, term3: 75 } },
      { name: 'Computer', marks: { term1: 85, term2: 87, term3: 90 } }
    ]
    ,
    parentContact: '+94-70-456-7890',
    parentWhatsApp: '+94704567890',
    parentEmail: 'tharindu.parent@example.com'
  },
  5: {
    id: 5,
    name: 'Sethmi Ranasinghe',
    grade: '11',
    subjects: [
      { name: 'Mathematics', marks: { term1: 91, term2: 89, term3: 93 } },
      { name: 'Science', marks: { term1: 87, term2: 90, term3: 88 } },
      { name: 'English', marks: { term1: 94, term2: 93, term3: 95 } },
      { name: 'History', marks: { term1: 80, term2: 82, term3: 84 } },
      { name: 'Computer', marks: { term1: 96, term2: 94, term3: 97 } }
    ]
    ,
    parentContact: '+94-75-567-8901',
    parentWhatsApp: '+94755678901',
    parentEmail: 'sethmi.parent@example.com'
  }
}

export default function StudentPage() {
  const { id } = useParams()
  const student = studentsData[id]

  if (!student) return <div style={{ padding: 24 }}>Student not found</div>

  return <Student student={student} />
}
