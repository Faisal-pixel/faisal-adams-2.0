"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
import HeroImg from "../../public/images/profile.jpg";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    // Explation: useTypewriter is a custom hook that takes an object with the following properties: words, loop, deleteSpeed, and typeSpeed. It returns an array with two elements: text and count. The text is the current word being typed, and the count is the index of the current word in the words array. The useTypewriter hook is used to create a typewriter effect on the text.
    words: [
      "Hi, My Name's Faisal Adams",
      "Guy-who-loves-watching-jack-bauer",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%", "20%"],
        }}
        transition={{
          duration: 2.5,
        }}
        className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-64"
      >
        <BackgroundCircles />
        <Image
          src={HeroImg}
          className="relative rounded-full h-40 w-40 mx-auto object-cover"
          alt="Hero-image"
        />
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            SOFTWARE ENGINEER
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB8A" />
          </h1>

          <div>
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
