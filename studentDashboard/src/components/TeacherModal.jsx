import React, { useState, useEffect } from 'react'

export default function TeacherModal({ teacher, subject, onClose }) {
  const [mode, setMode] = useState('sms')
  const [messageSubject, setMessageSubject] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setMode('sms')
    setMessageSubject('')
    setMessage('')
  }, [teacher])

  if (!teacher) return null

  const hint = () => {
    if (mode === 'sms') return 'SMS format: Keep the message short (under 160 characters).'
    if (mode === 'whatsapp') return 'WhatsApp format: You can include links or short media descriptions.'
    return 'Email format: Include a subject and a body. Example subject: "Question about ' + subject + '".'
  }

  const handleSend = () => {
    if (mode === 'email' && !messageSubject.trim()) {
      alert('Please enter an email subject before sending.')
      return
    }
    if (!message.trim()) {
      alert('Please enter a message.')
      return
    }

    // Simulate sending — replace with real API call later
    alert(
      `Sending via ${mode.toUpperCase()} to ${teacher.name} (${subject}):\n\nContact: ${teacher.contact || ''}\nWhatsApp: ${teacher.whatsapp || ''}\nEmail: ${teacher.email || ''}\n\n${mode === 'email' ? `Subject: ${messageSubject}\n` : ''}Message:\n${message}`
    )

    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Contact Teacher — {teacher.name}</h3>
          <button className="msg-btn" onClick={onClose}>Close</button>
        </div>

        <div className="modal-body">
          <p><strong>Subject:</strong> {subject}</p>
          <p><strong>Phone:</strong> <a href={`tel:${teacher.contact}`}>{teacher.contact}</a></p>
          <p><strong>WhatsApp:</strong> {teacher.whatsapp || teacher.contact}</p>
          <p><strong>Email:</strong> <a href={`mailto:${teacher.email}`}>{teacher.email}</a></p>

          <div className="mode-select">
            <label><input type="radio" name="mode" value="sms" checked={mode === 'sms'} onChange={() => setMode('sms')} /> SMS</label>
            <label style={{ marginLeft: 12 }}><input type="radio" name="mode" value="whatsapp" checked={mode === 'whatsapp'} onChange={() => setMode('whatsapp')} /> WhatsApp</label>
            <label style={{ marginLeft: 12 }}><input type="radio" name="mode" value="email" checked={mode === 'email'} onChange={() => setMode('email')} /> Email</label>
          </div>

          {mode === 'email' && (
            <div style={{ marginTop: 8 }}>
              <input className="modal-input" placeholder="Email subject" value={messageSubject} onChange={(e) => setMessageSubject(e.target.value)} />
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
