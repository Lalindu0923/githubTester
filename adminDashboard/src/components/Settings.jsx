import '../styles/Settings.css'

function Settings() {
  return (
    <div className="settings">
      <h1>Admin Settings</h1>
      <div className="settings-content">
        <div className="settings-group">
          <h2>System Configuration</h2>
          <button>Database Settings</button>
          <button>Server Configuration</button>
        </div>
        <div className="settings-group">
          <h2>Security Settings</h2>
          <label>
            <input type="checkbox" defaultChecked /> Enable 2FA
          </label>
          <label>
            <input type="checkbox" defaultChecked /> SSL/TLS enabled
          </label>
        </div>
        <div className="settings-group">
          <h2>Backup & Recovery</h2>
          <button>Backup Database</button>
          <button>View Backup History</button>
        </div>
      </div>
    </div>
  )
}

export default Settings
