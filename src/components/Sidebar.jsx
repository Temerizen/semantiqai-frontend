import React from 'react'
import { NavLink } from 'react-router-dom'
import { routeLabels } from '../lib/routes'

const navItems = [
  '/',
  '/dashboard',
  '/learning',
  '/cognitive',
  '/execution',
  '/simulation',
  '/creation',
  '/pricing',
  '/founder'
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">SA</div>
        <div>
          <div className="brand-title">SemantiqAI</div>
          <div className="brand-sub">Ascension</div>
        </div>
      </div>

      <nav className="nav">
        {navItems.map((path) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            end={path === '/'}
          >
            {routeLabels[path]}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
