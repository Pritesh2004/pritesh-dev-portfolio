import { motion } from 'framer-motion';

function SectionHeader({ number, label }) {
  return (
    <h2 className="font-headline text-3xl font-bold mb-12 flex items-center gap-4">
      <span className="text-primary-fixed font-label text-xl">{number}</span> {label}
      <div className="h-px flex-grow bg-gradient-to-r from-outline-variant/50 to-transparent" />
    </h2>
  );
}

const techTags = ['Java SE/EE', 'Spring Boot', 'Microservices', 'AWS Lambda', 'Docker & K8s', 'Redis', 'PostgreSQL', 'JUnit/Mockito'];

export default function About() {
  return (
    <section id="about">
      <SectionHeader number="01." label="ABOUT_SYSTEM" />
      <div className="space-y-6">
        {/* Top Row: 8/4 grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* TECH STACK — col 8 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 bg-surface-container-low p-8 rounded border border-outline-variant/10 relative overflow-hidden group"
          >
            <div className="absolute top-6 right-6 opacity-10">
              <span className="material-symbols-outlined text-6xl">database</span>
            </div>
            <h3 className="font-headline text-xl font-bold text-primary mb-6 flex items-center gap-2 uppercase tracking-tight">
              TECH STACK
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface-container-lowest text-on-surface/80 border border-outline-variant/30 rounded font-label text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base max-w-2xl">
              I focus on developing highly performant backend architectures. My approach blends the reliability of enterprise Java with the agility of modern cloud-native patterns to solve complex business logic challenges.
            </p>
          </motion.div>

          {/* Problem Solving — col 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 bg-surface-container-low p-8 rounded border-l-4 border-l-primary border border-outline-variant/10 flex flex-col justify-between"
          >
            <div>
              <span className="material-symbols-outlined text-primary mb-4">terminal</span>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Problem Solving</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                Expert in data structures and algorithmic efficiency. Solved over 450+ problems on LeetCode with a focus on optimization.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded flex justify-between items-center">
              <span className="text-[10px] font-label text-primary font-bold tracking-widest">LEETCODE SCORE</span>
              <span className="text-xl font-extrabold">Top 5%</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: 4/8 grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* T20 Challenge — col 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-4 bg-surface-container-low p-8 rounded border border-outline-variant/10"
          >
            <span className="material-symbols-outlined text-secondary mb-4">workspace_premium</span>
            <div className="font-label text-xs text-on-surface-variant mb-1">T20 Challenge</div>
            <div className="text-3xl font-extrabold text-on-surface mb-1">Rank 5</div>
            <div className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
              NATIONAL CODING COMPETITION
            </div>
          </motion.div>

          {/* Education — col 8 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-8 bg-surface-container-low p-8 rounded border border-outline-variant/10 flex items-center gap-8"
          >
            <div className="hidden sm:flex w-24 h-24 bg-[#1a2c2c] rounded items-center justify-center border border-primary/10 shrink-0">
              <div className="text-center">
                <div className="text-[8px] text-primary/40 font-label">ACADEMIC</div>
                <div className="text-[8px] text-primary/40 font-label">FOUNDATION</div>
              </div>
            </div>
            <div>
              <div className="font-label text-[10px] text-primary uppercase tracking-widest mb-2">ACADEMIC FOUNDATION</div>
              <h3 className="text-2xl font-bold mb-1">Bachelor of Technology</h3>
              <p className="text-on-surface-variant text-sm mb-4">Focus on Computer Science & Engineering</p>
              <div className="inline-flex items-center gap-2 bg-[#162535] px-4 py-1 rounded">
                <span className="text-primary font-bold">9.01</span>
                <span className="text-[10px] text-primary/40 font-label">CGPA GRADUATE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
