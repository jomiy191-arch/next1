'use client'

import { useLang } from '../components/LanguageProvider'
import { translations } from '../content/i18n'

export default function AboutPage() {
  const { lang } = useLang()
  const t = translations[lang]
  return (
    <div className="stack">
      <section className="hero small reveal">
        <div className="hero-text">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h1>{t.about.title}</h1>
          <p>{t.about.desc}</p>
          <div className="hero-stats">
            <div>
              <strong>15+</strong>
              <span>{t.about.stats1}</span>
            </div>
            <div>
              <strong>5</strong>
              <span>{t.about.stats2}</span>
            </div>
            <div>
              <strong>1200</strong>
              <span>{t.about.stats3}</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-media photo">
            <img src="/4bfa5ed23f712aad387f535c58004e5c72466bed.jpg" alt="Club courts" />
          </div>
        </div>
      </section>

      <section className="section values reveal">
        <div className="value-card reveal reveal-delay-1">
          <h3>{t.about.v1}</h3>
          <p>{t.about.v1d}</p>
        </div>
        <div className="value-card reveal reveal-delay-2">
          <h3>{t.about.v2}</h3>
          <p>{t.about.v2d}</p>
        </div>
        <div className="value-card reveal reveal-delay-3">
          <h3>{t.about.v3}</h3>
          <p>{t.about.v3d}</p>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-head">
          <h2>{t.about.story}</h2>
          <span className="section-note">{t.about.milestones}</span>
        </div>
        <div className="timeline">
          <div className="timeline-card reveal reveal-delay-1">
            <h4>2018</h4>
            <p>{t.about.m1}</p>
          </div>
          <div className="timeline-card reveal reveal-delay-2">
            <h4>2021</h4>
            <p>{t.about.m2}</p>
          </div>
          <div className="timeline-card reveal reveal-delay-3">
            <h4>2024</h4>
            <p>{t.about.m3}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
