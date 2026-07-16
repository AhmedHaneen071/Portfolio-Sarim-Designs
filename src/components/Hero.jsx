import { motion } from 'framer-motion'

const services = ['Ui Ux Design', 'Social Media Designs', 'Application Design']

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black pt-28 md:pt-36 pb-24 overflow-hidden">
      {/* Subtle green ambient glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#00FF00]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:w-[55%]"
          >
            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden bg-zinc-900 border border-white/[0.06] shadow-2xl">
              <img
                src="https://placehold.co/900x675/1a1a1a/00FF00?text=Sarim+Designs"
                alt="Sarim Khan — Creative Designer"
                className="w-full h-full object-cover opacity-85"
              />
              {/* Green wash overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00FF00]/8 via-transparent to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
              {/* Bottom-right green accent line */}
              <div className="absolute bottom-0 right-0 w-1/3 h-[2px] bg-[#00FF00]/30" />
            </div>
          </motion.div>

          {/* HERO TEXT + SERVICES */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full lg:w-[45%] space-y-14 lg:pt-4"
          >
            <p className="text-white/85 text-lg md:text-xl leading-[1.7] max-w-lg font-light tracking-wide">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's
            </p>

            {/* SERVICES PILL LIST */}
            <div className="space-y-5">
              {services.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: 35 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 + i * 0.18, ease: 'easeOut' }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <span className="text-[#00FF00] text-xs font-mono font-semibold w-6 flex-shrink-0">0{i + 1}</span>
                  <span className="text-white/90 text-lg md:text-xl font-light tracking-wide group-hover:text-[#00FF00] transition-colors duration-300">
                    {s}
                  </span>
                  <span className="flex-1 h-px bg-white/[0.07] group-hover:bg-[#00FF00]/40 transition-colors duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* GIANT WATERMARK */}
        <div className="relative mt-20 md:mt-28 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            className="text-[clamp(4.5rem,16vw,11rem)] font-black leading-none text-stroke-white-heavy select-none text-center whitespace-nowrap tracking-[-0.03em]"
          >
            SARIM KHAN
          </motion.h1>
        </div>
      </div>
    </section>
  )
}
