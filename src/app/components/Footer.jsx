'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from './LanguageProvider'
import { translations } from '../content/i18n'

export default function Footer() {
  const { lang } = useLang()
  const t = translations[lang].footer
  const nav = translations[lang].nav
  const [activeSocial, setActiveSocial] = useState(null)

  const socials = [
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@emerald.tennis',
      followers: '24.8k',
      desc: 'Behind the scenes, coaching clips, and club moments.',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      handle: 'Emerald Tennis Club',
      followers: '12.4k',
      desc: 'Events, announcements, and community updates.',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      handle: 'Emerald Tennis',
      followers: '41.2k',
      desc: 'Training highlights and match replays.',
    },
  ]

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div>
            <div className="wordmark-box">
              <img className="brand-wordmark" src="/Logo.svg" alt="Emerald Tennis" />
            </div>
            <div className="footer-socials">
              <button type="button" onClick={() => setActiveSocial(socials[0])}>
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm6-2.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
                </svg>
                Instagram
              </button>
              <button type="button" onClick={() => setActiveSocial(socials[1])}>
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 9H16l.5-3H13.5V4.5c0-.9.3-1.5 1.6-1.5H16V0h-2.1C11.4 0 10 1.4 10 3.9V6H8v3h2v9h3.5V9z" />
                </svg>
                Facebook
              </button>
              <button type="button" onClick={() => setActiveSocial(socials[2])}>
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.6a3 3 0 0 0-2.1 2.1A31 31 0 0 0 1.8 12a31 31 0 0 0 .6 4.8 3 3 0 0 0 2.1 2.1c1.8.6 7.5.6 7.5.6s5.7 0 7.5-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.2 12a31 31 0 0 0-.6-4.8zM10 15.2V8.8l5.2 3.2L10 15.2z" />
                </svg>
                YouTube
              </button>
            </div>
          </div>
        </div>
        <div className="footer-cta">
          <h4>{t.ready}</h4>
          <p>{t.readyDesc}</p>
          <Link className="nav-cta" href="/contact">
            {translations[lang].cta.book}
          </Link>
        </div>
      </div>
      <div className="footer-grid">
        <div>
          <h4>{t.explore}</h4>
          <Link href="/">{nav.home}</Link>
          <Link href="/#news">{nav.news}</Link>
          <Link href="/#programs">{nav.programs}</Link>
          <Link href="/#gallery">{nav.gallery}</Link>
        </div>
        <div>
          <h4>{t.club}</h4>
          <span>{t.membership}</span>
          <span>{nav.coaches}</span>
          <span>{t.events}</span>
          <span>{t.pricing}</span>
        </div>
        <div>
          <h4>{t.visit}</h4>
          <span>{t.hours}</span>
          <span>{t.time}</span>
          <span>{t.city}</span>
          <span>{t.phone}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t.copyright}</span>
        <span>{t.legal}</span>
      </div>
      {activeSocial ? (
        <div className="modal-backdrop" onClick={() => setActiveSocial(null)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setActiveSocial(null)}>
              Close
            </button>
            <div className="modal-body">
              <h3>{activeSocial.label}</h3>
              <p className="modal-role">{activeSocial.handle}</p>
              <p>{activeSocial.desc}</p>
              <div className="modal-meta">
                <div>
                  <span>Followers</span>
                  <strong>{activeSocial.followers}</strong>
                </div>
                <div>
                  <span>Channel</span>
                  <strong>{activeSocial.label}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </footer>
  )
}
