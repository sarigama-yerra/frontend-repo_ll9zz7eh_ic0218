import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import TrackingPage from './pages/TrackingPage'
import AnalyticsPage from './pages/AnalyticsPage'
import PlannerPage from './pages/PlannerPage'
import ChatbotPage from './pages/ChatbotPage'
import VidomaPage from './pages/VidomaPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/vidoma" element={<VidomaPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
