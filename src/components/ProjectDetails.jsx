import { motion } from 'framer-motion'

function SkillTag({ label }) {
  return (
    <span className="text-[#00FF00] text-[11px] border border-[#00FF00]/50 rounded-full px-3.5 py-1.5 bg-black hover:bg-[#00FF00]/10 transition-all duration-300 font-medium tracking-wide cursor-default">
      {label}
    </span>
  )
}

function DetailBlock({ imageLeft, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white rounded-[24px] overflow-hidden shadow-lg"
    >
      <div className={`flex flex-col ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Image */}
        <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[360px] bg-zinc-200 flex items-center justify-center">
          <span className="text-zinc-400 text-sm font-medium">Project Preview</span>
        </div>
        {/* Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-5">
          <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-black leading-tight">
            Lorem Ipsum Is Simply Dummy Text Printing
          </h3>
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <SkillTag label="Ui/Ux Design" />
            <SkillTag label="Development" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectDetails() {
  return (
    <section className="py-20 md:py-28 bg-black space-y-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6">
        <DetailBlock imageLeft index={0} />
        <DetailBlock imageLeft={false} index={1} />
      </div>
    </section>
  )
}
