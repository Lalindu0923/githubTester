import { useState } from 'react'
import '../styles/Settings.css'

export default function Settings() {
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [pushAlerts, setPushAlerts] = useState(true)
  const [showGrades, setShowGrades] = useState(true)
  const [compactView, setCompactView] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [teacherMessages, setTeacherMessages] = useState(true)

  return (
    <div className="settings-page">
      <header className="settings-header">
        <p className="settings-kicker">Student Dashboard</p>
        <h1>Settings</h1>
        <p>Manage your notifications, appearance, and contact preferences.</p>
      </header>

      <section className="settings-hero-card">
        <div>
          <h2>Your profile preferences</h2>
          <p>Demo settings for the student dashboard. Toggle what you want to see in the app.</p>
        </div>
        <div className="settings-hero-badge">Demo Profile</div>
      </section>

      <section className="settings-grid">
        <article className="settings-card">
          <h2>Notifications</h2>
          <div className="settings-options">
            <label className="toggle-row">
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={(event) => setEmailAlerts(event.target.checked)}
              />
              <span>Email alerts for homework and marks</span>
            </label>

            <label className="toggle-row">
              <input
                type="checkbox"
                checked={pushAlerts}
                onChange={(event) => setPushAlerts(event.target.checked)}
              />
              <span>Push alerts for new assignments</span>
            </label>

            <label className="toggle-row">
              <input
                type="checkbox"
                checked={teacherMessages}
                onChange={(event) => setTeacherMessages(event.target.checked)}
              />
              <span>Notify me when a teacher sends a message</span>
            </label>
          </div>
        </article>

        <article className="settings-card">
          <h2>Display</h2>
          <div className="settings-options">
            <label className="toggle-row">
              <input
                type="checkbox"
                checked={showGrades}
                onChange={(event) => setShowGrades(event.target.checked)}
              />
              <span>Show grade badges on the dashboard</span>
            </label>

            <label className="toggle-row">
              <input
                type="checkbox"
                checked={compactView}
                onChange={(event) => setCompactView(event.target.checked)}
              />
              <span>Enable compact table view</span>
            </label>

            <label className="toggle-row">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(event) => setDarkMode(event.target.checked)}
              />
              <span>Dark mode preview</span>
            </label>
          </div>
        </article>

        <article className="settings-card settings-summary-card">
          <h2>Current Preferences</h2>
          <ul className="settings-summary-list">
            <li>Email alerts: {emailAlerts ? 'On' : 'Off'}</li>
            <li>Push alerts: {pushAlerts ? 'On' : 'Off'}</li>
            <li>Teacher messages: {teacherMessages ? 'On' : 'Off'}</li>
            <li>Show grades: {showGrades ? 'On' : 'Off'}</li>
            <li>Compact view: {compactView ? 'On' : 'Off'}</li>
            <li>Dark mode: {darkMode ? 'On' : 'Off'}</li>
          </ul>
        </article>
      </section>

      <section className="settings-card settings-note-card">
        <p>
          These settings are demo data for now. You can later connect them to real saved preferences and user accounts.
        </p>
      </section>
    </div>
  )
}