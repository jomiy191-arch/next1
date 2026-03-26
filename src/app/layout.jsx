import './globals.css'
import Link from 'next/link'
import Header from './components/Header'
import RevealObserver from './components/RevealObserver'
import CustomCursor from './components/CustomCursor'
import { LanguageProvider } from './components/LanguageProvider'
import Footer from './components/Footer'
import BellRegister from './components/BellRegister'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <div className="bg-orbs" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="court-lines" aria-hidden="true" />
          <div className="app-container">
            <Header />
            <main className="page">{children}</main>
            <Footer />
          </div>
          <RevealObserver />
          <CustomCursor />
          <BellRegister />
        </LanguageProvider>
      </body>
    </html>
  )
}
