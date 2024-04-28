import Hero from "@/components/Hero";
import Header from "../components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <>
      <div className="bg-bgColor text-white h-screen overflow-x-hidden z-0">
        {/* Header */}
        <Header />

        {/* Hero */}
        <section id="hero" className="">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="">
          <About />
        </section>
        {/* Experience */}
        <section id="experience" className="">
          <Experience />
        </section>
        {/* Skills */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact */}

        <section id="contact-me">
          <ContactMe />
        </section>
      </div>
    </>
  );
}
