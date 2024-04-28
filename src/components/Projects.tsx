"use client";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
    const projects = [1, 2, 3, 4]
  return (
    <div className="relative flex flex-col md:text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        PROJECTS
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {/* {Projects} */}
        {projects.map((project, id) => (
            <div key={id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-screen mt-12 sm:mt-0 md:p-44 md:mt-40">
                <motion.img 
                    initial={{ opacity: 0, y: -300 }}
                    transition={{ duration: 1.2} }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src="/images/promptopia.png"
                    alt="Promptopia"
                    className="w-[60%] max-w-[750px]"
                />

                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                    <h4 className="text-2xl md:text-4xl font-semibold text-center"><span className="underline decoration-[#F7AB0A]/50">Case Study {id + 1} of {projects.length}:</span> Promptopia</h4>

                    <p className="text-sm text-center md:text-lg md:text-left">
                    Promptopia is an innovative platform designed to empower users to create, share, and discover AI-generated prompts effortlessly. The platform provides a seamless experience for users to sign in securely and create prompts tailored to their interests and preferences. These prompts are intelligently generated using advanced AI technologies, making them ready-made for various creative endeavors.
                    </p>
                </div>
            </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12" />
    </div>
  );
}

export default Projects;
