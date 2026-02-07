import { motion } from "framer-motion";

const services = [
  "AI Powered Applications (LLM, RAG, CV)",
  "Scalable AI APIs with FastAPI / Flask",
  "End-to-End ML Systems Deployment",
  "VectorDB & Knowledge Systems",
  "AI + Web Integration (React + Python)",
];

export default function Services() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
            What I Build
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            AI Systems & Services
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="glass rounded-2xl p-5">
              <p className="text-sm text-white/80">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
