import { motion } from 'framer-motion';

const experiences = [
  {
    title: <>Senior Software Engineer <span className="text-primary">@ TechNova Solutions</span></>,
    date: '2022 — PRESENT',
    description: 'Leading the migration of monolithic legacy systems to Spring Boot microservices. Reduced system latency by 40% through intelligent caching strategies using Redis.',
    dotColor: 'bg-primary',
  },
  {
    title: <>Backend Developer <span className="text-secondary">@ CloudStream</span></>,
    date: '2020 — 2022',
    description: 'Developed scalable REST APIs and managed CI/CD pipelines. Optimized database queries for high-concurrency environments serving over 100k active users.',
    dotColor: 'bg-secondary',
  },
  {
    title: 'B.Tech in Computer Science',
    date: '2016 — 2020',
    description: 'University of Technology | GPA: 8.9/10.0',
    dotColor: 'bg-tertiary',
    extraTop: true,
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="font-headline text-3xl font-bold mb-12 flex items-center gap-4">
        <span className="text-primary-fixed font-label text-xl">02.</span> COMMIT_HISTORY
        <div className="h-px flex-grow bg-gradient-to-r from-outline-variant/50 to-transparent" />
      </h2>

      <div className="relative pl-8 border-l-2 border-outline-variant/30 ml-4 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative ${exp.extraTop ? 'pt-8' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div className={`absolute -left-[41px] ${exp.extraTop ? 'top-8' : 'top-0'} w-4 h-4 rounded-full ${exp.dotColor} ring-4 ring-background`} />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="font-headline text-xl font-bold text-on-surface">{exp.title}</h3>
              <span className="font-label text-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded">
                {exp.date}
              </span>
            </div>
            <p className="text-on-surface-variant max-w-3xl leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
