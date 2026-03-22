export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800/20">
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-7xl mx-auto gap-8 font-label text-xs uppercase tracking-widest px-6">
        <div className="text-purple-400 font-label">
          © 2024 PRITESH PATIL | [v1.0.4-stable]
        </div>
        <div className="flex gap-8">
          <a className="text-slate-500 hover:text-purple-400 transition-all no-underline" href="#">github</a>
          <a className="text-slate-500 hover:text-purple-400 transition-all no-underline" href="#">linkedin</a>
          <a className="text-slate-500 hover:text-purple-400 transition-all no-underline" href="#">stack_overflow</a>
        </div>
        <div className="text-cyan-500">
          STATUS: <span className="text-tertiary">SYSTEM_READY</span>
        </div>
      </div>
    </footer>
  );
}
