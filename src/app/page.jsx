'use client'

import { useRef, useState } from 'react'
import { useLang } from './components/LanguageProvider'
import { translations } from './content/i18n'

export default function HomePage() {
  const { lang } = useLang()
  const t = translations[lang]
  const [activeCoach, setActiveCoach] = useState(null)
  const [videoOpen, setVideoOpen] = useState(false)
  const eventsRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const dragState = useRef({ startX: 0, scrollLeft: 0 })

  const onDragStart = (event) => {
    const node = eventsRef.current
    if (!node) return
    setDragging(true)
    dragState.current = {
      startX: event.pageX,
      scrollLeft: node.scrollLeft,
    }
  }

  const onDragMove = (event) => {
    const node = eventsRef.current
    if (!node || !dragging) return
    const walk = event.pageX - dragState.current.startX
    node.scrollLeft = dragState.current.scrollLeft - walk
  }

  const onDragEnd = () => {
    setDragging(false)
  }


  const coaches = [
    {
      id: 'aziza',
      name: 'Aziza Karimova',
      role: t.coaches.c1,
      img: '/2ab901374c666b184c4b88cd98df1d452ff5717f.jpg',
      bio: 'Precision serving and rhythm control with calm, focused drills.',
      exp: '8 years',
      focus: 'Serve mechanics',
    },
    {
      id: 'laylo',
      name: 'Laylo S.',
      role: t.coaches.c2,
      img: '/8b670b55e794d296ad1112b8c3d9a61cc83abe91.jpg',
      bio: 'Footwork patterns and court movement with light intensity sessions.',
      exp: '6 years',
      focus: 'Footwork & balance',
    },
    {
      id: 'mira',
      name: 'Mira N.',
      role: t.coaches.c3,
      img: '/95cd5369eeb279e4903265df1bc3fda7e7549d3f.jpg',
      bio: 'Recovery routines, mobility, and match-day energy management.',
      exp: '7 years',
      focus: 'Recovery & mobility',
    },
    {
      id: 'jasur',
      name: 'Jasur R.',
      role: t.coaches.c4,
      img: '/629a3190d405f94025740dc810eca082284e6e5c.jpg',
      bio: 'Match strategy, tempo control, and tactical patterns.',
      exp: '9 years',
      focus: 'Match strategy',
    },
  ]
  return (
    <div className="stack">
      <section className="hero-banner" id="home">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/9e08822405be2b039dbaebe061c80bfd1deac931.jpg"
        >
          <source src="/tennis-hero.mp4" type="video/mp4" />
        </video>
        <div className="ball-trail" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-overlay">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <div className="hero-actions">
            <button className="play-btn" aria-label="Play club video" onClick={() => setVideoOpen(true)} />
            <button className="hero-video-link" type="button" onClick={() => setVideoOpen(true)}>
              {t.hero.watch}
            </button>
          </div>
        </div>
        <div className="service-strip" id="services">
          <div className="service-card reveal reveal-delay-1">
            <h4>{t.services.courtsTitle}</h4>
            <p>{t.services.courtsDesc}</p>
          </div>
          <div className="service-card reveal reveal-delay-2">
            <h4>{t.services.kidsTitle}</h4>
            <p>{t.services.kidsDesc}</p>
          </div>
          <div className="service-card reveal reveal-delay-3">
            <h4>{t.services.teamTitle}</h4>
            <p>{t.services.teamDesc}</p>
          </div>
          <div className="service-card reveal reveal-delay-4">
            <h4>{t.services.scheduleTitle}</h4>
            <p>{t.services.scheduleDesc}</p>
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      <section className="section reveal" id="news">
        <div className="section-head">
          <h2>{t.news.title}</h2>
          <span className="section-note">{t.news.note}</span>
        </div>
        <div className="news-grid">
          <article className="news-card reveal reveal-delay-1">
            <div className="news-media">
              <img src="/46a38a90497769068963f75bbc3ea9401f3189d6.jpg" alt="Player training" />
            </div>
            <div className="news-body">
              <h3>{t.news.card1Title}</h3>
              <p>{t.news.card1Desc}</p>
              <span className="tag">{t.news.tag1}</span>
            </div>
          </article>
          <article className="news-card reveal reveal-delay-2">
            <div className="news-media">
              <img src="/92e46ccfe2aea40aceb2345e54cefd8ad2d5f362.jpg" alt="Tennis ball" />
            </div>
            <div className="news-body">
              <h3>{t.news.card2Title}</h3>
              <p>{t.news.card2Desc}</p>
              <span className="tag">{t.news.tag2}</span>
            </div>
          </article>
          <article className="news-card reveal reveal-delay-3">
            <div className="news-media">
              <img src="/103f0179728f25ebdec98af6169b6aafcdb9a380.jpg" alt="Match moment" />
            </div>
            <div className="news-body">
              <h3>{t.news.card3Title}</h3>
              <p>{t.news.card3Desc}</p>
              <span className="tag">{t.news.tag3}</span>
            </div>
          </article>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      <section className="section split reveal" id="programs">
        <div className="panel reveal reveal-delay-1">
          <span className="eyebrow">{t.program.eyebrow}</span>
          <h2>{t.program.title}</h2>
          <p>{t.program.desc}</p>
          <div className="list">
            <div className="list-item">
              <div className="dot" />
              <span>{t.program.p1}</span>
            </div>
            <div className="list-item">
              <div className="dot" />
              <span>{t.program.p2}</span>
            </div>
            <div className="list-item">
              <div className="dot" />
              <span>{t.program.p3}</span>
            </div>
          </div>
          <button className="primary-btn">{t.cta.join}</button>
        </div>
        <div className="panel image-panel reveal reveal-delay-2">
          <img src="/4bfa5ed23f712aad387f535c58004e5c72466bed.jpg" alt="Tennis courts" />
          <div className="image-caption">{t.program.caption}</div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      <section className="section reveal" id="gallery">
        <div className="section-head">
          <h2>{t.gallery.title}</h2>
          <span className="section-note">{t.gallery.note}</span>
        </div>
        <div className="gallery-grid">
          <img className="reveal reveal-delay-1" src="/b1ae7fedbfc8694e7b09c94c071d7d46169f307e.jpg" alt="Tennis balls" />
          <img className="reveal reveal-delay-2" src="/4bfa5ed23f712aad387f535c58004e5c72466bed.jpg" alt="Court overview" />
          <img className="reveal reveal-delay-3" src="/46a38a90497769068963f75bbc3ea9401f3189d6.jpg" alt="Practice session" />
          <img className="reveal reveal-delay-4" src="/9e08822405be2b039dbaebe061c80bfd1deac931.jpg" alt="Player on court" />
        </div>
      </section>

      <section className="section reveal" id="events">
        <div className="section-head">
          <h2>{t.events.title}</h2>
          <span className="section-note">{t.events.note}</span>
        </div>
        <div className="events-slider">
          <div
            className={`events-row ${dragging ? 'is-dragging' : ''}`}
            ref={eventsRef}
            onMouseDown={onDragStart}
            onMouseMove={onDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
          >
          <article className="event-card">
            <div className="event-date">{t.events.e1Date}</div>
            <h3>{t.events.e1Title}</h3>
            <p>{t.events.e1Desc}</p>
            <button className="ghost-btn">{t.events.eCta}</button>
          </article>
          <article className="event-card">
            <div className="event-date">{t.events.e2Date}</div>
            <h3>{t.events.e2Title}</h3>
            <p>{t.events.e2Desc}</p>
            <button className="ghost-btn">{t.events.eCta}</button>
          </article>
          <article className="event-card">
            <div className="event-date">{t.events.e3Date}</div>
            <h3>{t.events.e3Title}</h3>
            <p>{t.events.e3Desc}</p>
            <button className="ghost-btn">{t.events.eCta}</button>
          </article>
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      <section className="section reveal" id="coaches">
        <div className="section-head">
          <h2>{t.coaches.title}</h2>
          <span className="section-note">{t.coaches.note}</span>
        </div>
        <div className="coach-grid">
          {coaches.map((coach, index) => (
            <button
              key={coach.id}
              type="button"
              className={`coach-card reveal reveal-delay-${index + 1}`}
              onClick={() => setActiveCoach(coach)}
            >
              <img className="coach-photo" src={coach.img} alt={coach.name} />
              <div>
                <strong>{coach.name}</strong>
                <p>{coach.role}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="section newsletter reveal" id="contact">
        <div>
          <h2>{t.newsletter.title}</h2>
          <p>{t.newsletter.desc}</p>
        </div>
        <div className="newsletter-form">
          <input type="email" placeholder={t.newsletter.placeholder} />
          <button className="primary-btn">{t.cta.subscribe}</button>
        </div>
      </section>

      {activeCoach ? (
        <div className="modal-backdrop" onClick={() => setActiveCoach(null)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setActiveCoach(null)}>
              Close
            </button>
            <img className="modal-image" src={activeCoach.img} alt={activeCoach.name} />
            <div className="modal-body">
              <h3>{activeCoach.name}</h3>
              <p className="modal-role">{activeCoach.role}</p>
              <p>{activeCoach.bio}</p>
              <div className="modal-meta">
                <div>
                  <span>Experience</span>
                  <strong>{activeCoach.exp}</strong>
                </div>
                <div>
                  <span>Focus</span>
                  <strong>{activeCoach.focus}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {videoOpen ? (
        <div className="modal-backdrop" onClick={() => setVideoOpen(false)}>
          <div className="modal-card video-card" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setVideoOpen(false)}>
              Close
            </button>
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/c0l6sJv7x4k?autoplay=1&mute=1"
                title="Australian Open tennis video"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
