import { motion } from "framer-motion";

const stats = [
  { value: "70+", label: "Hackathons" },
  { value: "INR 6,08,000", label: "Won" },
  { value: "6x", label: "Winner" },
  { value: "IIT Madras", label: "Education" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 lg:pt-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
              AI Systems Builder
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Mohamed <span className="text-[#c6ff00]">Abubakkar</span> S
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-[#c6ff00] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(198,255,0,0.35)] transition hover:translate-y-[-2px]"
                href="#contact"
              >
                Let&apos;s Talk
              </a>
              <a
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/50"
                href="#projects"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hero-right"
          >
            <div className="hero-stats space-y-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="text-3xl font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="hero-visual hero-visual-simple">
              <div className="hero-portrait hero-portrait-simple">
                <img src="/abu.png" alt="Mohamed Abubakkar" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
