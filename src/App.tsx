
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AcademicCalendarPage from './pages/academic-calendar'
import AchievementsPage from './pages/achievements'
import AssignmentsPage from './pages/assignments'
import DashboardPage from './pages/dashboard'
import PaymentsPage from './pages/payments'
import ProfilePage from './pages/profile'
import QuizzesPage from './pages/quizzes'
import AcademicRecordsPage from './pages/records'
import SettingsPage from './pages/settings'
import StudentResourcesPage from './pages/student-resources'
import LoginPage from './pages/home'
import CoursesPage from './pages/courses'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/academic-calendar" element={<AcademicCalendarPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/quizzes" element={<QuizzesPage />} />
        <Route path="/records" element={<AcademicRecordsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/student-resources" element={<StudentResourcesPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        {/* add more routes here */}
      </Routes>
    </BrowserRouter>

  )
}

export default App
