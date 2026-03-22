import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/20 rounded-xl max-w-4xl mx-auto shadow-2xl relative"
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 grid md:grid-cols-2 gap-12">
          {/* Left side — Info */}
          <div>
            <h2 className="font-headline text-3xl font-bold mb-4">ping pritesh.patil</h2>
            <p className="text-on-surface-variant mb-8 font-label">
              Ready to start a conversation about scalable systems or creative tech solutions? Reach out via terminal or standard channels.
            </p>
            <div className="space-y-4 font-label">
              <div className="flex items-center gap-4 group">
                <span className="text-primary">{'=>'}</span>
                <a className="text-on-surface hover:text-primary transition-colors no-underline" href="mailto:pritesh@example.com">
                  pritesh.patil@dev.local
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="text-secondary">{'=>'}</span>
                <a className="text-on-surface hover:text-secondary transition-colors no-underline" href="#">
                  linkedin.com/in/pritesh-patil
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="text-tertiary">{'=>'}</span>
                <a className="text-on-surface hover:text-tertiary transition-colors no-underline" href="#">
                  github.com/pritesh-dev
                </a>
              </div>
            </div>
          </div>

          {/* Right side — Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
                User_Identification
              </label>
              <input
                className="w-full bg-surface-container-high border-none text-on-surface focus:ring-1 focus:ring-primary font-label text-sm p-4 rounded-sm outline-none"
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div className="space-y-1">
              <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
                Contact_Endpoint
              </label>
              <input
                className="w-full bg-surface-container-high border-none text-on-surface focus:ring-1 focus:ring-primary font-label text-sm p-4 rounded-sm outline-none"
                placeholder="Email Address"
                type="email"
              />
            </div>
            <div className="space-y-1">
              <label className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">
                Message_Payload
              </label>
              <textarea
                className="w-full bg-surface-container-high border-none text-on-surface focus:ring-1 focus:ring-primary font-label text-sm p-4 rounded-sm outline-none resize-none"
                placeholder="Type your message here..."
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-on-primary font-label font-bold py-4 hover:brightness-110 transition-all flex items-center justify-center gap-2 rounded-sm border-none cursor-pointer text-sm"
            >
              <span className="material-symbols-outlined text-sm">terminal</span> TRANSMIT_MESSAGE
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
