'use client'

import { useEffect, useState } from 'react'

export default function InitialLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const minDuration = 1200
    const start = performance.now()

    const hide = () => {
      const elapsed = performance.now() - start
      const remaining = Math.max(0, minDuration - elapsed)
      setTimeout(() => setVisible(false), remaining)
    }

    const timer = setTimeout(hide, minDuration + 2000)
    window.addEventListener('load', hide)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', hide)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="initial-loader" aria-hidden="true">
      <div className="tennis-loader">
        <div className="tennis-ball" />
        <div className="tennis-track" />
      </div>
      <p>Loading the court…</p>
    </div>
  )
}
