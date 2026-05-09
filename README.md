# githubTester

This is a DEMO project that we have created to test our GitHub Assistance bot with multiple dashboard applications.

## Project Overview

This monorepo contains four independent dashboard applications built with React and Vite:

### 📚 Student Dashboard
- For students to view assignments and track their academic progress
- Location: `studentDashboard/`
- Features: View assignments, track grades, personal settings

### 👨‍🏫 Teacher Dashboard
- For teachers to manage students and assign homework
- Location: `teacherDashboard/`
- Features: Manage students, assign homework, grade submissions

### 👨‍👩‍👧 Parent Dashboard
- For parents to monitor their children's academic progress
- Location: `parentDashboard/`
- Features: View child progress, check assignments, communicate with teachers

### 🛡️ Admin Dashboard
- For administrators to manage the entire system
- Location: `adminDashboard/`
- Features: User management, analytics, system settings, security controls

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Running

Each dashboard is independent. To run any dashboard:

```bash
# Navigate to the dashboard folder
cd studentDashboard        # or teacherDashboard, parentDashboard, adminDashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## Project Structure

```
githubTester/
├── studentDashboard/     # Student dashboard application
├── teacherDashboard/     # Teacher dashboard application
├── parentDashboard/      # Parent dashboard application
├── adminDashboard/       # Admin dashboard application
└── README.md
```

## Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Router**: React Router v7
- **Styling**: CSS
- **Linting**: ESLint

## Features Across All Dashboards

- **Responsive Design**: Mobile-friendly layouts
- **Routing**: Navigate between different pages and views
- **Settings Management**: Customizable user preferences
- **Modern UI**: Clean and intuitive user interfaces

## Development Notes

- Each dashboard is a standalone Vite project
- They share similar project structure and dependencies
- Styling is customized per dashboard for their specific use case
- All dashboards use React Router for navigation

---

For more details about each dashboard, see their respective README.md files.
