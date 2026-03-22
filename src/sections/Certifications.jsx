import { motion } from 'framer-motion';

const certs = [
  {
    icon: 'verified',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    title: 'AWS Solutions Architect',
    subtitle: 'Certified Associate - 2023',
  },
  {
    icon: 'emoji_events',
    iconColor: 'text-secondary',
    iconBg: 'bg-secondary/10',
    title: 'T20 DSA Challenge',
    subtitle: 'Global Rank #5 out of 10,000+',
  },
  {
    icon: 'code_blocks',
    iconColor: 'text-tertiary',
    iconBg: 'bg-tertiary/10',
    title: '450+ LeetCode problems',
    subtitle: 'Proficient in Advanced DSA',
  },
];

export default function Certifications() {
  return (
    <section id="certs">
      <h2 className="font-headline text-3xl font-bold mb-12 flex items-center gap-4">
        <span className="text-primary-fixed font-label text-xl">04.</span> LOGS_SUCCESS
        <div className="h-px flex-grow bg-gradient-to-r from-outline-variant/50 to-transparent" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 bg-surface-container border border-outline-variant/10 rounded group hover:bg-surface-variant transition-all"
          >
            <div className={`w-10 h-10 ${cert.iconBg} rounded flex items-center justify-center mb-4 ${cert.iconColor}`}>
              <span className="material-symbols-outlined">{cert.icon}</span>
            </div>
            <div className="font-label text-[10px] text-tertiary mb-1">STDOUT {'>'}{'>'}  SUCCESS</div>
            <h4 className="font-headline font-bold mb-2">{cert.title}</h4>
            <p className="text-xs text-on-surface-variant">{cert.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
