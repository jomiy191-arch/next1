'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
})

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const stored = window.localStorage.getItem('site-lang')
    if (stored) setLang(stored)
  }, [])

  const value = useMemo(
    () => ({
      lang,
      setLang: (next) => {
        setLang(next)
        window.localStorage.setItem('site-lang', next)
      },
    }),
    [lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  return useContext(LanguageContext)
}
