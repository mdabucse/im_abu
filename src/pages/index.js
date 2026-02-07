import Head from "next/head";
import Hero from "../components/Hero";
import SkillsTicker from "../components/SkillsTicker";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Timelines from "../components/Timelines";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

export default function HomePage() {
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
          <Timelines />
          <SkillsTicker />
          <Projects />
          <Skills />
          <Services />
          <Testimonials />
          <CTA />
        </main>
      </div>
    </>
  );
}
