import { motion } from "framer-motion";

const projects = [
  {
    title: "Sketch Mentor",
    impact: "Handwritten math to LLM tutoring with retrieval-augmented hints.",
    stack: ["Gemini", "Qwen", "LangChain", "FastAPI"],
  },
  {
    title: "Pulse AI",
    impact: "NICU monitoring with real-time computer vision signals.",
    stack: ["Flask", "OpenCV", "MediaPipe", "MongoDB"],
  },
  {
    title: "Visionary Glucometer",
    impact: "CNN + food intelligence for predictive health insights.",
    stack: ["TensorFlow", "OpenCV", "React Native", "MongoDB"],
  },
  {
    title: "InnovHunt",
    impact: "Web3 meets AI for smart founder matching and idea validation.",
    stack: ["Gemini", "Pinecone", "Flask", "Web3"],
  },
  {
    title: "Prescription Bot",
    impact: "OCR + NER pipeline with Gemini-powered extraction.",
    stack: ["OCR", "NER", "Streamlit", "Gemini"],
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.1 },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
            Featured Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Featured Projects
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="glass rounded-3xl p-6"
              custom={index}
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#c6ff00]/20 via-transparent to-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,255,0,0.25),_transparent_70%)]" />
                <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-white/60">
                  Mock UI
                </div>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm text-white/60">{project.impact}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
