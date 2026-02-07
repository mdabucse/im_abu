const skills = [
  "AI Engineer",
  "ML Engineer",
  "RAG Architect",
  "Computer Vision",
  "FastAPI",
  "React",
  "LangChain",
  "VectorDB",
];

export default function SkillsTicker() {
  const track = [...skills, ...skills];

  return (
    <section className="mt-4">
      <div className="ticker bg-[#c6ff00] py-3 text-black">
        <div className="ticker-track">
          {track.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em]"
            >
              {skill}
              <span className="text-black/40">*</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
