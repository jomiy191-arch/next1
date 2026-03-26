'use client'

import { useLang } from '../components/LanguageProvider'
import { translations } from '../content/i18n'

export default function ContactPage() {
  const { lang } = useLang()
  const t = translations[lang]
  return (
    <div className="stack">
      <section className="contact-hero reveal">
        <div>
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h1>{t.contact.title}</h1>
          <p>{t.contact.desc}</p>
          <div className="contact-badges">
            <span>24/7 Support</span>
            <span>Fast reply</span>
            <span>Private coaching</span>
          </div>
        </div>
        <div className="contact-mini">
          <div>
            <strong>{t.contact.phone}</strong>
            <span>+1 (555) 010-2020</span>
          </div>
          <div>
            <strong>{t.contact.email}</strong>
            <span>contact@example.com</span>
          </div>
        </div>
      </section>

      <section className="section split reveal">
        <div className="panel contact-panel">
          <div className="contact-list">
            <div className="contact-item">
              <span>{t.contact.email}</span>
              <strong>contact@example.com</strong>
            </div>
            <div className="contact-item">
              <span>{t.contact.phone}</span>
              <strong>+1 (555) 010-2020</strong>
            </div>
            <div className="contact-item">
              <span>{t.contact.office}</span>
              <strong>New York, NY</strong>
            </div>
          </div>
          <div className="contact-card-mini">
            <h3>Coach line</h3>
            <p>Direct line for private lessons and programs.</p>
            <button className="ghost-btn">Call now</button>
          </div>
        </div>
        <form className="contact-card reveal reveal-delay-2">
          <label>
            {t.contact.name}
            <input type="text" placeholder={t.contact.namePh} />
          </label>
          <label>
            {t.contact.email}
            <input type="email" placeholder={t.contact.emailPh} />
          </label>
          <label>
            {t.contact.message}
            <textarea rows="4" placeholder={t.contact.msgPh} />
          </label>
          <button type="button" className="primary-btn">
            {t.cta.send}
          </button>
        </form>
      </section>
      <section className="section reveal">
        <div className="section-head">
          <h2>{t.contact.visitTitle}</h2>
          <span className="section-note">{t.contact.visitNote}</span>
        </div>
        <div className="visit-card reveal reveal-delay-2">
          <img src="/9e08822405be2b039dbaebe061c80bfd1deac931.jpg" alt="Court view" />
          <div>
            <h3>{t.contact.visitName}</h3>
            <p>{t.contact.visitDesc}</p>
            <button className="ghost-btn">{t.cta.directions}</button>
          </div>
        </div>
      </section>
    </div>
  )
}
