import React from "react"
import { Link } from "react-router-dom"

export default function Header({ isAuthenticated = false, role = "Guest" }) {
  return (
    <header className="topbar">
      <div className="topbar-brand">
        <Link to="/" className="brand-link">
          SemantiqAI
        </Link>
      </div>

      <div className="topbar-actions">
        <Link className="ghost-btn link-btn" to="/pricing">
          Pricing
        </Link>

        <Link className="ghost-btn link-btn" to="/login">
          {isAuthenticated ? `Role: ${role}` : "Sign In"}
        </Link>

        <Link className="primary-btn link-btn" to="/dashboard">
          Open App
        </Link>
      </div>
    </header>
  )
}
