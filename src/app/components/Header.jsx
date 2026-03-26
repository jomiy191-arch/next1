'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLang } from './LanguageProvider'
import { translations } from '../content/i18n'

export default function Header() {
  const pathname = usePathname()
  const { lang, setLang } = useLang()
  const t = translations[lang]
  const [theme, setTheme] = useState('light')
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 10)
      if (currentY > lastY && currentY > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastY = currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const stored = window.localStorage.getItem('site-theme')
    const initial = stored || 'light'
    setTheme(initial)
    document.documentElement.classList.toggle('theme-dark', initial === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    window.localStorage.setItem('site-theme', next)
    document.documentElement.classList.toggle('theme-dark', next === 'dark')
  }


  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(pathname)
      return
    }

    const sections = ['home', 'news', 'programs', 'gallery', 'coaches', 'contact', 'services']
    const targets = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 }
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 980 && menuOpen) setMenuOpen(false)
    }
    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [menuOpen])

  const navItems = useMemo(
    () => [
      { href: '/', label: t.nav.home, match: '#home' },
      { href: '/#news', label: t.nav.news, match: '#news' },
      { href: '/#programs', label: t.nav.programs, match: '#programs' },
      { href: '/#gallery', label: t.nav.gallery, match: '#gallery' },
      { href: '/#coaches', label: t.nav.coaches, match: '#coaches' },
      { href: '/about', label: t.nav.about, match: '/about' },
      { href: '/contact', label: t.nav.contact, match: '/contact' },
    ],
    [t]
  )

  const isActive = (match) => {
    if (pathname !== '/') return match === pathname
    return match === activeSection
  }

  return (
    <header className={`site-header ${hidden ? 'is-hidden' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="brand">
        <div className="wordmark-box">
          <img className="brand-wordmark" src="/Logo.svg" alt="Emerald Tennis" />
        </div>
      </div>
      <nav className="nav">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={isActive(item.match) ? 'active' : ''}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <div className="lang-switch" aria-label="Language switcher">
          <button
            type="button"
            className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={`lang-btn ${lang === 'ru' ? 'is-active' : ''}`}
            onClick={() => setLang('ru')}
          >
            RU
          </button>
          <button
            type="button"
            className={`lang-btn ${lang === 'uz' ? 'is-active' : ''}`}
            onClick={() => setLang('uz')}
          >
            UZ
          </button>
        </div>
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? (
            <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 12.8a8.7 8.7 0 0 1-9.8-9.8A9.5 9.5 0 1 0 21 12.8z" />
            </svg>
          ) : (
            <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-15a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm9-9a1 1 0 0 1 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1 1 1 0 0 1 1-1zM2 12a1 1 0 0 1 1-1H1a1 1 0 1 1 0 2h2a1 1 0 0 1-1-1zm15.95-6.95a1 1 0 0 1 1.41 0l1.41 1.41a1 1 0 1 1-1.41 1.41L17.95 6.46a1 1 0 0 1 0-1.41zM4.64 19.36a1 1 0 0 1 1.41 0l1.41 1.41a1 1 0 1 1-1.41 1.41l-1.41-1.41a1 1 0 0 1 0-1.41zM19.36 19.36a1 1 0 0 1 0-1.41l1.41-1.41a1 1 0 1 1 1.41 1.41l-1.41 1.41a1 1 0 0 1-1.41 0zM4.64 4.64a1 1 0 0 1 0 1.41L3.23 7.46A1 1 0 1 1 1.82 6.05l1.41-1.41a1 1 0 0 1 1.41 0z" />
            </svg>
          )}
        </button>
        <Link className="nav-cta" href="/contact">
          {t.cta.book}
        </Link>
      </div>
      <button
        className={`burger ${menuOpen ? 'is-open' : ''}`}
        type="button"
        onClick={() => setMenuOpen((value) => !value)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.match) ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="mobile-actions">
          <div className="lang-switch mobile">
          <button
            type="button"
            className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={`lang-btn ${lang === 'ru' ? 'is-active' : ''}`}
            onClick={() => setLang('ru')}
          >
            RU
          </button>
          <button
            type="button"
            className={`lang-btn ${lang === 'uz' ? 'is-active' : ''}`}
            onClick={() => setLang('uz')}
          >
            UZ
          </button>
          </div>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 12.8a8.7 8.7 0 0 1-9.8-9.8A9.5 9.5 0 1 0 21 12.8z" />
              </svg>
            ) : (
              <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-15a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm9-9a1 1 0 0 1 1 1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1 1 1 0 0 1 1-1zM2 12a1 1 0 0 1 1-1H1a1 1 0 1 1 0 2h2a1 1 0 0 1-1-1zm15.95-6.95a1 1 0 0 1 1.41 0l1.41 1.41a1 1 0 1 1-1.41 1.41L17.95 6.46a1 1 0 0 1 0-1.41zM4.64 19.36a1 1 0 0 1 1.41 0l1.41 1.41a1 1 0 1 1-1.41 1.41l-1.41-1.41a1 1 0 0 1 0-1.41zM19.36 19.36a1 1 0 0 1 0-1.41l1.41-1.41a1 1 0 1 1 1.41 1.41l-1.41 1.41a1 1 0 0 1-1.41 0zM4.64 4.64a1 1 0 0 1 0 1.41L3.23 7.46A1 1 0 1 1 1.82 6.05l1.41-1.41a1 1 0 0 1 1.41 0z" />
              </svg>
            )}
          </button>
        </div>
        <Link className="nav-cta" href="/contact" onClick={() => setMenuOpen(false)}>
          {t.cta.book}
        </Link>
      </div>
    </header>
  )
}
