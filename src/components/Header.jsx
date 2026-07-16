import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const transparentLinks = ['Projects', 'Contact Us']
const scrolledLinks = ['Home', 'About Us', 'Portfolio', 'Services', 'Contact Us']

const BookCallBtn = () => (
  <a
    href="#contact"
    className="relative inline-flex items-center gap-2.5 bg-[#00FF00] text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-transform active:scale-95"
  >
    Book A Call
    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black flex-shrink-0">
      <svg width="11" height="11" viewBox="0 0 10 10" fill="none" className="relative -top-[0.5px]">
        <path d="M1 9L9 1M9 1H3M9 1V7" stroke="#00FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  </a>
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* TRANSPARENT HEADER */}
      {!scrolled && (
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-transparent"
        >
          <span className="text-[#00FF00] font-bold text-xl tracking-[0.15em] select-none">SARIM DESIGNS</span>
          <nav className="hidden md:flex items-center gap-10 text-white/70 text-sm font-medium">
            {transparentLinks.map((l) => (
              <a
                key={l}
                href={l === 'Contact Us' ? '#contact' : `#${l.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00FF00] after:transition-all hover:after:w-full hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button className="md:hidden text-white/70 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
              </svg>
            </button>
            <BookCallBtn />
          </div>
        </motion.header>
      )}

      {/* STICKY NAVBAR */}
      <AnimatePresence>
        {scrolled && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3.5 bg-black/95 backdrop-blur-md border-b border-white/5"
          >
            <span className="text-[#00FF00] font-bold text-lg tracking-[0.15em] select-none">SARIM DESIGNS</span>
            <nav className="hidden md:flex items-center gap-8 text-white/60 text-sm font-medium">
              {scrolledLinks.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                  className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00FF00] after:transition-all hover:after:w-full hover:text-white transition-colors"
                >
                  {l}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button className="md:hidden text-white/70 hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
                </svg>
              </button>
              <BookCallBtn />
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  )
}
