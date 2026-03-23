import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import StatGrid from '../components/StatGrid'
import HeroSection from '../components/marketing/HeroSection'
import OnboardingRail from '../components/marketing/OnboardingRail'
import { featureCards, pricingTiers } from '../config/ui'

export default function HomePage() {
  return (
    <div className="page">
      <HeroSection />

      <StatGrid />

      <section className="section-title">
        <h2>Platform Paths</h2>
        <p className="muted">Each core system is part of a single intelligence operating system.</p>
      </section>

      <section className="grid two-col">
        {featureCards.map((card) => (
          <Link key={card.title} to={card.path} className="card-link">
            <Card title={card.title} desc={card.desc} />
          </Link>
        ))}
      </section>

      <section className="section-title">
        <h2>Onboarding Flow</h2>
        <p className="muted">A cleaner first-run path for public users and premium upgrades.</p>
      </section>

      <OnboardingRail />

      <section className="section-title">
        <h2>Plans</h2>
        <p className="muted">Monetization scaffolding for launch and future subscriptions.</p>
      </section>

      <section className="grid three-col">
        {pricingTiers.map((tier) => (
          <Card key={tier.name} title={tier.name} desc={tier.desc}>
            <div className="price-tag">{tier.price}</div>
            <ul className="stack-list">
              {tier.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </Card>
        ))}
      </section>
    </div>
  )
}
