import '../styles/Users.css'
import { usersData } from '../data/users'
import { useState } from 'react'

function Users() {
  const [activeTab, setActiveTab] = useState('active')
  const [expandedSchool, setExpandedSchool] = useState(null)

  // Group active accounts by school
  const accountsBySchool = usersData.activeAccounts.reduce((acc, user) => {
    if (!acc[user.schoolName]) {
      acc[user.schoolName] = []
    }
    acc[user.schoolName].push(user)
    return acc
  }, {})

  // Group pending approvals by school
  const approvalsBySchool = usersData.pendingApprovals.reduce((acc, user) => {
    if (!acc[user.schoolName]) {
      acc[user.schoolName] = []
    }
    acc[user.schoolName].push(user)
    return acc
  }, {})

  const handleApprove = (id) => {
    alert(`Account ${id} approved!`)
  }

  const handleReject = (id) => {
    alert(`Account ${id} rejected!`)
  }

  return (
    <div className="admin-page">
      <div className="page-header">
        <h1>Manage Users</h1>
        <p>Review accounts, roles, and access across the admin platform.</p>
      </div>

      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === 'active' ? 'active' : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Active Accounts
        </button>
        <button
          className={`tab-button ${activeTab === 'roles' ? 'active' : ''}`}
          onClick={() => setActiveTab('roles')}
        >
          Role Controls
        </button>
        <button
          className={`tab-button ${activeTab === 'review' ? 'active' : ''}`}
          onClick={() => setActiveTab('review')}
        >
          Account Review
        </button>
      </div>

      {/* ACTIVE ACCOUNTS TAB */}
      {activeTab === 'active' && (
        <div className="tab-content">
          <div className="page-card">
            <h2>Active Accounts</h2>
            <p>Track students, teachers, parents, and staff currently signed in.</p>
            <div className="schools-accounts">
              {Object.entries(accountsBySchool).map(([schoolName, accounts]) => (
                <div key={schoolName} className="school-accounts-section">
                  <button
                    className="school-header"
                    onClick={() =>
                      setExpandedSchool(expandedSchool === schoolName ? null : schoolName)
                    }
                  >
                    <span className="school-name">{schoolName}</span>
                    <span className="account-count">{accounts.length} accounts</span>
                    <span className={`arrow ${expandedSchool === schoolName ? 'open' : ''}`}>
                      ▼
                    </span>
                  </button>

                  {expandedSchool === schoolName && (
                    <div className="accounts-list">
                      {accounts.map((account) => (
                        <div key={account.id} className="account-item">
                          <div className="account-info">
                            <div className="account-name">{account.name}</div>
                            <div className="account-details">
                              <span className="role-badge">{account.role}</span>
                              {account.principalAccess && (
                                <span className="principal-badge">Principal Access</span>
                              )}
                            </div>
                            <div className="account-email">{account.email}</div>
                            <div className="join-date">Joined: {account.joinDate}</div>
                          </div>
                          <div className="account-status">
                            <span className="status-badge active">Active</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ROLE CONTROLS TAB */}
      {activeTab === 'roles' && (
        <div className="tab-content">
          <div className="page-card">
            <h2>Role Controls</h2>
            <p>Assign permissions and update access levels. Teachers with Principal Access:</p>
            <div className="role-controls">
              {usersData.principalAccessTeachers.map((teacher) => (
                <div key={teacher.id} className="role-control-item">
                  <div className="role-info">
                    <div className="role-name">{teacher.name}</div>
                    <div className="role-school">{teacher.schoolName}</div>
                    <div className="role-subject">{teacher.subject}</div>
                  </div>
                  <div className="role-details">
                    <div className="access-level">
                      <strong>Access:</strong> {teacher.accessLevel}
                    </div>
                    <div className="role-email">
                      <a href={`mailto:${teacher.email}`}>{teacher.email}</a>
                    </div>
                    <div className="grant-date">Granted: {teacher.grantDate}</div>
                  </div>
                  <div className="role-actions">
                    <button className="btn-edit">Edit</button>
                    <button className="btn-revoke">Revoke</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ACCOUNT REVIEW TAB */}
      {activeTab === 'review' && (
        <div className="tab-content">
          <div className="page-card">
            <h2>Account Review</h2>
            <p>Approve new registrations and resolve suspended account requests.</p>
            <div className="pending-approvals">
              {Object.entries(approvalsBySchool).map(([schoolName, approvals]) => (
                <div key={schoolName} className="approval-section">
                  <h3 className="approval-school-title">{schoolName}</h3>
                  <div className="approvals-grid">
                    {approvals.map((approval) => (
                      <div key={approval.id} className="approval-card">
                        <div className="approval-header">
                          <div className="approval-name">{approval.name}</div>
                          <span className="approval-role">{approval.role}</span>
                        </div>
                        <div className="approval-info">
                          <div className="info-line">
                            <span className="label">Email:</span>
                            <span className="value">{approval.email}</span>
                          </div>
                          <div className="info-line">
                            <span className="label">Requested:</span>
                            <span className="value">{approval.requestedAccess}</span>
                          </div>
                          {approval.subject && (
                            <div className="info-line">
                              <span className="label">Subject:</span>
                              <span className="value">{approval.subject}</span>
                            </div>
                          )}
                          {approval.grade && (
                            <div className="info-line">
                              <span className="label">Grade:</span>
                              <span className="value">{approval.grade}</span>
                            </div>
                          )}
                          <div className="info-line">
                            <span className="label">Request Date:</span>
                            <span className="value">{approval.requestDate}</span>
                          </div>
                        </div>
                        <div className="approval-actions">
                          <button
                            className="btn-approve"
                            onClick={() => handleApprove(approval.id)}
                          >
                            ✓ Approve
                          </button>
                          <button
                            className="btn-reject"
                            onClick={() => handleReject(approval.id)}
                          >
                            ✕ Reject
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Users