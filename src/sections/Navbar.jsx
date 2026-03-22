import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'root', href: '#hero' },
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'certs', href: '#certs' },
  { label: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('root');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'certs', 'projects', 'experience', 'hero'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id === 'hero' ? 'root' : id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="bg-slate-900/60 backdrop-blur-xl font-label text-sm tracking-tight max-w-4xl mx-auto mt-4 sticky top-4 z-50 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center justify-between w-full px-6 h-12"
    >
      <div className="text-lg font-bold text-purple-400 font-label">Pritesh_Patil.sh</div>
      <div className="hidden md:flex items-center gap-0">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`px-4 py-2 transition-all font-label text-sm ${
              active === item.label
                ? 'bg-surface-container-high border-t-2 border-t-purple-500 border-b-0 border-x-0 text-cyan-400'
                : 'bg-surface text-slate-400 hover:bg-surface-container-high hover:text-cyan-300 border-t-2 border-t-transparent border-b-0 border-x-0'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4 text-cyan-400">
        <span className="material-symbols-outlined text-base">terminal</span>
        <span className="material-symbols-outlined text-base">code</span>
      </div>
    </motion.nav>
  );
}
