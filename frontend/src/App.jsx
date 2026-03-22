import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import LearningPage from './pages/LearningPage'
import CognitivePage from './pages/CognitivePage'
import ExecutionPage from './pages/ExecutionPage'
import SimulationPage from './pages/SimulationPage'
import CreationPage from './pages/CreationPage'
import FounderPage from './pages/FounderPage'
import PricingPage from './pages/PricingPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="learning" element={<LearningPage />} />
        <Route path="cognitive" element={<CognitivePage />} />
        <Route path="execution" element={<ExecutionPage />} />
        <Route path="simulation" element={<SimulationPage />} />
        <Route path="creation" element={<CreationPage />} />
        <Route path="founder" element={<FounderPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
