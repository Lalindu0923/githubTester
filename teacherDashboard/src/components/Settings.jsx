import { useState } from 'react'
import '../styles/Settings.css'

export default function Settings() {
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [showGrades, setShowGrades] = useState(true)
  const [compactView, setCompactView] = useState(false)

  return (
    <div className="settings-page">
      <header className="settings-header">
        <h1>Settings</h1>
        <p>Manage teacher preferences and classroom visibility options.</p>
      </header>

      <section className="settings-card">
        <h2>Preference Controls</h2>
        <div className="settings-options">
          <label className="toggle-row">
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={(event) => setEmailAlerts(event.target.checked)}
            />
            <span>Email alerts for student updates</span>
          </label>

          <label className="toggle-row">
            <input
              type="checkbox"
              checked={showGrades}
              onChange={(event) => setShowGrades(event.target.checked)}
            />
            <span>Show grade badges on dashboard</span>
          </label>

          <label className="toggle-row">
            <input
              type="checkbox"
              checked={compactView}
              onChange={(event) => setCompactView(event.target.checked)}
            />
            <span>Enable compact table view</span>
          </label>
        </div>
      </section>
    </div>
  )
}