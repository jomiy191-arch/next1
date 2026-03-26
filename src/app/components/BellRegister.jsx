'use client'

import { useState } from 'react'

export default function BellRegister() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')
    const form = new FormData(event.currentTarget)
    const phone = form.get('phone')?.toString().trim()
    const email = form.get('email')?.toString().trim()

    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, email, source: 'bell-register' }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
      event.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <button className="bell-btn" type="button" onClick={() => setOpen(true)} aria-label="Open registration">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22zm7-6V11a7 7 0 0 0-14 0v5l-2 2v1h18v-1l-2-2z" />
        </svg>
      </button>

      {open ? (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setOpen(false)}>
              Close
            </button>
            <form className="modal-body" onSubmit={handleSubmit}>
              <h3>Ro‘yxatdan o‘tish</h3>
              <p className="modal-role">Yangi a’zo uchun forma</p>
              <label className="modal-field">
                Ism
                <input type="text" placeholder="Ismingiz" />
              </label>
              <label className="modal-field">
                Telefon
                <input name="phone" type="tel" placeholder="+998 90 000 00 00" />
              </label>
              <label className="modal-field">
                Email
                <input name="email" type="email" placeholder="you@example.com" />
              </label>
              <button className="primary-btn" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Yuborilmoqda...' : 'Yuborish'}
              </button>
              {status === 'success' ? <p className="form-success">Yuborildi.</p> : null}
              {status === 'error' ? <p className="form-error">Xatolik. Qayta urinib ko‘ring.</p> : null}
            </form>
          </div>
        </div>
      ) : null}
    </>
  )
}
