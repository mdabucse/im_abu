import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
            Testimonials
          </p>
          <p className="mt-6 text-lg text-white/80">
            &ldquo;Worked on cutting-edge AI solutions with impressive execution
            speed.&rdquo;
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40">
            Placeholder Review
          </p>
        </motion.div>
      </div>
    </section>
  );
}
