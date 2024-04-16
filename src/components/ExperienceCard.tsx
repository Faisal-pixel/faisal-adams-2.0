"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ReactStackSVG from "../../public/images/icons/icons8-react.svg"

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{once: true}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/images/codeware.jpeg"
        alt="codeware"/>

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light"> CEO of PAPAFAM </h4>
            <p className="font-bold text-2xl mt-1">PAPAFAM</p>
            <div className="flex space-x-2 ">
                <Image src={ReactStackSVG} alt="React-stack" className="h-10 w-10 rounded-full"/>
                <Image src={ReactStackSVG} alt="React-stack" className="h-10 w-10 rounded-full"/>
                <Image src={ReactStackSVG} alt="React-stack" className="h-10 w-10 rounded-full"/>
                <Image src={ReactStackSVG} alt="React-stack" className="h-10 w-10 rounded-full"/>
            </div>
            <p>Started work... - Ended...</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
                <li>Summary points</li>
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard