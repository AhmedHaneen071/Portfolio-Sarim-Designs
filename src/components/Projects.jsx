import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Lorem Ipsum Is Simply Dummy',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    tags: ['Ui/Ux Design', 'Development'],
  },
  {
    title: 'Lorem Ipsum Is Simply Dummy',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    tags: ['Ui/Ux Design', 'Development'],
  },
  {
    title: 'Lorem Ipsum Is Simply Dummy',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    tags: ['Ui/Ux Design', 'Development'],
  },
  {
    title: 'Lorem Ipsum Is Simply Dummy',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    tags: ['Ui/Ux Design', 'Development'],
  },
  {
    title: 'Lorem Ipsum Is Simply Dummy',
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    tags: ['Ui/Ux Design', 'Development'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

function SkillTag({ label }) {
  return (
    <span className="text-[#00FF00] text-[11px] border border-[#00FF00]/40 rounded-full px-3.5 py-1.5 hover:bg-[#00FF00]/10 hover:border-[#00FF00]/60 transition-all duration-300 cursor-default font-medium tracking-wide">
      {label}
    </span>
  )
}

function ProjectCard({ title, text, tags, tall }) {
  return (
    <div className="p-5 md:p-6 space-y-4 h-full flex flex-col">
      <div className={`${tall ? 'aspect-[4/5]' : 'aspect-video'} bg-zinc-800/80 rounded-xl flex items-center justify-center overflow-hidden`}>
        <span className="text-zinc-600 text-sm font-medium">Preview</span>
      </div>
      <h4 className="text-white font-bold text-sm md:text-base leading-snug">{title}</h4>
      <p className="text-zinc-500 text-xs md:text-sm leading-relaxed flex-1">{text}</p>
      <div className="flex flex-wrap gap-2 pt-1">
        {tags.map((t) => (
          <SkillTag key={t} label={t} />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 md:py-36 bg-black relative">
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#00FF00]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline gap-5 mb-16"
        >
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-white leading-tight">
            Proven Results, <span className="text-[#00FF00]">Stunning Designs</span>
          </h2>
          <span className="text-[#00FF00] text-sm font-mono font-semibold hidden sm:inline">{'{2K26}'}</span>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {/* CARD 1 — spans 2 cols */}
          <motion.div
            custom={0} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-2 bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/[0.04] hover:border-[#00FF00]/25 transition-all duration-500"
          >
            <ProjectCard {...projects[0]} />
          </motion.div>

          {/* CARD 2 — single */}
          <motion.div
            custom={1} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
            className="bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/[0.04] hover:border-[#00FF00]/25 transition-all duration-500"
          >
            <ProjectCard {...projects[1]} />
          </motion.div>

          {/* CARD 3 — tall, row-span-2 */}
          <motion.div
            custom={2} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-1 md:row-span-2 bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/[0.04] hover:border-[#00FF00]/25 transition-all duration-500"
          >
            <ProjectCard {...projects[2]} tall />
          </motion.div>

          {/* CARD 4 — single */}
          <motion.div
            custom={3} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
            className="bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/[0.04] hover:border-[#00FF00]/25 transition-all duration-500"
          >
            <ProjectCard {...projects[3]} />
          </motion.div>

          {/* CARD 5 — spans 2 cols */}
          <motion.div
            custom={4} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
            className="md:col-span-2 bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/[0.04] hover:border-[#00FF00]/25 transition-all duration-500"
          >
            <ProjectCard {...projects[4]} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
