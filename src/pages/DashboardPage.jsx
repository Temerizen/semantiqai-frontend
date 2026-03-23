import React from "react"
import { Link } from "react-router-dom"
import Card from "../components/Card"
import AIPanel from "../components/AIPanel"
import { routes } from "../lib/routes"

const quickActions = [
  { label: "Open AI School", to: "/school" },
  { label: "Train in Cognitive Lab", to: "/cognitive-lab" },
  { label: "Plan in Execution", to: "/execution" },
  { label: "Run Simulation", to: "/simulation" },
  { label: "Create Outputs", to: "/creation" },
  { label: "Founder Control", to: "/founder" }
]

const stats = [
  { label: "System Status", value: "Online", tone: "success" },
  { label: "Active Modules", value: "6", tone: "accent" },
  { label: "Focus Mode", value: "Deep", tone: "neutral" },
  { label: "Founder Access", value: "Enabled", tone: "accent" }
]

const recentActivity = [
  "AI School ready for structured learning",
  "Cognitive Lab ready for focus training",
  "Execution Engine standing by",
  "Simulation Engine available",
  "Creation Engine available",
  "Founder panel online"
]

const groupedRoutes = routes.reduce((acc, route) => {
  const group = route.group || "General"
  if (!acc[group]) acc[group] = []
  acc[group].push(route)
  return acc
}, {})

export default function DashboardPage() {
  return (
    <div className="dashboard-shell">
      <section className="dashboard-hero card">
        <div className="dashboard-hero-copy">
          <div className="eyebrow">MISSION CONTROL</div>
          <h1>Run SemantiqAI from one command center.</h1>
          <p>
            Launch learning, cognition, execution, simulation, and creation
            flows from a single dashboard built for momentum.
          </p>

          <div className="dashboard-hero-actions">
            <Link to="/creation" className="primary-btn link-btn">
              Start Creating
            </Link>
            <Link to="/execution" className="ghost-btn link-btn">
              Open Execution
            </Link>
          </div>
        </div>

        <div className="dashboard-hero-side">
          <div className="pulse-panel">
            <div className="pulse-top">
              <span className="status-dot live" />
              <span>Live system pulse</span>
            </div>

            <div className="pulse-list">
              <div className="pulse-row">
                <span>School Engine</span>
                <span className="stack-tag">Ready</span>
              </div>
              <div className="pulse-row">
                <span>Cognitive Lab</span>
                <span className="stack-tag">Ready</span>
              </div>
              <div className="pulse-row">
                <span>Execution Engine</span>
                <span className="stack-tag">Ready</span>
              </div>
              <div className="pulse-row">
                <span>Creation Engine</span>
                <span className="stack-tag">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map((item) => (
          <div
            key={item.label}
            className={`metric-tile metric-${item.tone}`}
          >
            <div className="metric-tile-label">{item.label}</div>
            <div className="metric-tile-value">{item.value}</div>
          </div>
        ))}
      </section>

      <section className="dashboard-section">
        <div className="section-heading dashboard-heading">
          <div className="eyebrow">QUICK ACTIONS</div>
          <h2>Jump straight into the engine you need.</h2>
        </div>

        <div className="quick-actions-grid">
          {quickActions.map((action) => (
            <Link key={action.to} to={action.to} className="quick-action-card">
              <span>{action.label}</span>
              <span className="quick-action-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="dashboard-main-grid">
        <div className="dashboard-left">
          {Object.entries(groupedRoutes).map(([group, groupRoutes]) => (
            <section key={group} className="dashboard-section">
              <div className="section-heading dashboard-heading">
                <div className="eyebrow">{group.toUpperCase()}</div>
                <h2>{group}</h2>
              </div>

              <div className="dashboard-card-grid">
                {groupRoutes.map((route) => (
                  <Card
                    key={route.path}
                    title={route.label}
                    description={route.description}
                    to={route.path}
                    variant="feature"
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="dashboard-right">
          <div className="dashboard-side-card card">
            <div className="side-card-head">
              <div className="eyebrow">RECENT ACTIVITY</div>
              <h3>System feed</h3>
            </div>

            <div className="activity-list">
              {recentActivity.map((item) => (
                <div key={item} className="activity-row">
                  <span className="activity-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-side-card">
            <AIPanel />
          </div>

          <div className="dashboard-side-card card founder-prompt-card">
            <div className="side-card-head">
              <div className="eyebrow">FOUNDER MODE</div>
              <h3>Private command layer</h3>
            </div>
            <p>
              Enter the founder panel to access internal controls, private
              system visibility, and higher-level operating tools.
            </p>
            <Link to="/founder" className="primary-btn link-btn">
              Open Founder Panel
            </Link>
          </div>
        </aside>
      </section>
    </div>
  )
}
