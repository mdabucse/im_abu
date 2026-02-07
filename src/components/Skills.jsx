import { motion } from "framer-motion";
import { Code2, Brain, Boxes, Server, Layout, Database, Cloud, Eye, Wrench, Cpu, CheckCircle } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "text-blue-400",
    items: ["Python", "Java", "C", "C++", "SQL", "JavaScript", "R", "Dart"],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    color: "text-purple-400",
    items: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Model Fine-Tuning",
      "Deep Learning",
      "Computer Vision",
      "OCR",
      "Named Entity Recognition (NER)"
    ],
  },
  {
    title: "AI & ML Frameworks",
    icon: Boxes,
    color: "text-pink-400",
    items: ["TensorFlow", "OpenAI API", "LangChain", "Unsloth", "Gemini", "Qwen", "Mistral", "Gemma"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "text-green-400",
    items: ["Flask", "FastAPI", "REST API Development", "WebSockets"],
  },
  {
    title: "Frontend & App Development",
    icon: Layout,
    color: "text-cyan-400",
    items: ["React.js", "React Native", "HTML", "CSS"],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "text-orange-400",
    items: ["MongoDB", "MySQL", "Firebase", "Supabase", "Vector Databases", "Pinecone"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-indigo-400",
    items: [
      "AWS (Lambda, EC2, DynamoDB, WebSocket)",
      "Google Cloud Platform (GCP)",
      "Azure Machine Learning",
      "Docker"
    ],
  },
  {
    title: "Computer Vision & Media",
    icon: Eye,
    color: "text-emerald-400",
    items: ["OpenCV", "MediaPipe"],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    color: "text-amber-400",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "PyCharm",
      "IntelliJ IDEA",
      "Eclipse",
      "WinSCP",
      "PuTTY"
    ],
  },
  {
    title: "System & Core CS",
    icon: Cpu,
    color: "text-red-400",
    items: [
      "Linux",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Scalable Systems",
      "Distributed Systems (Basics)",
      "Performance Optimization"
    ],
  },
  {
    title: "Development Practices",
    icon: CheckCircle,
    color: "text-lime-400",
    items: [
      "Unit Testing",
      "Integration Testing",
      "Code Reviews",
      "Agile Sprint-Based Development"
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[20%] w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[20%] w-80 h-80 bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
            Technical Arsenal
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Tools & Technologies
          </h2>
          <p className="mt-4 text-white/60 max-w-3xl text-base">
            Experienced across the full AI product lifecycle — from model training and backend systems to cloud deployment and production tooling.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-lg bg-white/5 ${category.color} group-hover:scale-110 transition-transform`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white/90 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
