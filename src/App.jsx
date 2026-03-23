import React from "react"
import { Routes, Route } from "react-router-dom"
import DashboardPage from "./pages/DashboardPage"
import HomePage from "./pages/HomePage"
import PricingPage from "./pages/PricingPage"
import LoginPage from "./pages/LoginPage"
import FounderPage from "./pages/FounderPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/founder" element={<FounderPage />} />
    </Routes>
  )
}
