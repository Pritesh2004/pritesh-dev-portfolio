import { motion } from 'framer-motion';

const projects = [
  {
    activeTab: { icon: 'terminal', label: 'FinanceTracker.java', color: 'text-primary' },
    inactiveTab: { icon: 'analytics', label: 'config.yml' },
    title: 'Personal Finance Tracker',
    description: 'A robust full-stack application for expense tracking and budgeting. Built with Spring Boot and React, featuring automated category classification using basic ML.',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(83,221,252,0.15)]',
    hoverTitleColor: 'group-hover:text-primary',
  },
  {
    activeTab: { icon: 'terminal', label: 'StockAnalyzer.py', color: 'text-secondary' },
    inactiveTab: { icon: 'description', label: 'README.md' },
    title: 'Stock Sentiment Analyzer',
    description: 'A real-time sentiment analysis tool that monitors Twitter and news feeds for stock tickers. Provides predictive heatmaps for potential market movement.',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(193,128,255,0.15)]',
    hoverTitleColor: 'group-hover:text-secondary',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="font-headline text-3xl font-bold mb-12 flex items-center gap-4">
        <span className="text-primary-fixed font-label text-xl">03.</span> WORKING_DIRECTORIES
        <div className="h-px flex-grow bg-gradient-to-r from-outline-variant/50 to-transparent" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className={`bg-surface-container-high rounded border border-outline-variant/20 overflow-hidden ${project.hoverGlow} transition-all group`}
          >
            {/* IDE Tabs */}
            <div className="flex bg-surface-container-highest border-b border-outline-variant/10">
              <div className={`px-4 py-2 bg-surface-container-high border-r border-outline-variant/10 flex items-center gap-2 text-xs font-label ${project.activeTab.color}`}>
                <span className="material-symbols-outlined text-sm">{project.activeTab.icon}</span>
                {project.activeTab.label}
              </div>
              <div className="px-4 py-2 border-r border-outline-variant/10 opacity-40 text-xs font-label flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">{project.inactiveTab.icon}</span>
                {project.inactiveTab.label}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className={`font-headline text-2xl font-extrabold mb-4 ${project.hoverTitleColor} transition-colors`}>
                {project.title}
              </h3>
              <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a className="text-xs font-label text-secondary flex items-center gap-1 hover:underline no-underline" href="#">
                  <span className="material-symbols-outlined text-sm">link</span> VIEW_LIVE
                </a>
                <a className="text-xs font-label text-primary flex items-center gap-1 hover:underline no-underline" href="#">
                  <span className="material-symbols-outlined text-sm">code</span> REPOSITORY
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
