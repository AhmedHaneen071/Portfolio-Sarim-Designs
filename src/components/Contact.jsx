import { motion } from 'framer-motion'

const fields = [
  { placeholder: 'Enter Your Name', type: 'text' },
  { placeholder: 'Enter Your Email', type: 'email' },
  { placeholder: 'Message(Tell Me About Your Project)', type: 'textarea' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* HEADLINE */}
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-black leading-tight mb-14">
            Let&rsquo;s Bring Your Vision To Life
          </h2>

          {/* PROFILE ROW */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-14">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-zinc-100 overflow-hidden ring-2 ring-[#00FF00]/20">
                <img
                  src="https://placehold.co/100x100/ddd/999?text=SK"
                  alt="Sarim Khan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-black font-bold text-lg">Sarim Khan</p>
                <p className="text-zinc-400 text-sm font-medium">Creative Designer</p>
              </div>
            </div>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light max-w-md">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.
            </p>
          </div>

          {/* FORM */}
          <div className="max-w-2xl space-y-7">
            {fields.map((field) => (
              <div key={field.placeholder}>
                {field.type === 'textarea' ? (
                  <textarea
                    rows={4}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border-b border-zinc-200 py-3.5 text-black placeholder-zinc-400 text-sm outline-none focus:border-[#00FF00] transition-colors duration-300 resize-none font-light"
                  />
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border-b border-zinc-200 py-3.5 text-black placeholder-zinc-400 text-sm outline-none focus:border-[#00FF00] transition-colors duration-300 font-light"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="relative inline-flex items-center gap-2.5 bg-[#00FF00] text-black font-semibold text-sm px-6 py-3 rounded-full hover:scale-105 transition-transform active:scale-95"
            >
              Submit Now
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black flex-shrink-0">
                <svg width="11" height="11" viewBox="0 0 10 10" fill="none" className="relative -top-[0.5px]">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="#00FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
