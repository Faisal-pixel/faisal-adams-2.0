"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ReactStackSVG from "../../public/images/icons/icons8-react.svg";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col py-10 mt-44 rounded-lg items-center space-y-7 flex-shrink-0 snap-center bg-[#292929]  w-full hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 md:w-[600px]">
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/images/codeware.jpeg"
        alt="codeware"
      />

      <div className="">
        <h4 className="text-2xl font-light"> CEO of PAPAFAM </h4>
        <p className="font-bold text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <Image
            src={ReactStackSVG}
            alt="React-stack"
            className="h-7 w-7 rounded-full"
          />
          <Image
            src={ReactStackSVG}
            alt="React-stack"
            className="h-7 w-7 rounded-full"
          />
          <Image
            src={ReactStackSVG}
            alt="React-stack"
            className="h-7 w-7 rounded-full"
          />
          <Image
            src={ReactStackSVG}
            alt="React-stack"
            className="h-7 w-7 rounded-full"
          />
        </div>

        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
