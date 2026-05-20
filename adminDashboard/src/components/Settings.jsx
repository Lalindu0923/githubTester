import '../styles/Settings.css'
import { useState } from 'react'
import { usersData } from '../data/users'

function Settings() {
  const [adminProfiles, setAdminProfiles] = useState(usersData.principalAccessTeachers)

  const removeProfile = (profileId) => {
    setAdminProfiles((currentProfiles) => currentProfiles.filter((profile) => profile.id !== profileId))
  }

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
          <h2>Admin Accessible Profiles</h2>
          <p className="settings-description">Review the school profiles that currently have admin dashboard access.</p>
          {adminProfiles.length > 0 ? (
            <div className="profile-list">
              {adminProfiles.map((profile) => (
                <div key={profile.id} className="profile-card">
                  <div className="profile-card-header">
                    <div>
                      <h3>{profile.name}</h3>
                      <p>{profile.schoolName}</p>
                    </div>
                    <span className="profile-badge">Accessible</span>
                  </div>
                  <div className="profile-meta">
                    <span><strong>Role:</strong> {profile.subject}</span>
                    <span><strong>Granted:</strong> {profile.grantDate}</span>
                    <span><strong>Email:</strong> {profile.email}</span>
                  </div>
                  <button className="remove-profile-btn" onClick={() => removeProfile(profile.id)}>
                    Remove Access
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              No admin-accessible profiles are currently assigned.
            </div>
          )}
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
