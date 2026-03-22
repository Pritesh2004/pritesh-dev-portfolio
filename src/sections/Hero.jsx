import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="bg-surface-container-high border border-outline-variant/20 rounded shadow-2xl overflow-hidden max-w-4xl mx-auto"
      >
        {/* Terminal window bar */}
        <div className="bg-surface-container-highest px-4 py-2 flex items-center justify-between border-b border-outline-variant/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-error-dim/40" />
            <div className="w-3 h-3 rounded-full bg-tertiary/40" />
            <div className="w-3 h-3 rounded-full bg-primary/40" />
          </div>
          <div className="text-[10px] font-label text-on-surface-variant tracking-widest uppercase">
            zsh — pritesh_patil
          </div>
          <div className="w-12" />
        </div>

        {/* Terminal content */}
        <div className="p-8 font-label text-lg md:text-2xl leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 text-tertiary mb-4"
          >
            <span className="text-secondary">➜</span>
            <span className="text-primary-fixed">~</span>
            <span className="text-on-surface">whoami</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-headline font-extrabold text-4xl md:text-6xl text-on-surface mb-6 tracking-tight"
          >
            <span className="text-primary">{'>'}</span> Hi, I'm Pritesh Patil
            <span className="cursor-blink" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="text-on-surface-variant max-w-2xl mb-8"
          >
            <span className="text-secondary font-bold">Software Engineer</span>
            <span className="text-outline"> {'=>'}</span> Building scalable systems with{' '}
            <span className="text-tertiary">Java</span> &{' '}
            <span className="text-tertiary">Spring Boot</span>. Currently optimizing backend
            performance for high-throughput applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 py-3 rounded-sm font-label font-bold uppercase tracking-wider flex items-center gap-2 hover:brightness-110 transition-all no-underline"
              href="#contact"
            >
              <span className="material-symbols-outlined text-sm">send</span> EXECUTE_CONTACT
            </a>
            <a
              className="border border-outline-variant/30 text-primary px-6 py-3 rounded-sm font-label font-bold uppercase tracking-wider hover:bg-surface-variant transition-all no-underline"
              href="#projects"
            >
              <span className="text-secondary">{'=>'}</span> VIEW_REPOS
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative code symbols */}
      <div className="absolute -top-10 -right-10 text-[120px] font-bold text-secondary/5 select-none pointer-events-none hidden md:block">
        {'{}'}
      </div>
      <div className="absolute -bottom-10 -left-10 text-[120px] font-bold text-primary/5 select-none pointer-events-none hidden md:block">
        {'[]'}
      </div>
    </section>
  );
}
