import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    id: 0,
    label: 'Ui/Ux Designs',
    index: '01',
    title: 'UI/UX DESIGNS',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's",
  },
  {
    id: 1,
    label: 'Social Media',
    index: '02',
    title: 'SOCIAL MEDIA',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's",
  },
  {
    id: 2,
    label: 'Application',
    index: '03',
    title: 'APPLICATION',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's",
  },
  {
    id: 3,
    label: 'Landing Page',
    index: '04',
    title: 'LANDING PAGE',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's",
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section id="services" className="py-24 md:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-14 lg:gap-24">
          {/* LEFT — DYNAMIC CARD */}
          <motion.div layout className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="bg-black rounded-[24px] overflow-hidden shadow-xl"
              >
                {/* Image */}
                <div className="aspect-video bg-zinc-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={`https://placehold.co/640x400/1a1a1a/00FF00?text=${encodeURIComponent(current.title)}`}
                    alt={current.title}
                    className="w-full h-full object-cover opacity-75"
                  />
                </div>
                <div className="p-7 md:p-9 space-y-4">
                  <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">{current.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">{current.text}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* RIGHT — INTERACTIVE LIST */}
          <div className="w-full lg:w-1/2 space-y-0">
            {services.map((s) => {
              const isActive = active === s.id
              return (
                <motion.button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  onMouseEnter={() => setActive(s.id)}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: s.id * 0.1, ease: 'easeOut' }}
                  className={`w-full text-left py-5 border-b border-zinc-200 transition-colors duration-300 ${
                    isActive ? 'text-black' : 'text-zinc-400 hover:text-zinc-600'
                  }`}
                >
                  <span className={`text-2xl md:text-[1.65rem] font-light transition-colors duration-300 ${
                    isActive ? 'text-black' : ''
                  }`}>
                    {s.label}
                  </span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -8 }}
                        transition={{ duration: 0.25 }}
                        className="ml-4 text-[#00FF00] text-lg font-mono font-semibold"
                      >
                        {'{'}{s.index}{'}'}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              )
            })}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-right text-zinc-400 text-sm tracking-[0.2em] pt-10 font-medium"
            >
              SERVICES//
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
