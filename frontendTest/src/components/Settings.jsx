import { useMemo, useState } from 'react'
import '../styles/Settings.css'

const demoPages = [
  { label: 'Dashboard', path: '/' },
  { label: 'Students', path: '/students' },
  { label: 'Teacher Profile', path: '/profile' }
]

export default function Settings() {
  const [selectedPage, setSelectedPage] = useState(demoPages[0].path)
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [showGrades, setShowGrades] = useState(true)
  const [compactView, setCompactView] = useState(false)

  const viewerSrc = useMemo(() => {
    if (selectedPage === '/') return '/'
    return selectedPage
  }, [selectedPage])

  return (
    <div className="settings-page">
      <header className="settings-header">
        <h1>Settings</h1>
        <p>Manage teacher preferences and preview demo pages.</p>
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

      <section className="settings-card">
        <div className="viewer-header">
          <h2>Demo Page Viewer</h2>
          <div className="viewer-controls">
            <label htmlFor="demo-page-select">Page</label>
            <select
              id="demo-page-select"
              value={selectedPage}
              onChange={(event) => setSelectedPage(event.target.value)}
            >
              {demoPages.map((page) => (
                <option key={page.path} value={page.path}>
                  {page.label}
                </option>
              ))}
            </select>
            <a href={selectedPage} target="_blank" rel="noreferrer" className="open-page-btn">
              Open page
            </a>
          </div>
        </div>

        <div className="viewer-shell">
          <iframe title="Demo Page Viewer" src={viewerSrc} className="demo-frame" />
        </div>
      </section>
    </div>
  )
}