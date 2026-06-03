import React from 'react'
import { useParams } from 'react-router-dom'
import Student from './Student'
import { studentsData } from '../data/studentsData'

export default function StudentPage() {
  const { id } = useParams()
  const student = studentsData[id || '1']

  if (!student) return <div style={{ padding: 24 }}>Student not found</div>

  return <Student student={student} />
}
