import { motion } from "framer-motion";

const education = [
  {
    school: "Indian Institute Of Technology",
    degree: "Bachelor of Science, Data Science",
    location: "Madras, India",
    time: "Jan 2022 – Jan 2026",
  },
  {
    school: "Sri Eshwar College Of Engineering",
    degree: "B.Tech, AI and Data Science",
    location: "Coimbatore, India",
    time: "Nov 2022 – Nov 2026",
  },
];

export default function Education() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#c6ff00]">
            Education
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Academic Timeline
          </h2>
        </motion.div>

        <div className="timeline mt-12">
          {education.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.school}
                className="timeline-item"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className={`timeline-col ${isLeft ? "text-right" : "hidden md:flex"}`}>
                  {isLeft && (
                    <>
                      <span className="timeline-pill">{item.time}</span>
                      <div className="glass timeline-card">
                        <h3 className="text-lg font-semibold">{item.school}</h3>
                        <p className="mt-2 text-sm text-white/70">{item.degree}</p>
                        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
                          {item.location}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <div className="timeline-dot" />

                <div className={`timeline-col ${!isLeft ? "text-left" : "hidden md:flex"}`}>
                  {!isLeft && (
                    <>
                      <span className="timeline-pill">{item.time}</span>
                      <div className="glass timeline-card">
                        <h3 className="text-lg font-semibold">{item.school}</h3>
                        <p className="mt-2 text-sm text-white/70">{item.degree}</p>
                        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
                          {item.location}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
