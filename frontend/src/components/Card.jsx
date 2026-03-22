import React from 'react'

export default function Card({ title, desc, children }) {
  return (
    <div className="card">
      {title ? <h3>{title}</h3> : null}
      {desc ? <p className="muted">{desc}</p> : null}
      {children}
    </div>
  )
}
