import { motion } from "framer-motion";

const skills = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "C/C++", "SQL", "JavaScript", "HTML/CSS", "R", "Dart"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Flask", "FastAPI", "LangChain"],
  },
  {
    title: "Core CS Concepts",
    items: [
      "Linux",
      "Data Structures & Algorithms",
      "OOP",
      "Scalable Systems",
      "Distributed Systems (Basic)",
      "Performance Optimization",
    ],
  },
  {
    title: "Testing & Development",
    items: ["Unit Testing", "Integration Testing", "Code Reviews", "Agile Sprints"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    title: "Developer Tools",
    items: [
      "Putty",
      "WinSCP",
      "Postman",
      "Git",
      "GitHub",
      "Docker",
      "Google Cloud Platform",
      "VS Code",
      "Visual Studio",
      "PyCharm",
      "IntelliJ",
      "Eclipse",
    ],
  },
  {
    title: "Cloud Technologies",
    items: [
      "AWS (Lambda, DynamoDB, EC2, WebSocket)",
      "Azure (ML Toolkit)",
    ],
  },
];

export default function Skills() {
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
            Technical Skills
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Tooling & Expertise
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {skills.map((group) => (
            <div key={group.title} className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                {group.title}
              </h3>
              <p className="mt-4 text-sm text-white/60">
                {group.items.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
