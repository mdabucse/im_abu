import Head from "next/head";
import Hero from "../components/Hero";
import BlurText from "../components/BlurText";
import SkillsTicker from "../components/SkillsTicker";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Skills from "../components/Skills";
import Timelines from "../components/Timelines";
import Articles from "../components/Articles";
import Contact from "../components/Contact";

export default function HomePage() {
  const bio = "I'm an AI Engineer and Data Science student at IIT Madras, focused on building real-world AI systems using LLMs, RAG pipelines, and computer vision. With 150+ hackathons and multiple national and international wins, I turn ideas into scalable, production-ready solutions.";

  return (
    <>
      <Head>
        <title>Mohamed Abubakkar | AI Engineer</title>
        <meta
          name="description"
          content="AI engineer building production-grade LLM, RAG, and computer vision systems."
        />
      </Head>
      <div className="relative min-h-screen bg-[#050505] text-white">
        <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-[#c6ff00]/10 blur-3xl" />
        <main>
          <Hero />

          <div className="container mx-auto px-6 py-24 flex justify-center">
            <BlurText
              text={bio}
              delay={50}
              animateBy="words"
              direction="top"
              className="text-xl md:text-2xl font-light text-white/80 text-center leading-relaxed tracking-wide max-w-4xl mx-auto"
            />
          </div>
          <Achievements />
          <Timelines />
          <Projects />
          <Articles />
          <SkillsTicker />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  );
}
