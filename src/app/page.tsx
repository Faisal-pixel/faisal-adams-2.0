import Hero from "@/components/Hero";
import Header from "../components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <div className="bg-bgColor text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        {/* Header */}
        <Header />

        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <Experience />
        </section>
        {/* Skills */}

        {/* Projects */}

        {/* Contact */}
      </div>
    </>
  );
}
