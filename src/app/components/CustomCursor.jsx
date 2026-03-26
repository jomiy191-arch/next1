'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setVisible(true)
    }

    const handleLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    opacity: visible ? 1 : 0,
  }

  return (
    <div className="cursor-layer" style={style} aria-hidden="true">
      <div className="cursor-ring" />
      <div className="cursor-dot" />
    </div>
  )
}
