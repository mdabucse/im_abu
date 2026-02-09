import { motion } from "framer-motion";

const actions = [
  { label: "View Resume", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(198,255,0,0.18),_transparent_60%)] p-10 text-center sm:p-14"
        >
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Let&apos;s build AI that solves real problems.
          </h2>
          <p className="mt-4 text-sm text-white/60">
            Ready to collaborate on production-grade AI systems and scalable
            products.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/50 hover:text-white"
              >
                {action.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
