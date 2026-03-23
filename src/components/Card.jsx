import React from "react"
import { Link } from "react-router-dom"

export default function Card({
  title,
  description,
  to,
  variant = "default"
}) {
  const content = (
    <>
      <div className="card-top">
        <h3>{title}</h3>
        <span className={`card-badge card-badge-${variant}`}>
          {variant === "feature" ? "Module" : "Open"}
        </span>
      </div>

      <p>{description}</p>

      <div className="card-footer">
        <span className="card-link-text">Open module</span>
        <span className="card-arrow">→</span>
      </div>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`card app-card app-card-${variant}`}>
        {content}
      </Link>
    )
  }

  return <article className={`card app-card app-card-${variant}`}>{content}</article>
}
