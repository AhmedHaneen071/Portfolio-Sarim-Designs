import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Joni Bravo',
    subtitle: 'Lorem Ipsum is simply',
    quote: '\u201CLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s galley of type and scrambled it to make\u201D',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    name: 'Sarah Chen',
    subtitle: 'Creative Director',
    quote: '\u201CLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since.\u201D',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
  {
    name: 'Alex Rivera',
    subtitle: 'Product Manager',
    quote: '\u201CLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s galley of type and scrambled it to make a type specimen.\u201D',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.",
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section className="py-24 md:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* MARKER */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-right text-zinc-400 text-sm tracking-[0.2em] mb-14 font-medium"
        >
          TESTIMONIAL//
        </motion.p>

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
          {/* LEFT — PHOTO + DOTS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[280px] flex-shrink-0"
          >
            {/* DOT CONTROLS */}
            <div className="flex gap-3 mb-5">
              {testimonials.map((_, i) => {
                const isActive = i === active
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-[#00FF00] w-2 h-2'
                        : 'bg-[#00FF00]/35 w-3 h-3 hover:bg-[#00FF00]/60'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                )
              })}
            </div>

            {/* PHOTO */}
            <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://placehold.co/400x400/e5e5e5/999?text=JB"
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="space-y-6"
              >
                <h3 className="text-[clamp(1.4rem,2.8vw,2rem)] font-bold text-black leading-[1.3] tracking-tight">
                  {current.quote}
                </h3>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light">
                  {current.text}
                </p>
                <div className="pt-2">
                  <p className="text-black font-bold text-lg">{current.name}</p>
                  <p className="text-zinc-400 text-sm">{current.subtitle}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
