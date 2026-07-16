import { motion } from 'framer-motion'

export default function AboutUs() {
  return (
    <section id="about-us" className="py-24 md:py-36 bg-black relative">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#00FF00]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* SECTION MARKER */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-sm text-zinc-600 tracking-[0.2em] mb-10 font-medium"
        >
          About Us//
        </motion.p>

        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-start">
          {/* LEFT — MAIN HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-bold leading-[1.2] tracking-[-0.01em]"
          >
            <span className="text-white">Lorem Ipsum Is Simply Dummy Text Of </span>
            <span className="text-[#00FF00]">The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's </span>
            <span className="text-white">Standard Dummy Text</span>
          </motion.h2>

          {/* RIGHT — BODY + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-8"
          >
            <p className="text-zinc-400 text-base md:text-lg leading-[1.8] font-light">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer
            </p>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2.5 bg-[#00FF00] text-black font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 transition-transform active:scale-95"
            >
              Book A Call
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black flex-shrink-0">
                <svg width="11" height="11" viewBox="0 0 10 10" fill="none" className="relative -top-[0.5px]">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="#00FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
