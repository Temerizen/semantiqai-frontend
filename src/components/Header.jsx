import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function Header() {
  const { isAuthenticated, role } = useAuth()

  return (
    <header className="topbar">
      <div>
        <div className="eyebrow">Infrastructure-level AI platform</div>
        <h1 className="topbar-title">SemantiqAI Ascension</h1>
      </div>

      <div className="topbar-actions">
        <Link className="ghost-btn link-btn" to="/pricing">Pricing</Link>
        <Link className="ghost-btn link-btn" to="/login">{isAuthenticated ? Role:  : 'Sign In'}</Link>
        <Link className="primary-btn link-btn" to="/dashboard">Open App</Link>
      </div>
    </header>
  )
}
