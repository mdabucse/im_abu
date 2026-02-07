const skills = [
  "Python", "Java", "C", "C++", "SQL", "JavaScript", "HTML", "CSS", "R", "Dart",
  "React", "Flask", "FastAPI", "LangChain", "Linux",
  "Data Structures", "Algorithms", "OOP", "Scalable Systems", "Distributed Systems",
  "MySQL", "MongoDB", "Firebase", "Supabase", "Git", "GitHub", "Docker", "Postman",
  "GCP", "AWS Lambda", "AWS DynamoDB", "AWS EC2", "Azure ML", "OpenAI API",
  "Vector Databases", "RAG", "Prompt Engineering", "LLMs", "Model Fine-tuning",
  "Unsloth", "Mistral", "Gemma", "Qwen", "Computer Vision", "OpenCV", "MediaPipe",
  "Deep Learning", "TensorFlow", "REST API", "Cloud Deployment"
];

export default function SkillsTicker() {
  // Triple the skills to ensure smooth infinite scroll with such a long list
  const track = [...skills, ...skills, ...skills];

  return (
    <section className="mt-8 mb-4">
      <div className="ticker is-ticker bg-[#c6ff00] py-2 text-black overflow-hidden relative rotate-1 border-y-2 border-black box-border shadow-lg z-20">
        <div
          className="ticker-track flex items-center gap-8 whitespace-nowrap animate-marquee"
          style={{ animationDuration: "80s" }}
        >
          {track.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em]"
            >
              {skill}
              <span className="text-black/40"> </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
