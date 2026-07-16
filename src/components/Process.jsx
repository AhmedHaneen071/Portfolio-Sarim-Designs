import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Lorem Ipsum Is Simply Dummy',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    num: '02',
    title: 'Lorem Ipsum Is Simply Dummy',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    num: '03',
    title: 'Lorem Ipsum Is Simply Dummy',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    num: '04',
    title: 'Lorem Ipsum Is Simply Dummy',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
]

export default function Process() {
  return (
    <section className="py-24 md:py-36 bg-black relative">
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#00FF00]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-14 md:gap-24">
          {/* LEFT — INTRO */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-7"
          >
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold text-white leading-tight">
              Our Process
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light max-w-md">
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

          {/* RIGHT — TIMELINE */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                className="flex gap-5 py-6 border-b border-white/[0.06] last:border-0"
              >
                {/* NUMBER CIRCLE */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00FF00] flex items-center justify-center shadow-lg shadow-[#00FF00]/20">
                  <span className="text-black font-bold text-sm tracking-tight">{step.num}</span>
                </div>
                <div className="space-y-2 pt-0.5">
                  <h4 className="text-white font-bold text-base md:text-lg leading-snug">{step.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
