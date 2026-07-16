import { motion } from 'framer-motion'

const navLinks = ['Home', 'About Us', 'Portfolio', 'Services', 'Contact Us']

const socials = [
  {
    name: 'Pinterest',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z',
  },
  {
    name: 'Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* TOP ROW: LOGO + NAV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]"
        >
          <span className="text-[#00FF00] font-bold text-2xl tracking-[0.15em] select-none">SARIM DESIGNS</span>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-zinc-500 text-sm font-medium">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-[#00FF00] transition-colors duration-300"
              >
                {l}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* MIDDLE ROW: SOCIAL + CONTACT */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 relative">
          {/* FOLLOW NOW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-white font-semibold text-sm tracking-wide">
              Follow Now:
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/[0.04] flex items-center justify-center hover:bg-[#00FF00]/15 transition-all duration-300 group border border-white/[0.04]"
                  title={social.name}
                >
                  <svg className="w-[18px] h-[18px] fill-[#00FF00] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* VERTICAL DIVIDER */}
          <div className="hidden md:block w-px h-28 bg-white/[0.06]" />

          {/* CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/[0.04] flex items-center justify-center">
                <svg className="w-[16px] h-[16px] text-[#00FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-zinc-300 text-sm font-light">+92 319 9257968</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/[0.04] flex items-center justify-center">
                <svg className="w-[16px] h-[16px] text-[#00FF00]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-zinc-300 text-sm font-light">sarimzai7860@gmail.com</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* GIANT WATERMARK OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden mt-10">
        <span className="text-[clamp(5rem,22vw,16rem)] font-black text-stroke-white leading-none whitespace-nowrap tracking-[-0.03em]">
          SARIM KHAN
        </span>
      </div>

      {/* COPYRIGHT */}
      <div className="relative z-10 text-center pt-8 border-t border-white/[0.06]">
        <p className="text-zinc-600 text-xs font-medium tracking-wide">
          Design &amp; Developed By <span className="text-[#00FF00] font-semibold">Ahmed Haneen</span>
        </p>
      </div>

      {/* DEVELOPER INFO */}
      <div className="relative z-10 flex items-center justify-center gap-6 pt-4 pb-2">
        <a href="https://github.com/ahmedhaneen071" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-zinc-500 hover:text-[#00FF00] transition-colors text-xs">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a href="mailto:shaikhhaneen18@gmail.com" className="flex items-center gap-1.5 text-zinc-500 hover:text-[#00FF00] transition-colors text-xs">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email
        </a>
        <a href="https://wa.me/923253019374" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-zinc-500 hover:text-[#00FF00] transition-colors text-xs">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </footer>
  )
}
