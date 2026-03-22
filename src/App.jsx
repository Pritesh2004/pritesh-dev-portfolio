import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      {/* Grid overlay */}
      <div className="fixed inset-0 grid-pattern opacity-[0.05] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-32">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
