import { motion } from "framer-motion";

const experience = [
  {
    title: "AI Engineer — ZUDU.AI",
    detail:
      "Tanglish LLM fine-tuning with Unsloth, Mistral, Gemma, Qwen on GCP.",
    time: "Sep 2025 – Oct 2025",
    location: "Onsite · Chennai",
  },
  {
    title: "ML Engineer — Cellstrat",
    detail:
      "RAG pipelines with VectorDB, OpenAI, and AWS. Prompt engineering and REST API integration.",
    time: "May 2024 – Aug 2024",
    location: "Remote",
  },
  {
    title: "150+ Hackathons — 6x Winner",
    detail:
      "Participated in 70+ hackathons; won INR 6,08,000 across two international and two national competitions.",
    time: "Jan 2023 – Present",
    location: "Global",
  },
];

const education = [
  {
    title: "Indian Institute Of Technology",
    detail: "Bachelor of Science, Data Science",
    time: "Jan 2022 – Jan 2026",
    location: "Madras, India",
  },
  {
    title: "Sri Eshwar College Of Engineering",
    detail: "B.Tech, AI and Data Science",
    time: "Nov 2022 – Nov 2026",
    location: "Coimbatore, India",
  },
];

function TimelineColumn({ label, items }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
        {label}
      </p>
      <div className="timeline timeline-column mt-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className="timeline-item timeline-item-column"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-col">
              <span className="timeline-pill">{item.time}</span>
              <div className="glass timeline-card">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.detail}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
                  {item.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Timelines() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <TimelineColumn label="Experience Timeline" items={experience} />
          <TimelineColumn label="Education Timeline" items={education} />
        </div>
      </div>
    </section>
  );
}
