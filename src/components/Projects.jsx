import { motion } from "framer-motion";
import { DollarSign, PenTool, Activity, HeartPulse, Rocket, Stethoscope } from "lucide-react";

const projects = [
  {
    title: "Expense Tracker",
    impact: "Smart financial tracking app with visualization and budget management.",
    stack: ["React", "Node.js", "MongoDB", "Chart.js"],
    link: "https://github.com/mdabucse/Dev_Tracking",
    icon: DollarSign,
    color: "text-emerald-400"
  },
  {
    title: "Sketch Mentor",
    impact: "AI-powered tutoring system converting sketches to educational content.",
    stack: ["Python", "OpenCV", "Gemini API", "Streamlit"],
    link: "https://github.com/mdabucse/Edu-Hacks-Sketch-Mentor",
    icon: PenTool,
    color: "text-purple-400"
  },
  {
    title: "Pulse AI",
    impact: "Non-invasive health monitoring and vitals extraction using computer vision.",
    stack: ["Python", "Deep Learning", "MediaPipe", "Flask"],
    link: "https://github.com/mdabucse/PULSE-AI",
    icon: Activity,
    color: "text-cyan-400"
  },
  {
    title: "Visionary Glucometer",
    impact: "Non-invasive glucose level estimation using advanced image processing.",
    stack: ["TensorFlow", "OpenCV", "Hardware Integration", "IoT"],
    link: "https://github.com/mdabucse/Smart-Gluco",
    icon: HeartPulse,
    color: "text-red-400"
  },
  {
    title: "Innovhunt",
    impact: "Platform for connecting innovators, showcasing projects, and finding hackathons.",
    stack: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/mdabucse/INNOVHUNT",
    icon: Rocket,
    color: "text-orange-400"
  },
  {
    title: "Med IQ",
    impact: "Intelligent medical assistant for symptom analysis and preliminary diagnosis.",
    stack: ["LLMs", "RAG", "VectorDB", "FastAPI"],
    link: "https://github.com/mdabucse/MED-IQ",
    icon: Stethoscope,
    color: "text-blue-400"
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: index * 0.07 },
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
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
            Featured Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Featured Projects
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                className="glass rounded-3xl p-6 block hover:bg-white/5 transition-colors group"
                custom={index}
                variants={cardMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]">
                  {/* Project Image */}
                  <img
                    src={
                      project.title === "Expense Tracker" ? "/projects/expense-tracker.png" :
                        project.title === "Sketch Mentor" ? "/projects/sketch-mentor.png" :
                          project.title === "Pulse AI" ? "/projects/pulse-ai.png" :
                            project.title === "Visionary Glucometer" ? "/projects/smart-gluco.png" :
                              project.title === "Innovhunt" ? "/projects/innovhunt.png" :
                                project.title === "Med IQ" ? "/projects/med-iq.png" : ""
                    }
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 text-white/80 group-hover:text-[#c6ff00] transition-colors">
                    <Icon size={20} className={project.color} />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold flex items-center gap-2 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-medium">Public Repository</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-white/70 leading-relaxed">{project.impact}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.1em] text-white/60 hover:border-[#c6ff00]/30 hover:text-[#c6ff00] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
