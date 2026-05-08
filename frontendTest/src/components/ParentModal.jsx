import React, { useState, useEffect } from 'react'

export default function ParentModal({ student, onClose }) {
  const [mode, setMode] = useState('sms')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setMode('sms')
    setSubject('')
    setMessage('')
  }, [student])

  if (!student) return null

  const hint = () => {
    if (mode === 'sms') return 'SMS format: Keep the message short (under 160 characters).'
    if (mode === 'whatsapp') return 'WhatsApp format: You can include links or short media descriptions.'
    return 'Email format: Include a subject and a body. Example subject: "Student absence".'
  }

  const handleSend = () => {
    if (mode === 'email' && !subject.trim()) {
      alert('Please enter an email subject before sending.')
      return
    }
    if (!message.trim()) {
      alert('Please enter a message.')
      return
    }

    // Simulate sending — replace with real API call later
    alert(
      `Sending via ${mode.toUpperCase()} to ${student.name} parent:\n\nContact: ${student.parentContact || ''}\nWhatsApp: ${student.parentWhatsApp || ''}\nEmail: ${student.parentEmail || ''}\n\n${mode === 'email' ? `Subject: ${subject}\n` : ''}Message:\n${message}`
    )

    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Parent contact — {student.name}</h3>
          <button className="msg-btn" onClick={onClose}>Close</button>
        </div>

        <div className="modal-body">
          <p><strong>Phone:</strong> <a href={`tel:${student.parentContact}`}>{student.parentContact}</a></p>
          <p><strong>WhatsApp:</strong> {student.parentWhatsApp || student.parentContact}</p>
          <p><strong>Email:</strong> <a href={`mailto:${student.parentEmail}`}>{student.parentEmail}</a></p>

          <div className="mode-select">
            <label><input type="radio" name="mode" value="sms" checked={mode === 'sms'} onChange={() => setMode('sms')} /> SMS</label>
            <label style={{ marginLeft: 12 }}><input type="radio" name="mode" value="whatsapp" checked={mode === 'whatsapp'} onChange={() => setMode('whatsapp')} /> WhatsApp</label>
            <label style={{ marginLeft: 12 }}><input type="radio" name="mode" value="email" checked={mode === 'email'} onChange={() => setMode('email')} /> Email</label>
          </div>

          {mode === 'email' && (
            <div style={{ marginTop: 8 }}>
              <input className="modal-input" placeholder="Email subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
          )}

          <div style={{ marginTop: 8 }}>
            <textarea className="modal-textarea" placeholder={hint()} value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>

          <div className="modal-hint">{hint()}</div>
        </div>

        <div className="modal-footer">
          <button className="msg-btn" onClick={handleSend}>Send</button>
          <button style={{ marginLeft: 8 }} className="msg-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
